import Header from '../app/component/header';
import Herosection from '../app/component/herosection';
import About from '../app/component/about';
import Skills from '../app/component/skills';
import Service from '../app/component/service';
import Project from '../app/component/project';
import Contact from '../app/component/contact';
import Footer from '../app/component/footer';


export default function Home() {
  return (
    <div>
      <Header/>
      <Herosection/>
      <About/>
      <Skills/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}
