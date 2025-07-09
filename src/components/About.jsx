
import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Globe, name: 'React', color: 'text-blue-500' },
    { icon: Zap, name: 'Node.js', color: 'text-green-500' },
    { icon: Database, name: 'MongoDB', color: 'text-green-600' },
    { icon: Code, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: Globe, name: 'Express', color: 'text-gray-600' },
    { icon: Code, name: 'Tailwind CSS', color: 'text-cyan-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm Kishore, a passionate software developer with a strong foundation in competitive programming 
              and full-stack web development. My journey in technology started with solving algorithmic challenges, 
              which developed my problem-solving skills and logical thinking.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building modern web applications using the MERN stack, creating efficient and 
              scalable solutions. I'm always eager to learn new technologies and take on challenging projects 
              that push the boundaries of what's possible.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me participating in coding competitions, contributing to open-source 
              projects, or exploring the latest trends in technology. I believe in continuous learning and 
              staying updated with the ever-evolving tech landscape.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform`} size={24} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Problems Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
