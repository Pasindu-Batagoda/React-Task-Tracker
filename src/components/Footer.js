import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h4>Pasindu Batagoda</h4>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
