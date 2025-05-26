import Image from 'next/image';

interface ProfileProps {
  name: string;
  bio: string;
  email: string;
  location: string;
  photo: string;
  careerObjective: string;
}

export default function Profile({ name, bio, email, location, photo, careerObjective }: ProfileProps) {
  return (
    <section id="profile" className="space-y-4 text-center">
      <Image
        src={`/${photo}`}
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mx-auto"
      />
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-lg">{bio}</p>
      <p>{location}</p>
      <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
        {email}
      </a>
      <p className="mt-4">{careerObjective}</p>
    </section>
  );
}
