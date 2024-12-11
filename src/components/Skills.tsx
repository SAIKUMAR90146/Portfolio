import { Database, Earth, Code2, Brain, GitBranch } from 'lucide-react';

const skills = {
  "Programming Languages": ["Python", "Java", "SQL", "JavaScript"],
  "Web Development": ["HTML5", "CSS"],
  "Data Visualization": ["Tableau", "Power BI"],
  "Databases": ["My SQL", "MongoDB"],
  "Version Control": ["GIT", "GITHUB"]
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm flex flex-col"
              style={{ minHeight: '300px' }} // Add consistent minimum height
            >
              <div className="flex items-center mb-4">
                {index === 0 && <Code2 className="w-6 h-6 text-teal-500 mr-2" />}
                {index === 1 && <Earth className="w-6 h-6 text-teal-500 mr-2" />}
                {index === 2 && <Database className="w-6 h-6 text-teal-500 mr-2" />}
                {index === 3 && <Brain className="w-6 h-6 text-teal-500 mr-2" />}
                {index === 4 && <GitBranch className="w-6 h-6 text-teal-500 mr-2" />}
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="space-y-4 flex-grow">
                {items.map((skill) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-1">
                      <span>{skill}</span>
                      <span className="text-teal-500">
                        {Math.floor(Math.random() * 20 + 80)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-teal-500 h-2 rounded-full"
                        style={{
                          width: `${Math.floor(Math.random() * 20 + 80)}%`,
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
