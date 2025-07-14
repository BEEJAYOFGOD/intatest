import Dashboardpng from "../assets/pic/dashboardpic.png";

const Hero = () => {
    return (
        <section className="mt-36 animate-side-up-bounce">
            <h1 className="text-6xl max-w-3xl text-center mx-auto ">
                Running a business is hard. Marketing shouldn’t be
            </h1>
            <p className="max-w-xl text-center mt-8 mx-auto">
                IntaSync automates your social media strategy—scheduling,
                campaigns, and engagement—so you can focus on what matters.
                Streamline marketing and drive growth effortlessly.
            </p>

            <span className="mx-auto w-fit mt-8 flex gap-4">
                <button className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/80">
                    Start for free
                </button>
                <button className="bg-secondary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-secondary/80">
                    Learn More
                </button>
            </span>
            <div className="w-fit mx-auto mt-12">
                <img src={Dashboardpng} alt="" />
            </div>
        </section>
    );
};

export default Hero;
