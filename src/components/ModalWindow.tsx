import { useForm } from "react-hook-form";
import x from "../assets/add.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import validationScheme from "../login-schema";
import axios from "axios";
import { useState } from "react";
import Success from "./Success";
import useLogin from "../store/store";
import Error from "../svg/Error";

const ModalWindow = () => {
  const { isVisible, toggleIsVisible } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationScheme),
  });
  const [isStatus, setStatus] = useState<boolean>(false);
  const [statusCode, setStatusCode] = useState<number>(0);

  async function onSubmit(data: object) {
    try {
      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        JSON.stringify(data),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setStatusCode(response.status);
    } catch (error: unknown) {
      error.response.status === 422 ? setStatus(true) : setStatus(false);
    }
  }

  return (
    <section
      className={`${
        isVisible
          ? "w-full h-full fixed inset-0 z-30 bg-dark bg-opacity-[0.24] flex justify-center items-center"
          : "hidden"
      }`}
    >
      {statusCode ? (
        <Success />
      ) : (
        <section className=" w-480 h-17 bg-white rounded-xl flex flex-col  ">
          <section className="flex-grow px-5 ">
            {" "}
            <img
              src={x}
              className="float-right w-6 h-6 mt-2"
              onClick={toggleIsVisible}
            />
          </section>
          <h2 className="text-center text-2xl font-bold">შესვლა</h2>
          <form
            className="flex flex-col h-full px-6 pt-6 pb-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="email" className="font-medium text-xs">
              ელ-ფოსტა
            </label>
            <input
              placeholder="example@redberry.ge"
              className={`px-4 py-3 mt-2 rounded-xl border-1.5 ${
                errors.email ? "border-error" : "border-violet"
              } mb-2 focus:outline-none`}
              onKeyDown={() => setStatus(false)}
              type="email"
              id="email"
              {...register("email")}
            ></input>
            {errors.email && (
              <div className="text-xs flex">
                <Error />
                <p className="pl-3 text-error text-xs">
                  {errors.email.message}
                </p>
              </div>
            )}

            {isStatus && (
              <div className="text-xs flex">
                {/* <Error onClick={() => {}} /> */}
                <p className="pl-3 text-error text-xs">
                  ელ-ფოსტა ვერ მოიძებნა.
                </p>
              </div>
            )}
            <button
              className="mt-6 w-full bg-violet py-2.5 text-white text-sm font-medium rounded-lg"
              type="submit"
            >
              შესვლა
            </button>
          </form>
        </section>
      )}
    </section>
  );
};

export default ModalWindow;
