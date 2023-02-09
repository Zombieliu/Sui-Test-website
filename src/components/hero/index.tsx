import { useId, useRef, useState ,Fragment } from 'react'
import { Container } from '../Container'
import { Dialog, Transition } from '@headlessui/react'

function BackgroundIllustration(props) {
    let id = useId()

    return (
        <div {...props}>
            <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full animate-spin-slow"
            >
                <path
                    d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                    stroke="#D4D4D4"
                    strokeOpacity="0.7"
                />
                <path
                    d="M513 1025C230.23 1025 1 795.77 1 513"
                    stroke={`url(#${id}-gradient-1)`}
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient
                        id={`${id}-gradient-1`}
                        x1="1"
                        y1="513"
                        x2="1"
                        y2="1025"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#74BCFF" />
                        <stop offset="1" stopColor="#74BCFF" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
            >
                <path
                    d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                    stroke="#D4D4D4"
                    strokeOpacity="0.7"
                />
                <path
                    d="M913 513c0 220.914-179.086 400-400 400"
                    stroke={`url(#${id}-gradient-2)`}
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient
                        id={`${id}-gradient-2`}
                        x1="913"
                        y1="513"
                        x2="913"
                        y2="913"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#74BCFF" />
                        <stop offset="1" stopColor="#74BCFF" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}




export function Hero() {
    return (
        <div className="overflow-hidden py-10 sm:py-20 lg:pb-32 xl:pb-56 2xl:pb-72">
            <Container className={undefined}>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 text-center sm:text-left">
                        <h1 className= "text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                            Join Us In The Game World.
                        </h1>
                        <p className="mt-6 text-xl text-[#9E9E9E] font-medium">
                            Join PlayerLink In 2023.

                        </p>
                        <div className="hidden sm:block">
                            <div className="mt-8 flex   gap-x-6 gap-y-4">
                                {/*<AppStoreLink />*/}
                                <button  className=" px-7 py-2.5 border border-[#5A5A5A]  bg-[#272727] rounded-md  text-[#696969] font-semibold text-center text-sm">
                                    JOIN THE WAITLIST NOW</button>

                            </div>

                        </div>
                    </div>
                    <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                        <BackgroundIllustration className="absolute sm:left-1/2 top-4 h-full  sm:h-[700px] w-[1200px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />

                    </div>

                </div>
            </Container>
        </div>
    )
}
