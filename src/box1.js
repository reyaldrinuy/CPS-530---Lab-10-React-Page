import React from 'react'
import './index.css';


function Box1() {
  return (
    <div className = "boxes">
      <h1>Building the Webpage</h1>
      <p>To build the webpage, I first had to install the framework on my local machine. I installed
        node.js on my personal computer, which was one of the prerequisites of running React JS. Then,
        I had to create a react app through the Windows terminal by running a command. <br></br><br></br>
        After I had my environment set up, I made five additional javascript files: App.js, box1.js, box2.js,
        boxtext.js, and topbar.js. I used the css file automatically placed into the folder and modified it to
        work with my files.  <br></br><br></br>
        Creating the html elements in each javascript file was mostly the same process as creating a normal html page.
        I created a div for my title, background for the boxes with each topic, and the boxes themselves. I designed each
        div through my css file. A main difference between React and regular HTML is that I had to wrap all my divs with a return
        statement in React. Additionally, I had to create a differen javascript file for each div, compared to keeping them all in 
        one HTML file.
      </p>
    </div>
  );
}

export default Box1;