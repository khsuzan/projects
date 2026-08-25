import React from "react";

export const TechMatrix: React.FC = () => {
  const categories = [
    {
      title: "Mobile & Cross-Platform",
      skills: [
        "Flutter",
        "Dart",
        "BLoC Pattern",
        "Clean Architecture",
        "Dio / Retrofit",
        "Offline SQLite / Hive",
      ],
    },
    {
      title: "Frontend & Web Architecture",
      skills: [
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Vite",
        "Web Audio API",
        "Optimistic UI",
      ],
    },
    {
      title: "Backend & Real-Time Systems",
      skills: [
        "Node.js / Express",
        "RESTful APIs",
        "WebSockets",
        "MQTT Telemetry",
        "Redis Pub/Sub",
        "Python",
      ],
    },
    {
      title: "AI, Speech & IoT Hardware",
      skills: [
        "AI Voice APIs",
        "ElevenLabs Synthesis",
        "BLE Bluetooth Low Energy",
        "Sensor Data Queues",
        "LaTeX KaTeX",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 border-t border-slate-200 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">
            Technical Skills
          </h3>
          <p className="text-sm text-slate-600">
            Core engineering stack and architectural competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded bg-white text-slate-700 text-sm font-mono border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
