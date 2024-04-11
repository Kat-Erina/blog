import useLogin from "../store/store";
import x from "../assets/add.svg";
import Correct from "../svg/Correct";

const Success = () => {
  const { toggleIsVisible, toggleIsAllowed } = useLogin();
  return (
    <section className=" w-480 h-17 bg-white rounded-xl flex flex-col  ">
      <section className="flex-grow px-5 ">
        <img
          src={x}
          className="float-right w-6 h-6 mt-2"
          onClick={() => {
            toggleIsAllowed();
            toggleIsVisible();
          }}
        />
      </section>
      <div className="w-full flex flex-col items-center justify-center py-[20px]">
        <Correct className="pt-4" />
        <p className="text-[20px] font-bold mt-1">წარმატებული ავტორიზაცია</p>
      </div>
      <div className="flex flex-col h-full px-6  pb-10">
        <button
          className="mt-6  w-full bg-violet py-2.5 text-white text-sm font-medium rounded-lg"
          onClick={() => {
            toggleIsAllowed();
            toggleIsVisible();
          }}
        >
          კარგი
        </button>
      </div>
    </section>
  );
};

export default Success;
