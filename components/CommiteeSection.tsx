"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface CommitteeMember {
  _id: string;
  name: string;
  role: string;
  category: string;
  order: number;
  imageUrl: string;
}

interface CommitteeSectionProps {
  title: string;
  category: string;
  description?: string;
}

export default function CommitteeSection({ title, category, description }: CommitteeSectionProps) {
  const [members, setMembers] = useState<CommitteeMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Role to exclude for Local Organizing Committee
  const excludedRoles = [
    "Chief Patron,   Director NIT Rourkela"
  ];

  useEffect(() => {
    const fetchCommitteeData = async () => {
      try {
        // Check session storage for cached ALL data
        const cachedData = sessionStorage.getItem('allCommitteeData');
        
        if (cachedData) {
          // Use cached data
          const allData: CommitteeMember[] = JSON.parse(cachedData);
          
          // Filter by category
          let filtered = allData.filter(m => m.category === category);
          
          // If this is Local Organizing Committee, exclude specific roles
          if (category === "Local Organizing Committee") {
            filtered = filtered.filter(m => !excludedRoles.includes(m.role));
          }
          
          setMembers(filtered.sort((a, b) => a.order - b.order));
          setLoading(false);
          return;
        }

        // Fetch from API if no cached data
        const response = await fetch('https://cmdays-admin-ten.vercel.app/api/committee');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch committee data: ${response.status}`);
        }

        const data: CommitteeMember[] = await response.json();
        
        // Store ALL data in session storage
        sessionStorage.setItem('allCommitteeData', JSON.stringify(data));
        
        // Filter for specific category
        let filtered = data.filter(m => m.category === category);
        
        // If this is Local Organizing Committee, exclude specific roles
        if (category === "Local Organizing Committee") {
          filtered = filtered.filter(m => !excludedRoles.includes(m.role));
        }
        
        setMembers(filtered.sort((a, b) => a.order - b.order));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching committee data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load committee data');
        setLoading(false);
      }
    };

    fetchCommitteeData();
  }, [category]); // Re-fetch if category changes

  // Show loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#003366] mx-auto mb-4"></div>
        <p className="text-gray-600">Loading {title}...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto text-center">
          <p className="font-semibold">Error loading committee data</p>
          <p className="text-sm mt-1">{error}</p>
          <button 
            onClick={() => {
              sessionStorage.removeItem('allCommitteeData');
              window.location.reload();
            }}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-24 flex flex-col items-center">
      {/* Committee Header */}
      <div className="mb-16 animate-fadeIn w-full text-center">
         <motion.h2
  className="w-fit mx-auto px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-lg text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {title}
</motion.h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 mx-auto mb-6 rounded-full"></div>
        {description && (
          <p className="w-fit mx-auto px-6 py-2 font-bold rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-lg">
            {description}
          </p>
        )}
      </div>

      {/* Committee Members Grid */}
      {members.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
          {members.map((member, index) => (
            <div 
              key={member._id} 
              className="group relative w-64 animate-fadeUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col items-center h-full">
                  <div className="flex flex-col items-center p-6 h-full justify-between">
                    {/* Avatar with modern border effect */}
                    <div className="relative w-36 h-36 mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#003366] to-[#0066cc] p-1 transform rotate-45 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white z-10">
                        <img
                          src={member.imageUrl.startsWith('http') ? member.imageUrl : `https://cmdays-admin-ten.vercel.app${member.imageUrl}`}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-[#003366] transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-gray-600 text-sm font-medium leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No members found in {title}.</p>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
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
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}