import React from "react";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="homemargin homebg rounded-5">
      <div className="mypic mt-xxl-5"></div>

      <div className="card about m-3">
        <p>
          My name is Dinuksha Punsara Yapa. Age is 22.I'm Currently Compuer
          Science graduate of University of Bedfordshire.{" "}
        </p>
        
        <p>
          I would like to say about my skills i have gained until now.Mainly I
          have moderate Knowledge about Programming languages like JAVA ,
          JavaScript , HTML , PHP , SQL , C , C++. And also frameworks like
          React , Spring Boot. These Days I'm Currently looking for a Internship
          for get to know about job Environment and gather experience for my
          career.
        </p>

        <h3 className="pt-4">
          And Also I have created several projects for practice coding in free
          times. I put those file's github links below if you need to refer
          those.
        </h3>
      </div>

      <h2 className="pt-5">My Creations GitHub Links</h2>

      <div className="row pt-5 justify-content-md-center">
        <a
          href="https://github.com/Punsara-Y/Trip-App-Frontend.git"
          class="btn btn-success mybtn"
        >
          Trip App Website FrontEnd
        </a>

        <a
          href="https://github.com/Punsara-Y/Trip-App-Backend.git"
          class="btn btn-success  mybtn"
        >
          Trip App Website BackEnd
        </a>

        <a
          href="https://github.com/Punsara-Y/calculator-for-android.git"
          class="btn btn-success mybtn pt-3"
        >
          Android Calculator
        </a>

        <a
          href="https://github.com/Punsara-Y/Portfolio.git"
          class="btn btn-success mybtn pt-3"
        >
          Portfolio Website
        </a>

        <a
          href="https://github.com/Punsara-Y/CODSOFT-Task_03.git"
          class="btn btn-success mybtn"
        >
          Student Management System
        </a>

        <a
          href="https://github.com/Punsara-Y/CODSOFT-Task_02.git"
          class="btn btn-success mybtn"
        >
          Student Grade calculator
        </a>

        <a
          href="https://github.com/Punsara-Y/CODSOFT-Task_01.git"
          class="btn btn-success mybtn"
        >
          Number Guessing Game
        </a>

        <a
          href="https://github.com/Punsara-Y/ControlIt.git"
          class="btn btn-success mybtn pt-3"
        >
          Controlit
        </a>
      </div>

      <div className=" pt-5 cv">
        <h2 className="pt-4">My CV</h2>
        <br></br>
        <a
          href="https://drive.google.com/file/d/16WWSPYKGk6D4D-P3PzgDvszTEeeRjaD3/view?usp=sharing"
          class="btn btn-info btn-lg cvbtn"
        >
          View CV
        </a>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
