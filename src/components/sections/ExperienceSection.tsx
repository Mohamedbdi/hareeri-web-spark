import { Calendar, MapPin, Award, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Software Development Intern',
      company: 'Simad University',
      location: 'Mogadishu, Somalia',
      period: 'Jun 2023 - Aug 2023',
      description: 'Contributed to web development projects using ASP.NET and C#. Collaborated with senior developers to build responsive web applications and gained hands-on experience with database management.',
      icon: <Building className="h-5 w-5" />,
      achievements: [
        'Developed 3 web applications using ASP.NET Core',
        'Improved database query performance by 25%',
        'Collaborated with cross-functional teams'
      ]
    },
    {
      type: 'certification',
      title: 'Google Data Analytics Certificate',
      company: 'Google',
      location: 'Online',
      period: 'Mar 2023 - May 2023',
      description: 'Comprehensive program covering data analysis, visualization, and business intelligence. Learned to use tools like SQL, Tableau, and R for data-driven decision making.',
      icon: <Award className="h-5 w-5" />,
      achievements: [
        'Mastered SQL for data querying',
        'Created interactive dashboards',
        'Completed 6 hands-on projects'
      ]
    },
    {
      type: 'project',
      title: 'Lead Developer',
      company: 'University Final Project',
      location: 'Academic',
      period: 'Jan 2023 - May 2023',
      description: 'Led a team of 4 students in developing a comprehensive e-commerce platform. Implemented full-stack solution with modern technologies and agile methodology.',
      icon: <Building className="h-5 w-5" />,
      achievements: [
        'Managed team of 4 developers',
        'Implemented CI/CD pipeline',
        'Achieved 98% code coverage'
      ]
    },
    {
      type: 'internship',
      title: 'IT Support Intern',
      company: 'Local Tech Company',
      location: 'Mogadishu, Somalia',
      period: 'Dec 2022 - Feb 2023',
      description: 'Provided technical support and helped maintain IT infrastructure. Gained experience in system administration and troubleshooting.',
      icon: <Building className="h-5 w-5" />,
      achievements: [
        'Resolved 95% of support tickets',
        'Improved system uptime by 15%',
        'Documented troubleshooting procedures'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-primary/10 text-primary';
      case 'certification':
        return 'bg-accent/10 text-accent';
      case 'project':
        return 'bg-secondary/10 text-secondary-foreground';
      default:
        return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Experience & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through internships, certifications, and key projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="gradient-card p-6 rounded-xl shadow-soft card-hover fade-in">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;