interface SkillsProps {
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
    softSkills: string[];
  };
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category}>
          <h3 className="capitalize font-semibold">{category}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {(skillList as string[]).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
