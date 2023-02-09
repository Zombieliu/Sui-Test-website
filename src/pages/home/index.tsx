import {Header} from "../../components/header";
import {Hero} from "../../components/hero";
import {Footer} from "../../components/footer";
import Community from "../../components/community";
import {PrimaryFeatures} from "../../components/PrimaryFeatures";

const Home = () =>{
    return (
        <div className="bg-black">
          <Header/>

            <main>
                <Hero/>
                <PrimaryFeatures/>
                <Community/>

            </main>
            <Footer/>
        </div>
    )
}

export default Home


