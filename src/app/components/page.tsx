'use client';

import React, { useRef, useState } from 'react';
import { GlobalNav } from '@/components/GlobalNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';

// MagicUI
import {
  Marquee,
  Terminal,
  BentoGrid,
  BentoCard,
  OrbitingCircles,
  Dock,
  DockIcon,
  AnimatedBeam,
  BorderBeam,
  MagicCard,
  Meteors,
  useConfetti,
  NumberTicker,
  TypingAnimation,
  AnimatedGradientText,
  SparklesText,
  HyperText,
  WordRotate,
  ShimmerButton,
  RainbowButton,
  InteractiveHoverButton,
  RippleButton,
  DotPattern,
  RetroGrid,
  FlickeringGrid,
} from '@/components/magicui';

// ReactBits
import {
  DecryptedText,
  SplitText,
  BlurText,
  GlitchText,
  ShinyText,
  TrueFocus,
  CountUp,
  GradientASCII,
  Particles,
  ShapeWaves,
  ClickSpark,
  Magnet,
  SpotlightCard,
  StarBorder,
  Hyperspeed,
} from '@/components/reactbits';

import {
  Code,
  Terminal as TerminalIcon,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Database,
  Rocket,
  Mail,
  Flame,
  CheckCircle,
} from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ComponentsShowcasePage() {
  const { fire: fireConfetti } = useConfetti();
  const [activeTab, setActiveTab] = useState<'all' | 'magicui' | 'reactbits'>('all');

  // Refs for AnimatedBeam demo
  const beamContainerRef = useRef<HTMLDivElement>(null);
  const beamFromRef = useRef<HTMLDivElement>(null);
  const beamToRef = useRef<HTMLDivElement>(null);

  return (
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
        <GlobalNav lang="en" />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-6 text-center border-b border-black/5 dark:border-white/10">
          <DotPattern className="opacity-40" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <AnimatedGradientText className="mb-6">
              ✨ ReactBits & MagicUI Component Suite
            </AnimatedGradientText>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Interactive <SparklesText text="UI Components" /> & Animations
            </h1>

            <p className="text-lg md:text-xl text-text-secondary dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              A comprehensive collection of production-ready text animations, interactive 3D cards,
              canvases, dynamic buttons, and atmospheric visual effects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton
                onClick={() => fireConfetti()}
                background="#0071e3"
                className="font-medium"
              >
                <Sparkles className="w-4 h-4 mr-1" />
                Trigger Celebration Confetti
              </ShimmerButton>

              <div className="inline-flex rounded-full p-1 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10">
                {(['all', 'magicui', 'reactbits'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-white dark:bg-zinc-800 text-accent-fill shadow-sm'
                        : 'text-text-secondary dark:text-gray-400 hover:text-text-primary'
                    }`}
                  >
                    {tab === 'all' ? 'All (38+)' : tab === 'magicui' ? 'Magic UI' : 'ReactBits'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: TEXT ANIMATIONS */}
        {(activeTab === 'all' || activeTab === 'reactbits' || activeTab === 'magicui') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Typography & Reveal
              </span>
              <h2 className="text-3xl font-bold mt-1">Text Animations</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Hover or view each text element to inspect fluid reactive typography.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Decrypted Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / DecryptedText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-semibold">Hover me</span>
                </div>
                <div className="text-xl font-bold">
                  <DecryptedText
                    text="CYBERNETIC TELEMETRY"
                    animateOn="hover"
                    speed={40}
                    className="text-accent-fill font-mono"
                  />
                </div>
                <p className="text-xs text-text-secondary mt-3">Scrambles randomized symbols before settling into characters.</p>
              </div>

              {/* True Focus */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / TrueFocus</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold">Optical focus</span>
                </div>
                <TrueFocus
                  sentence="Telemetry Systems FullStack Architecture"
                  manualMode={false}
                  borderColor="#0071e3"
                  className="text-base"
                />
                <p className="text-xs text-text-secondary mt-3">Dynamic viewfinder box snaps and glides between words.</p>
              </div>

              {/* Hyper Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / HyperText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 font-semibold">Hover me</span>
                </div>
                <div className="text-2xl font-mono text-purple-600 dark:text-purple-400">
                  <HyperText text="ENMANUEL NUNEZ" />
                </div>
                <p className="text-xs text-text-secondary mt-3">Rapid matrix letter scrambling settling into target string.</p>
              </div>

              {/* Blur Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / BlurText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-500 font-semibold">Progressive</span>
                </div>
                <BlurText
                  text="Crafting high performance user interfaces and distributed backends."
                  className="text-sm font-medium"
                />
                <p className="text-xs text-text-secondary mt-3">Progressively transitions characters from blur to 100% sharpness.</p>
              </div>

              {/* Glitch Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / GlitchText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-semibold">Hover me</span>
                </div>
                <div className="text-2xl">
                  <GlitchText text="SYSTEM_FAULT_OVERRIDE" className="text-text-primary dark:text-white" />
                </div>
                <p className="text-xs text-text-secondary mt-3">Chromatic RGB aberration slice twitching effect.</p>
              </div>

              {/* Typing Animation */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / TypingAnimation</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-semibold">Typewriter</span>
                </div>
                <div className="text-lg font-mono text-amber-600 dark:text-amber-400 min-h-[3rem]">
                  <TypingAnimation text="> Connecting to NASA rover telemetry..." duration={40} />
                </div>
                <p className="text-xs text-text-secondary mt-3">Live keystroke typing simulation with blinking terminal caret.</p>
              </div>

              {/* Word Rotate */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / WordRotate</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-semibold">Continuous</span>
                </div>
                <div className="text-xl font-bold flex items-center gap-2">
                  <span>Specialized in</span>
                  <WordRotate words={['React 19', 'Next.js Turbopack', 'Python FastAPI', 'IoT Telemetry']} />
                </div>
                <p className="text-xs text-text-secondary mt-3">Fluid word rotation flipping between skills seamlessly.</p>
              </div>

              {/* Sparkles Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / SparklesText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-semibold">Twinkle</span>
                </div>
                <div className="text-2xl text-accent-fill font-bold">
                  <SparklesText text="Award-Winning Systems" />
                </div>
                <p className="text-xs text-text-secondary mt-3">Surrounding floating star sparkles with dynamic scale and opacity.</p>
              </div>

              {/* Shiny Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / ShinyText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-500 font-semibold">Metallic</span>
                </div>
                <div className="text-2xl font-bold bg-neutral-900 p-3 rounded-xl text-center">
                  <ShinyText text="PRECISION ENGINEERED" speed={3} />
                </div>
                <p className="text-xs text-text-secondary mt-3">Glossy metallic sweep reflection inspired by Apple keynotes.</p>
              </div>

              {/* Number Ticker & CountUp */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / NumberTicker & CountUp</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-500 font-semibold">Numeric</span>
                </div>
                <div className="flex items-baseline gap-6">
                  <div>
                    <div className="text-4xl font-extrabold text-accent-fill">
                      <NumberTicker value={99.8} decimalPlaces={1} />%
                    </div>
                    <span className="text-xs text-text-secondary">Uptime reliability</span>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-emerald-500">
                      <CountUp to={4} duration={2} />
                    </div>
                    <span className="text-xs text-text-secondary">NASA & Finals</span>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-3">Eased number rolling ticker triggered on viewport intersection.</p>
              </div>

              {/* Gradient ASCII */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] md:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / GradientASCII</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-500 font-semibold">Retro</span>
                </div>
                <GradientASCII />
                <p className="text-xs text-text-secondary mt-2">Retro ASCII glyph rendering with continuous animated chromatic gradient.</p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: INTERACTIVE CARDS & SPECIAL EFFECTS */}
        {(activeTab === 'all' || activeTab === 'magicui' || activeTab === 'reactbits') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-black/5 dark:border-white/10">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Cards & Micro-Interactions
              </span>
              <h2 className="text-3xl font-bold mt-1">Interactive Cards & Glows</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Explore border beams, radial spotlight tracking, magnetic elements, and star borders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* MagicCard with BorderBeam */}
              <div className="relative">
                <MagicCard className="h-full flex flex-col justify-between" gradientColor="#0071e3">
                  <BorderBeam size={150} duration={8} colorFrom="#0071e3" colorTo="#38bdf8" />
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent-fill/10 text-accent-fill flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">MagicCard + BorderBeam</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Follows cursor proximity with a radial spotlight glow while an orbital light beam traces the card border.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-accent-fill font-semibold">
                    <span>Move cursor around card</span>
                  </div>
                </MagicCard>
              </div>

              {/* SpotlightCard with 3D feel */}
              <SpotlightCard className="h-full flex flex-col justify-between" spotlightColor="rgba(56, 189, 248, 0.2)">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SpotlightCard</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    ReactBits specular spotlight calculation giving an illuminated glassmorphism sensation when hovered.
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-xs font-mono text-sky-500 font-semibold">ReactBits Component</span>
                </div>
              </SpotlightCard>

              {/* StarBorder */}
              <div className="h-full">
                <StarBorder color="#0071e3" speed="3.5s" className="w-full h-full">
                  <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
                        <Flame className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">StarBorder</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Continuous star sweeps travelling around the boundary, highlighting special cards and awards.
                      </p>
                    </div>
                    <div className="mt-6 text-xs text-indigo-500 font-semibold">
                      Star trail border
                    </div>
                  </div>
                </StarBorder>
              </div>
            </div>

            {/* Orbiting Circles Demonstration */}
            <div className="mt-12 p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <span className="text-xs font-mono text-accent-fill uppercase tracking-wider">MagicUI / OrbitingCircles</span>
                <h3 className="text-2xl font-bold mt-1 mb-3">Core Technology Satellite</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Dynamic concentric orbiting circles with clockwise and counter-clockwise speeds, showcasing tech stack and services.
                </p>
                <div className="flex items-center gap-3">
                  <Magnet magnetStrength={0.4}>
                    <button className="px-4 py-2 rounded-full bg-accent-fill text-white text-xs font-semibold shadow hover:bg-accent-hover transition-colors">
                      Magnetic Button
                    </button>
                  </Magnet>
                  <span className="text-xs text-text-secondary">← Hover on button (ReactBits Magnet)</span>
                </div>
              </div>

              {/* Orbiting Circles Canvas */}
              <div className="relative flex h-[360px] w-full max-w-[360px] items-center justify-center overflow-hidden">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-fill text-white shadow-xl font-bold text-lg">
                  EM
                </div>

                {/* Inner Orbit */}
                <OrbitingCircles radius={65} duration={12} iconSize={36}>
                  <Code className="w-4 h-4 text-blue-500" />
                </OrbitingCircles>
                <OrbitingCircles radius={65} duration={12} delay={6} iconSize={36}>
                  <Database className="w-4 h-4 text-emerald-500" />
                </OrbitingCircles>

                {/* Outer Orbit (Reverse) */}
                <OrbitingCircles radius={135} duration={20} reverse iconSize={38}>
                  <Rocket className="w-4 h-4 text-rose-500" />
                </OrbitingCircles>
                <OrbitingCircles radius={135} duration={20} delay={7} reverse iconSize={38}>
                  <Globe className="w-4 h-4 text-sky-500" />
                </OrbitingCircles>
                <OrbitingCircles radius={135} duration={20} delay={14} reverse iconSize={38}>
                  <Cpu className="w-4 h-4 text-amber-500" />
                </OrbitingCircles>
              </div>
            </div>

            {/* Animated Beam Demonstration */}
            <div
              ref={beamContainerRef}
              className="mt-12 p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1c1c1e] relative overflow-hidden"
            >
              <div className="text-center mb-8">
                <span className="text-xs font-mono text-accent-fill uppercase tracking-wider">MagicUI / AnimatedBeam</span>
                <h3 className="text-2xl font-bold mt-1">Data Flow & Telemetry Pipeline</h3>
                <p className="text-sm text-text-secondary max-w-lg mx-auto mt-1">
                  SVG bezier pulse representing real-time telemetry streaming from IoT sensor nodes to cloud dashboard.
                </p>
              </div>

              <div className="flex items-center justify-around py-8 relative">
                <div
                  ref={beamFromRef}
                  className="w-16 h-16 rounded-2xl bg-bg-alt dark:bg-white/10 border border-black/10 dark:border-white/10 flex flex-col items-center justify-center text-accent-fill shadow-md z-10"
                >
                  <Cpu className="w-6 h-6" />
                  <span className="text-[10px] font-bold mt-1 text-text-primary dark:text-white">Sensor</span>
                </div>

                <div className="w-20 h-20 rounded-2xl bg-accent-fill text-white flex flex-col items-center justify-center shadow-lg z-10">
                  <Zap className="w-8 h-8" />
                  <span className="text-[10px] font-bold mt-1">Broker</span>
                </div>

                <div
                  ref={beamToRef}
                  className="w-16 h-16 rounded-2xl bg-bg-alt dark:bg-white/10 border border-black/10 dark:border-white/10 flex flex-col items-center justify-center text-emerald-500 shadow-md z-10"
                >
                  <Globe className="w-6 h-6" />
                  <span className="text-[10px] font-bold mt-1 text-text-primary dark:text-white">Cloud UI</span>
                </div>

                <AnimatedBeam
                  containerRef={beamContainerRef}
                  fromRef={beamFromRef}
                  toRef={beamToRef}
                  curvature={-40}
                  duration={2.5}
                  gradientStartColor="#0071e3"
                  gradientStopColor="#38bdf8"
                />
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: BUTTONS SUITE */}
        {(activeTab === 'all' || activeTab === 'magicui') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-black/5 dark:border-white/10">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Actions & Calls-to-Action
              </span>
              <h2 className="text-3xl font-bold mt-1">Interactive Button Suite</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Polished button states with conic shimmers, animated rainbow borders, expanding arrows, and fluid ripples.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Shimmer Button */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-text-tertiary mb-4">ShimmerButton</span>
                <ShimmerButton background="#0071e3">
                  Explore Systems
                </ShimmerButton>
                <span className="text-xs text-text-secondary mt-4">Conic rotating light sweep</span>
              </div>

              {/* Rainbow Button */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-text-tertiary mb-4">RainbowButton</span>
                <RainbowButton>
                  Rainbow Glow
                </RainbowButton>
                <span className="text-xs text-text-secondary mt-4">Multi-gradient animated stroke</span>
              </div>

              {/* Interactive Hover Button */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-text-tertiary mb-4">InteractiveHoverButton</span>
                <InteractiveHoverButton text="Get In Touch" />
                <span className="text-xs text-text-secondary mt-4">Pill circle expands into arrow slide</span>
              </div>

              {/* Ripple Button */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-text-tertiary mb-4">RippleButton</span>
                <RippleButton>
                  Click For Ripple
                </RippleButton>
                <span className="text-xs text-text-secondary mt-4">Dynamic click water-ripple wave</span>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: TERMINAL, MARQUEE & DOCK */}
        {(activeTab === 'all' || activeTab === 'magicui') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-black/5 dark:border-white/10">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Components & Layouts
              </span>
              <h2 className="text-3xl font-bold mt-1">Terminal, Marquee & Dock</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Developer tools, continuous ticker reels, and interactive macOS magnification dock.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
              {/* Terminal */}
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <TerminalIcon className="w-5 h-5 text-accent-fill" />
                  MagicUI Developer Terminal
                </h3>
                <Terminal
                  title="mission-atabey-telemetry@production ~"
                  lines={[
                    { text: 'systemctl status atabey-telemetry.service', type: 'command' },
                    { text: '● atabey-telemetry.service - Active (running) since NASA Space Apps 2024', type: 'success' },
                    { text: 'curl -s https://api.missionatabey.com/metrics', type: 'command' },
                    { text: '{"sensors_active": 16, "latency_ms": 14.2, "packets_delivered": "99.98%"}', type: 'output' },
                    { text: 'docker ps --format "{{.Names}}: {{.Status}}"', type: 'command' },
                    { text: 'rover-broker: Up 42 days (healthy)\nfastapi-gateway: Up 42 days (healthy)', type: 'output' },
                  ]}
                />
              </div>

              {/* Bento Grid */}
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent-fill" />
                  MagicUI Bento Grid Preview
                </h3>
                <BentoGrid className="auto-rows-[11rem] grid-cols-2 gap-4">
                  <BentoCard
                    name="NASA Space Apps"
                    Icon={Rocket}
                    description="2-time global finalist telemetry architectures."
                    cta="Read Study"
                    href="/work/mission-atabey"
                  />
                  <BentoCard
                    name="omegaUp GSoC"
                    Icon={Code}
                    description="Google Summer of Code core open-source contributor."
                    cta="View Blog"
                    href="/blog"
                  />
                  <BentoCard
                    name="Systems Design"
                    Icon={Cpu}
                    description="Scalable APIs, role-based security, and event streaming."
                    className="col-span-2"
                  />
                </BentoGrid>
              </div>
            </div>

            {/* Marquee Ticker */}
            <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] p-6 overflow-hidden">
              <span className="text-xs font-mono text-text-tertiary block mb-4 text-center">
                MagicUI / Infinite Marquee with Pause on Hover
              </span>
              <Marquee pauseOnHover duration="25s">
                {['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'IoT Telemetry', 'Systems Architecture'].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-zinc-800 px-5 py-2.5 shadow-sm text-sm font-semibold"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-fill" />
                    <span>{tech}</span>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Dock */}
            <div className="mt-8 flex flex-col items-center justify-center p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
              <span className="text-xs font-mono text-text-tertiary mb-4">MagicUI / Interactive Dock</span>
              <Dock>
                <DockIcon label="GitHub">
                  <a href="https://github.com/mxnueh" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </DockIcon>
                <DockIcon label="LinkedIn">
                  <a href="https://www.linkedin.com/in/enmanuel-nunez-matias-249560340/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </DockIcon>
                <DockIcon label="Email">
                  <a href="mailto:enmanuelnunezmatias@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </DockIcon>
                <DockIcon label="Projects">
                  <a href="/work">
                    <Rocket className="w-5 h-5" />
                  </a>
                </DockIcon>
              </Dock>
            </div>
          </section>
        )}

        {/* SECTION 5: CANVAS & BACKGROUNDS */}
        {(activeTab === 'all' || activeTab === 'reactbits' || activeTab === 'magicui') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-black/5 dark:border-white/10">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Canvas & Atmospheric Backgrounds
              </span>
              <h2 className="text-3xl font-bold mt-1">Backgrounds & Particle Canvases</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Performant HTML5 Canvas simulations: Retro Grid, Particles, Shape Waves, Flickering Grid, Meteors, and Hyperspeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Retro Grid */}
              <div className="relative h-64 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-black overflow-hidden p-6 flex flex-col justify-between">
                <RetroGrid />
                <span className="relative z-10 text-xs font-mono text-text-tertiary">MagicUI / RetroGrid</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">3D Perspective Wireframe</h4>
                  <p className="text-xs text-text-secondary">Retro-futuristic moving perspective grid.</p>
                </div>
              </div>

              {/* ReactBits Particles */}
              <div className="relative h-64 rounded-3xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] overflow-hidden p-6 flex flex-col justify-between">
                <Particles quantity={40} color="#0071e3" />
                <span className="relative z-10 text-xs font-mono text-text-tertiary">ReactBits / Particles</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">Interactive Particle Mesh</h4>
                  <p className="text-xs text-text-secondary">Connected nodes reacting to cursor proximity.</p>
                </div>
              </div>

              {/* ReactBits Shape Waves */}
              <div className="relative h-64 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#161617] overflow-hidden p-6 flex flex-col justify-between">
                <ShapeWaves waveColor="#0071e3" speed={0.02} />
                <span className="relative z-10 text-xs font-mono text-text-tertiary">ReactBits / ShapeWaves</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">Sinusoidal Layer Waves</h4>
                  <p className="text-xs text-text-secondary">Harmonic wave simulation with transparency gradient.</p>
                </div>
              </div>

              {/* Flickering Grid + Meteors */}
              <div className="relative h-64 rounded-3xl border border-black/10 dark:border-white/10 bg-black text-white overflow-hidden p-6 flex flex-col justify-between">
                <FlickeringGrid color="rgb(56, 189, 248)" maxOpacity={0.25} />
                <Meteors number={15} />
                <span className="relative z-10 text-xs font-mono text-white/50">MagicUI / FlickeringGrid + Meteors</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white">Cyber Matrix & Meteors</h4>
                  <p className="text-xs text-white/60">Shooting stars over dynamic flickering canvas matrix.</p>
                </div>
              </div>
            </div>

            {/* Hyperspeed Demo */}
            <div className="mt-8 relative h-72 rounded-3xl border border-white/10 overflow-hidden p-8 flex flex-col justify-between text-white">
              <Hyperspeed speed={6} starCount={250} />
              <span className="relative z-10 text-xs font-mono text-white/60">ReactBits / Hyperspeed</span>
              <div className="relative z-10 text-center max-w-xl mx-auto">
                <h4 className="text-3xl font-extrabold tracking-tight">Warp Speed Starfield</h4>
                <p className="text-sm text-white/80 mt-2">
                  Perspective light streaks simulating hyperspace acceleration for space and telemetry applications.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <ShimmerButton href="/work/mission-atabey" background="rgba(255,255,255,0.15)">
                  View Mission Atabey Telemetry
                </ShimmerButton>
              </div>
            </div>
          </section>
        )}

        <Footer lang="en" />
      </div>
    </ClickSpark>
  );
}
