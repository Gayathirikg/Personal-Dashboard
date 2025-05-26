import Head from 'next/head';
import profileData from '../data/profile.json';

import Profile from '../components/profile';
import Academics from '../components/Academics';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';

export default function Home() {
  return (
    <>
      <Head>
        <title>{profileData.name} | Full Stack Developer</title>
      </Head>

      {/* Navbar */}
      <nav className="flex gap-6 px-6 py-4 bg-gray-100 text-blue-700 font-medium sticky top-0 z-10 shadow">
        <a href="#profile" className="hover:underline">Profile</a>
        <a href="#academics" className="hover:underline">Academics</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#hobbies" className="hover:underline">Hobbies</a>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-10 space-y-12">
        <Profile
          name={profileData.name}
          bio={profileData.bio}
          email={profileData.email}
          location={profileData.location}
          photo={profileData.photo}
          careerObjective={profileData.careerObjective}
        />

        <Academics
          education={profileData.education}
          certifications={profileData.certifications}
          projects={profileData.projects}
          achievements={profileData.achievements}
        />

        <Skills skills={profileData.skills} />

        <Hobbies Hobbies={profileData.hobbies} />
      </main>
    </>
  );
}
