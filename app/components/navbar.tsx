'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Permanent_Marker } from 'next/font/google'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const marker = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin'],
})

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > previous && latest > 150) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  })

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-black/80 backdrop-blur-sm border-b border-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className={`${marker.className} text-2xl text-pink-500`}>
              VANDAL
            </Link>
            <div className="flex gap-6">
              {['Products','Discord', 'Docs'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}