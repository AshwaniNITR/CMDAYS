"use client"
import Image from "next/image"
import { otherCommittees } from "./data"
import { CommitteesBackground } from "./Background"
import Navbar from "./Navbar"
import OtherBackground from "./OtherBackground"

export default function Committee() {
  return (
    <div className="relative min-h-screen">
      {/* <CommitteesBackground /> */}
      <OtherBackground/>
      {/* <Navbar /> */}
      
      <section className="relative py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          {/* Modern Header */}
          <div className="mb-16 animate-fadeIn" style={{ animation: "fadeIn 0.5s ease-out" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent">
              Our <span className="font-extrabold">Committees</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-6 rounded-full"></div>
            {/* <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet the dedicated professionals guiding our organization
            </p> */}
          </div>

          {/* Modern Committees Section */}
          <div className="mb-24 flex flex-col items-center">
            {otherCommittees.map((committee) => (
              <div key={committee.title} className="mb-20 animate-fadeUp w-full flex flex-col items-center">
                <div className="inline-block px-6 py-2 mb-6 bg-gray-100 rounded-full">
                  <h3 className="text-2xl font-bold text-[#003366]">{committee.title}</h3>
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
                              <h4 className="font-bold text-lg text-gray-800 mb-1">{member.name}</h4>
                              <p className="text-gray-600 text-sm font-medium">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
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
  )
}