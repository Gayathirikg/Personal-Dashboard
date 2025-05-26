import profileData from '../data/profile.json';

interface Profile {
  additionalInfo: string[];
  hobbies: string[];
}

export default function Optional() {
  const data = profileData as Profile;

  return (
    <section id="optional" className="p-6">
      <h2 className="text-xl font-semibold mb-4">📌 Additional Information</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        {data.additionalInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-4">🎯 Hobbies</h2>
      <ul className="list-disc list-inside space-y-1">
        {data.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}
