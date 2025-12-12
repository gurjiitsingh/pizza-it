'use client'


// components/ContactInfo.tsx
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="bg-[#f8f0ec] text-[#2b2e4a] py-16 md:py-36 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {/* Standort */}
        <div>
          <FaMapMarkedAlt className="w-8 h-8 mx-auto mb-4 text-[#2b2e4a]" />
          <h3 className="uppercase text-sm tracking-wider font-semibold mb-2">Address</h3>
          
          <p className="text-sm">Pizza Italia,  </p>
            <p className="text-sm">Bhogpur to Bholath Road,Near Petrol Pump Bhatnura Lubana, </p>
            <p className="text-sm">Punjab 144201</p>
        </div>

        {/* Telefon */}
        <div>
          <FaPhoneAlt className="w-8 h-8 mx-auto mb-4 text-[#2b2e4a]" />
          <h3 className="uppercase text-sm tracking-wider font-semibold mb-2">Phone</h3>
           <p className="text-sm"> 97815-74660</p>
          <p className="text-sm"> 99144-76660</p>
          
        </div>

        {/* E-Mail */}
        <div>
          <FaEnvelope className="w-8 h-8 mx-auto mb-4 text-[#2b2e4a]" />
          <h3 className="uppercase text-sm tracking-wider font-semibold mb-2">E-Mail</h3>
          <a href="mailto:info@lakeside-ellerau.de" className="text-sm hover:underline">
           
          </a>
        </div>

        {/* Öffnungszeiten */}
         <div>
          <FaCalendarAlt className="w-8 h-8 mx-auto mb-4 text-[#2b2e4a]" />
          <h3 className="uppercase text-sm tracking-wider font-semibold mb-2">Hours</h3>
          <div className="text-sm space-y-1">
           
            <p> <br />11.00 AM to 9.00 PM</p>
           
          </div>
        </div>
      </div>
    </section>
  );
}
