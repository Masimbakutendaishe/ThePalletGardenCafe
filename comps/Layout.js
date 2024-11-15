import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Layout=({children})=>{
    return(
        <div className="content">
            <Navbar/>
            <HeroSection/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;