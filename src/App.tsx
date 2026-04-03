/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#E0F7FA] flex flex-col items-center justify-center p-4 font-sans select-none">
      <div className="text-center space-y-2">
        {/* Main Logo/Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-[#00B0FF] tracking-tight">
          HanoiGO
        </h1>
        
        {/* Contact Information */}
        <p className="text-sm md:text-base text-gray-700 font-medium">
          Contact: 0987756031 | Email: hoangtong08@gmail.com
        </p>

        {/* Swinging Sign Section */}
        <div className="relative flex flex-col items-center pt-8">
          {/* The hanging point */}
          <div className="w-3 h-3 rounded-full border-2 border-[#B71C1C] bg-transparent z-10" />
          
          {/* The swinging part */}
          <motion.div
            className="flex flex-col items-center origin-top"
            animate={{
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Hanging Strings */}
            <div className="flex justify-center -mt-0.5">
              <div className="w-px h-12 bg-[#B71C1C] rotate-[25deg] origin-top translate-x-3" />
              <div className="w-px h-12 bg-[#B71C1C] -rotate-[25deg] origin-top -translate-x-3" />
            </div>

            {/* The Sign */}
            <div className="bg-[#B71C1C] text-white px-8 py-4 rounded-lg shadow-xl transform -mt-1 flex flex-col items-center justify-center min-w-[180px]">
              <span className="text-xl font-bold tracking-widest uppercase leading-tight">
                Coming
              </span>
              <span className="text-xl font-bold tracking-widest uppercase leading-tight">
                Soon
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
