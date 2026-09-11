"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  ExternalLink,
  Info,
  CheckCircle2,
  Search,
  BedDouble,
  ShieldAlert,
  User,
  HelpCircle,
  Clock,
} from "lucide-react";

interface RoomRate {
  category: string;
  single: number | null | string;
  double: number | null | string;
}

interface HotelData {
  id: string;
  name: string;
  website?: string;
  distance: string;
  distanceKm: number;
  rooms: RoomRate[];
  remarks: string[];
  breakfastIncluded: boolean;
  gstNote: string;
  contactPerson?: string;
  contacts: string[];
}

const hotelsData: HotelData[] = [
  {
    id: "regency-inn",
    name: "The Regency Inn",
    website: "https://www.theregencyinn.in",
    distance: "6 Kms from NIT Rourkela",
    distanceKm: 6,
    rooms: [
      { category: "Standard", single: 2850, double: 3445 },
      { category: "Deluxe", single: 3395, double: 3775 },
      { category: "Executive", single: 4265, double: 4585 },
    ],
    remarks: [
      "25% Special Discount on the mentioned price",
      "GST (@5%) extra as applicable",
      "Break Fast Included",
    ],
    breakfastIncluded: true,
    gstNote: "GST (@5%) extra as applicable",
    contacts: ["7735850985", "9692021484"],
  },
  {
    id: "radhika-regency",
    name: "Radhika Regency",
    website: "https://www.baisakhithotels.com",
    distance: "6 Kms from NIT Rourkela",
    distanceKm: 6,
    rooms: [
      { category: "Standard", single: 3199, double: 3699 },
      { category: "Executive", single: 3899, double: 4399 },
      { category: "Deluxe", single: 4399, double: 4899 },
    ],
    remarks: [
      "20% Special Discount on the mentioned price",
      "GST (@5%) extra as applicable",
      "Break Fast Included",
    ],
    breakfastIncluded: true,
    gstNote: "GST (@5%) extra as applicable",
    contactPerson: "Mr. S. K. Imran",
    contacts: ["7008360572", "7205097783"],
  },
  {
    id: "deepti-courtyard",
    name: "DEEPTI Courtyard",
    website: "https://www.deepticourtyard.com",
    distance: "4 Kms from NIT Rourkela",
    distanceKm: 4,
    rooms: [
      { category: "Standard", single: 3750, double: 4250 },
      { category: "Deluxe", single: 4750, double: 5250 },
      { category: "Club", single: 6250, double: 6250 },
      { category: "Club Rooms with Balcony", single: 6750, double: 6750 },
      { category: "Super Club Rooms", single: 6750, double: 6750 },
    ],
    remarks: [
      "20% Special Discount on the mentioned price",
      "GST (@5%) extra as applicable",
      "Break Fast Included",
    ],
    breakfastIncluded: true,
    gstNote: "GST (@5%) extra as applicable",
    contactPerson: "Mr. Sreedhar",
    contacts: ["8917625908"],
  },
  {
    id: "hotel-brindaban",
    name: "Hotel Brindaban",
    distance: "6 Kms from NIT Rourkela",
    distanceKm: 6,
    rooms: [
      { category: "Premium", single: 2195, double: 2895 },
      { category: "Classic", single: 2695, double: 3395 },
      { category: "Club", single: 2795, double: 3495 },
      { category: "Royal", single: 3295, double: 3995 },
    ],
    remarks: [
      "15% Special Discount on the mentioned price",
      "GST (@5%) extra as applicable",
      "Break Fast Included",
    ],
    breakfastIncluded: true,
    gstNote: "GST (@5%) extra as applicable",
    contacts: ["9040090121", "9040090122"],
  },
  {
    id: "abhinandan-inn",
    name: "Hotel Abhinandan Inn",
    distance: "6 Kms from NIT Rourkela",
    distanceKm: 6,
    rooms: [
      { category: "Standard", single: 1500, double: 1800 },
      { category: "Deluxe", single: 1800, double: 2200 },
      { category: "Super Deluxe", single: 2200, double: 2500 },
    ],
    remarks: ["Break Fast Included for Super Deluxe"],
    breakfastIncluded: false, // only for Super Deluxe
    gstNote: "Taxes as applicable",
    contactPerson: "Mr. Manish Kedia",
    contacts: ["9861049422"],
  },
  {
    id: "guest-regency",
    name: "Hotel The Guest Regency",
    distance: "6 Kms from NIT Rourkela",
    distanceKm: 6,
    rooms: [
      { category: "Standard", single: 1000, double: 1200 },
      { category: "Deluxe", single: 1200, double: 1400 },
    ],
    remarks: ["GST Inclusive"],
    breakfastIncluded: false,
    gstNote: "GST Inclusive",
    contactPerson: "Mr. Kesar Jamil",
    contacts: ["9337671468"],
  },
  {
    id: "aastha-palace",
    name: "Hotel Aastha Palace",
    distance: "6 Kms from NIT Rourkela",
    distanceKm: 6,
    rooms: [
      { category: "Deluxe", single: 1399, double: 1899 },
      { category: "Super Executive", single: "—", double: 2299 },
    ],
    remarks: [
      "15% Special Discount on the mentioned price",
      "GST (@5%) extra as applicable",
    ],
    breakfastIncluded: false,
    gstNote: "GST (@5%) extra as applicable",
    contactPerson: "Mr. Uttam Roy",
    contacts: ["7365044015", "9064181923"],
  },
  {
    id: "panthanivas",
    name: "Panthanivas",
    website: "https://www.bookodisha.com",
    distance: "3.5 Kms from NIT Rourkela",
    distanceKm: 3.5,
    rooms: [
      { category: "Deluxe", single: "—", double: 2500 },
      { category: "Premium", single: "—", double: 3000 },
      { category: "Super Premium", single: "—", double: 3500 },
      { category: "Royal Suite", single: "—", double: 4000 },
    ],
    remarks: [
      "10% Special Discount on the mentioned price",
      "GST (@5%) extra as applicable",
      "Break Fast Included",
      "Check-in 11:00 AM and Checkout 09:00 AM",
      "Extra Person: Rs. 650 for each type",
    ],
    breakfastIncluded: true,
    gstNote: "GST (@5%) extra as applicable",
    contactPerson: "Mr. Debashis Sahoo",
    contacts: ["9078885547"],
  },
];

