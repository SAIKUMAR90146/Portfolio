import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Excelerate.",
    role: "Data Analyst Intern",
    period: "December 2024 - Present",
    location: "Remote",
    description: "Cleaning and Preparing datasets for analysis, ensuring data quality and consistency."
  },
  {
    company: "Accenture Data Visulaization.",
    role: "Data Analyst Intern",
    period: "March 2024 - April 2024",
    location: "Remote",
    description: "Contributed to technical documentation, streamlining development process and improving team collaboration, leading to a 15% increase in development efficiency. "
  },
  {
    company: "Steel Plant Web Development.",
    role: "Web Developer Intern",
    period: "June 2023 - July 2023",
    location: "Visakhapatnam",
    description: "Developed a safty slot booking website."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-5/12" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full" />
                <div className="w-5/12 bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-teal-500 font-semibold mb-2">{exp.company}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
