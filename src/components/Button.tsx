interface ButtonProps {
  text: string;
  fnc: () => void;
}

const Button = ({ text, fnc }: ButtonProps) => {
  return (
    <button
      className=" bg-violet px-1/4 py-[10px] rounded-lg text-white text-sm font-medium"
      onClick={() => fnc()}
    >
      {text}
    </button>
  );
};

export default Button;
