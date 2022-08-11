import { Button } from "@mui/material";
import { useState } from "react";
import Logout from "./Logout";
const SigninSignup = () => {
  const [login, setlogin] = useState(false);
  const changeLoginState = () => {
    setlogin({ login: true });
  };
  return (
    <>
      {login ? (
        <Logout state={login} />
      ) : (
        <Button color="warning" onClick={changeLoginState}>
          Login
        </Button>
      )}
    </>
  );
};
export default SigninSignup;
