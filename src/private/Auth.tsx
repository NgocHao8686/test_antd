import { message } from "antd";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type AuthProps = {
  children: ReactNode;
}  
const Auth = ({ children }: AuthProps) => {

  const dataLocal: any = localStorage.getItem("user");
  const user = JSON.parse(dataLocal);
  let check: boolean = false;
  if (user.user.id == 1) {
    check = true;
  } else {
    message.error("Ban khong co quyen truy cap");
  }

  return check ? children : <Navigate to={`/signin`} />;
};

export default Auth;
