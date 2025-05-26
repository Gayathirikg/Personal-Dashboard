interface AcademicsProps {
  education: string[];
  certifications: string[];
  projects: { name: string; description: string }[];
  achievements: string[];
}

export default function Academics({ education, certifications, projects, achievements }: AcademicsProps) {
  return (
    <section id="academics" className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">🎓 Education</h2>
      <ul className="list-disc list-inside space-y-1">
        {education.map((edu, i) => <li key={i}>{edu}</li>)}
      </ul>

      <h3 className="text-lg font-semibold">📜 Certifications & Training</h3>
      <ul className="list-disc list-inside space-y-1">
        {certifications.map((cert, i) => <li key={i}>{cert}</li>)}
      </ul>

      <h3 className="text-lg font-semibold">💻 Projects</h3>
      <ul className="list-disc list-inside space-y-1">
        {projects.map(({ name, description }, i) => (
          <li key={i}>
            <strong>{name}:</strong> {description}
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold">🏆 Achievements & Activities</h3>
      <ul className="list-disc list-inside space-y-1">
        {achievements.map((ach, i) => <li key={i}>{ach}</li>)}
      </ul>
    </section>
  );
}
