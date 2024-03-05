"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <AnimatePresence>
      <main className="flex flex-col justify-center h-[70%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.95,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="relative md:mb-[37px] font-extrabold text-[12vw] md:text-[130px] font-inter text-[#1E2B3A] leading-[1] tracking-[-2px] z-[100]"
        >
          Stop
          <span className="text-[#e35a50]"> Overpaying </span>
          <br />
          to Sell Your Home
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.95,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-35 md:mb-[35px] max-w-2xl md:space-x-8"
        >
          <div className="w-3/4">
            <h2 className="flex items-center font-semibold text-[1em] text-[#407BBF]">
              No Overpriced Commissions
            </h2>
            <p className="text-[14px] leading-[20px] text-[#1E2B3A] font-normal">
              List your home on the MLS for a low flat fee
            </p>
          </div>
          <div className="w-3/4">
            <h2 className="flex items-center font-semibold text-[1em] text-[#407BBF]">
              White Glove Service
            </h2>
            <p className="text-[14px] leading-[20px] text-[#1E2B3A] font-normal">
              Pay only for the services you need - when you need them.
            </p>
          </div>
          <div className="w-3/4">
            <h2 className="flex items-center font-semibold text-[1em] text-[#407BBF]">
              Streamlined through Technology
            </h2>
            <p className="text-[14px] leading-[20px] text-[#1E2B3A] font-normal">
              Our AI enabled platform makes selling your home a breeze.
            </p>
          </div>
        </motion.div>
        <div className="flex gap-[15px] mt-16 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.85,
              duration: 0.55,
              ease: [0.075, 0.82, 0.965, 1],
            }}
          >
            <Link
              href="mailto:aydtechsolutions@gmail.com"
              target="_blank"
              className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
              style={{
                boxShadow:
                  "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                <svg
                  className="w-[16px] h-[16px] text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.5 6.5L12 12.25L18.5 6.5"
                  ></path>
                </svg>
              </span>
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </main>
    </AnimatePresence>
  );
}
