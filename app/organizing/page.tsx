"use client"
import Image from "next/image"
import Navbar from "../../components/Navbar"
import { CommitteesBackground } from "../../components/Background"
import { otherCommittees, patronCommittees } from "../../components/data"
import CombinedBackground from "../../components/CombinedBackground"

export default function Committee() {
  return (
    <div className="relative min-h-screen">
      <CombinedBackground/>
      
      {/* <Navbar /> */}
      
      <section className="relative py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          {/* Modern Header */}
          <div className="mb-16  animate-fadeIn" style={{ animation: "fadeIn 0.5s ease-out" }}>
            <h2 className="inline-block backdrop-blur-sm text-4xl leading-[1.25] pb-[0.15em] md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent">
              Organizing <span className="font-extrabold">Committee</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-6 rounded-full"></div>
            {/* <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet the dedicated professionals guiding our organization
            </p> */}
          </div>
                 <div className="mb-24 flex flex-col items-center">
          {patronCommittees.map((committee) => (
            <div key={committee.title} className="mb-16 animate-fadeUp w-full flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-3 text-[#003366]">{committee.title}</h3>
              <div className="h-1 w-32 mb-6 bg-[#003366]"></div>

              <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
                {committee.members.map((member) => (
                  <div key={member.id} className="transition-transform duration-300 hover:-translate-y-2 flex justify-center w-64">
                    <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-white border border-gray-200 w-64 h-[300px] flex flex-col items-center">
                      <div className="flex flex-col items-center p-6 h-full justify-between">
                        <div className="relative w-32 h-32">
                          <Image
                            src={member.imageUrl || "/placeholder.svg"}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="rounded-full object-cover border-4 bg-gradient-to-r from-[#003366] to-[#0066cc] shadow-lg"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center'
                            }}
                          />
                          {committee.title.includes("Patron") && (
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#003366] to-[#0066cc] text-white text-xs font-semibold px-3 py-1 rounded-full">
                              Patron
                            </div>
                          )}
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold mb-2 text-gray-800 text-xl">{member.name}</h4>
                          <p className="text-gray-600 font-medium text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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