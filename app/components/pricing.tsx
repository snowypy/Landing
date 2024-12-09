'use client'

import { motion } from 'framer-motion'
import localFont from 'next/font/local'

const minecraftFont = localFont({ src: '../fonts/Minecraft.otf' })

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Pricing() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-16`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing plans
        </motion.h2>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="border border-pink-500/20 rounded-lg p-6 bg-black/50"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-center mb-8">
              <h3 className={`${minecraftFont.className} text-2xl font-bold`}>Vandal Lite</h3>
              <div className="mt-4 flex items-end justify-center">
                <span className={`${minecraftFont.className} text-4xl font-bold`}>$5.99</span>
                <span className={`${minecraftFont.className} text-gray-400 ml-2`}>/ month</span>
              </div>
            </div>
            
            <motion.button 
              className={`${minecraftFont.className} w-full py-2 px-4 rounded border border-pink-500 text-white hover:bg-pink-500/10 transition-colors mb-8`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Purchase
            </motion.button>

            <div className="space-y-4">
              <h4 className={`${minecraftFont.className} text-xl mb-4`}>Features</h4>
              <div className="space-y-2 text-gray-300">
                <div className={minecraftFont.className}>• WatchTower Security</div>
                <div className={minecraftFont.className}>• Ghost Staff</div>
                <div className={minecraftFont.className}>• Spectre Admin</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="border-2 border-pink-500 rounded-lg p-6 bg-black/50 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm">
              Most Value
            </div>
            <div className="text-center mb-8">
              <h3 className={`${minecraftFont.className} text-2xl font-bold`}>Vandal Ultimate</h3>
              <div className="mt-4 flex items-end justify-center">
                <span className={`${minecraftFont.className} text-4xl font-bold`}>$23.99</span>
                <span className={`${minecraftFont.className} text-gray-400 ml-2`}>/one time</span>
              </div>
            </div>
            
            <motion.button 
              className={`${minecraftFont.className} w-full py-2 px-4 rounded bg-pink-500 text-white hover:bg-pink-600 transition-colors mb-8`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Purchase
            </motion.button>

            <div className="space-y-4">
              <h4 className={`${minecraftFont.className} text-xl mb-4`}>Features</h4>
              <div className="space-y-2 text-gray-300">
                <div className={minecraftFont.className}>• Odin Command Registry</div>
                <div className={minecraftFont.className}>• Judge Entity Manager</div>
                <div className={minecraftFont.className}>• WatchTower Security</div>
                <div className={minecraftFont.className}>• Ghost Staff</div>
                <div className={minecraftFont.className}>• Spectre Admin</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="border border-pink-500/20 rounded-lg p-6 bg-black/50"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-center mb-8">
              <h3 className={`${minecraftFont.className} text-2xl font-bold`}>Vandal Pro</h3>
              <div className="mt-4 flex items-end justify-center">
                <span className={`${minecraftFont.className} text-4xl font-bold`}>$9.99</span>
                <span className={`${minecraftFont.className} text-gray-400 ml-2`}>/ month</span>
              </div>
            </div>
            
            <motion.button 
              className={`${minecraftFont.className} w-full py-2 px-4 rounded border border-pink-500 text-white hover:bg-pink-500/10 transition-colors mb-8`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Purchase
            </motion.button>

            <div className="space-y-4">
              <h4 className={`${minecraftFont.className} text-xl mb-4`}>Features</h4>
              <div className="space-y-2 text-gray-300">
                <div className={minecraftFont.className}>• Odin Command Registry</div>
                <div className={minecraftFont.className}>• WatchTower Security</div>
                <div className={minecraftFont.className}>• Ghost Staff</div>
                <div className={minecraftFont.className}>• Spectre Admin</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}