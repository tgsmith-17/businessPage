import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="main">
      <h1>About Us</h1>
      <h3>We are a small company located in Virginia, helping leg amputees get back what they lost.</h3>
      <div className="spacer" />
      <div className="divider" />
      <h2>How we work</h2>
      <h3>We work directly with clients, providing products tailored specifically for them and their needs.</h3>
      <h3>If this sounds like something that suits you, feel free to <Link to={'/contact'}>contact us</Link></h3>
    </div>
  );
};

export default About;