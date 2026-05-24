"use client";

import { useEffect, useRef } from "react";
import { CommitteesBackground } from "./Background";

export default function CombinedBackground() {
  const atomRef = useRef(null);
  const atomRightRef = useRef(null);
  const sineRef = useRef(null);

  useEffect(() => {
    // Rotate atoms
    let angle = 0;
    let angleRight = 45; // Offset starting angle
    
    const animateAtoms = () => {
      angle = (angle + 0.3) % 360;
      angleRight = (angleRight + 0.3) % 360;
      
      if (atomRef.current) {
        const electrons = atomRef.current.querySelectorAll('.electron');
        const orbitRotations = [0, 60, 120];

        electrons.forEach((electron, index) => {
          const orbitAngle = angle + (index * 120);
          const theta = (orbitAngle * Math.PI) / 180;

          const rx = 175;
          const ry = 68;

          const cx = 210;
          const cy = 210;

          // Base ellipse position
          const ex = rx * Math.cos(theta);
          const ey = ry * Math.sin(theta);

          // Rotate orbital plane
          const rotation = (orbitRotations[index] * Math.PI) / 180;

          const rotatedX =
            ex * Math.cos(rotation) - ey * Math.sin(rotation);

          const rotatedY =
            ex * Math.sin(rotation) + ey * Math.cos(rotation);

          const x = cx + rotatedX;
          const y = cy + rotatedY;

          electron.setAttribute(
            "transform",
            `translate(${x}, ${y})`
          );
        });
      }

      if (atomRightRef.current) {
        const electrons =
          atomRightRef.current.querySelectorAll(".electron-right");

        const orbitRotations = [0, 60, 120];

        electrons.forEach((electron, index) => {
          const orbitAngle = angleRight + index * 120;
          const theta = (orbitAngle * Math.PI) / 180;

          const rx = 140;
          const ry = 55;

          const cx = 150;
          const cy = 150;

          // Base ellipse coordinates
          const ex = rx * Math.cos(theta);
          const ey = ry * Math.sin(theta);

          // Rotate orbital plane
          const rotation =
            (orbitRotations[index] * Math.PI) / 180;

          const rotatedX =
            ex * Math.cos(rotation) -
            ey * Math.sin(rotation);

          const rotatedY =
            ex * Math.sin(rotation) +
            ey * Math.cos(rotation);

          const x = cx + rotatedX;
          const y = cy + rotatedY;

          electron.setAttribute(
            "transform",
            `translate(${x}, ${y})`
          );
        });
      }

      requestAnimationFrame(animateAtoms);
    };

    // Move sine wave
    let sineOffset = 0;
    
    const animateSine = () => {
      sineOffset = (sineOffset + 0.5) % 1440;
      
      if (sineRef.current) {
        const paths = sineRef.current.querySelectorAll('.sine-path');
        paths.forEach((path, index) => {
          const amplitude = index === 0 ? 60 : 70;
          const frequency = index === 0 ? 6 : 5;
          let d = `M0,${80 + index * 20} `;
          
          for (let x = 0; x <= 1440; x += 20) {
            const y = 80 + index * 20 + Math.sin((x + sineOffset) * frequency / 1440 * Math.PI * 2) * amplitude;
            d += `L${x},${y} `;
          }
          
          path.setAttribute('d', d);
        });
      }

      requestAnimationFrame(animateSine);
    };

    animateAtoms();
    animateSine();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full min-h-full overflow-hidden pt-8 md:pt-12 lg:pt-0 pointer-events-none">

      {/* ======================================== */}
      {/* CHECKERED/CHECKBOX PATTERN BACKGROUND     */}
      {/* ======================================== */}
    <CommitteesBackground/>



      {/* ======================================== */}
      {/* Right side sine wave (like reference image top-right) - responsive */}
      {/* ======================================== */}
      

      {/* ======================================== */}
      {/* TOP-LEFT ATOM with glassy orbital rings   */}
      {/* ======================================== */}
      <div ref={atomRef} className="absolute left-[-40px] md:left-[-50px] lg:left-[-60px] top-[-20px] md:top-[-25px] lg:top-[-30px] scale-75 md:scale-90 lg:scale-100 xl:scale-110 origin-top-left">
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Glossy nucleus gradient */}
            <radialGradient id="nucGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#ff8fa3" />
              <stop offset="40%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#9f1239" />
            </radialGradient>
            {/* Nucleus specular highlight */}
            <radialGradient id="nucHighlight" cx="30%" cy="25%" r="40%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            {/* Glow filter */}
            <filter id="atomGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            {/* Electron gradients */}
            <radialGradient id="eBlue" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
            <radialGradient id="eViolet" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#6d28d9" />
            </radialGradient>
            <radialGradient id="ePink" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#be123c" />
            </radialGradient>
            <linearGradient id="orbG1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="orbG2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="orbG3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#be123c" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#fb7185" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#be123c" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Nucleus outer glow */}
          <circle cx="210" cy="210" r="58" fill="#f43f5e" opacity="0.25" filter="url(#softGlow)" />

          {/* Orbital ring 1 — wide ellipse */}
          <ellipse cx="210" cy="210" rx="175" ry="68"
            stroke="url(#orbG1)" strokeWidth="2.5" opacity="0.75" fill="none" />
          {/* Orbital ring 2 — rotated 60° */}
          <ellipse cx="210" cy="210" rx="175" ry="68"
            transform="rotate(60 210 210)"
            stroke="url(#orbG2)" strokeWidth="2.5" opacity="0.75" fill="none" />
          {/* Orbital ring 3 — rotated 120° */}
          <ellipse cx="210" cy="210" rx="175" ry="68"
            transform="rotate(120 210 210)"
            stroke="url(#orbG3)" strokeWidth="2.5" opacity="0.75" fill="none" />

          {/* Nucleus */}
          <circle cx="210" cy="210" r="46" fill="url(#nucGrad)" filter="url(#atomGlow)" />
          {/* Faceted look — dark polygon lines on nucleus */}
          <path d="M190,175 L225,168 L248,190 L245,220 L225,238 L190,238 L172,220 L172,190 Z"
            stroke="rgba(0,0,0,0.18)" strokeWidth="1" fill="none" />
          <path d="M210,165 L235,185 L235,235 L210,252 L185,235 L185,185 Z"
            stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="none" />
          {/* Nucleus highlight */}
          <circle cx="210" cy="210" r="46" fill="url(#nucHighlight)" />

          {/* Electrons */}
          <g className="electron">
            <circle r="14" fill="url(#eBlue)" />
            <circle cx="-4" cy="-4" r="6" fill="white" opacity="0.5" />
          </g>
          <g className="electron">
            <circle r="14" fill="url(#eViolet)" />
            <circle cx="-4" cy="-4" r="6" fill="white" opacity="0.5" />
          </g>
          <g className="electron">
            <circle r="14" fill="url(#ePink)" />
            <circle cx="-4" cy="-4" r="6" fill="white" opacity="0.5" />
          </g>
        </svg>
      </div>

      {/* ======================================== */}
      {/* BOTTOM-RIGHT ROTATING ATOM                */}
      {/* ======================================== */}
      <div ref={atomRightRef} className="absolute mt-5 right-[-30px] md:right-[-40px] lg:right-[-40px] bottom-[2%] md:bottom-[5%] lg:bottom-[5%] scale-75 md:scale-90 lg:scale-100 xl:scale-110 origin-bottom-right">
        <svg width="320" height="320" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nucGradR" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="40%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>
            <radialGradient id="nucHighlightR" cx="30%" cy="25%" r="40%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <filter id="atomGlowR" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softGlowR" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <radialGradient id="eBlueR" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
            <radialGradient id="eVioletR" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#6d28d9" />
            </radialGradient>
            <radialGradient id="ePinkR" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#be123c" />
            </radialGradient>
            <linearGradient id="orbGR1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="orbGR2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="orbGR3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Nucleus outer glow */}
          <circle cx="150" cy="150" r="44" fill="#7c3aed" opacity="0.25" filter="url(#softGlowR)" />

          {/* Orbital rings */}
          <ellipse cx="150" cy="150" rx="140" ry="55" stroke="url(#orbGR1)" strokeWidth="2" opacity="0.75" fill="none" />
          <ellipse cx="150" cy="150" rx="140" ry="55" transform="rotate(60 150 150)" stroke="url(#orbGR2)" strokeWidth="2" opacity="0.75" fill="none" />
          <ellipse cx="150" cy="150" rx="140" ry="55" transform="rotate(120 150 150)" stroke="url(#orbGR3)" strokeWidth="2" opacity="0.75" fill="none" />

          {/* Nucleus */}
          <circle cx="150" cy="150" r="35" fill="url(#nucGradR)" filter="url(#atomGlowR)" />
          <path d="M135,125 L158,120 L170,135 L168,160 L158,172 L135,172 L125,160 L125,135 Z"
            stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" fill="none" />
          <circle cx="150" cy="150" r="35" fill="url(#nucHighlightR)" />

          {/* Electrons */}
          <g className="electron-right">
            <circle r="11" fill="url(#eBlueR)" />
            <circle cx="-3" cy="-3" r="5" fill="white" opacity="0.5" />
          </g>
          <g className="electron-right">
            <circle r="11" fill="url(#eVioletR)" />
            <circle cx="-3" cy="-3" r="5" fill="white" opacity="0.5" />
          </g>
          <g className="electron-right">
            <circle r="11" fill="url(#ePinkR)" />
            <circle cx="-3" cy="-3" r="5" fill="white" opacity="0.5" />
          </g>
        </svg>
      </div>

      {/* ======================================== */}
      {/* TOP-LEFT MOLECULE NET (faint, behind atom) - responsive */}
      {/* ======================================== */}
      <div className="absolute left-[8%] md:left-[14%] lg:left-[18%] top-[2%] md:top-[4%] lg:top-[4%] opacity-25 scale-75 md:scale-90 lg:scale-100 origin-top-left hidden md:block">
        <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* bonds */}
          {[
            [40,30,90,60],[90,60,140,30],[140,30,170,70],[90,60,100,110],
            [100,110,60,140],[100,110,150,130],[60,140,90,170],[150,130,170,150]
          ].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8b5cf6" strokeWidth="1.5" />
          ))}
          {/* atoms */}
          {[
            [40,30],[90,60],[140,30],[170,70],[100,110],[60,140],[150,130],[90,170],[170,150]
          ].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="7" fill="#a78bfa" opacity="0.8" />
          ))}
        </svg>
      </div>

      {/* ======================================== */}
      {/* TOP-RIGHT MOLECULAR STRUCTURE (benzene-ish) - responsive */}
      {/* ======================================== */}
      <div className="absolute right-[-30px] md:right-[-20px] lg:right-[-20px] top-[10px] md:top-[15px] lg:top-[20px] scale-75 md:scale-90 lg:scale-100 xl:scale-110 origin-top-right hidden md:block">
        <svg width="340" height="320" viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="atomPink" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#e11d48" />
            </radialGradient>
            <radialGradient id="atomViolet" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#6d28d9" />
            </radialGradient>
            <radialGradient id="atomBlue" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
            <filter id="sphereGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* bonds — hexagon-like structure */}
          <line x1="100" y1="60"  x2="180" y2="40"  stroke="#c084fc" strokeWidth="3" strokeLinecap="round"/>
          <line x1="180" y1="40"  x2="240" y2="100" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"/>
          <line x1="100" y1="60"  x2="80"  y2="140" stroke="#fb7185" strokeWidth="3" strokeLinecap="round"/>
          <line x1="80"  y1="140" x2="160" y2="200" stroke="#c084fc" strokeWidth="3" strokeLinecap="round"/>
          <line x1="240" y1="100" x2="260" y2="180" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"/>
          <line x1="260" y1="180" x2="160" y2="200" stroke="#fb7185" strokeWidth="3" strokeLinecap="round"/>

          {/* extra arms */}
          <line x1="180" y1="40"  x2="190" y2="10"  stroke="#c084fc" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <line x1="240" y1="100" x2="290" y2="80"  stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>

          {/* atom spheres */}
          <circle cx="100" cy="60"  r="20" fill="url(#atomPink)"   filter="url(#sphereGlow)"/>
          <circle cx="100" cy="60"  r="8"  fill="white" opacity="0.35"/>

          <circle cx="180" cy="40"  r="20" fill="url(#atomViolet)" filter="url(#sphereGlow)"/>
          <circle cx="180" cy="40"  r="8"  fill="white" opacity="0.35"/>

          <circle cx="240" cy="100" r="20" fill="url(#atomPink)"   filter="url(#sphereGlow)"/>
          <circle cx="240" cy="100" r="8"  fill="white" opacity="0.35"/>

          <circle cx="80"  cy="140" r="18" fill="url(#atomBlue)"   filter="url(#sphereGlow)"/>
          <circle cx="80"  cy="140" r="7"  fill="white" opacity="0.35"/>

          <circle cx="160" cy="200" r="18" fill="url(#atomViolet)" filter="url(#sphereGlow)"/>
          <circle cx="160" cy="200" r="7"  fill="white" opacity="0.35"/>

          <circle cx="260" cy="180" r="20" fill="url(#atomPink)"   filter="url(#sphereGlow)"/>
          <circle cx="260" cy="180" r="8"  fill="white" opacity="0.35"/>

          {/* small decorative atoms */}
          <circle cx="190" cy="10"  r="10" fill="url(#atomViolet)" opacity="0.7"/>
          <circle cx="290" cy="80"  r="10" fill="url(#atomPink)"   opacity="0.7"/>
        </svg>
      </div>

      {/* ======================================== */}
      {/* BOTTOM-LEFT CRYSTAL LATTICE CUBE - responsive */}
      {/* ======================================== */}
      <div className="absolute left-[0%] md:left-[2%] lg:left-[2%] bottom-[2%] md:bottom-[4%] lg:bottom-[8%] scale-75 md:scale-90 lg:scale-100 origin-bottom-left hidden md:block">
        <svg width="300" height="290" viewBox="0 0 300 290" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="cubeAtomR" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#be123c" />
            </radialGradient>
            <radialGradient id="cubeAtomB" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1e40af" />
            </radialGradient>
            {/* Glassy cube face */}
            <linearGradient id="faceGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.12" />
            </linearGradient>
            <filter id="cubeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Pedestal rings */}
          <ellipse cx="150" cy="272" rx="105" ry="14" fill="#ddd6fe" opacity="0.5"/>
          <ellipse cx="150" cy="266" rx="90"  ry="11" fill="#c4b5fd" opacity="0.35"/>

          {/* Cube faces (glassy) */}
          {/* Front face */}
          <polygon points="60,120 200,120 200,240 60,240" fill="url(#faceGlass)" stroke="#a78bfa" strokeWidth="1" opacity="0.7"/>
          {/* Top face */}
          <polygon points="60,120 200,120 240,80 100,80" fill="url(#faceGlass)" stroke="#a78bfa" strokeWidth="1" opacity="0.6"/>
          {/* Right face */}
          <polygon points="200,120 240,80 240,200 200,240" fill="url(#faceGlass)" stroke="#a78bfa" strokeWidth="1" opacity="0.5"/>

          {/* Inner grid lines */}
          {/* Front face grid */}
          <line x1="60"  y1="160" x2="200" y2="160" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4"/>
          <line x1="60"  y1="200" x2="200" y2="200" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4"/>
          <line x1="130" y1="120" x2="130" y2="240" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4"/>

          {/* Lattice atoms — front face (4x3 grid) */}
          {[
            [60,120],[130,120],[200,120],
            [60,160],[130,160],[200,160],
            [60,200],[130,200],[200,200],
            [60,240],[130,240],[200,240],
          ].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="9"
              fill={i%2===0 ? "url(#cubeAtomR)" : "url(#cubeAtomB)"}
              filter="url(#cubeGlow)" />
          ))}
          {/* Top face atoms */}
          {[
            [100,80],[170,80],[240,80],
            [100,80],[170,80],[240,80],
          ].map(([cx,cy],i) => (
            <circle key={i} cx={cx+(i>2?0:0)} cy={cy+(i>2?0:0)} r="8"
              fill={i%2===0?"url(#cubeAtomB)":"url(#cubeAtomR)"}
              filter="url(#cubeGlow)" opacity="0.85"/>
          ))}
          {/* Right face atoms */}
          {[
            [240,80],[240,140],[240,200],
            [200,120],[200,200],
          ].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="8"
              fill={i%2===0?"url(#cubeAtomR)":"url(#cubeAtomB)"}
              filter="url(#cubeGlow)" opacity="0.8"/>
          ))}
        </svg>
      </div>

    

    

      {/* ======================================== */}
      {/* ANIMATIONS                                */}
      {/* ======================================== */}
      <style jsx>{`
        @keyframes floatP {
          0%   { transform: translateY(0px);   opacity: 0.45; }
          50%  { transform: translateY(-18px); opacity: 0.85; }
          100% { transform: translateY(0px);   opacity: 0.45; }
        }
      `}</style>
    </div>
  );
}