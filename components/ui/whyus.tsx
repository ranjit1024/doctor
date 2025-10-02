import Image from "next/image";
const features = [
  {
    icon: <svg className="w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2m-8 0a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2m-8 0h2m4 0h2" /></svg>,
    title: "Modern Technology & Facilities",
    desc: "Advanced tools and facilities ensure safe, accurate treatments."
  },
  {
    icon: <svg className="w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" /></svg>,
    title: "Affordable & Transparent Pricing",
    desc: "Quality healthcare with clear, honest pricing for every patient."
  },
  {
    icon: <svg className="w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M15 17l-4.405-4.405A2.032 2.032 0 0112 11h6a2 2 0 110 4h-1m-6.292-4.121a1.504 1.504 0 00-2.122 0M7 7a1.504 1.504 0 002.122 0M7 7l-3-3m3 3l4.293-4.293A1.5 1.5 0 0112 2a1.5 1.5 0 012.122 2.122L17 7" /></svg>,
    title: "Experienced & Certified Doctors",
    desc: "Our qualified doctors bring years of expertise to every treatment."
  },
  {
    icon: <svg className="w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 2.21-1.79 4-4 4a4 4 0 110-8c2.21 0 4 1.79 4 4zm13 7l-3-3m0 0l-3 3m3-3V19" /></svg>,
    title: "Patient-Centered Care",
    desc: "We listen, understand, and tailor care to each patient’s needs."
  },
];

export default function Whyus() {
  return (
    <section className=" mx-auto ">
      <div className="md:flex md:items-center md:space-x-8">
        {/* Left: Hero Image & Headings */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg mb-6 md:mb-0">
            {/* Replace src below with your local import or public path */}
            <Image src="/your-image-path.jpg" alt="Medical team" className="w-full h-64 object-cover" />
          </div>
        </div>
        {/* Right: Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <span className="text-xs uppercase text-gray-400 font-semibold mb-2">Why Choose Us</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Trusted by<br/>Thousands of Patients</h2>
          <p className="text-gray-500 mb-6">
            We differentiate ourselves by delivering not only exceptional treatment but also a reassuring experience that prioritizes your well-being and comfort.
          </p>
        </div>
      </div>
      {/* Feature Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map(({ icon, title, desc }, i) => (
          <div key={i} className="bg-white rounded-lg shadow px-6 py-6 flex flex-col items-start h-full">
            {icon}
            <h3 className="mt-4 font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-gray-500 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
