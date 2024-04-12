import { useState, useRef } from "react";
import logo from "../assets/logo.png";
const AddBlog = () => {
  const [image, setImages] = useState({ name: "", url: "" });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onfileSelect(event) {
    const files = event.target.files;
    console.log(files);
    if (files.length === 0) return;

    setImages({ name: files[0].name, url: URL.createObjectURL(files[0]) });
  }
  console.log(image);
  return (
    <>
      <header className="flex justify-center py-6 border-b border-gray">
        <img className="h-6" src={logo} alt="logo"></img>
      </header>
      <main className="flex px-12 justify-center py-[40px] bg-slate-300">
        <button className="">Back</button>
        <section className="w-[50%] bg-slate-500">
          <h3 className="pb-[40px]">ბლოგის დამატება</h3>
          <form className="flex flex-col">
            <div className="card">
              <div className="drag-area">
                {isDragging ? (
                  <span>drop images here</span>
                ) : (
                  <>
                    Drag & Drop images here or
                    <span role="button" onClick={selectFiles}>
                      Upload
                    </span>
                  </>
                )}

                <input
                  name="file"
                  type="file"
                  className="file"
                  ref={fileInputRef}
                  onChange={onfileSelect}
                ></input>
              </div>

              <div className="container">
                <div className="image">
                  <span
                    className="delete"
                    onClick={() => {
                      setImages({ name: "", url: "" });
                    }}
                  >
                    x
                  </span>
                </div>
                <img src={image.url} alt={image.name}></img>
              </div>
            </div>
            {/* <div className="flex flex-row">
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
            <input type="email" placeholder="Example@redberry.ge"></input> */}
          </form>
          <button>done</button>
        </section>
      </main>
    </>
  );
};

export default AddBlog;
