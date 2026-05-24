"use client"

import { useState, useEffect, useRef } from "react"
import { speakers } from "./data"
import Image from "next/image"

export default function SpeakersCarousel() {
  const [currentBatch, setCurrentBatch] = useState(0)
  const [nextBatch, setNextBatch] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [speakerBatches, setSpeakerBatches] = useState<any[][]>([])
  const batchRef = useRef<NodeJS.Timeout>(0 as unknown as NodeJS.Timeout)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Split speakers into batches
  useEffect(() => {
    const speakerMembers = speakers[0]?.members || []
    const batches = []
    const batchSize = isMobile ? 2 : 4
    
    if (speakerMembers.length === 0) return
    
    // Create batches
    if (speakerMembers.length <= batchSize) {
      // First batch - all speakers
      batches.push([...speakerMembers])
      
      // Second batch - fill from beginning if needed
      const secondBatch = []
      let index = 0
      for (let i = 0; i < batchSize; i++) {
        secondBatch.push(speakerMembers[index])
        index = (index + 1) % speakerMembers.length
      }
      batches.push(secondBatch)
    } else {
      for (let i = 0; i < speakerMembers.length; i += batchSize) {
        const batch = speakerMembers.slice(i, i + batchSize)
        
        if (batch.length < batchSize && i > 0) {
          let fillIndex = 0
          while (batch.length < batchSize) {
            batch.push(speakerMembers[fillIndex])
            fillIndex = (fillIndex + 1) % speakerMembers.length
          }
        }
        
        batches.push(batch)
      }
      
      if (batches.length < 2) {
        const extraBatch = []
        let index = 0
        for (let i = 0; i < batchSize; i++) {
          extraBatch.push(speakerMembers[index])
          index = (index + 1) % speakerMembers.length
        }
        batches.push(extraBatch)
      }
    }
    
    setSpeakerBatches(batches)
  }, [isMobile])

  // Auto-rotate batches with proper animation timing
  useEffect(() => {
    if (speakerBatches.length <= 1) return
    
    const rotateBatch = () => {
      setIsAnimating(true)
      
      // Wait for slide-out to complete, then change batch and slide in
      setTimeout(() => {
        setCurrentBatch((prev) => (prev + 1) % speakerBatches.length)
        setNextBatch((prev) => (prev + 1) % speakerBatches.length)
        setIsAnimating(false)
      }, 500) // Time for slide out animation
    }
    
    batchRef.current = setInterval(rotateBatch, 5500)
    
    return () => {
      if (batchRef.current) clearInterval(batchRef.current)
    }
  }, [speakerBatches])

  const handleMouseEnter = () => {
    if (batchRef.current) clearInterval(batchRef.current)
  }

  const handleMouseLeave = () => {
    if (speakerBatches.length <= 1) return
    
    if (batchRef.current) clearInterval(batchRef.current)
    batchRef.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentBatch((prev) => (prev + 1) % speakerBatches.length)
        setNextBatch((prev) => (prev + 1) % speakerBatches.length)
        setIsAnimating(false)
      }, 500)
    }, 5500)
  }

  const currentSpeakers = speakerBatches[currentBatch] || []
  const nextSpeakers = speakerBatches[nextBatch] || []
  const totalSpeakers = speakers[0]?.members?.length || 0
  const originalSpeakersInBatch = Math.min(isMobile ? 2 : 4, totalSpeakers - (currentBatch * (isMobile ? 2 : 4)))

  return (
    <div
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header with gradient */}
      <div className="relative bg-gradient-to-r from-purple-700 via-purple-800 to-purple-700 py-4 px-6 flex justify-center items-center border-b border-blue-700/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Our Speakers
          </h2>
          {/* Batch indicator */}
          {speakerBatches.length > 1 && (
            <div className="absolute right-6 flex gap-1">
              {speakerBatches.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentBatch 
                      ? "bg-white w-4" 
                      : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    
      <div className="relative py-4 px-4 overflow-hidden">
        <div className="relative min-h-[300px] md:min-h-[290px] overflow-hidden">
          {/* Current batch - slides out to the left */}
          <div 
            key={`current-${currentBatch}`}
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
              isAnimating 
                ? '-translate-x-full opacity-0' 
                : 'translate-x-0 opacity-100'
            }`}
          >
            <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
              {currentSpeakers.map((speaker, index) => (
                <SpeakerCard 
                  key={`current-${speaker.id}-batch${currentBatch}-${index}`} 
                  speaker={speaker} 
                  currentBatch={currentBatch}
                  index={index}
                  isMobile={isMobile}
                  isDuplicate={index >= originalSpeakersInBatch && originalSpeakersInBatch < (isMobile ? 2 : 4)}
                />
              ))}
            </div>
          </div>

          {/* Next batch - comes in from the right */}
          <div 
            key={`next-${nextBatch}`}
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
              isAnimating 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0 pointer-events-none'
            }`}
          >
            <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
              {nextSpeakers.map((speaker, index) => (
                <SpeakerCard 
                  key={`next-${speaker.id}-batch${nextBatch}-${index}`} 
                  speaker={speaker} 
                  currentBatch={nextBatch}
                  index={index}
                  isMobile={isMobile}
                  isDuplicate={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"></div>
    </div>
  )
}

// Extracted Speaker Card Component for better readability
function SpeakerCard({ speaker, currentBatch, index, isMobile, isDuplicate = false }: { 
  speaker: any, 
  currentBatch: number, 
  index: number,
  isMobile: boolean,
  isDuplicate?: boolean 
}) {
   return (
    <div className={`p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden h-full flex flex-col ${
      isDuplicate ? 'opacity-90' : ''
    }`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Speaker Image */}
        <div className="mb-3 flex justify-center flex-shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 shadow-lg relative">
            {speaker.imageUrl ? (
              <div className="relative w-full h-full">
                {/* Background fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                {/* Actual Image */}
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 768px) 80px, 80px"
                  className="object-cover"
                  onError={(e) => {
                    // If image fails to load, show fallback
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-blue-100', 'to-purple-100');
                  }}
                />
                {/* Fallback icon - only shown if image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            )}
          </div>
        </div>
        
        {/* Name and Role section - takes available space */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-bold text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              {speaker.name}
            </h3>
            
            <div className="flex items-center justify-center gap-1">
              <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p className="text-sm text-gray-700 font-medium text-center line-clamp-2">
                {speaker.role}
              </p>
            </div>
          </div>
        </div>

        {/* Talk Title - Always at the bottom */}
        <div className="mt-auto pt-3 border-t border-gray-200">
          <div className="flex items-start gap-1">
            <svg className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-semibold">Talk Title:</p>
              <p className="text-sm text-gray-700 font-medium line-clamp-2">{speaker.talkTitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm -z-10"></div>
    </div>
  )
}