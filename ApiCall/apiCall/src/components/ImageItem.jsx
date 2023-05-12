function ImageItem({ imageProp }) {
  console.log(imageProp);
  return <img src={imageProp.urls.small} />;
}

export default ImageItem;
