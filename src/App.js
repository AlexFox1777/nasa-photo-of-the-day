import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";
function App() {
    const [nasaData, setNasaData] = useState([]);
    useEffect(() => {
       axios
           .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
           .then( response => {
               console.log(response);
               const url =  response.data.url;
               setNasaData(url);
                console.log("url : ", url)
           })
           .catch(error =>{
               console.log("Error:", error);
           })
    }, []);
  return (
    <div className="App">
     {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>*/}
        <Header/>
        <Main videoSrc = {nasaData}/>
        <Footer/>
    </div>
  );
}

export default App;
