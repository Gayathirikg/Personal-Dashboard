import Head from 'next/head';
import Navbar from '../components/navbar';
import Profile from '../components/profile';
import { Academics } from '../components/Academics';
import Skills from '../components/Skills';
import Optional from '../components/Optional';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Dashboard</title>
        <meta name="description" content="My personal dashboard" />
      </Head>
      <Navbar />
      <main className="max-w-3xl mx-auto">
        <Profile />
        <Academics />
        <Skills />
        <Optional />
      </main>
    </div>
  );
}
