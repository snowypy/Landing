'use client'

import { motion } from 'framer-motion'
import localFont from 'next/font/local'

const minecraftFont = localFont({ src: '../fonts/Minecraft.otf' })

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

export default function Features() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-16`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Features we hope you'll love
        </motion.h2>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="border border-pink-500/20 rounded-lg p-6 bg-black/50" variants={itemVariants}>
            <div className={`${minecraftFont.className} text-sm mb-4`}>
                <span className="text-green-500">Awel</span> <span className="text-white-500">executed command: </span>
                <span className="text-yellow-400">/op SnowyJS,</span>
                <br />
              <span className="text-yellow-400">SnowyJS executed command: </span>
              <span className="text-red-400">/op OtherUser</span>
              <br />
              <span className="text-red-500">WatchTower: Unknown user has issued op.</span>
              <br />
              <span className="text-red-500">WatchTower Handler: </span>
              <span className="text-green-400">/ban SnowyJS</span>
            </div>
            <h3 className={`text-xl font-bold mb-2`}>Next Level Security</h3>
            <p className="text-gray-400">
              Automatically protect your server using our Super Algorithums
            </p>
          </motion.div>

          <motion.div className="border border-pink-500/20 rounded-lg p-6 bg-black/50" variants={itemVariants}>
            <div className={`${minecraftFont.className} text-sm mb-4`}>
            <span className="text-yellow-400">SnowyJS executed command: </span>
            <span className="text-red-400">/op OtherUser</span>
              <br />
                <span className="text-orange-500">WatchTower Integration: Posting crisis log.</span>
              <br />
              {'>'} SnowyJS is flagging for breaking ruleset {'<'}
              <br />
              {'>'} Awel used integration to ban SnowyJS {'<'}
            </div>
            <h3 className={`text-xl font-bold mb-2`}>Advanced Integration</h3>
            <p className="text-gray-400">
              Share all alerts and violations with your webhook or discord server
            </p>
          </motion.div>

          <motion.div className="border border-pink-500/20 rounded-lg p-6 bg-black/50" variants={itemVariants}>
            <div className={`${minecraftFont.className} text-sm mb-4`}>
              <div className="text-green-500"><b>VIP</b> SnowyJS: {'>'} Dropped 27x VIP Kits {'<'}</div>
              <div className="text-orange-500">WatchTower: Total Dropped: 47x {'>'} NO_AUTO_BAN</div>
              <div className="text-green-500"><b>VIP</b> SnowyJS: {'>'} Dropped 54x VIP Kits {'<'}</div>
              <div className="text-red-500">WatchTower: Total Dropped: 47x {'>'} AUTO_BAN</div>
            </div>
            <h3 className={`text-xl font-bold mb-2`}>Dupe Detector</h3>
            <p className="text-gray-400">
                Automatically detect and notify staff about potential dupers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

