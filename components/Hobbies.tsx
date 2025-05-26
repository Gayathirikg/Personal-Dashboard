interface HobbiesProps {
    Hobbies: string[];
  }
  
  export default function Hobbies({ Hobbies }: HobbiesProps) {
    return (
      <section id="hobbies" className="p-6">
        <h2 className="text-xl font-semibold">Hobbies</h2>
        <ul className="list-disc list-inside space-y-1">
          {Hobbies.map((hobby, i) => (
            <li key={i}>{hobby}</li>
          ))}
        </ul>
      </section>
    );
  }
  