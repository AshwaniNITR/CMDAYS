"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div id="contactus" className="relative">
      {/* Footer */}
      <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-[#2b0a59] via-[#4b1d95] to-[#7c3aed] text-white py-14">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Conference Details */}
            <div className="lg:w-2/5">
              <h3 className="text-2xl font-bold leading-snug tracking-wide">
                The 34th National Conference on Condensed Matter Days
                (CMDAYS-2026)
              </h3>

              <p className="mt-5 text-sm md:text-base leading-7 text-purple-100">
                CMDAYS-2026 is being organized by the Department of Physics and
                Astronomy, National Institute of Technology Rourkela from 17th
                to 19th November, 2026. The conference aims to bring together
                researchers, academicians, and industry experts working in the
                field of condensed matter physics and allied domains.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-8">
                {[
                  {
                    icon: Twitter,
                    name: "Twitter",
                    url: "#",
                  },
                  {
                    icon: Instagram,
                    name: "Instagram",
                    url: "#",
                  },
                  {
                    icon: Facebook,
                    name: "Facebook",
                    url: "#",
                  },
                  {
                    icon: Linkedin,
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/company/ieee-ims-society/",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110">
                      <social.icon className="w-5 h-5 text-white group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:w-1/5">
              <h3 className="text-xl font-semibold mb-5 text-white">
                Quick Links
              </h3>

              <ul className="space-y-4 text-sm md:text-base">
                {[
                  {
                    name: "Home",
                    href: "/",
                  },
                  {
                    name: "Paper Submission",
                    href: "/submitPaper",
                  },
                  {
                    name: "Organizing Committee",
                    href: "/local",
                  },
                  {
                    name:"Registration",
                    href:"/RegDet"
                  },
                  {
                    name:"Accomodation",
                    href:"/updatedsoon"
                  }

                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="text-purple-100 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:w-1/4">
              <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

              <div className="space-y-5 text-sm md:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-purple-100">
                    Dr. Suryanarayan Dash (Convener)
                  </span>
                </div>
                 <div className="flex items-start gap-3">
                  <span className="text-purple-100">
                    Dr. Gopi Nath Daptary(Co-Convener)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-200 mt-0.5" />
                  <span className="text-purple-100">
                    cmdays2026@nitrkl.ac.in
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-200 mt-0.5" />
                  <span className="text-purple-100 leading-6">
                    Department of Physics and Astronomy
                    <br />
                    National Institute of Technology Rourkela
                    <br />
                    Odisha, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent my-10"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="text-sm text-purple-100 tracking-wide">
              © 2026 CMDAYS-2026. All Rights Reserved.
            </div>

            {/* Center */}
            <div className="text-center text-xs md:text-sm text-purple-200">
              Organized by the Department of Physics and Astronomy,
              <br className="hidden md:block" />
              National Institute of Technology Rourkela
            </div>

            {/* Logos */}
            <div className="flex items-center gap-8">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/10 p-2 backdrop-blur-md border border-white/20">
                <Image
                  src="/I3ST-removebg-preview.png"
                  alt="CMDAYS Logo"
                  fill
                  className="object-contain p-1"
                  sizes="56px"
                />
              </div>

              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/10 p-2 backdrop-blur-md border border-white/20">
                <Image
                  src="/nitlogo.png"
                  alt="NIT Rourkela Logo"
                  fill
                  className="object-contain p-1"
                  sizes="56px"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
