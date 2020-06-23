import Layout from "../components/Layout";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Index = () => (
  <Layout>
    <Home id="home" />
    <About id="about" />
    <Projects id="projects" />
    <Contact id="contact" />
    <Footer />
  </Layout>
);

export default Index;
