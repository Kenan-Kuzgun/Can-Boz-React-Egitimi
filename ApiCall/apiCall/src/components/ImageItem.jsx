function ImageItem({ imageProp }) {
  console.log(imageProp);
  return <img src={imageProp.urls.regular} alt="" srcset="" />;
}

export default ImageItem;
