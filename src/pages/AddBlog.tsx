import { useState } from "react";
import logo from "../assets/logo.png";
import DragAndDrop, { Image } from "../components/DragAndDrop";

const AddBlog = () => {
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
          />
          <form className="flex flex-col">
            <div className="flex flex-row">
              <div>
                <label>ავტორი *</label>
                <br></br>
                <input type="text"></input>
                <ul>
                  <li>მინიმუმ 4 სიმბოლო</li>
                  <li>მინიმუმ 2 სიტყვა</li>
                  <li>მხოლოდ ქართული სიმბოლოები</li>
                </ul>
              </div>
              <div>
                <label>სათაური *</label>
                <br></br>
                <input type="text"></input>
                <p>მინიმუმ 2 სიმბოლო</p>
              </div>
            </div>
            <label>აღწერა*</label>
            <textarea></textarea>
            <p>მინიმუმ 2 სიმბოლო</p>
            <div>
              <div>
                <label>გმოქვეყნების თარიღი*</label>
                <input type="date"></input>
              </div>
              <div>
                <label>აირჩიეთ კატეგორია *</label>
                <select></select>
              </div>
            </div>
            <label>მეილი</label>
            <input type="email" placeholder="Example@redberry.ge"></input>
          </form>
          <button>done</button>
        </section>
      </main>
    </>
  );
};

export default AddBlog;
