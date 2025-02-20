"use client"

import { useState, useEffect, useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import ContactCard from "./contact-card"
import GreetingCard from "./greeting-card"

const gradientAnimationStyle = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    background: linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
    background-size: 300% 300%;
    animation: gradientAnimation 8s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof document !== "undefined") {
      const style = document.createElement("style")
      style.textContent = gradientAnimationStyle
      document.head.appendChild(style)
    }
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative z-10 min-h-screen w-screen flex flex-col justify-center items-center px-4 py-8 overflow-hidden bg-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        
        className="absolute inset-0 -z-10"
      />
      <div className="text-center mb-12 md:mb-24 animate-fade-in-up">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold animate-gradient leading-tight">
          <span className="block">ネクストダイレクト</span>
          <span className="block">マーケティング</span>
        </h1>
        <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white">Coming Soon</h2>
        <p className="text-lg md:text-2xl text-white">ネクストダイレクトマーケティングのサイトはただ今作成中です。</p>
      </div>
      <div className="w-full max-w-4xl mx-auto space-y-8 mt-8 md:mt-12">
        <GreetingCard />
        <ContactCard />
      </div>
    </div>
  )
}

