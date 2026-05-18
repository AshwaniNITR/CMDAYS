"use client";

export default function PremiumScienceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#fcfbff]">

      {/* ================================================= */}
      {/* MAIN CINEMATIC LIGHTING */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.18),transparent_28%)]" />



      {/* ================================================= */}
      {/* SOFT CENTER LIGHT */}
      {/* ================================================= */}

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-90 blur-3xl" />



      {/* ================================================= */}
      {/* GRID TEXTURE */}
      {/* ================================================= */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124,58,237,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124,58,237,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />



      {/* ================================================= */}
      {/* FLOATING PARTICLES */}
      {/* ================================================= */}

      <div className="absolute inset-0">

        {[...Array(55)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-violet-300/40"
            style={{
              width: `${Math.random() * 7 + 2}px`,
              height: `${Math.random() * 7 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>



      {/* ================================================= */}
      {/* TOP LEFT GLOW */}
      {/* ================================================= */}

      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-purple-300/30 blur-3xl" />



      {/* ================================================= */}
      {/* LEFT BIG PREMIUM ATOM */}
      {/* ================================================= */}

      <div className="absolute left-[-140px] top-[20px] hidden xl:block">

        <svg
          width="620"
          height="620"
          viewBox="0 0 620 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-[spin_55s_linear_infinite]"
        >

          <defs>

            <radialGradient id="nucleusGradient">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#be185d" />
            </radialGradient>

            <linearGradient id="orbit1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>

            <linearGradient id="orbit2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="8" />
            </filter>

          </defs>

          {/* glow aura */}
          <circle
            cx="310"
            cy="310"
            r="90"
            fill="#ec4899"
            opacity="0.25"
            filter="url(#softGlow)"
          />

          {/* nucleus */}
          <circle
            cx="310"
            cy="310"
            r="42"
            fill="url(#nucleusGradient)"
          />

          {/* internal nucleus texture */}
          <circle
            cx="310"
            cy="310"
            r="26"
            fill="rgba(255,255,255,0.15)"
          />

          {/* orbits */}
          <ellipse
            cx="310"
            cy="310"
            rx="210"
            ry="82"
            stroke="url(#orbit1)"
            strokeWidth="5"
            opacity="0.7"
          />

          <ellipse
            cx="310"
            cy="310"
            rx="210"
            ry="82"
            transform="rotate(60 310 310)"
            stroke="url(#orbit2)"
            strokeWidth="5"
            opacity="0.7"
          />

          <ellipse
            cx="310"
            cy="310"
            rx="210"
            ry="82"
            transform="rotate(120 310 310)"
            stroke="url(#orbit1)"
            strokeWidth="5"
            opacity="0.7"
          />

          {/* electrons */}
          <circle cx="520" cy="310" r="15" fill="#8b5cf6" />
          <circle cx="205" cy="125" r="15" fill="#60a5fa" />
          <circle cx="205" cy="495" r="15" fill="#fb7185" />

        </svg>
      </div>



      {/* ================================================= */}
      {/* TOP LEFT SCIENTIFIC WAVES */}
      {/* ================================================= */}

      <div className="absolute left-0 top-0 opacity-35">

        <svg
          width="520"
          height="220"
          viewBox="0 0 520 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`
                M0 ${40 + i * 22}
                C60 ${5 + i * 22}
                120 ${5 + i * 22}
                180 ${40 + i * 22}
                C240 ${75 + i * 22}
                300 ${75 + i * 22}
                360 ${40 + i * 22}
                C420 ${5 + i * 22}
                480 ${5 + i * 22}
                520 ${40 + i * 22}
              `}
              stroke={i % 2 === 0 ? "#a855f7" : "#60a5fa"}
              strokeWidth="2"
              opacity="0.55"
            />
          ))}

        </svg>
      </div>



      {/* ================================================= */}
      {/* TOP CENTER FADED LATTICE */}
      {/* ================================================= */}

      <div className="absolute left-[18%] top-[80px] hidden xl:block opacity-20">

        <svg
          width="240"
          height="240"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {[...Array(5)].map((_, row) =>
            [...Array(5)].map((_, col) => {
              const x = 40 + col * 35 + (row % 2) * 18;
              const y = 40 + row * 32;

              return (
                <g key={`${row}-${col}`}>
                  <circle cx={x} cy={y} r="6" fill="#a78bfa" />

                  {col < 4 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 35}
                      y2={y}
                      stroke="#c4b5fd"
                      strokeWidth="2"
                    />
                  )}

                  {row < 4 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 18}
                      y2={y + 32}
                      stroke="#c4b5fd"
                      strokeWidth="2"
                    />
                  )}
                </g>
              );
            })
          )}

        </svg>
      </div>



      {/* ================================================= */}
      {/* TOP RIGHT MOLECULAR STRUCTURE */}
      {/* ================================================= */}

      <div className="absolute right-[-80px] top-[20px] hidden xl:block opacity-90">

        <svg
          width="500"
          height="360"
          viewBox="0 0 500 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <defs>
            <linearGradient id="bondGradient">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#fb7185" />
            </linearGradient>
          </defs>

          {/* bonds */}
          <line x1="120" y1="80" x2="220" y2="150" stroke="url(#bondGradient)" strokeWidth="5" />
          <line x1="220" y1="150" x2="320" y2="90" stroke="url(#bondGradient)" strokeWidth="5" />
          <line x1="220" y1="150" x2="300" y2="250" stroke="url(#bondGradient)" strokeWidth="5" />
          <line x1="300" y1="250" x2="420" y2="200" stroke="url(#bondGradient)" strokeWidth="5" />

          {/* nodes */}
          <circle cx="120" cy="80" r="18" fill="#a855f7" />
          <circle cx="220" cy="150" r="20" fill="#60a5fa" />
          <circle cx="320" cy="90" r="18" fill="#fb7185" />
          <circle cx="300" cy="250" r="18" fill="#818cf8" />
          <circle cx="420" cy="200" r="18" fill="#f472b6" />

        </svg>
      </div>



      {/* ================================================= */}
      {/* DOT MATRIX */}
      {/* ================================================= */}

      <div className="absolute right-[22%] top-[80px] hidden xl:grid grid-cols-5 gap-5 opacity-20">

        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-violet-400"
          />
        ))}
      </div>



      {/* ================================================= */}
      {/* BOTTOM LEFT CRYSTAL */}
      {/* ================================================= */}

      <div className="absolute bottom-[30px] left-[20px] hidden xl:block opacity-95">

        <svg
          width="420"
          height="320"
          viewBox="0 0 420 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {[...Array(5)].map((_, row) =>
            [...Array(5)].map((_, col) => {
              const x = 80 + col * 45;
              const y = 60 + row * 38;

              return (
                <g key={`${row}-${col}`}>
                  <circle cx={x} cy={y} r="10" fill={row % 2 ? "#60a5fa" : "#fb7185"} />

                  {col < 4 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 45}
                      y2={y}
                      stroke="#c4b5fd"
                      strokeWidth="3"
                    />
                  )}

                  {row < 4 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x}
                      y2={y + 38}
                      stroke="#c4b5fd"
                      strokeWidth="3"
                    />
                  )}
                </g>
              );
            })
          )}

        </svg>
      </div>



      {/* ================================================= */}
      {/* BOTTOM RIGHT GRAPHENE STRUCTURE */}
      {/* ================================================= */}

      <div className="absolute bottom-[10px] right-[20px] hidden xl:block opacity-95">

        <svg
          width="520"
          height="340"
          viewBox="0 0 520 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {[...Array(6)].map((_, row) =>
            [...Array(8)].map((_, col) => {

              const x = 80 + col * 45 + (row % 2) * 22;
              const y = 50 + row * 36;

              return (
                <g key={`${row}-${col}`}>

                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill={row % 2 ? "#60a5fa" : "#fb7185"}
                  />

                  {col < 7 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 45}
                      y2={y}
                      stroke="#a78bfa"
                      strokeWidth="2.5"
                    />
                  )}

                  {row < 5 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 22}
                      y2={y + 36}
                      stroke="#a78bfa"
                      strokeWidth="2.5"
                    />
                  )}

                </g>
              );
            })
          )}

        </svg>
      </div>



      {/* ================================================= */}
      {/* FLOWING QUANTUM WAVES */}
      {/* ================================================= */}

      <div className="absolute bottom-0 left-0 w-full opacity-75">

        <svg
          viewBox="0 0 1440 340"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >

          <defs>

            <linearGradient id="waveGradient">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="50%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#f9a8d4" />
            </linearGradient>

          </defs>

          <path
            fill="url(#waveGradient)"
            fillOpacity="0.6"
            d="M0,260C120,230,240,220,360,240C480,260,600,320,720,310C840,300,960,220,1080,200C1200,180,1320,190,1440,200L1440,340L0,340Z"
          />

          <path
            d="M0,240C120,210,240,200,360,220C480,240,600,300,720,290C840,280,960,210,1080,190C1200,170,1320,180,1440,190"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="2"
            fill="none"
          />

        </svg>
      </div>



      {/* ================================================= */}
      {/* SOFT OVERLAY */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-white/10" />



      {/* ================================================= */}
      {/* FLOAT ANIMATION */}
      {/* ================================================= */}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }

          50% {
            transform: translateY(-22px);
            opacity: 1;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}