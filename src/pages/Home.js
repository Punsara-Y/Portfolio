import React from "react";
import { Navbar } from "../components/Navbar";



export default function Home() {
  return (

    

    <div className="homemargin homebg rounded-5">

            <div className="mypic mt-xxl-5"></div>
              
        
       <div className="card about m-3">

        <p>My name is Dinuksha Punsara Yapa.
        Age is 22.I'm Currently Student at SLIIT CITY UNI in 
        Compuer Science And Software Engineering. I Was finished my 2nd year
        in June 2024.Now I'm Preparing for the final year of my degree. </p>
        <p>
        I would like to say about my skills i have gained until now.Mainly I have moderate Knowledge about
        Programming languages like JAVA , JavaScript , HTML , PHP , SQL , C , C++. And also frameworks like 
        React , Spring Boot. These Days I'm Currently looking for a Internship for get to know about
        job Environment and gather the experience.
        </p>

        <h2 className="pt-4">
        And Also I have created website and android application for practice coding in free times.
        I put those file's github links below if you need to refer those.
        </h2>

        </div>
       

        

    <p className="pt-5">My Creations GitHub Links</p>

    <div className='row pt-4 justify-content-md-center'>

    <a href="https://github.com/Punsara-Y/Trip-App-Frontend.git" class="btn btn-success col-2 p-3  animation mybtn" >Trip App Website FrontEnd</a>

    <a href="https://github.com/Punsara-Y/Trip-App-Backend.git" class="btn btn-success col-2 p-3  mybtn" >Trip App Website BackEnd</a>

    <a href="https://github.com/Punsara-Y/calculator-for-android.git" class="btn btn-success col-2 p-3  mybtn" >Android Calculator</a>

    <a href="https://github.com/Punsara-Y/Portfolio-web.git" class="btn btn-success col-2 p-3 mybtn" >Portfolio Website</a>
    </div>


    <div className=' pt-4 cv'>
    <p className='pt-4'>My CV</p>
    <br></br>
    <a href="https://drive.google.com/file/d/1LUFZo5Cg6TI5TPtrNWhcLZ1TQfzyODuD/view?usp=drive_link" class="btn btn-info btn-lg cvbtn">View CV</a>
</div>



<br></br><br></br><br></br>
       
        
       
       
    </div>

    
  )
}
