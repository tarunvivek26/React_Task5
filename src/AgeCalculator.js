import React, { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const ageInDays = (today - birthDate) / (1000 * 60 * 60 * 24);
    const ageInYears = Math.floor(ageInDays / 365);
    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <input
        type="date"
        placeholder="Enter your date of birth"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      <div className="age-result">
        <span>You are</span> {age} years old
      </div>
    </div>
  );
};

export default AgeCalculator;