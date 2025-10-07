"use client"
import { useState } from "react"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPPattern() {
    const [value, setValue] = useState("")
  return (
    <InputOTP  maxLength={4} value={value} onChange={(value)=>{
        setValue(value)
    }}  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot  className="h-12 w-12 text-2xl" index={0} />
        <InputOTPSlot className="h-12 w-12 text-2xl" index={1}  />
        <InputOTPSlot  className="h-12 w-12 text-2xl" index={2} />
        <InputOTPSlot  className="h-12 w-12 text-2xl" index={3} />
    
      </InputOTPGroup>
    </InputOTP>
  )
}
