import data from '../data/profile.json';

export default function Skills() {
  return (
    <section id="skills" className="p-6">
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}