import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import { CircleBackground } from '../CircleBackground'
import { Container } from '../Container'
function BackgroundIllustration(props) {
    let id = useId()

    return (
        <div {...props} >
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
                        <stop stopColor="#30277F" />
                        <stop offset="1" stopColor="#30277F" stopOpacity="0" />
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
                        <stop stopColor="#30277F" />
                        <stop offset="1" stopColor="#30277F" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
const features = [
    {
        name: 'On-Chain Game Engine',
        description:[
            { h1:"Chain the game engine and make your own Web3 game with it"},
        ],
        icon: OneAccount,
        screen: OneAccountScreen,
        bg:OneBG,
    },
    {
        name: 'Public Protocol',
        description:[
            { h1:"On-chain agreement to build a game trading market"},
        ],
        icon: DappSafari,
        screen: DappSafariScreen,
        bg:TwoBG,
    },
    {
        name: 'Power Dao',
        description:[
            { h1:"Join the community, know your partners and share resources"},
        ],
        icon: CollectManage,
        screen: CollectManageScreen,
        bg:ThereBG,
    },
    {
        name: 'Governance and Finance',
        description:[
            { h1:"Guide the future development direction through voting."},
        ],
        icon: UniqueTradingExperience,
        screen: UniqueTradingExperienceScreen,
        bg:FourBG,
    },
]

function OneAccount(props) {

    return (
        <div className="relative z-20 p-8 ">
            {/*<feature.icon className="h-8 w-8" />*/}
            <h3 className="mt-2 text-4xl font-black text-white">
                <div className="text-left outline-none">
                    <span className="absolute inset-0 rounded-2xl" />
                    On-Chain Game Engine
                </div>
            </h3>
                <p  className="mt-2 text-xl text-[#767676] font-semibold">
                    Chain the game engine and make your own Web3 game with it
                </p>
        </div>
    )
}
function DappSafari(props) {
    return (
        <div className="relative z-20 p-8">
            {/*<feature.icon className="h-8 w-8" />*/}
            <h3 className="mt-2 text-4xl font-black text-white">
                <div className="text-left outline-none">
                    <span className="absolute inset-0 rounded-2xl" />
                    Public Protocol
                </div>
            </h3>
            <p  className="mt-2 text-xl text-[#767676] font-semibold">
                On-chain agreement to build a game trading market
            </p>
        </div>
    )
}
function CollectManage(props) {
    return (

        <div className="relative z-20 p-8">
            {/*<feature.icon className="h-8 w-8" />*/}
            <h3 className="mt-2 text-4xl font-black text-white">
                <div className="text-left outline-none">
                    <span className="absolute inset-0 rounded-2xl" />
                    Power Dao
                </div>
            </h3>
            <p  className="mt-2 text-xl text-[#767676] font-semibold">
                Join the community, know your partners and share resources
            </p>
        </div>
    )
}
function UniqueTradingExperience(props) {
    return (
        <div className="relative z-20 p-8">
            {/*<feature.icon className="h-8 w-8" />*/}
            <h3 className="mt-2 text-4xl font-black text-white">
                <div className="text-left outline-none">
                    <span className="absolute inset-0 rounded-2xl" />
                    Governance and Finance
                </div>
            </h3>
            <p  className="mt-2 text-xl text-[#767676] font-semibold">
                Guide the future development direction through voting.
            </p>
        </div>
    )
}

function OneAccountScreen({ custom, animated = false }) {
    return (
        <div className="z-20">
            <img  src="/img3.png" alt=""/>
        </div>
    )
}

function DappSafariScreen({ custom, animated = false }) {
    return (
        <div className="z-20">
            <img  src="/2%20iphone.png" alt=""/>
        </div>
    )
}

function CollectManageScreen({ custom, animated = false }) {
    return (
        <div className="z-20 stroke-gray-300/70 [mask-image:linear-gradient(to_left,white_20%,transparent_95%)]">
            <img  src="/img3.png" alt=""/>
        </div>
    )
}

function UniqueTradingExperienceScreen({ custom, animated = false }) {
    return (
        <div className="z-20">
            <div className="z-20">
                <img  src="/img3.png" alt=""/>
            </div>
        </div>
    )
}

function OneBG() {


    return (
        <BackgroundIllustration className="absolute sm:left-1/2 top-4 h-full  sm:h-[600px] w-[600px] -translate-x-1/3  sm:top-16 sm:-translate-x-1/2 lg:-top-48 lg:ml-12  xl:ml-0" />
    )
}

function TwoBG() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/*<CircleBackground color="#74BCFF" className="animate-spin-slower" />*/}
        </div>
    )
}
function ThereBG() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/*<CircleBackground color="#74BCFF" className="animate-spin-slower" />*/}
        </div>
    )
}
function FourBG() {
    return (
        <BackgroundIllustration className="absolute sm:left-1/2 top-4 h-full  sm:h-[600px] w-[600px] -translate-x-1/3  sm:top-16 sm:-translate-x-1/2 lg:-top-48 lg:ml-12  xl:ml-0" />

    )
}

