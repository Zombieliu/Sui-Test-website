import Link from "next/link"
import {Container} from "../Container";


const ends =[
    {
        title:"Product",
        content:[
            {
                h1:"Overview",
                href:"",
            },
            {
                h1:"Download",
                href:"",
            },
            {
                h1:"Docs",
                href:"",
            },
        ]

    },
    {
        title:"Resources",
        content:[
            {
                h1:"About Us",
                href:"",
            },
            {
                h1:"Download",
                href:"",
            },
            {
                h1:"Docs",
                href:"",
            },
        ]

    },
    {
        title:"Follow Us",
        content:[
            {
                h1:"Discord",
                href:"",
            },
            {
                h1:"Twitter",
                href:"",
            },
            {
                h1:"Telegram",
                href:"",
            },
            {
                h1:"Github",
                href:"",
            }
        ]

    }
]
const participate=[
    {
        href:"",
        img:"/telegram.png"
    },
    {
        href:"",
        img:"/Twitter.png",
    },
    {
        href:"",
        img:"/discord.png",
    },
    {
        href:"",
        img:"/medium.jpeg",
    }

]
const Footer=()=>{
    return(
        <>
            <Container className="py-10">
                <div className="md:flex justify-between pt-12 items-center">

                        <div className="text-center md:flex justify-between mb-10 mt-10 md:mt-0 ">
                            {ends.map(end=>(
                                <div key={end.title} className="mx-10" >
                                    <div className="text-white font-semibold text-base ">
                                        {end.title}
                                    </div>
                                    {end.content.map(item=>(
                                        <div key={item.h1} className="my-3 text-sm transition duration-300 transform hover:translate-x-2 md:text-left text-white">

                                            <Link legacyBehavior href={item.href}>
                                                <a>
                                                    {item.h1}
                                                </a>
                                            </Link>
                                        </div>))}
                                </div>
                            ))}
                        </div>

                    <div>
                        <div  className="flex justify-center md:justify-start " >
                            <img className="w-18" src="/logo.png" alt=""/>
                        </div>
                        <div className="my-5 text-[#4F5568] text-sm text-center  ">
                            Aura Wallet is the safest wallet
                        </div>
                        <div className="flex justify-center items-center md:justify-start   ">
                            {participate.map(item=>(
                                <div key={item.img} className="mr-5 ">
                                    <Link legacyBehavior href={item.href}>
                                        <a  className="">
                                            <img className="w-6" src={item.img} alt=""/>
                                        </a></Link>
                                </div> ))}
                        </div>
                    </div>
                    </div>
            </Container>
            <div className="border-t border-[#1A1A1A] py-5  ">
                <Container className={undefined}>
                <div className="">
                    <div className=" flex justify-center md:block    text-[#969696] text-sm ">
                        ?? 2022 Aura Wallet</div>
                </div>
                </Container>
            </div>
        </>
    )
}
export {
    Footer
}
