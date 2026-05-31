"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Speaker {
  _id: string
  name: string
  role: string
  talkTitle: string
  abstract?: string
  bio?: string
  biosketch?: string
  order: number
  imageUrl: string
}

export default function SpeakersCarousel() {
  const [currentBatch, setCurrentBatch] = useState(0)
  const [nextBatch, setNextBatch] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const [speakerBatches, setSpeakerBatches] = useState<
    Speaker[][]
  >([])

  const [speakers, setSpeakers] = useState<
    Speaker[]
  >([])

  const [loading, setLoading] = useState(true)

  const batchRef =
    useRef<NodeJS.Timeout>(
      0 as unknown as NodeJS.Timeout
    )

  const [isMobile, setIsMobile] =
    useState(false)

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener(
      "resize",
      checkMobile
    )

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      )
  }, [])

  // FETCH SPEAKERS FROM API
  // useEffect(() => {
  //   const fetchSpeakers = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://cmdays-admin-ten.vercel.app/api/speakers",
  //         {
  //           method: "GET",
  //           cache: "no-store",
  //         }
  //       )

  //       const data = await response.json()

  //       // SORT ASCENDING
  //       const sortedData = data.sort(
  //         (
  //           a: Speaker,
  //           b: Speaker
  //         ) => a.order - b.order
  //       )

  //       setSpeakers(sortedData)
  //     } catch (error) {
  //       console.error(
  //         "Failed to fetch speakers:",
  //         error
  //       )
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchSpeakers()
  // }, [])
  useEffect(() => {
  const fetchSpeakers = async () => {
    try {
      // Check session storage first
      const cachedSpeakers =
        sessionStorage.getItem(
          "speakersData"
        )

      if (cachedSpeakers) {
        const parsedData: Speaker[] =
          JSON.parse(cachedSpeakers)

        const sortedData =
          parsedData.sort(
            (a, b) =>
              a.order - b.order
          )

        setSpeakers(sortedData)
        setLoading(false)
        return
      }

      // Fetch from API if not cached
      const response = await fetch(
        "https://cmdays-admin-ten.vercel.app/api/speakers",
        {
          method: "GET",
          cache: "no-store",
        }
      )

      if (!response.ok) {
        throw new Error(
          `Failed to fetch speakers: ${response.status}`
        )
      }

      const data: Speaker[] =
        await response.json()

      // Store entire response
      sessionStorage.setItem(
        "speakersData",
        JSON.stringify(data)
      )

      const sortedData =
        data.sort(
          (a, b) =>
            a.order - b.order
        )

      setSpeakers(sortedData)
    } catch (error) {
      console.error(
        "Failed to fetch speakers:",
        error
      )
    } finally {
      setLoading(false)
    }
  }

  fetchSpeakers()
}, [])
  // FIX IMAGE URL
  const getImageUrl = (
    url: string
  ) => {
    if (!url)
      return "/placeholder.svg"

    if (url.startsWith("http"))
      return url

    return `https://cmdays-admin-ten.vercel.app${url}`
  }

  // CREATE BATCHES
  useEffect(() => {
    if (!speakers.length) return

    const batches: Speaker[][] = []

    const batchSize = isMobile
      ? 2
      : 4

    if (
      speakers.length <= batchSize
    ) {
      batches.push([...speakers])

      const secondBatch: Speaker[] =
        []

      let index = 0

      for (
        let i = 0;
        i < batchSize;
        i++
      ) {
        secondBatch.push(
          speakers[index]
        )

        index =
          (index + 1) %
          speakers.length
      }

      batches.push(secondBatch)
    } else {
      for (
        let i = 0;
        i < speakers.length;
        i += batchSize
      ) {
        const batch =
          speakers.slice(
            i,
            i + batchSize
          )

        if (
          batch.length <
            batchSize &&
          i > 0
        ) {
          let fillIndex = 0

          while (
            batch.length <
            batchSize
          ) {
            batch.push(
              speakers[fillIndex]
            )

            fillIndex =
              (fillIndex + 1) %
              speakers.length
          }
        }

        batches.push(batch)
      }

      if (batches.length < 2) {
        const extraBatch: Speaker[] =
          []

        let index = 0

        for (
          let i = 0;
          i < batchSize;
          i++
        ) {
          extraBatch.push(
            speakers[index]
          )

          index =
            (index + 1) %
            speakers.length
        }

        batches.push(extraBatch)
      }
    }

    setSpeakerBatches(batches)
  }, [speakers, isMobile])

  // AUTO ROTATION
  useEffect(() => {
    if (
      speakerBatches.length <= 1
    )
      return

    const rotateBatch = () => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentBatch(
          (prev) =>
            (prev + 1) %
            speakerBatches.length
        )

        setNextBatch(
          (prev) =>
            (prev + 1) %
            speakerBatches.length
        )

        setIsAnimating(false)
      }, 500)
    }

    batchRef.current = setInterval(
      rotateBatch,
      5500
    )

    return () => {
      if (batchRef.current)
        clearInterval(
          batchRef.current
        )
    }
  }, [speakerBatches])

  const handleMouseEnter = () => {
    if (batchRef.current)
      clearInterval(
        batchRef.current
      )
  }

  const handleMouseLeave = () => {
    if (
      speakerBatches.length <= 1
    )
      return

    if (batchRef.current)
      clearInterval(
        batchRef.current
      )

    batchRef.current = setInterval(
      () => {
        setIsAnimating(true)

        setTimeout(() => {
          setCurrentBatch(
            (prev) =>
              (prev + 1) %
              speakerBatches.length
          )

          setNextBatch(
            (prev) =>
              (prev + 1) %
              speakerBatches.length
          )

          setIsAnimating(false)
        }, 500)
      },
      5500
    )
  }

  const currentSpeakers =
    speakerBatches[currentBatch] ||
    []

  const nextSpeakers =
    speakerBatches[nextBatch] || []

  const totalSpeakers =
    speakers.length

  const originalSpeakersInBatch =
    Math.min(
      isMobile ? 2 : 4,
      totalSpeakers -
        currentBatch *
          (isMobile ? 2 : 4)
    )

  return (
    <div
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-xl overflow-hidden"
      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* HEADER */}
      <div className="relative bg-gradient-to-r from-purple-700 via-purple-800 to-purple-700 py-4 px-6 flex justify-center items-center border-b border-blue-700/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Our Speakers
          </h2>

          {speakerBatches.length >
            1 && (
            <div className="absolute right-6 flex gap-1">
              {speakerBatches.map(
                (_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx ===
                      currentBatch
                        ? "bg-white w-4"
                        : "bg-white/40"
                    }`}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="py-10 text-center text-lg font-semibold text-gray-700">
          Loading Speakers...
        </div>
      )}

      {/* CAROUSEL */}
      {!loading && (
        <div className="relative py-4 px-4 overflow-hidden">
          <div className="relative min-h-[300px] md:min-h-[290px] overflow-hidden">
            {/* CURRENT */}
            <div
              key={`current-${currentBatch}`}
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                isAnimating
                  ? "-translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div
                className={`grid ${
                  isMobile
                    ? "grid-cols-2"
                    : "grid-cols-4"
                } gap-4`}
              >
                {currentSpeakers.map(
                  (
                    speaker,
                    index
                  ) => (
                    <SpeakerCard
                      key={`${speaker._id}-${index}`}
                      speaker={
                        speaker
                      }
                      getImageUrl={
                        getImageUrl
                      }
                      isDuplicate={
                        index >=
                          originalSpeakersInBatch &&
                        originalSpeakersInBatch <
                          (isMobile
                            ? 2
                            : 4)
                      }
                    />
                  )
                )}
              </div>
            </div>

            {/* NEXT */}
            <div
              key={`next-${nextBatch}`}
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                isAnimating
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0 pointer-events-none"
              }`}
            >
              <div
                className={`grid ${
                  isMobile
                    ? "grid-cols-2"
                    : "grid-cols-4"
                } gap-4`}
              >
                {nextSpeakers.map(
                  (
                    speaker,
                    index
                  ) => (
                    <SpeakerCard
                      key={`${speaker._id}-next-${index}`}
                      speaker={
                        speaker
                      }
                      getImageUrl={
                        getImageUrl
                      }
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"></div>
    </div>
  )
}

function SpeakerCard({
  speaker,
  getImageUrl,
  isDuplicate = false,
}: {
  speaker: Speaker
  getImageUrl: (
    url: string
  ) => string
  isDuplicate?: boolean
}) {
  return (
    <div
      className={`p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden h-full flex flex-col ${
        isDuplicate
          ? "opacity-90"
          : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* IMAGE */}
        <div className="mb-3 flex justify-center flex-shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 shadow-lg relative">
            <Image
              src={getImageUrl(
                speaker.imageUrl
              )}
              alt={speaker.name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
        </div>

        {/* NAME */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-bold text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              {speaker.name}
            </h3>

            <div className="flex items-center justify-center gap-1">
              <svg
                className="w-4 h-4 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>

              <p className="text-sm text-gray-700 font-medium text-center line-clamp-2">
                {speaker.role}
              </p>
            </div>
          </div>
        </div>

        {/* TALK */}
        <div className="mt-auto pt-3 border-t border-gray-200">
          <div className="flex items-start gap-1">
            <svg
              className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <div className="flex-1">
              <p className="text-xs text-gray-500 font-semibold">
                Talk Title:
              </p>

              <p className="text-sm text-gray-700 font-medium line-clamp-2">
                {speaker.talkTitle ||
                  "To be updated soon"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}