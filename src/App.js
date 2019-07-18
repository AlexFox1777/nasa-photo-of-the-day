import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";
function App() {
    const aboutNasa = "NASA is led by Administrator Jim Bridenstine," +
        " NASA's 13th administrator. Before joining NASA," +
        " Bridenstine served in the U.S. Congress," +
        " representing Oklahoma’s First Congressional District," +
        " serving on the Armed Services Committee and the Science," +
        " Space and Technology Committee. Bridenstine’s " +
        "career in federal service began in the U.S. Navy," +
        " flying the E-2C Hawkeye off the USS Abraham Lincoln " +
        "aircraft carrier. ";
    const [nasaData, setNasaData] = useState("");
    const [nasaTitle, setNasaTitle] = useState("");
    const [nasaExplanation, setNasaExplanation] = useState("");
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
        <Main date={nasaDate}
              text={nasaExplanation === "" ? aboutNasa : nasaExplanation}
              title={nasaTitle === "" ? "NASA" : nasaTitle}
              src = {nasaData}/>
        <Footer/>
    </div>
  );
}

export default App;