function usePrevious(value) {
    let ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

function FeaturesDesktop() {
    let [changeCount, setChangeCount] = useState(0)
    let [selectedIndex, setSelectedIndex] = useState(0)
    let prevIndex = usePrevious(selectedIndex)
    // @ts-ignore
    let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

    let onChange = useDebouncedCallback(
        (selectedIndex) => {
                setSelectedIndex(selectedIndex)
                setChangeCount((changeCount) => changeCount + 1)
        },
        100,
        { leading: true }
    )

    return (

        <Tab.Group
            as="div"
            className="grid grid-cols-12 items-center gap-10 "
            selectedIndex={selectedIndex}
            onChange={onChange}
            vertical
        >
            <Tab.List className="relative z-10  col-span-1  grid grid-cols-1 gap-2 ">
                {features.map((feature, featureIndex) => (
                    <div
                        key={feature.name}
                        className="relative rounded-2xl  transition-colors bg-[#2B2B2B] hover:bg-gray-400 "
                    >
                        {featureIndex === selectedIndex && (
                            <motion.div
                                layoutId="activeBackground"
                                className="absolute inset-0 bg-white w-24"
                                initial={{ borderRadius: 16 }}
                            />
                        )}
                        <div className="relative z-10 px-8  items-center text-center">
                            {/*<feature.icon />*/}
                            <h3 className="  font-semibold text-white">
                                <Tab className=" outline-none">
                                    <span className="absolute inset-0 rounded-2xl" />
                                    {/*{featureIndex}*/}
                                </Tab>
                            </h3>
                        </div>
                    </div>
                ))}
            </Tab.List>
            <div className="col-span-5 pl-10">
                <Tab.Panels as={Fragment}>
                    {features.map((feature, featureIndex) =>
                        selectedIndex === featureIndex ? (
                            <Tab.Panel
                                static
                                key={feature.name + changeCount}
                                className="  flex  justify-between  w-full"
                            >
                                <feature.icon />

                            </Tab.Panel>
                        ) : null
                    )}

                </Tab.Panels>
            </div>

            <div className="relative col-span-6">

                <div className="z-10 mx-auto w-full max-w-[366px]">
                    <Tab.Panels as={Fragment}>
                        {features.map((feature, featureIndex) =>
                            selectedIndex === featureIndex ? (
                                <Tab.Panel
                                    static
                                    key={feature.name + changeCount}
                                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none items-center"
                                >
                                    <feature.screen
                                        animated
                                        custom={{ isForwards, changeCount }}
                                    />

                                    <feature.bg/>

                                </Tab.Panel>
                            ) : null
                        )}

                    </Tab.Panels>
                </div>
            </div>
        </Tab.Group>

    )
}

function FeaturesMobile() {
    let [activeIndex, setActiveIndex] = useState(0)
    let slideContainerRef = useRef()
    let slideRefs = useRef([])

    useEffect(() => {
        let observer = new window.IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveIndex(slideRefs.current.indexOf(entry.target))
                        break
                    }
                }
            },
            {
                root: slideContainerRef.current,
                threshold: 0.6,
            }
        )

        for (let slide of slideRefs.current) {
            if (slide) {
                observer.observe(slide)
            }
        }

        return () => {
            observer.disconnect()
        }
    }, [slideContainerRef, slideRefs])

    return (
        <>
            <div
                ref={slideContainerRef}
                className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
            >
                {features.map((feature, featureIndex) => (
                    <div
                        key={featureIndex}
                        ref={(ref) => (slideRefs.current[featureIndex] = ref)}
                        className="w-full flex-none snap-center px-4 sm:px-6"
                    >
                        <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <CircleBackground
                                    color="#74BCFF"
                                    className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                                />
                            </div>
                            {/*PhoneFrame 手机框架*/}
                            <div className="relative mx-auto w-full max-w-[366px]">
                                <feature.screen   custom={{  }}/>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                                {/*<feature.icon className="h-8 w-8" />*/}
                                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                                    {feature.name}
                                </h3>
                                {feature.description.map(item=>(
                                    <p key={item.h1} className="mt-2 text-sm text-gray-400">
                                        {item.h1}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center gap-3">
                {features.map((_, featureIndex) => (
                    <button
                        type="button"
                        key={featureIndex}
                        className={clsx(
                            'relative h-0.5 w-4 rounded-full',
                            featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
                        )}
                        aria-label={`Go to slide ${featureIndex + 1}`}
                        onClick={() => {
                            slideRefs.current[featureIndex].scrollIntoView({
                                block: 'nearest',
                                inline: 'nearest',
                            })
                        }}
                    >
                        <span className="absolute -inset-x-1.5 -inset-y-3" />
                    </button>
                ))}
            </div>
        </>
    )
}

export function PrimaryFeatures() {
    return (
        <section
            id="features"
            aria-label=""
            className="bg-gray-900 py-20 sm:py-32"
        >

            <div className=" xl:hidden">
                <FeaturesMobile />
            </div>
            <Container className="hidden py-32 xl:block">
                <FeaturesDesktop />
            </Container>
        </section>
    )
}
