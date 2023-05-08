import ImageItem from "./ImageItem";
function ImageList({ imagesPlaceholder }) {
  return (
    <div>
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} imageProp={image} />;
      })}
    </div>
  );
}

export default ImageList;