export default function Accommodation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("all");

  const filteredHotels = useMemo(() => {
    return hotelsData.filter((hotel) => {
      const matchesSearch =
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.rooms.some((r) =>
          r.category.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        (hotel.contactPerson &&
          hotel.contactPerson.toLowerCase().includes(searchQuery.toLowerCase())) ||
        hotel.remarks.some((rem) =>
          rem.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesDistance =
        distanceFilter === "all" ||
        (distanceFilter === "under5" && hotel.distanceKm < 5) ||
        (distanceFilter === "6km" && hotel.distanceKm >= 5);

      return matchesSearch && matchesDistance;
    });
  }, [searchQuery, distanceFilter]);

  const formatPrice = (price: number | string | null) => {
    if (price === null || price === "—" || price === "-") return "—";
    if (typeof price === "number") {
      return `₹${price.toLocaleString("en-IN")}`;
    }
    return price;
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <h1 className="w-fit mx-auto px-6 py-2 rounded-2xl bg-white/[0.12] backdrop-blur-md border border-white/30 shadow-lg text-3xl sm:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-950 via-purple-700 to-purple-950 bg-clip-text text-transparent">
            Accommodation Information
          </h1>

          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 mx-auto mb-4 rounded-full"></div>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 font-medium px-4">
            The Organiser has identified nearby hotels for participants of CMDAYS-2026.
            Interested participants may contact and book them directly using the details below.
          </p>
        </motion.div>

        {/* Important Instructions Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-purple-200 overflow-hidden mb-10"
        >
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <Info className="w-5 h-5 text-purple-200" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Important Booking Guidelines & Notes
              </h2>
            </div>
            <span className="text-xs bg-purple-700/80 text-purple-100 px-3 py-1 rounded-full border border-purple-400/30">
              Please read before booking
            </span>
          </div>

          <div className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100">
              <CheckCircle2 className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-purple-950 font-semibold block mb-0.5">
                  Availing Conference Rates:
                </strong>
                While booking, please mention the{" "}
                <span className="font-bold text-purple-900">
                  NIT (NIT Rourkela) CMDAYS-2026 conference
                </span>{" "}
                to avail of these special negotiated tariffs. Some hotels may not have twin
                (separate) beds for double occupancy; please verify with the hotel while booking.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100">
              <ShieldAlert className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-purple-950 font-semibold block mb-0.5">
                  ID & Check-in / Checkout:
                </strong>
                Please bring a government-issued photo ID (Aadhaar / Driving License / Passport,
                etc.) and confirm check-in and checkout timings with the hotel (mostly 24 hrs).
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100">
              <Clock className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-purple-950 font-semibold block mb-0.5">
                  Limited Room Availability:
                </strong>
                Rooms closer to the event dates may not be available due to high demand.
                Participants are encouraged to make reservations well in advance.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100">
              <ExternalLink className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-purple-950 font-semibold block mb-0.5">
                  Online Comparison & Reviews:
                </strong>
                Please check online travel platforms to see if you can get a better price. You may
                also check reviews of other hotels nearby and book independently.
              </div>
            </div>

            {/* Emergency Help Line */}
            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-white/10">
                  <Phone className="w-5 h-5 text-purple-200 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Need Assistance with Accommodation?</h3>
                  <p className="text-xs sm:text-sm text-purple-200">
                    In case of any difficulty, please contact Co-Convener{" "}
                    <span className="font-semibold text-white">Prof. Nilay Maji</span>
                  </p>
                </div>
              </div>
              <a
                href="tel:+918250441545"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-purple-900 font-bold hover:bg-purple-50 transition-all shadow hover:shadow-lg text-sm"
              >
                <Phone className="w-4 h-4 text-purple-700" />
                +91-8250441545
              </a>
            </div>
          </div>
        </motion.div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search hotel, room category, contact..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/90 border border-purple-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-purple-900 whitespace-nowrap">
              Distance:
            </span>
            <button
              onClick={() => setDistanceFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                distanceFilter === "all"
                  ? "bg-purple-800 text-white shadow"
                  : "bg-white/80 text-purple-900 border border-purple-200 hover:bg-purple-50"
              }`}
            >
              All ({hotelsData.length})
            </button>
            <button
              onClick={() => setDistanceFilter("under5")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                distanceFilter === "under5"
                  ? "bg-purple-800 text-white shadow"
                  : "bg-white/80 text-purple-900 border border-purple-200 hover:bg-purple-50"
              }`}
            >
              &lt; 5 Kms (2)
            </button>
            <button
              onClick={() => setDistanceFilter("6km")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                distanceFilter === "6km"
                  ? "bg-purple-800 text-white shadow"
                  : "bg-white/80 text-purple-900 border border-purple-200 hover:bg-purple-50"
              }`}
            >
              6 Kms (6)
            </button>
          </div>
        </div>

        {/* Accommodation Table - Desktop & Large Screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-purple-200 overflow-hidden mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 text-white text-xs uppercase tracking-wider font-bold">
                  <th scope="col" className="py-4 px-4 w-[22%]">
                    Hotel Name & Website
                  </th>
                  <th scope="col" className="py-4 px-3 w-[12%]">
                    Distance
                  </th>
                  <th scope="col" className="py-4 px-3 w-[15%]">
                    Room Category
                  </th>
                  <th scope="col" className="py-4 px-3 text-right w-[11%]">
                    Single Occ.
                  </th>
                  <th scope="col" className="py-4 px-3 text-right w-[11%]">
                    Double Occ.
                  </th>
                  <th scope="col" className="py-4 px-4 w-[16%]">
                    Remarks & Inclusions
                  </th>
                  <th scope="col" className="py-4 px-4 w-[13%]">
                    References / Contact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 text-sm">
                {filteredHotels.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-gray-500 font-medium">
                      No hotels match your search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredHotels.map((hotel, hotelIdx) => (
                    <React.Fragment key={hotel.id}>
                      {hotel.rooms.map((room, roomIdx) => {
                        const isFirstRoom = roomIdx === 0;
                        const rowSpan = hotel.rooms.length;
                        const isEvenHotel = hotelIdx % 2 === 0;

                        return (
                          <tr
                            key={`${hotel.id}-${room.category}`}
                            className={`transition-colors hover:bg-purple-50/60 ${
                              isEvenHotel ? "bg-white" : "bg-purple-50/20"
                            } ${isFirstRoom ? "border-t-2 border-purple-200" : ""}`}
                          >
                            {/* Hotel Name (spans all rooms of this hotel) */}
                            {isFirstRoom && (
                              <td
                                rowSpan={rowSpan}
                                className="py-4 px-4 align-top border-r border-purple-100"
                              >
                                <div className="font-bold text-base text-purple-950">
                                  {hotel.name}
                                </div>
                                {hotel.website && (
                                  <a
                                    href={hotel.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-purple-700 hover:text-purple-900 font-medium hover:underline mt-1 break-all"
                                  >
                                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                    {hotel.website.replace(/^https?:\/\//, "")}
                                  </a>
                                )}
                              </td>
                            )}

                            {/* Distance (spans all rooms of this hotel) */}
                            {isFirstRoom && (
                              <td
                                rowSpan={rowSpan}
                                className="py-4 px-3 align-top border-r border-purple-100"
                              >
                                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-semibold">
                                  <MapPin className="w-3 h-3 text-purple-700 flex-shrink-0" />
                                  <span>{hotel.distance}</span>
                                </div>
                              </td>
                            )}

                            {/* Room Category */}
                            <td className="py-3 px-3 border-r border-purple-100 font-semibold text-gray-800 flex-nowrap">
                              <span className="inline-flex items-center gap-1.5">
                                <BedDouble className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                                {room.category}
                              </span>
                            </td>

                            {/* Single Occupancy */}
                            <td className="py-3 px-3 text-right font-bold text-purple-900 border-r border-purple-100">
                              {formatPrice(room.single)}
                            </td>

                            {/* Double Occupancy */}
                            <td className="py-3 px-3 text-right font-bold text-purple-900 border-r border-purple-100">
                              {formatPrice(room.double)}
                            </td>

                            {/* Remarks (spans all rooms of this hotel) */}
                            {isFirstRoom && (
                              <td
                                rowSpan={rowSpan}
                                className="py-4 px-4 align-top border-r border-purple-100"
                              >
                                <ul className="space-y-1.5 text-xs text-gray-700">
                                  {hotel.remarks.map((rem, rIdx) => {
                                    const isDiscount = rem.includes("Special Discount");
                                    const isBreakfast = rem.includes("Break Fast");

                                    return (
                                      <li key={rIdx} className="flex items-start gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                                        <span
                                          className={
                                            isDiscount
                                              ? "font-bold text-purple-900 bg-purple-100/80 px-1.5 py-0.5 rounded"
                                              : isBreakfast
                                              ? "font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200"
                                              : ""
                                          }
                                        >
                                          {rem}
                                        </span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </td>
                            )}

                            {/* References / Contact (spans all rooms of this hotel) */}
                            {isFirstRoom && (
                              <td rowSpan={rowSpan} className="py-4 px-4 align-top">
                                {hotel.contactPerson && (
                                  <div className="font-semibold text-gray-900 text-xs mb-1 flex items-center gap-1">
                                    <User className="w-3 h-3 text-purple-600 flex-shrink-0" />
                                    {hotel.contactPerson}
                                  </div>
                                )}
                                <div className="space-y-1">
                                  {hotel.contacts.map((contact, cIdx) => (
                                    <a
                                      key={cIdx}
                                      href={`tel:+91${contact}`}
                                      className="inline-flex items-center gap-1 text-xs font-medium text-purple-800 hover:text-purple-950 hover:underline bg-purple-50 hover:bg-purple-100 px-2 py-0.5 rounded border border-purple-200 transition-colors"
                                    >
                                      <Phone className="w-3 h-3 text-purple-600" />
                                      {contact}
                                    </a>
                                  ))}
                                </div>
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile & Tablet Card-Table View */}
        <div className="lg:hidden space-y-6 mb-12">
          {filteredHotels.length === 0 ? (
            <div className="p-8 text-center bg-white/90 rounded-2xl border border-purple-200 text-gray-500 font-medium">
              No hotels match your search criteria.
            </div>
          ) : (
            filteredHotels.map((hotel, hIdx) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: hIdx * 0.05 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-4 text-white">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="text-lg font-bold">{hotel.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-purple-200 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-300" />
                        <span>{hotel.distance}</span>
                      </div>
                    </div>
                    {hotel.website && (
                      <a
                        href={hotel.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        title="Visit Website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Rates Table inside Card */}
                <div className="p-4">
                  <div className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-2">
                    Room Rates (in INR)
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-purple-100 mb-4">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-purple-50 text-purple-900 font-semibold">
                        <tr>
                          <th className="py-2 px-3">Category</th>
                          <th className="py-2 px-3 text-right">Single Occ.</th>
                          <th className="py-2 px-3 text-right">Double Occ.</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-100">
                        {hotel.rooms.map((room, rIdx) => (
                          <tr key={rIdx} className="hover:bg-purple-50/40">
                            <td className="py-2 px-3 font-medium text-gray-800">
                              {room.category}
                            </td>
                            <td className="py-2 px-3 text-right font-bold text-purple-900">
                              {formatPrice(room.single)}
                            </td>
                            <td className="py-2 px-3 text-right font-bold text-purple-900">
                              {formatPrice(room.double)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Remarks */}
                  <div className="mb-4">
                    <div className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-1.5">
                      Remarks & Inclusions
                    </div>
                    <ul className="space-y-1 text-xs text-gray-700">
                      {hotel.remarks.map((rem, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 flex-shrink-0" />
                          <span>{rem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-3 border-t border-purple-100 flex flex-wrap items-center justify-between gap-2">
                    {hotel.contactPerson && (
                      <span className="text-xs font-semibold text-gray-800 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-purple-600" />
                        {hotel.contactPerson}
                      </span>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {hotel.contacts.map((contact, cIdx) => (
                        <a
                          key={cIdx}
                          href={`tel:+91${contact}`}
                          className="inline-flex items-center gap-1 text-xs font-medium text-purple-900 bg-purple-100 hover:bg-purple-200 px-2.5 py-1 rounded-md transition-colors"
                        >
                          <Phone className="w-3 h-3 text-purple-700" />
                          {contact}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom Notice & Help Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-purple-50 via-white to-purple-50 rounded-2xl border border-purple-200 p-6 sm:p-8 text-center shadow-md max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 rounded-full bg-purple-100 border border-purple-300 text-purple-800 flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-purple-950 mb-2">
            Questions Regarding Accommodation or Travel?
          </h3>
          <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
            Please feel free to reach out to the organizing team for assistance with directions,
            recommendations, or local transport from Rourkela Railway Station / Jharsuguda Airport.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:cmdays2026@nitrkl.ac.in"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-900 text-white text-sm font-semibold hover:bg-purple-800 transition-colors shadow"
            >
              Email Organizing Team
            </a>
            <a
              href="tel:+918250441545"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-purple-300 text-purple-900 text-sm font-semibold hover:bg-purple-50 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-purple-700" />
              Call Dr. Nilay Maji: +91-8250441545
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
