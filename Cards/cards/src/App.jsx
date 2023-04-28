import { useState } from "react";
import "./App.css";
import { Course } from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import cSharp from "./images/ccsharp.png";
import web from "./images/kompleweb.jpg";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Kurslarım</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias ullam similique voluptatum, voluptatibus vitae facere pariatur veniam perferendis ipsam?"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias ullam similique voluptatum, voluptatibus vitae facere pariatur veniam perferendis ipsam?"
              />
            </div>
            <div className="column">
              <Course
                image={cSharp}
                title="C#"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias ullam similique voluptatum, voluptatibus vitae facere pariatur veniam perferendis ipsam?"
              />
            </div>
            <div className="column">
              <Course
                image={web}
                title="Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias ullam similique voluptatum, voluptatibus vitae facere pariatur veniam perferendis ipsam?"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
