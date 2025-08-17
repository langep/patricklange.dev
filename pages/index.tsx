import Head from 'next/head';
import Layout from '../components/layout';
import { siteTitle, name } from '../components/constants';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex-auto flex justify-center items-center">
                <div className="p-10">
                    <p className="font-medium text-5xl md:text-9xl">Hi.</p>
                    <p className="text-base md:text-3xl py-5">
                        My name is <span className="">{name}</span>. <br />I am a{' '}
                        <span className="">Software Engineer</span> interested in conversational AI and video games. <br />I currently
                        work on LLM inference optimizations for AWS Neuron hardware at Amazon.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
