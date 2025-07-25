import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loaader, setLoadder] = useState();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // if (authStatus === true) {
    //   navigate("/");
    // } else if (authStatus === false) {
    //   navigate("/login");
    // }

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoadder(false);
  }, [authStatus, navigate, authentication]);

  return loaader ? <h1>loading....</h1> : <>{children}</>;
}

export default Protected;
