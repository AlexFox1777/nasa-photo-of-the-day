import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";
function App() {
    const [nasaData, setNasaData] = useState([]);
    const [nasaTitle, setNasaTitle] = useState([]);
    const [nasaExplanation, setNasaExplanation] = useState([]);
    const [nasaDate, setNasaDate] = useState([]);
    useEffect(() => {
       axios
           .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
           .then( response => {
               console.log(response);
               const url =  response.data.url;
               const title =  response.data.title;
               const explanation =  response.data.explanation;
               const date =  response.data.date;
               setNasaDate(date);
               setNasaExplanation(explanation);
               setNasaTitle(title);
               setNasaData(url);
                console.log("url : ", url)
                console.log("title : ", title)
                console.log("date : ", date)
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
        <Main date={nasaDate} text={nasaExplanation} title={nasaTitle} videoSrc = {nasaData}/>
        <Footer/>
    </div>
  );
}

export default App;
