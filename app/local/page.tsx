"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { CommitteesBackground } from "../../components/Background";
import { otherCommittees, trackChairs } from "../../components/data";
import CombinedBackground from "../../components/CombinedBackground";
import nameByTrack from "../../components/RefineData";

export default function Committee() {
  return (
    <div className="relative min-h-screen">
      <CombinedBackground />
      {/* <Navbar /> */}

      <section className="relative py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          {/* Modern Header */}

          {/* Modern Committees Section */}
          <div className="mb flex flex-col items-center">
            {otherCommittees.map((committee) =>
              committee.title === "Technical Program Chairs" ? (
                <div
                  key={committee.title}
                  className="mb-20 animate-fadeUp w-full flex flex-col items-center"
                >
                  <div className="inline-block px-6 py-2 mb-6 bg-gray-100 rounded-full">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003366]">
                      Technical Program Commitee Chairs
                    </h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
                    {committee.members.map((member) => (
                      <div key={member.id} className="group relative w-64">
                        <div className="transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                          <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col items-center h-full">
                            <div className="flex flex-col items-center p-6 h-full justify-between">
                              {/* Avatar with modern border effect */}
                              <div className="relative w-36 h-36 mb-4">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#003366] to-[#0066cc] p-1 transform rotate-45 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white z-10">
                                  <Image
                                    src={member.imageUrl || "/placeholder.svg"}
                                    alt={member.name}
                                    width={256}
                                    height={256}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                              </div>

                              {/* Text content */}
                              <div className="text-center">
                                <h4 className="font-bold text-lg text-gray-800 mb-1">
                                  {member.name}
                                </h4>
                                <p className="text-gray-600 text-sm font-medium">
                                  {member.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="inline-block px-6 py-2 mb-6 bg-gray-100 rounded-full">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366]">
              Track Chairs
            </h2>
          </div>
          {/* Track Chairs by Track */}
          <div className="mb-24 flex flex-col items-center">
            {nameByTrack.map((track) => {
              // Get member details for chairs in this track
              const trackMembers = trackChairs[0].members.filter((member) =>
                track.names.some((chairName) => {
                  const name = chairName.split(",")[0].trim();
                  return member.name.trim() === name;
                })
              );

              return (
                <div
                  key={track.id}
                  className="mb-20 animate-fadeUp w-full flex flex-col items-center"
                >
                  <div className="inline-block px-6 py-2 mb-6 bg-gray-100 rounded-full">
                    <h3 className="text-md sm:text-2xl font-extrabold text-[#003366]">
                      Track {track.id}
                    </h3>
                    <h3 className="text-md sm:text-2xl font-extrabold text-[#003366]">
                      {track.title}
                    </h3>
                    
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
                    {trackMembers.map((member) => (
                      <div key={member.id} className="group relative w-64">
                        <div className="transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                          <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col items-center h-full">
                            <div className="flex flex-col items-center p-6 h-full justify-between">
                              {/* Avatar with modern border effect */}
                              <div className="relative w-36 h-36 mb-4">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#003366] to-[#0066cc] p-1 transform rotate-45 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white z-10">
                                  <Image
                                    src={member.imageUrl || "/placeholder.svg"}
                                    alt={member.name}
                                    width={256}
                                    height={256}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                              </div>

                              {/* Text content */}
                              <div className="text-center">
                                <h4 className="font-bold text-lg text-gray-800 mb-1">
                                  {member.name}
                                </h4>
                                <p className="text-gray-600 text-sm font-medium">
                                  {member.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
