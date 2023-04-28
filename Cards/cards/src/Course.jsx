import React from "react";

export const Course = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="kursimg" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
};

// NOTLAR

// Proje açılması : npm create vite@latest
// Functional Component açma kısayolu : rafc

// Alternatif props tanımlaması

// function Course(props){
//   return (
//     <div></div>
//   );
// }

// Props nedir?

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

//Daha verimli JS code

// const title = props.title;
// const description = props.description;
// const {title,description} = props;
