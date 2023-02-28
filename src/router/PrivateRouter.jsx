import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const PrivateRouter = (props) => {
  let { currentUser } = useAuth();

  //! Just for testing purpose
  //   currentUser = {
  //     email: "a@gmail.com",
  //   };

  return currentUser ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
