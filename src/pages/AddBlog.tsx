import { useState } from "react";
import logo from "../assets/logo.png";
import DragAndDrop, { Image } from "../components/DragAndDrop";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationScheme from "../components/validation-scheme";

const AddBlog = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(validationScheme) });
  async function onInfoSubmit(data: object) {
    console.log(data);
  }

  const [image, setImage] = useState<Image>({ name: "", url: "" });
  const [isDragging, setIsDragging] = useState(false);

  const onFileSelect: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;
    if (files == null) return;
    else {
      if (files.length === 0) return;
      setImage({ name: files[0].name, url: URL.createObjectURL(files[0]) });
    }
  };

  const drag: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const drop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files;
    setImage({ name: file[0].name, url: URL.createObjectURL(file[0]) });
  };

  const name = "Katerina";
  console.log(name.toString(2));
  let bin = [];
  for (let i = 0; i < name.length; i++) {
    bin.push(name[i].charCodeAt().toString(2));
  }

  console.log(bin);
  function upload(e) {
    // const reader = new FileReader();
    // console.log(reader);
    // reader.addEventListener("load", () => {
    //   console.log(reader.result);
    // });
    // reader.readAsDataURL(files[0]);

    const files = e.target.files;
    const picReader = new FileReader();

    picReader.readAsDataURL(files[0]);
    console.log(files);

    picReader.addEventListener("load", () => {
      console.log(picReader.result);
      base64ToBinary(picReader.result);
      localStorage.setItem("image", picReader.result);
    });
  }

  function base64ToBinary(base64String) {
    const binaryString = atob(base64String);
    console.log(binaryString);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
    console.log(bytes);
    for (let i = 0; i < length; i++) {
      console.log(bytes[i]);
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  return (
    <>
      <header className="flex justify-center py-6 border-b border-gray">
        <img className="h-6" src={logo} alt="logo"></img>
      </header>
      <main className="flex px-12 justify-center  bg-slate-300">
        <button className="">Back</button>
        <section className="w-[40%] bg-slate-500">
          <h3 className="pb-[40px]">ბლოგის დამატება</h3>
          <DragAndDrop
            drag={drag}
            drop={drop}
            isDragging={isDragging}
            onFileSelect={onFileSelect}
            image={image}
            setImage={setImage}
            upload={upload}
          />
          <form className="flex flex-col" onSubmit={handleSubmit(onInfoSubmit)}>
            <div className="flex flex-row">
              <div>
                <span className=" float-right text-warning text-xs">
                  {errors.author?.message}
                </span>
                <label>ავტორი *</label>
                <br></br>
                <input id="author" type="text" {...register("author")}></input>
                <ul>
                  <li>მინიმუმ 4 სიმბოლო</li>
                  <li>მინიმუმ 2 სიტყვა</li>
                  <li>მხოლოდ ქართული სიმბოლოები</li>
                </ul>
              </div>
              <div>
                <label>სათაური *</label>
                <br></br>
                <input type="text" id="title" {...register("title")}></input>
                <p>მინიმუმ 2 სიმბოლო</p>
              </div>
            </div>
            <label>აღწერა*</label>
            <textarea {...register("description")}></textarea>
            <p>მინიმუმ 2 სიმბოლო</p>
            <div>
              <div>
                <label>გმოქვეყნების თარიღი*</label>
                <input {...register("date")} type="date"></input>
              </div>
              <div>
                <label>აირჩიეთ კატეგორია *</label>
                {/* <select {...register("category")}></select> */}
              </div>
            </div>
            <label>მეილი</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Example@redberry.ge"
            ></input>
            <button type="submit">done</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default AddBlog;
