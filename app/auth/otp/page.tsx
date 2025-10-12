"use client";
import Logo from "@/components/ui/logo";
import { Verify } from "@/lib/actions/verify";
import { verifyNumber } from "@/lib/actions/otp";
import { useRouter } from "next/navigation";
import React, {
  useState,
  useRef,
  KeyboardEvent,
  ClipboardEvent,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import { checkVerify } from "@/lib/actions/verify";
export default function Home() {
  
  const [step, setStep] = useState<number>(1);
  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [generateOTP, setGenerateOTP] = useState<number | "Invalid Number">(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isVerified, setisVerifies] = useState<boolean>(false)
  const router = useRouter();
  const validatePhone = (number: string): boolean => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
      setError("");
    }
  };
  useEffect(()=>{
    async function check() {
      const data = await checkVerify();
      setisVerifies(data)
      return data;
    }
    check()
  },[])
  useEffect(()=>{
    console.log(isVerified)
    if(isVerified){
      router.push("/medvisit/appointment/")
    }
  },[isVerified])
  const handleSendOTP = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string): void => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: ClipboardEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);
  };

  const handleVerifyOTP = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setError("Please enter complete 6-digit OTP");
      return;
    }
    setLoading(true);
    const date = otp.join("")
    if (String(generateOTP) === date) {
      await verifyNumber({ number: phone });
      router.push("/medvisit/appointment/book");
    } else {
      // console.log(generateOTP == Number(otp.join('')))
      console.log("OTP array:", otp);
      console.log("Joined OTP:", otp.join(""));
      console.log("Converted date:", Number(otp.join("")));
      console.log("Type of date:", typeof Number(otp.join("")));
      console.log("generateOTP:", generateOTP);
      console.log("Type of generateOTP:", typeof generateOTP);
      console.log("Are they equal?", generateOTP === date);
      console.log(generateOTP);
      alert("Invaid OTP");
    }
    // alert('Phone verified successfully!');
    setLoading(false);
  };

  const handleResendOTP = (): void => {
    setOtp(["", "", "", "", "", ""]);
    setError("");
    alert("OTP resent to +91 " + phone);
  };

  return (
    <div className="min-h-[100vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center ">
      <div className="w-full h-[100vh]">
        <div className="bg-white  h-full shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 h-full">
            {/* Left Side - Branding/Info */}
            <div className="hidden lg:flex flex-col h-full justify-center items-center bg-gradient-to-br from-indigo-600 to-indigo-800 p-12 text-white">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-3">Secure Verification</h2>
              <p className="text-indigo-100 text-center text-sm leading-relaxed">
                {step === 1
                  ? "We need to verify your phone number to secure your account and protect against unauthorized access."
                  : "A 6-digit verification code has been sent to your mobile number via SMS."}
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Privacy protected</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-12 max-md:p-4 flex flex-col justify-center">
              {step === 1 ? (
                <>
                  <div className="mb-8 mt-23 max-md:mt-1">
                    <div className="inline-flex items-center justify-center w-13 h-13 bg-indigo-100 rounded-2xl mb-4 lg:hidden">
                      <Logo height={40} width={40} />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      Verify Phone
                    </h1>
                    <p className="text-sm text-gray-600">
                      Please enter your mobile number to receive a verification
                      code
                    </p>
                  </div>

                  <form onSubmit={handleSendOTP}>
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Mobile Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                          <span className="text-gray-600 font-semibold text-base">
                            +91
                          </span>
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="9876543210"
                          maxLength={10}
                          className={`w-full pl-16 pr-5 py-4 text-lg border-2 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all ${
                            error
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200 bg-gray-50 hover:border-gray-300"
                          }`}
                        />
                      </div>
                      {error && (
                        <p className="mt-3 text-sm text-red-600 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {error}
                        </p>
                      )}
                      <p className="mt-3 text-xs text-gray-500">
                        {`Enter a valid Indian mobile number (starting with 6, 7, 8, or 9)`}
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      onClick={async () => {
                        console.log("clicked");
                        const res = await Verify({ number: phone });
                        setGenerateOTP(res);
                        console.log(res);
                      }}
                      className="w-full bg-indigo-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg
                            className="animate-spin h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {"Sending OTP..."}
                        </span>
                      ) : (
                        "Send Verification Code"
                      )}
                    </button>

                    <p className="mt-6 text-center text-xs text-gray-500">
                      Message and data rates may apply
                    </p>
                  </form>
                </>
              ) : (
                <>
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      Enter Code
                    </h1>
                    <p className="text-sm text-gray-600">
                      {"We've sent a 6-digit code to"}
                    </p>
                    <p className="text-base font-semibold text-gray-900 mt-1">
                      +91 {phone}
                    </p>
                  </div>

                  <form onSubmit={handleVerifyOTP}>
                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Verification Code
                      </label>
                      <div
                        className="flex items-center justify-between gap-3"
                        onPaste={handleOtpPaste}
                      >
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            ref={(el) => {
                              inputRefs.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            value={digit}
                            onChange={(e) =>
                              handleOtpChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                            maxLength={1}
                            className="max-md:w-12 max-md:rounded-lg max-md:font-medium  max-md:h-12 w-14 h-16 text-center text-2xl font-bold text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
                          />
                        ))}
                      </div>
                      {error && (
                        <p className="mt-4 text-sm text-red-600 text-center font-medium">
                          {error}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-indigo-700 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none mb-6"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg
                            className="animate-spin h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {"Verifying..."}
                        </span>
                      ) : (
                        "Verify & Continue"
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-6 text-sm">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                      >
                        Change number
                      </button>
                      <span className="text-gray-300">|</span>
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                      >
                        Resend Code
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
