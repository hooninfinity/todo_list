import { BrowserRouter } from "react-router-dom";

const LoginRoute = ({ children }) => {
  return (
    <BrowserRouter basename={ProcessingInstruction.env.PUBLIC_URL}>
      {children}
    </BrowserRouter>
  );
};

export default LoginRoute;
