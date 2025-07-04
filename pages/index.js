import Head from 'next/head';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next.js App with Sentry Integration</title>
      </Head>
      <h1>Welcome to the Next.js App with Sentry Integration</h1>
      <Image
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Close-up of a computer screen displaying programming code in a dark environment"
        width={940}
        height={650}
      />
    </div>
  );
};

export default HomePage;