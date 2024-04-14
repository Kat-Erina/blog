import gallery from "../assets/gallery.png";

export interface Image {
  name: string;
  url: string;
}
type PropsType = {
  drag: React.DragEventHandler<HTMLDivElement>;
  drop: React.DragEventHandler<HTMLDivElement>;
  isDragging: boolean;
  onFileSelect: React.ChangeEventHandler<HTMLInputElement>;
  image: { name: string; url: string };
  setImage: React.Dispatch<React.SetStateAction<Image>>;
};
const DragAndDrop = ({
  drag,
  drop,
  isDragging,
  onFileSelect,
  image,
  setImage,
}: PropsType) => {
  return (
    <div
      className="card bg-slate-100 h-[200px]"
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
            Drag & Drop images here or
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
  );
};

export default DragAndDrop;
