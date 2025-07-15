import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className={`space-y-6 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-2">
              <p className="text-accent font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Mohamed
                <span className="block text-primary">Abdisalan Ali</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Computer Science Graduate & Full Stack Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate about creating innovative digital solutions that bridge technology 
              and creativity. Specializing in web development, multimedia design, and 
              user-centered experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="btn-primary px-8 py-6 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                View My Work
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-primary rounded-lg transform rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-primary rounded-lg transform -rotate-6 opacity-10 animate-pulse delay-1000"></div>
              
              {/* Profile image */}
              <div className="relative z-10 floating">
                <img
                  src="/lovable-uploads/910a29b6-2cb2-4c6c-999f-46b310ee650e.png"
                  alt="Mohamed Abdisalan Ali"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;