import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/Css/Drugtable.css";
import Table from "react-bootstrap/Table";
const DrugListTable = () => {
  const [drugData, setDrugData] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://hidocdr.com/api/hidoc-us/drug/getDrugList"
      );
      console.log("API Response:", response.data);

      const drugs = response.data.data.drugData;
      setDrugData(drugs);
    } catch (error) {
      console.error("Error fetching drug list:", error);
    }
  };

  const handleDrugSelect = (drug) => {
    setSelectedDrug(drug);
  };
  const handleClick = (category) => {
    alert(`Clicked on ${category}`);
  };

  return (
    <>
      <div className="banner">
        <h1>Your one-stop Solution for MEDICAL LEARNING & UPDATES</h1>
      </div>

      <div className="button-container">
        <button className="button" onClick={() => handleClick("Anesthesia")}>
          Anesthesia
        </button>
        <button className="button" onClick={() => handleClick("Cardiology")}>
          Cardiology
        </button>
        <button className="button" onClick={() => handleClick("Critical Care")}>
          Critical Care
        </button>
        <button className="button" onClick={() => handleClick("Dentistry")}>
          Dentistry
        </button>
        <button className="button" onClick={() => handleClick("Dermatology")}>
          Dermatology
        </button>
        <button className="button" onClick={() => handleClick("Diabetology")}>
          Diabetology
        </button>
      </div>
      <div className="drug-list-container">
        <div className="drug-names-column">
          <h2 className="drug-names-table-heading">Drug Names Table</h2>
          <ul>
            {drugData.map((drug) => (
              <li key={drug.id} onClick={() => handleDrugSelect(drug)}>
                {drug.drugName}
              </li>
            ))}
          </ul>
        </div>

        <div className="drug-names-details">
          <h2 className="drug-names-table-heading">Drug Details Table</h2>
          <ul>
            {drugData.map((drug) => (
              <li key={drug.id} onClick={() => handleDrugSelect(drug)}>
                {drug.drugDetails}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DrugListTable;
