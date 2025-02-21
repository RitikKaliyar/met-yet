import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: '90%' },
    { name: 'React', level: '85%' },
    { name: 'Tailwind CSS', level: '80%' },
    { name: 'Node.js', level: '75%' },
    { name: 'Python', level: '70%' },
    { name: 'Git', level: '85%' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-lg font-semibold">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;