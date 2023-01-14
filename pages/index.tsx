import type { NextPage } from 'next';
import Head from 'next/head';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dcode | Decentralized Learning Platform for Coders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
        >
          <div className="relative">
            <Image
              height={300}
              width={1920}
              alt="Carousel 1"
              src="/assets/1.png"
            />
          </div>
          <div className="relative">
            <Image
              height={1080}
              width={1920}
              alt="Carousel 2"
              src="/assets/2.png"
            />
          </div>
          <div className="relative">
            <Image
              height={1080}
              width={1920}
              alt="Carousel 3"
              src="/assets/3.png"
            />
          </div>
          <div className="relative">
            <Image
              height={300}
              width={1920}
              alt="Carousel 4"
              src="/assets/4.png"
            />
          </div>
          <div className="relative">
            <Image
              height={1080}
              width={1920}
              alt="Carousel 5"
              src="/assets/5.png"
            />
          </div>
          <div className="relative">
            <Image
              height={1080}
              width={1920}
              alt="Carousel 6"
              src="/assets/6.png"
            />
          </div>
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
