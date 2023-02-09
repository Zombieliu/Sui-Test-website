import {Header} from "../header";
import {Hero} from "../hero";
import {Footer} from "../footer";
import {Container} from "../Container";
import Link from "next/link";


const Community = () =>{
    return (
      <>
          <Container className="py-10">
            <div className="text-center text-white text-3xl font-black ">
                JOIN OUR COMMUNITY
            </div>
              <div className="flex justify-center text-white">
                  <button className="mr-3 flex px-5 py-2 items-center bg-[#4DA9E8] rounded-lg">
                      <img className="w-5 mr-2" src="/Twitter.png" alt=""/>
                      <div className="text-sm font-semibold">Twitter</div>
                  </button>
                  <button className="flex px-5 py-2 items-center bg-[#7788D4] rounded-lg">
                      <img className="w-5 mr-2" src="/discord.png" alt=""/>
                      <div className="text-sm font-semibold">Discord</div>
                  </button>

              </div>
          </Container>
      </>
    )
}

export default Community
