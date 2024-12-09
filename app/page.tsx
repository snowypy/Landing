'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Permanent_Marker } from 'next/font/google'
import localFont from 'next/font/local'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Navbar from './components/navbar'
import Features from './components/features'
import Steps from './components/steps'
import Pricing from './components/pricing'
import Footer from './components/footer'

const marker = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin'],
})

const minecraftFont = localFont({ src: './fonts/Minecraft.otf' })

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">

        <motion.div 
          className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
          style={{ opacity, scale }}
        >

          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent" />
          
          <div className="relative z-10 text-center space-y-6 px-4">
            
            <motion.h1 
              className={`${marker.className} text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
            >
              VANDAL
            </motion.h1>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.5 }}
            >
              Your all-in-one
              <br />
              Software Solution
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', bounce: 0.5 }}
            >
              {['Docs', 'BuiltByBit', 'Support'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="px-8 py-2 bg-black/50 border border-pink-500 rounded-md hover:bg-pink-500/10 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-16 flex flex-col items-center gap-2 text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore More
              <ChevronDown className="animate-bounce" />
            </motion.div>
          </div>
        </motion.div>

        <Features />
        <Steps />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
