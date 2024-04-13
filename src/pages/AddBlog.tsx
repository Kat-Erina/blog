import { useState } from "react";
import logo from "../assets/logo.png";
import gallery from "../assets/gallery.png";
interface Image {
  name: string;
  url: string;
}
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
      <main className="flex px-12 justify-center py-[40px] bg-slate-300">
        <button className="">Back</button>
        <section className="w-[50%] bg-slate-500">
          <h3 className="pb-[40px]">ბლოგის დამატება</h3>
          {/* <form className="flex flex-col"> */}
          <div
            className="card bg-slate-100 h-[500px]"
            onDragOver={drag}
            onDrop={drop}
            draggable="true"
            role="button"
            tabIndex={0}
          >
            <div className="drag-area">
              {isDragging ? (
                <span>drop images here</span>
              ) : (
                <div className="flex">
                  Drag & Drop images here or{" "}
                  <div>
                    <label htmlFor="file">ატვირთვა</label>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="file "
                      onChange={onFileSelect}
                    ></input>
                  </div>
                </div>
              )}
            </div>

            <div className="container">
              <div className="image">
                <button
                  className="delete"
                  onClick={() => {
                    setImage({ name: "", url: "" });
                  }}
                >
                  x
                </button>
              </div>
              {image.name && (
                <div className="flex flex-row">
                  <img src={gallery} alt={image.name}></img> <p>{image.name}</p>
                </div>
              )}
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
          {/* </form> */}
          <button>done</button>
        </section>
      </main>
    </>
  );
};

export default AddBlog;
