
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code, Smartphone, Server, Database, Globe, Trophy, Gamepad2, Dumbbell, Bike } from "lucide-react";

const Index = () => {
  const skills = {
    "Programming Languages": ["Dart", "Go", "Python", "HTML", "CSS", "JavaScript", "Kotlin"],
    "Frameworks": ["Flutter", "React.js", "Next.js", "Android Native With Compose", "Go Fiber"],
    "Tools": ["Docker", "GitHub", "Ngrok", "gRPC", "Figma", "Postman"],
    "Dev Ops": ["Linux", "DigitalOcean"]
  };

  const experiences = [
    {
      title: "SDE Intern",
      company: "SHORTSQUEEZE PRIVATE LIMITED",
      period: "Feb 2024 - Present",
      description: [
        "Android Native With compose",
        "Flutter mobile app development",
        "Next.js web development", 
        "Backend server development using gRPC and Go"
      ]
    },
    {
      title: "Project Intern",
      company: "Metacomic",
      period: "May 2023 – Nov 2023",
      description: [
        "Flutter app development for cross-platform mobile applications"
      ]
    }
  ];

  const projects = [
    {
      title: "Podium Pe — Mobile App",
      description: "Cross-platform mobile application built with Flutter and modern backend technologies",
      tech: ["Flutter", "Go", "gRPC", "Docker", "Python", "Ngrok"],
      link: "https://www.podiumpe.com/download-now.html",
      type: "Mobile App"
    },
    {
      title: "Podium Pe - Website",
      description: "Professional company website with modern web technologies",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://www.podiumpe.com",
      type: "Website"
    },
    {
      title: "Inspire Manak — Mobile App",
      description: "Cross-platform scholarship application with state management",
      tech: ["Flutter", "Provider", "Docker", "Ngrok"],
      link: "https://play.google.com/store/apps/details?id=space.shortsqueeze.inspire.inspire_scholarship",
      type: "Mobile App"
    },
    {
      title: "CYBERCELL — Government Web App",
      description: "Government web application with modern full-stack architecture",
      tech: ["Next.js", "Go", "Python", "Docker", "Ngrok"],
      link: "#",
      type: "Web App"
    }
  ];

  const achievements = [
    "Participated in NSTL Science Event 2022",
    "Participated in Ideation 2023 (college event)"
  ];

  const certifications = [
    "Introduction to Data Analytics Course Completion Certificate"
  ]

  const hobbies = [
    { name: "Playing Video Games", icon: Gamepad2 },
    { name: "Body Building & Calisthenics", icon: Dumbbell },
    { name: "Traveling & Bike Riding", icon: Bike }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = `${import.meta.env.BASE_URL}sadiq_resume_2025_03_10.pdf`;
  link.download = 'ShaikSadiqResume.pdf';
  link.click();
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Shaik Sadiq</h1>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Shaik <span className="text-blue-600">Sadiq</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full-Stack Developer & Flutter App Developer
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Passionate about creating modern web applications and cross-platform mobile apps with clean code and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleDownload} size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer and Flutter specialist based in Visakhapatnam, AP, India. 
                Currently pursuing B.Tech in CSE-AIML at Raghu Engineering College, I specialize in creating 
                modern web applications and cross-platform mobile apps.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With experience in Flutter, Go, React.js, and Next.js, I enjoy building scalable applications 
                that solve real-world problems and deliver exceptional user experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  Visakhapatnam, AP, India
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  ssk138848@gmail.com
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  +91 6309742060
                </div>
              </div>
            </div>
            <div>
              <Card className="p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800">B.Tech in CSE-AIML</h4>
                    <p className="text-gray-600">Raghu Engineering College</p>
                    <p className="text-sm text-gray-500">May 2025 • GPA: 7.51/10.0</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">10th Grade</h4>
                    <p className="text-gray-600">Sri Chaitanya Techno School</p>
                    <p className="text-sm text-gray-500">May 2021 • 87%</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-xl text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">{exp.period}</Badge>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {project.type === "Mobile App" ? <Smartphone className="h-6 w-6 text-blue-600 mr-3" /> : <Globe className="h-6 w-6 text-blue-600 mr-3" />}
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Hobbies */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Trophy className="h-8 w-8 text-yellow-600 mr-3" />
                Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-4 shadow-md">
                    <p className="text-gray-700">{achievement}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Hobbies & Interests</h2>
              <div className="space-y-4">
                {hobbies.map((hobby, index) => (
                  <Card key={index} className="p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <hobby.icon className="h-6 w-6 text-blue-600 mr-3" />
                      <p className="text-gray-700">{hobby.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
             <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <BadgeCheck className="h-8 w-8 text-green-600 mr-3" />
                Certifications</h2>
              <div className="space-y-4">
                {certifications.map((certificate, index) => (
                 <a href="https://www.coursera.org/account/accomplishments/certificate/K5XXLJM99OGF">
                   <Card key={index} className="p-4 shadow-md">
                    <p className="text-gray-700">{certificate}</p>
                  </Card>
                 </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-12 opacity-90">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="mailto:ssk138848@gmail.com">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </a>
            <a href="tel:+916309742060">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="mr-2 h-5 w-5" />
                Call Me
              </Button>
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/shaik-sadiq-890078204/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/mohidsk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <Github className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center text-gray-400">
        <p>&copy; 2025 Shaik Sadiq. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
