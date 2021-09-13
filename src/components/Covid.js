import React from "react";
import { useState, useEffect } from "react";

function Covid() {
  const [covidData, setCovidData] = useState("");
  useEffect(() => {
    fetch("https://covid-api.mmediagroup.fr/v1/cases?country=Philippines")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { All } = data;
        setCovidData(All);
      });
  });

  return <h1>{covidData.confirmed}</h1>;
}

export default Covid;
