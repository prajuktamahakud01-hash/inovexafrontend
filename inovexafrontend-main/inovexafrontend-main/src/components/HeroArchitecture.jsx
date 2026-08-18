import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Layers, Cloud, Globe2 } from 'lucide-react'
import inovexaLogo from '../image/Copy of Inovexa_log_3.0.png'

export default function HeroArchitecture() {
  return (
    <div className="relative mx-auto w-full max-w-xl p-2 sm:p-4 select-none flex flex-col items-center justify-center">
      {/* Multi-layered Ambient Glows */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-violet-500/20 dark:bg-violet-600/25 blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-cyan-500/20 dark:bg-cyan-600/25 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-amber-500/20 dark:bg-amber-600/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-emerald-500/20 dark:bg-emerald-600/25 blur-3xl pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. TOP NODE: DATA & AI */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -3, scale: 1.03 }}
        className="w-52 sm:w-60 z-10 group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-2xl border border-violet-300/90 dark:border-violet-500/40 bg-white/90 dark:bg-navy-900/90 backdrop-blur-xl p-3.5 text-center shadow-[0_8px_25px_rgba(139,92,246,0.12)] dark:shadow-[0_8px_30px_rgba(139,92,246,0.2)] transition-all duration-300 group-hover:border-violet-500 group-hover:shadow-[0_12px_35px_rgba(139,92,246,0.25)]">
          {/* Top Radiant Gradient Lightbar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500" />
          
          {/* Stylized Corner Notches */}
          <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-400" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-400" />

          {/* Badge Header */}
          <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-100/80 dark:bg-violet-900/50 border border-violet-200 dark:border-violet-700/50 mb-1.5">
            <Sparkles className="h-3 w-3 text-violet-600 dark:text-violet-300" />
            <span className="font-mono text-[10.5px] sm:text-[11.5px] font-bold tracking-wider text-violet-700 dark:text-violet-200 uppercase">
              DATA &amp; AI
            </span>
          </div>

          <p className="font-display text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-snug">
            Data Engineering
          </p>
          <p className="font-mono text-[10px] sm:text-[11px] text-violet-600 dark:text-violet-300 font-medium mt-0.5">
            Analytics • GenAI
          </p>
        </div>
      </motion.div>

      {/* TOP TO CENTER CONNECTOR */}
      <div className="flex flex-col items-center h-8 sm:h-10 my-0.5 justify-center z-0 relative">
        <div className="w-[2px] h-full bg-gradient-to-b from-violet-500 via-indigo-500 to-blue-600 relative overflow-visible">
          <motion.div
            animate={{ y: [0, 28], opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-[3px] w-2 h-2 rounded-full bg-violet-400 shadow-md shadow-violet-500"
          />
        </div>
        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[7px] border-t-blue-600 -mt-[1px]" />
      </div>

      {/* ======================================================== */}
      {/* 2. MIDDLE ROW: DIGITAL PRODUCTS -> INOVEXA <- CLOUD & ENG */}
      {/* ======================================================== */}
      <div className="w-full flex items-center justify-between gap-1.5 sm:gap-3 z-10">
        {/* LEFT NODE: DIGITAL PRODUCTS */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ x: -3, scale: 1.03 }}
          className="flex-1 max-w-[135px] sm:max-w-[160px] group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-2xl border border-cyan-300/90 dark:border-cyan-500/40 bg-white/90 dark:bg-navy-900/90 backdrop-blur-xl p-2.5 sm:p-3 text-center shadow-[0_8px_25px_rgba(6,182,212,0.12)] dark:shadow-[0_8px_30px_rgba(6,182,212,0.2)] transition-all duration-300 group-hover:border-cyan-500 group-hover:shadow-[0_12px_35px_rgba(6,182,212,0.25)]">
            {/* Top Gradient Lightbar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400" />
            
            {/* Corner Notches */}
            <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-cyan-400 dark:bg-cyan-400" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 dark:bg-cyan-400" />

            {/* Badge Header */}
            <div className="inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded-full bg-cyan-100/80 dark:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-700/50 mb-1">
              <Layers className="h-2.5 w-2.5 text-cyan-600 dark:text-cyan-300" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-tight sm:tracking-wider text-cyan-700 dark:text-cyan-200 uppercase">
                PRODUCTS
              </span>
            </div>

            <p className="font-display text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 leading-snug">
              SaaS &amp; Platforms
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] text-cyan-600 dark:text-cyan-300 font-medium mt-0.5">
              Enterprise Apps
            </p>
          </div>
        </motion.div>

        {/* LEFT TO CENTER CONNECTOR (Arrow pointing right into Inovexa) */}
        <div className="flex items-center shrink-0 w-5 sm:w-8 justify-center">
          <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 to-blue-600 relative overflow-visible">
            <motion.div
              animate={{ x: [0, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="absolute -top-[3px] w-2 h-2 rounded-full bg-cyan-400 shadow-md shadow-cyan-500"
            />
          </div>
          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-blue-600 -ml-[1px]" />
        </div>

        {/* ======================================================== */}
        {/* CENTER NODE: INOVEXA OFFICIAL COLORFUL LOGO */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.08 }}
          className="shrink-0 z-20 group cursor-pointer"
        >
          {/* Multi-Color Radiant Glow Border Aura */}
          <div className="relative rounded-2xl p-[2.5px] bg-gradient-to-tr from-blue-600 via-yellow-500 to-emerald-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] dark:shadow-[0_0_35px_rgba(6,182,212,0.3)] transition-all duration-300">
            <div className="rounded-[13px] bg-white dark:bg-navy-950/95 backdrop-blur-xl px-3.5 sm:px-5 py-2.5 sm:py-3 text-center flex flex-col items-center justify-center">
              {/* Inovexa Official Colorful Logo */}
              <img
                src={inovexaLogo}
                alt="Inovexa Logo"
                className="h-8 sm:h-10 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Active Beacon Status */}
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-600 dark:text-slate-300 font-bold">
                  Core Platform
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT TO CENTER CONNECTOR (Arrow pointing left into Inovexa) */}
        <div className="flex items-center shrink-0 w-5 sm:w-8 justify-center">
          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[7px] border-r-blue-600 -mr-[1px]" />
          <div className="h-[2px] w-full bg-gradient-to-l from-amber-500 to-blue-600 relative overflow-visible">
            <motion.div
              animate={{ x: [20, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-[3px] w-2 h-2 rounded-full bg-amber-400 shadow-md shadow-amber-500"
            />
          </div>
        </div>

        {/* RIGHT NODE: CLOUD & ENGINEERING */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ x: 3, scale: 1.03 }}
          className="flex-1 max-w-[135px] sm:max-w-[160px] group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-2xl border border-amber-300/90 dark:border-amber-500/40 bg-white/90 dark:bg-navy-900/90 backdrop-blur-xl p-2.5 sm:p-3 text-center shadow-[0_8px_25px_rgba(245,158,11,0.12)] dark:shadow-[0_8px_30px_rgba(245,158,11,0.2)] transition-all duration-300 group-hover:border-amber-500 group-hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)]">
            {/* Top Gradient Lightbar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500" />
            
            {/* Corner Notches */}
            <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-400" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-400" />

            {/* Badge Header */}
            <div className="inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded-full bg-amber-100/80 dark:bg-amber-900/50 border border-amber-200 dark:border-amber-700/50 mb-1">
              <Cloud className="h-2.5 w-2.5 text-amber-600 dark:text-amber-300" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-tight sm:tracking-wider text-amber-700 dark:text-amber-200 uppercase">
                CLOUD &amp; ENG
              </span>
            </div>

            <p className="font-display text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 leading-snug">
              AWS • Azure • GCP
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] text-amber-600 dark:text-amber-300 font-medium mt-0.5">
              DevOps &amp; Scale
            </p>
          </div>
        </motion.div>
      </div>

      {/* CENTER TO BOTTOM CONNECTOR (Arrow pointing down into Global Business) */}
      <div className="flex flex-col items-center h-8 sm:h-10 my-0.5 justify-center z-0 relative">
        <div className="w-[2px] h-full bg-gradient-to-b from-blue-600 via-teal-500 to-emerald-500 relative overflow-visible">
          <motion.div
            animate={{ y: [0, 28], opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            className="absolute -left-[3px] w-2 h-2 rounded-full bg-emerald-400 shadow-md shadow-emerald-500"
          />
        </div>
        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[7px] border-t-emerald-500 -mt-[1px]" />
      </div>

      {/* ======================================================== */}
      {/* 3. BOTTOM NODE: GLOBAL BUSINESS */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ y: 3, scale: 1.03 }}
        className="w-52 sm:w-60 z-10 group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-2xl border border-emerald-300/90 dark:border-emerald-500/40 bg-white/90 dark:bg-navy-900/90 backdrop-blur-xl p-3.5 text-center shadow-[0_8px_25px_rgba(16,185,129,0.12)] dark:shadow-[0_8px_30px_rgba(16,185,129,0.2)] transition-all duration-300 group-hover:border-emerald-500 group-hover:shadow-[0_12px_35px_rgba(16,185,129,0.25)]">
          {/* Top Radiant Gradient Lightbar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-400 via-emerald-500 to-green-500" />
          
          {/* Corner Notches */}
          <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-400" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-400" />

          {/* Badge Header */}
          <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-700/50 mb-1.5">
            <Globe2 className="h-3 w-3 text-emerald-600 dark:text-emerald-300" />
            <span className="font-mono text-[10.5px] sm:text-[11.5px] font-bold tracking-wider text-emerald-700 dark:text-emerald-200 uppercase">
              GLOBAL BUSINESS
            </span>
          </div>

          <p className="font-display text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-snug">
            Build • Scale • Transform
          </p>
          <p className="font-mono text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-300 font-medium mt-0.5">
            Worldwide Impact
          </p>
        </div>
      </motion.div>
    </div>
  )
}
