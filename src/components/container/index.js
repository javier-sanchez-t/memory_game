import PropTypes from "prop-types";
import "./styles.css";

const Container = ({ children }) => {
  return <section className="container">{children}</section>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
