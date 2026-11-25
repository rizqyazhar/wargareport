import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function CitizenProtectedRoute(props) {
  const { children } = props;

  const navigate = useNavigate();

  const reduxUserLoginState = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (
      !reduxUserLoginState.loggedIn.email &&
      reduxUserLoginState.loggedIn.role !== "Citizen"
    ) {
      navigate("/", { replace: true });
    }
  }, [navigate, reduxUserLoginState]);

  return children;
}
