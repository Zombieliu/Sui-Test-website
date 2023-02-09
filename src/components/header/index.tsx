import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '../Container'
import { Logo } from '../Logo'
import {useState} from "react";

function MenuIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M5 6h14M5 18h14M5 12h14"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChevronUpIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M17 14l-5-5-5 5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}


export function Header() {
    let [hoveredIndex, setHoveredIndex] = useState(null)

    const title = [
        ['Discord', ''],
        ["Twitter",""]
    ]
    return (
        <header>
            <nav>
                <Container className="relative z-50 flex justify-between py-4 ">
                    <div className="relative z-10 flex items-center gap-16 justify-between w-full">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-10 w-auto" />
                        </Link>
                        <div className="hidden lg:flex lg:gap-10">
                            { title.map(([label, href], index) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-[#464646] transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.span
                                                className="absolute inset-0 rounded-lg bg-gray-100"
                                                layoutId="hoverBackground"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                                exit={{
                                                    opacity: 0,
                                                    transition: { duration: 0.15, delay: 0.2 },
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    <span className="relative z-10">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Popover className="lg:hidden">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className="relative z-10 bg-gray-200/50 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                                        aria-label="Toggle site navigation"
                                    >
                                        {({ open }) =>
                                            open ? (
                                                <ChevronUpIcon className="h-6 w-6" />
                                            ) : (
                                                <MenuIcon className="h-6 w-6" />
                                            )
                                        }
                                    </Popover.Button>
                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <>
                                                <Popover.Overlay
                                                    static
                                                    as={motion.div}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="fixed inset-0 z-0 bg-black/60 backdrop-blur"
                                                />
                                                <Popover.Panel
                                                    static
                                                    as={motion.div}
                                                    initial={{ opacity: 0, y: -32 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -32,
                                                        transition: { duration: 0.2 },
                                                    }}
                                                    className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-black px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                                                >
                                                    <div className="space-y-4">
                                                        {title.map(([label, href], index) =>
                                                            <Link href={href}
                                                                key={href}
                                                                className="block text-base leading-7 tracking-tight text-[#464646]"
                                                            >
                                                                {label}
                                                            </Link>
                                                        )}
                                                        {/*<MobileNavLink href="#features">*/}
                                                        {/*  Features*/}
                                                        {/*</MobileNavLink>*/}
                                                    </div>
                                                    {/*<div className="mt-8 flex flex-col gap-4">*/}
                                                    {/*    <Link href="" className="">Download the app</Link>*/}
                                                    {/*</div>*/}
                                                </Popover.Panel>
                                            </>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </Popover>
                        {/*<Button href="/login" variant="outline" className="hidden lg:block">*/}
                        {/*  Log in*/}
                        {/*</Button>*/}
                        {/*<button  className="hidden lg:block">*/}
                        {/*    Download*/}
                        {/*</button>*/}
                    </div>
                </Container>
            </nav>
        </header>
    )
}
