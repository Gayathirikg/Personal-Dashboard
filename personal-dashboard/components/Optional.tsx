import data from '../data/profile.json';

export default function Optional() {
  return (
    <section id="optional" className="p-6">
      <h2 className="text-xl font-semibold mb-2">Hobbies</h2>
      <ul className="list-disc list-inside space-y-1">
        {data.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}