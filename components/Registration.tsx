"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeesPage() {
  // Fee structure from the image
  const feeCategories = [
    { category: "UG/PG student", amount: "2000 INR" },
    { category: "Research Scholar", amount: "3000 INR" },
    { category: "Postdoc Researcher", amount: "4000 INR" },
    { category: "Faculty/Scientist", amount: "5000 INR" },
    { category: "Industry Personnel", amount: "6000 INR" },
  ];

  // Additional info rows
  const infoRows = [
    {
      text: "All registration fees are inclusive of 18% GST",
      highlight: false,
    },
    {
      text: "Author registration fee includes- Registration Kit, Conference Lunch and Banquet Dinner.",
      highlight: false,
    },
    {
      text: "Papers exceeding 6 pages will be charged at ₹1000 (USD 50) per additional page, up to a maximum of 8 pages. Beyond 8 pages, the charge will be ₹4000 (USD 200) per page",
      highlight: false,
    },
    {
      text: "For more than one accepted paper, a 40% discount will be given on the registration of the 2nd paper only (e.g. for two papers in the student category, registration fees will be ₹12000 (1st Reg. ₹7500 + 2nd Reg. ₹7500×60%) instead of ₹15000).",
      highlight: true,
    },
    {
      text: "Registration fees, once paid, are non-refundable.",
      highlight: false,
    },
    {
      text: "Registration fees for attendees (co-author/non-author/accompanying person) is ₹3500 (without any Registration Kit).",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          className="w-fit mx-auto px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-lg text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Registration Details
        </motion.h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-900 to-purple-900 mx-auto mb-10 rounded-full"></div>

        {/* Main Grid: Fee Table + Bank Details + QR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Fee Table Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-200"
          >
            <div className="bg-gradient-to-r from-purple-800 to-purple-700 p-5">
              <h2 className="text-2xl font-bold text-white text-center">
                Registration Fees
              </h2>
              <p className="text-purple-200 text-center text-sm mt-1">
                Fee Structure (in INR)
              </p>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {feeCategories.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="flex justify-between items-center p-3 rounded-lg bg-purple-50 border border-purple-100 hover:shadow-md transition-shadow"
                  >
                    <span className="font-semibold text-purple-900">
                      {item.category}
                    </span>
                    <span className="text-purple-700 font-bold text-lg">
                      {item.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                <p className="text-purple-800 text-sm font-medium">
                  <span className="font-bold">Note:</span> The registration fee does not include 18% GST, which will be charged additionally.
                </p>
                  <p className="text-purple-700 text-sm mt-1">
                   <span className="font-bold">Registration Fee includes:</span> Registration Kit, conference Lunch and Dinner etc.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bank Details + QR Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-200"
          >
            <div className="bg-gradient-to-r from-purple-800 to-purple-700 p-5">
              <h2 className="text-2xl font-bold text-white text-center">
                Payment Details
              </h2>
              <p className="text-purple-200 text-center text-sm mt-1">
                Bank Transfer via UPI / NEFT / IMPS
              </p>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-purple-200 pb-2">
                  <span className="font-semibold text-purple-900">
                    Account Number:
                  </span>
                  <span className="text-purple-700 font-mono font-bold">
                    36734418111
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-purple-200 pb-2">
                  <span className="font-semibold text-purple-900">
                    Account Name:
                  </span>
                  <span className="text-purple-700">
                    Conference, NIT Rourkela
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-purple-200 pb-2">
                  <span className="font-semibold text-purple-900">
                    IFSC Code:
                  </span>
                  <span className="text-purple-700 font-mono">SBIN0002109</span>
                </div>
                <div className="flex justify-between items-center border-b border-purple-200 pb-2">
                  <span className="font-semibold text-purple-900">
                    Bank & Branch:
                  </span>
                  <span className="text-purple-700">
                    SBI, NIT Campus, Rourkela
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-purple-200 pb-2">
                  <span className="font-semibold text-purple-900">
                    Merchant Name:
                  </span>
                  <span className="text-purple-700">
                    CONFERENCE NIT ROURKELA
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-semibold text-purple-900">UPI ID:</span>
                  <span className="text-purple-700 font-mono font-bold">
                    2804180418@sbi
                  </span>
                </div>
              </div>

              {/* QR Code Placeholder - Replace with actual QR image */}
              <div className="mt-4 pt-4 border-t border-purple-200">
                <p className="text-purple-800 text-sm font-medium text-center mb-3">
                  Scan QR Code for UPI Payment
                </p>
                <div className="flex justify-center">
                  <div className="relative w-36 h-36 bg-purple-100 rounded-xl border-2 border-purple-300 flex items-center justify-center">
                    {/* Replace the src below with your actual QR image path */}
                    <Image
                      src="/qr-placeholder.png"
                      alt="UPI QR Code"
                      width={128}
                      height={128}
                      className="object-contain"
                      onError={(e) => {
                        // Fallback if image not found - show a placeholder box
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement("div");
                          fallback.className =
                            "text-purple-600 text-xs text-center p-2";
                          fallback.innerText = "QR Code\nPlaceholder";
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    {/* If you don't have an image yet, uncomment below line and comment Image */}
                    {/* <div className="text-purple-600 text-xs text-center p-2">QR Code Placeholder<br />Add your QR image</div> */}
                  </div>
                </div>
                <p className="text-purple-500 text-xs text-center mt-2">
                  * Registration fees are non-refundable
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Form Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-5 border border-purple-200 text-center shadow-md">
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              Register Now
            </h3>
            <p className="text-purple-700 mb-3">
              Please fill out the Google Form to complete your registration
            </p>
            <a
              href="https://forms.gle/J6YQGo13Pyh5oaUz5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Registration Form →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
