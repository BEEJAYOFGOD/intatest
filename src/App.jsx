import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/hero.component";
import FeaturesSection from "./component/feature.section";
import ContentSchedulingSection from "./component/contentscheduling.section";
import Footer from "./component/footer.component";

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
