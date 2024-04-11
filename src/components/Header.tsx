import logo from "../assets/logo.png";
import Button from "./Button";
import useLogin from "../store/store";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { isAllowed, toggleIsVisible } = useLogin();
  const navigate = useNavigate();

  return (
    <header className=" flex flex-row justify-between px-[76px] py-7">
      <img className="h-6 w-[150px]" alt="logo" src={logo} />

      {isAllowed ? (
        <Button
          text="ბლოგის დამატება"
          fnc={() => navigate("/add-blog")}
        ></Button>
      ) : (
        <Button text={"შესვლა"} fnc={toggleIsVisible} />
      )}
    </header>
  );
};

export default Header;
