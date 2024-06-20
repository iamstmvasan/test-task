import React from "react";
import "./styles.scss";
import FileUpload from "./FileUpload";
const BrowserCompanyInfo = () => {
  const propertyType = [
    "Own House",
    "Apartment",
    "Townhouse",
    "Condo",
    "Mobile Home",
  ];
  return (
    <div className="step1-container">
      <h3 style={{ textAlign: "left", width: "100%" }}>Browser Company Info</h3>
      <div className="form-container">
        <div className="field-container">
          <p className="field-name">Property Name</p>
          <input className="field" />
        </div>
        <div className="field-container">
          <p className="field-name">Property Type</p>
          <select className="field" name="fruits">
            <option value=""></option>
            {propertyType.map((ele, index) => {
              return (
                <option key={index + 1} value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
        <div className="field-container">
          <p className="field-name">Number of Unit's</p>
          <select className="field" name="fruits">
            <option value=""></option>
            {propertyType.map((ele, index) => {
              return (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="form-container">
        <div className="field-container" style={{ width: "100%" }}>
          <p className="field-name">Propert Address</p>
          <textarea className="field-textarea" />
        </div>
        <div className="field-container" style={{ width: "100%" }}>
          <p className="field-name">File Attachment</p>
          <FileUpload />
        </div>
      </div>
    </div>
  );
};

export default BrowserCompanyInfo;
