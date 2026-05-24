"use client";

import { useState } from "react";
import {
  Plane,
  Train,
  Bus,
  Car,
  MapPin,
  Navigation,
  Clock,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
//import CombinedBackground from "../../components/CombinedBackground";
import PlacesSlider from "../../components/Swiper";
import PlacesSliderOut from "../../components/SwiperOut";
import OtherBackground from "../../components/OtherBackground";

export default function TravelGuideToNITRourkela() {
  const [activeTab, setActiveTab] = useState("air");

  return (
    <div className="relative max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      {/* <CombinedBackground/> */}
      <OtherBackground />
      {/* Header */}
      <motion.div
        className="relative z-20 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mt-12 font-extrabold sm:mt-10 text-4xl md:text-5xl text-center leading-[1.25] pb-[0.15em] bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent">
          How to Reach NIT Rourkela
        </h1>
        <div className="w-32 h-2 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A comprehensive guide to reaching the National Institute of Technology
          Rourkela campus from major transportation hubs
        </p>
      </motion.div>

      {/* Map Card */}
      <motion.div
        className="relative z-20 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Campus Location
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            National Institute of Technology, Rourkela, Odisha
          </p>
        </div>

        <div className="relative z-20 p-6">
          <div className="relative h-[300px] md:h-[400px] w-full bg-gray-100 rounded-xl overflow-hidden border border-blue-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6656366636!2d84.89992707596853!3d22.25301647934424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1710249639693!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NIT Rourkela Map"
              className="absolute inset-0"
            ></iframe>

            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-800 to-blue-900 p-3 rounded-lg shadow-lg">
              <div className="flex items-center text-white">
                <MapPin className="w-5 h-5 text-blue-300 mr-2" />
                <span className="font-medium">NIT Rourkela, Odisha, India</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Transportation Tabs */}
      <motion.div
        className="relative z-20 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Transportation Options
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            Choose your preferred mode of travel
          </p>
        </div>

        <div className="p-4 sm:p-6">
          {/* Tab Buttons - Made responsive */}
          <div className="flex overflow-x-auto border-b border-blue-200 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              className={`flex items-center px-3 sm:px-6 py-3 sm:py-4 font-medium text-base sm:text-lg whitespace-nowrap ${activeTab === "air" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => setActiveTab("air")}
            >
              <Plane
                className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 ${activeTab === "air" ? "text-blue-600" : "text-gray-500"}`}
              />
              By Air
            </button>
            <button
              className={`flex items-center px-3 sm:px-6 py-3 sm:py-4 font-medium text-base sm:text-lg whitespace-nowrap ${activeTab === "train" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => setActiveTab("train")}
            >
              <Train
                className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 ${activeTab === "train" ? "text-blue-600" : "text-gray-500"}`}
              />
              By Train
            </button>
            <button
              className={`flex items-center px-3 sm:px-6 py-3 sm:py-4 font-medium text-base sm:text-lg whitespace-nowrap ${activeTab === "local" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => setActiveTab("local")}
            >
              <Bus
                className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 ${activeTab === "local" ? "text-blue-600" : "text-gray-500"}`}
              />
              Local Transport
            </button>
          </div>

          {/* Air Travel Content */}
          {activeTab === "air" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="py-2"
            >
              <div className="grid gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 sm:p-6 shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-full mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                      <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-blue-900">
                        Jharsuguda Airport (IXJ)
                      </h3>
                      <p className="text-blue-600 text-xs sm:text-sm font-medium">
                        Closest airport - 84 km from NIT Rourkela
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 sm:pl-16">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          Flight Connectivity:
                        </span>{" "}
                        Limited flights from Delhi, Kolkata, and Hyderabad
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          To Campus:
                        </span>{" "}
                        Taxi services available (₹1,800-2,200, 2 hours)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          Pre-booking:
                        </span>{" "}
                        Recommended as on-spot taxis may be limited
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 sm:p-6 shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-full mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                      <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-blue-900">
                        Ranchi Airport (IXR)
                      </h3>
                      <p className="text-blue-600 text-xs sm:text-sm font-medium">
                        180 km from NIT Rourkela
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 sm:pl-16">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          Flight Connectivity:
                        </span>{" "}
                        Better connectivity with major cities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          To Rourkela:
                        </span>{" "}
                        Take a taxi to Ranchi station, then train to Rourkela
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          Direct Taxi:
                        </span>{" "}
                        Available but expensive (₹4,000-5,000, 4 hours)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 sm:p-6 shadow-md border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-full mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                      <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-blue-900">
                        Bhubaneswar Airport (BBI)
                      </h3>
                      <p className="text-blue-600 text-xs sm:text-sm font-medium">
                        340 km from NIT Rourkela
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 sm:pl-16">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          Flight Connectivity:
                        </span>{" "}
                        Excellent connectivity with all major Indian cities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          To Rourkela:
                        </span>{" "}
                        Take a taxi to Bhubaneswar station, then train to
                        Rourkela (multiple trains available)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold text-blue-900">
                          Bus Option:
                        </span>{" "}
                        Direct buses available from Bhubaneswar to Rourkela (7-8
                        hours journey)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Train Travel Content */}
          {activeTab === "train" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="py-2"
            >
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 sm:p-6 shadow-md border border-blue-200 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start mb-6">
                  <div className="bg-gradient-to-r from-green-100 to-green-200 p-3 rounded-full mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                    <Train className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-blue-900">
                      Rourkela Railway Station (ROU)
                    </h3>
                    <p className="text-blue-600 text-xs sm:text-sm font-medium">
                      Main station - 7 km from NIT Rourkela campus
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-base sm:text-lg text-blue-900 mb-4">
                    Major Train Connectivity:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      {
                        from: "Delhi",
                        trains: [
                          "Purushottam Express (12802)",
                          "Rajdhani Express (22811)",
                          "Sambalpur-Jammu Tawi Express (18310)",
                        ],
                      },
                      {
                        from: "Kolkata",
                        trains: [
                          "Steel Express (12814)",
                          "Shatabdi Express (12019)",
                          "Ispat Express (18181)",
                        ],
                      },
                      {
                        from: "Mumbai",
                        trains: [
                          "Gitanjali Express (12860)",
                          "LTT-Shalimar Express (18030)",
                        ],
                      },
                      {
                        from: "Chennai",
                        trains: [
                          "Coromandel Express (12842)",
                          "East Coast Express (18646)",
                        ],
                      },
                    ].map((route, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 sm:p-4 rounded-lg border border-blue-200 shadow-sm"
                      >
                        <p className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
                          From {route.from}:
                        </p>
                        <ul className="space-y-1">
                          {route.trains.map((train, trainIdx) => (
                            <li
                              key={trainIdx}
                              className="flex items-start text-xs sm:text-sm text-gray-700"
                            >
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-1.5 sm:mr-2 flex-shrink-0"></div>
                              {train}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-base sm:text-lg text-blue-900 mb-4">
                    From Station to Campus:
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-white to-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-2">
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-blue-900 text-sm sm:text-base">
                          Auto-rickshaws
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Available outside the station
                      </p>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">
                        ₹150-200
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-2">
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-blue-900 text-sm sm:text-base">
                          Taxis
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Pre-paid taxis available
                      </p>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">
                        ₹250-300
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-2">
                        <Bus className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-blue-900 text-sm sm:text-base">
                          City Bus
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Bus no. 4 to NIT campus
                      </p>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">
                        ₹15-20
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-5 rounded-xl border border-blue-300">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-blue-900 mb-2">
                      Pro Tip:
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700">
                      Book train tickets well in advance (60-90 days) as trains
                      to Rourkela are often fully booked, especially during
                      academic session beginnings. Use IRCTC website or app for
                      bookings.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Local Transport Content */}
          {activeTab === "local" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="py-2"
            >
              <div className="grid gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 sm:p-6 shadow-md border border-blue-200">
                  <div className="flex flex-col sm:flex-row sm:items-start mb-6">
                    <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-3 rounded-full mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                      <Car className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-blue-900">
                        From Rourkela Station to Campus
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      {
                        icon: Car,
                        title: "Auto-rickshaws",
                        price: "₹150-200",
                        time: "20-25 minutes",
                        desc: "Available right outside the station",
                      },
                      {
                        icon: Car,
                        title: "Taxis/Cabs",
                        price: "₹250-300",
                        time: "15-20 minutes",
                        desc: "Ola/Uber available in limited numbers",
                      },
                      {
                        icon: Bus,
                        title: "City Bus",
                        price: "₹15-20",
                        time: "30-40 minutes",
                        desc: "Bus no. 4 goes directly to NIT campus",
                      },
                    ].map((option, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-3 rounded-lg bg-white border border-blue-100"
                      >
                        <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                          <option.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                              {option.title}
                            </h4>
                            <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 w-fit">
                              {option.price}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">
                            {option.time} • {option.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 sm:p-6 shadow-md border border-blue-200">
                  <div className="flex flex-col sm:flex-row sm:items-start mb-6">
                    <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-3 rounded-full mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                      <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-blue-900">
                        Within Rourkela City
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      {
                        icon: Car,
                        title: "Auto-rickshaws",
                        desc: "Most common mode of transport",
                        note: "Negotiate fare before boarding",
                      },
                      {
                        icon: Bus,
                        title: "City Buses",
                        desc: "Connect major parts of the city",
                        note: "Economical but less frequent",
                      },
                      {
                        icon: Car,
                        title: "Rental Services",
                        desc: "Bikes and cars available for rent",
                        note: "Requires valid driving license",
                      },
                    ].map((option, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-3 rounded-lg bg-white border border-blue-100"
                      >
                        <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                          <option.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                            {option.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">
                            {option.desc}
                          </p>
                          <p className="text-xs text-blue-500 mt-1">
                            {option.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 sm:p-5 rounded-xl border border-yellow-200">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-yellow-800 mb-2">
                      Campus Entry Information
                    </h4>
                    <p className="text-sm sm:text-base text-yellow-900">
                      NIT Rourkela has security checkpoints at all entrances.
                      Visitors need to provide identification and purpose of
                      visit.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Places to Visit */}
      <motion.div
        className=" bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative z-20 bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Places to Visit Near NIT Rourkela
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            Explore these attractions during your stay in Rourkela
          </p>
        </div>
        <PlacesSlider />
      </motion.div>
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative z-20 bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Places to Visit in Odisha
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            Explore these attractions during your stay in Odisha
          </p>
        </div>
        <PlacesSliderOut />
      </motion.div>
    </div>
  );
}
