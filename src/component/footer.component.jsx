import footerPoly from "../assets/pic/footer_design.png";

export default function Footer() {
    return (
        <footer className="flex justify-between bg-slate-900 overflow-hidden">
            {/* Hexagonal Background Pattern */}

            {/* Content */}
            <div className="pl-24 ">
                <h2 className="text-4xl font-bold mb-8 mt-24 text-blue-300">
                    Ready to automate your
                    <br />
                    social media with IntaSync?
                </h2>

                <div className="space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
                        Start for free
                    </button>
                    <button className="border-blue-500 border hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
                        Start for free
                    </button>
                </div>
            </div>

            <div>
                <img src={footerPoly} alt="" />
            </div>
        </footer>
    );
}
