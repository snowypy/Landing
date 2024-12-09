'use client'

import { motion } from 'framer-motion'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';

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
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 10
    }
  }
}

export default function Steps() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Its as easy as...
        </motion.h2>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="relative" variants={itemVariants} style={{ translateY: '0px' }} whileInView={{ translateY: '-20px' }} transition={{ duration: 0.5 }}>
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <div className="border border-pink-500/20 rounded-lg p-6 bg-black/50">
              <h3 className={`text-xl font-bold mb-2`}>Running Vandal</h3>
              <p className="text-gray-400 mb-4">
                <span className="text-pink-500">Download</span> Vandal for your server brand and run it. Don't fret about the license, you can get one <a href="https://discord.gg/vandaldev" className="text-pink-500 hover:text-pink-400 transition-colors hover:underline">Here</a>
              </p>
              <div className={`${minecraftFont.className} bg-black/50 rounded p-4 font-mono text-sm`}>
                <div className="text-red-500">============================</div>
                <div className="text-red-500">{'    '}License Required!</div>
                <div className="text-red-500">============================</div>
                <div><span className="text-pink-500">Vandal</span> v1.?.?.?</div>
                <div><span className="text-green-400">Config</span>   Change at <span className="text-blue-400">Vandal/config.yml</span>!</div>
                <div><span className="text-red-500">Not Ready</span>    Join Support for your License</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants} style={{ translateY: '0px' }} whileInView={{ translateY: '-20px' }} transition={{ duration: 0.5 }}>
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <div className="border border-pink-500/20 rounded-lg p-6 bg-black/50">
              <h3 className={`text-xl font-bold mb-2`}>Toggle your modules</h3>
              <p className="text-gray-400 mb-4">
                Toggle the modules you want to use in your server. You can always change them later in the config.
              </p>
              <div className={`${minecraftFont.className} text-blue-500`}>============================</div>
                <div className={`${minecraftFont.className} text-blue-500`}>{'    '}Changing Modules!</div>
                <div className={`${minecraftFont.className} text-blue-500`}>============================</div>
              <div>
                <span className={`${minecraftFont.className} text-pink-500`}>WatchTower</span>: <span className={`${minecraftFont.className} text-green-400`}>Enabled</span>
              </div>
              <div>
                <span className={`${minecraftFont.className} text-pink-500`}>Ghost</span>: <span className={`${minecraftFont.className} text-red-500`}>Disabled</span>
              </div>
              <div>
                <span className={`${minecraftFont.className} text-pink-500`}>Odin</span>: <span className={`${minecraftFont.className} text-green-400`}>Enabled</span>
              </div>
              <div>
                <span className={`${minecraftFont.className} text-pink-500`}>Spectre</span>: <span className={`${minecraftFont.className} text-red-500`}>Disabled</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants} style={{ translateY: '0px' }} whileInView={{ translateY: '-20px' }} transition={{ duration: 0.5 }}>
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <div className="border border-pink-500/20 rounded-lg p-6 bg-black/50">
              <h3 className={`text-xl font-bold mb-2`}>Start using Vandal</h3>
              <p className={`text-gray-400 mb-4`}>
                You can now utilize all of Vandal's features in your server.
              </p>
              <div className="mt-4">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(10) 
                      .typeString(`<span class="${minecraftFont.className} text-white-500">SnowyJS executed command: op Hacker</span>`)
                      .pauseFor(1000)
                      .changeDelay(10) 
                      .typeString(`<br><span class="${minecraftFont.className} text-orange-500">WatchTower: Unknown user has issued op.</span>`)
                      .pauseFor(1000)
                      .changeDelay(10) 
                      .typeString(`<br><span class="${minecraftFont.className} text-red-400">Crisis Log:</span>`)
                      .pauseFor(1000)
                      .changeDelay(10) 
                      .typeString(`<br><span class="${minecraftFont.className} text-orange-500">1. SnowyJS is flagging for breaking ruleset</span>`)
                      .pauseFor(1000)
                      .changeDelay(10) 
                      .typeString(`<br><span class="${minecraftFont.className} text-red-500">2. Awel used integration to ban SnowyJS</span>`)
                      .pauseFor(1000)
                      .changeDelay(10) 
                      .typeString(`<br><span class="${minecraftFont.className} text-green-500">3. Issue resolved, closing crisis thread</span>`)
                      .pauseFor(1000)
                      .changeDelay(10) 
                      .start()
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}