"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Contact() {
  // Scroll to specific section
  const router=useRouter();
  const handleClick = (e, href) => {
    e.preventDefault();
    if (href) {
      // const targetElement = document.getElementById(href);
      // if (targetElement) {
      //   targetElement.scrollIntoView({ behavior: "smooth" });
      // }
      router.push(href);
    }
  };
  
  return (
    <div id="contactus" className="relative bg-white">
      {/* Footer Section */}

      <footer className="relative z-20 bg-blue-950 text-white py-10 rounded-t-3xl w-full overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between my-5 px-4 md:px-6">
          {/* Conference Details */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold">
              The 1st IEEE International Conference On Instrumentation
              INSTCon-2026
            </h3>

            {/* Social Icons */}
            <ul className="flex space-x-4 mt-4">
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
                  name: "Linkedin",
                  url: "https://www.linkedin.com/company/ieee-ims-society/",
                },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <social.icon className="w-4 h-4 text-white" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-full lg:w-64 h-0.5 bg-white mt-4"></div>
            <div className="w-full my-4">
              <p className="mt-4 text-sm text-white">
                The 1st IEEE International Conference On Instrumentation
                (INSTCon-2026) is being organized by the Electronics &
                Communication Engineering Department at NIT Rourkela from July
                24-25,2026.
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="lg:w-1/5 mb-8 lg:mb-0 text-sm space-y-2">
            <ul className="space-y-1">
              {[
                {
                  name: "Home",
                  href: "/",
                },
                {
                  name: "About Us",
                  href: "/about",
                },
                {
                  name: "Tracks of INSTCon-2026",
                  href: "/track-chairs",
                },
                {
                  name: "Paper Submission",
                  href: "/submitPaper",
                },
                {
                  name: "INSTCon-2026 Organizing Committee",
                  href: "/organizing",
                },
              ].map((key) => (
                <li key={key.name}>
                  <Link
                    href={`${key.href}`}
                    onClick={(e) => handleClick(e, key.href)}
                    className="flex items-center group hover:underline cursor-pointer"
                  >
                    {key.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/5 text-sm">
            <h3 className="text-lg font-semibold">CONTACT US</h3>
            <p className="mt-2 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>instcon2026@nitrkl.ac.in</span>
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-0.5 bg-white mt-8"></div>

        {/* Footer Bottom */}
        <div className="container mx-auto px-4 md:px-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="order-1 md:order-1 text-white text-sm md:text-md">
              @INSTCon-2026
            </div>
            
            <div className="order-3 md:order-2 text-white text-xs md:text-sm text-center mt-2 md:mt-0">
              © 2026 IEEE Rourkela Subsection. All rights reserved.
            </div>
            
            <div className="order-2 md:order-3 flex items-center gap-8 md:gap-12">
              <div className="relative w-12 h-8 md:w-12 md:h-8">
                <Image
                  className="rounded-2xl object-contain"
                  src={`https://res.cloudinary.com/dd11bvhdi/image/upload/v1741620262/logo_I3ST_camy9q.jpg`}
                  alt="INSTConLogo"
                  fill
                  sizes="(max-width: 768px) 48px, 48px"
                />
              </div>
              <div className="relative w-12 h-8 md:w-12 md:h-8">
                <Image
                  className="rounded-2xl object-contain"
                  src={`/nitlogo.png`}
                  alt="NITR Logo"
                  fill
                  sizes="(max-width: 768px) 48px, 48px"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}