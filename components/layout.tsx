import Head from 'next/head';
import { siteTitle } from './constants';
import Navbar from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Personal website of Patrick Lange" />
                <meta property="og:image" content="/images/profile.jfif" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <header className="container mx-auto p-5">
                <Navbar />
            </header>
            <main className="flex-auto flex flex-col">{children}</main>
            <footer className="container mx-auto p-5"></footer>
        </div>
    );
}
