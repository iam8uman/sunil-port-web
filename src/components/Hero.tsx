import React from "react";
import { motion } from "framer-motion";
import { Dot, DownloadCloudIcon, PhoneCallIcon } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div>
        <section className="py-12 overflow-hidden bg-gray-200 sm:py-16 lg:pb-20 xl:pb-48 dark:bg-gray-950">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-slate-300 sm:text-5xl xl:text-6xl sm:tracking-tight">
                  Enterpreneur
                  <span className="text-primary font-extrabold inline-block">
                    .
                  </span>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-6 text-lg leading-7 text-gray-500 lg:leading-8 lg:text-xl"
                >
                  I&apos;m a multifaceted <span className="font-bold text-primary">BBA-BI</span> student, I create YouTube content, invest & run my own business. My skills in digital marketing and web development help me excel in the digital world.
                </motion.p>
                <div className="mt-8 flex justify-start">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    title=""
                    className="inline-flex items-center gap-2 justify-center px-8 text-lg font-medium transition-all duration-200 border border- rounded-full outline-primary hover:bg-white  hover:text-white text-gray-950  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2"
                    role="button"
                  >
                    <DownloadCloudIcon className="" /> Download CV
                  </motion.a>
                </div>

                <ul className="mt-10 space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Get unlimited design blocks.
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Contact support 24/7.
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Made for Webflow developers.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="relative w-full max-w-sm mx-auto">
                  <div className="absolute inset-y-0 w-screen translate-y-20 left-1/2 bg-blue-50 lg:left-32 lg:right-0"></div>

                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative object-cover w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl"
                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/3/portrait-male.png"
                    alt=""
                  />

                  <div className="absolute bottom-0 left-0 origin-bottom-left scale-75 bg-gray-900 rounded-br-none sm:-translate-x-16 xl:-translate-x-24 rounded-2xl sm:scale-100">
                    <svg
                      className="absolute w-auto h-10 text-blue-600 -translate-x-5 -translate-y-4"
                      viewBox="0 0 44 38"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M44 38H27.1765C25.6975 31.574 24.958 25.8894 24.958 20.9463C24.958 6.98212 31.2437 0 43.8151 0V8.1561C37.8992 8.1561 34.9412 11.3691 34.9412 17.7951V22.0585H44V38ZM19.042 38H2.21849C0.739496 31.574 0 25.8894 0 20.9463C0 6.98212 6.28571 0 18.8571 0V8.1561C12.9412 8.1561 9.98319 11.3691 9.98319 17.7951V22.0585H19.042V38Z" />
                    </svg>

                    <div className="px-4 py-5 sm:p-6">
                      <blockquote>
                        <p className="text-base font-normal leading-6 text-white">
                          You made it so simple. Our new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change and it&apos;s done.
                        </p>
                      </blockquote>
                      <p className="mt-4 text-base font-semibold text-white">
                        Ralph Edwards
                      </p>
                      <p className="mt-1 text-sm font-normal text-gray-400">
                        CEO - Brain360
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
