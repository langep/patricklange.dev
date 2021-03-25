import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisibility(!isMobileMenuVisible);
    };

    const burgerMenuIcon = () => {
        if (isMobileMenuVisible) {
            return (
                <svg
                    className="block h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            );
        }
        return (
            <svg
                className="block h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        );
    };

    return (
        <nav
            className={`p-10 absolute top-0 right-0 w-screen md:w-full md:relative md:py-0 md:bg-white md:flex md:flex-col md:justify-end ${
                isMobileMenuVisible ? 'bg-gray-50' : ''
            }`}
        >
            <div className="flex flex-row justify-end">
                <button id="hamburgerbtn" onClick={toggleMobileMenu} className="md:hidden">
                    {burgerMenuIcon()}
                </button>
            </div>
            <div className="flex flex-row justify-center md:justify-end">
                <ul className={`${isMobileMenuVisible ? '' : 'hidden'} md:flex md:flex-row`} id="mobileMenu">
                    <li className="pr-10 py-2">
                        <a
                            className="transition duration-250 ease-in-out text-lg hover:text-green-300"
                            href="/patricklange_resume.pdf"
                            download
                        >
                            Download Resume
                        </a>
                    </li>
                    <li className=" py-2">
                        <a
                            className="transition duration-250 ease-in-out text-lg hover:text-green-300 "
                            href="https://scholar.google.com/citations?hl=en&user=6TxeqJwAAAAJ&view_op=list_works&sortby=pubdate"
                        >
                            Publications
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
