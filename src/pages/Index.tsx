
import Header from '../components/Header';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
