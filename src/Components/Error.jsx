import { Link } from "react-router-dom";
import Button from "./Button.jsx";

const Error = () => {
  <div id="error-div">
    <h1>404 Page Not Found</h1>
    <div className="results-btn">
      <Link to="/">
        <Button btnText="RETURN" />
      </Link>
    </div>
  </div>;
};

export default Error;
