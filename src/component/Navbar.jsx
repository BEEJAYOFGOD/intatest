import intaLogo from "../assets/icons/intaLogo.png";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-2 px-4 sticky top-0 bg-body z-50">
            <ul className="flex items-center-safe gap-8">
                <li>
                    <a href="/" className="flex items-center">
                        <img className="w-12" src={intaLogo} alt="inta" />
                        <p className="font-bold">Intasync</p>
                    </a>
                </li>
                <li className="ml-12">
                    <a className="flex flex-col transition-all ease-in cursor-pointer font-semibold after:content-[''] after:h-1 after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 duration-500 after:bg-blue-500">
                        Features
                    </a>
                </li>
                <li>
                    <a className="flex flex-col transition-all ease-in cursor-pointer font-semibold after:content-[''] after:h-1 after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 duration-500 after:bg-blue-500">
                        Contact Us
                    </a>
                </li>
            </ul>

            <ul className="flex items-center-safe gap-4">
                <li>
                    <a
                        className="bg-primary  hover:bg-primary/60 text-white px-4 py-2 rounded-md"
                        href=""
                    >
                        Sign in
                    </a>
                </li>
                <li>
                    <a
                        className="bg-secondary hover:bg-secondary/60 text-white  px-4 py-2 rounded-md"
                        href=""
                    >
                        Start for free
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
