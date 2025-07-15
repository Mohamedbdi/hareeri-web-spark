import { Download, Award, Users, Code } from 'lucide-react';
import { Button } from '../ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Computer Science graduate with a strong foundation in 
            full-stack development and multimedia design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                My Journey
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Mohamed Abdisalan Ali, a recent Computer Science graduate with a 
                passion for creating innovative digital solutions. My journey began with 
                a fascination for how technology can solve real-world problems and 
                enhance user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Throughout my academic career and professional internships, I've 
                developed expertise in full-stack web development, database management, 
                and multimedia design. I believe in the power of clean code, 
                user-centered design, and continuous learning.
              </p>
            </div>

            <div className="pt-4">
              <Button className="btn-accent px-8 py-6 text-lg group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="gradient-card p-6 rounded-lg shadow-soft card-hover">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">15+</h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 rounded-lg shadow-soft card-hover">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">5+</h4>
                  <p className="text-muted-foreground">Certificates</p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 rounded-lg shadow-soft card-hover">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">3+</h4>
                  <p className="text-muted-foreground">Internships</p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 rounded-lg shadow-soft card-hover">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Code className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">2+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;