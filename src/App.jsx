import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./section/hero.section";
import FeaturesSection from "./section/feature.section";
import ContentSchedulingSection from "./section/contentscheduling.section";
import Footer from "./section/footer.section";

function App() {
    return (
        <div className="bg-body">
            <Navbar />
            <Hero />
            <FeaturesSection />
            <ContentSchedulingSection />
            <Footer />
        </div>
    );
}

export default App;
