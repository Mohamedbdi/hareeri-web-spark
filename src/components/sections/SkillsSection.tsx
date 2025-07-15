import { useState, useEffect } from 'react';
import { Code, Palette, Video, Database, Globe, Camera } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Web Development',
      icon: <Code className="h-6 w-6" />,
      items: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'ASP.NET', level: 88 },
        { name: 'C#', level: 85 },
      ]
    },
    {
      category: 'Database & Backend',
      icon: <Database className="h-6 w-6" />,
      items: [
        { name: 'SQL Server', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'API Development', level: 82 },
        { name: 'Node.js', level: 75 },
      ]
    },
    {
      category: 'Design & Multimedia',
      icon: <Palette className="h-6 w-6" />,
      items: [
        { name: 'Adobe Photoshop', level: 90 },
        { name: 'Adobe Premiere Pro', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Figma', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skillset spanning web development, database management, 
            and multimedia design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`gradient-card p-8 rounded-xl shadow-soft card-hover ${
                isVisible ? 'fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${
                          isVisible ? 'w-full' : 'w-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <Globe className="h-8 w-8" />, name: 'Web Development' },
              { icon: <Database className="h-8 w-8" />, name: 'Database' },
              { icon: <Palette className="h-8 w-8" />, name: 'Design' },
              { icon: <Video className="h-8 w-8" />, name: 'Video Editing' },
              { icon: <Camera className="h-8 w-8" />, name: 'Photography' },
              { icon: <Code className="h-8 w-8" />, name: 'Programming' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-card/50 transition-colors ${
                  isVisible ? 'fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary">{tech.icon}</div>
                <span className="text-sm text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;