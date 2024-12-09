'use client'

import { motion } from 'framer-motion'
import { Permanent_Marker } from 'next/font/google'
import { Github, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import CTABanner from './cta-banner'

const marker = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin'],
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="px-4 py-16">
        <CTABanner />
      </div>

      <div className="border-t border-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="md:col-span-2" variants={itemVariants}>
              <Link href="/" className={`${marker.className} text-4xl text-pink-500 block mb-4`}>
                VANDAL
              </Link>
              <div className="flex gap-4">
                <motion.a 
                  href="https://discord.gg/vandaldev" 
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageSquare className="w-6 h-6" />
                  <span className="sr-only">Discord</span>
                </motion.a>
                <motion.a 
                  href="https://github.com/EpicDevelopment" 
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a 
                  href="#patreon" 
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.95a7.05 7.05 0 100 14.1 7.05 7.05 0 000-14.1z"/>
                  </svg>
                  <span className="sr-only">Patreon</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-pink-500 font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }}>
                  <Link href="#docs" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link href="#download" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Details
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-pink-500 font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }}>
                  <Link href="#discord" className="text-gray-400 hover:text-white transition-colors">
                    Discord
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="border-t border-pink-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-400">© 2024 Vandal. All Rights Reserved.</p>
            <p className="text-gray-400">
              Website made with <span className="text-pink-500">❤</span> by{' '}
              <Link href="https://snowyjs.lol" className="text-pink-500 hover:text-pink-400 transition-colors">
                Snowy 
              </Link>
              ,{' '}inspired by <Link href="https://aiden.gg" className="text-pink-500 hover:text-pink-400 transition-colors">Aiden</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}