import data from '../data/profile.json';

export default function Profile() {
  return (
    <section id="profile" className="p-6 text-center">
      <img src={data.photo} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
      <h1 className="text-2xl font-bold mt-2">{data.name}</h1>
      <p className="text-gray-600 mt-1">{data.bio}</p>
      <a href={`mailto:${data.email}`} className="text-blue-500 mt-2 inline-block">
        {data.email}
      </a>
    </section>
  );
}