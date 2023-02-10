import React, { useState } from "react";

const CherryYear = () => {
  const [year, setYear] = useState("");
  const [cherryYear, setCherryYear] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    //To accept number only and must be more than 0
    if (isNaN(year) || year <= 0) {
      setCherryYear("Not a valid year");
      return;
    }

    //To find the year + 1 from the input year and start calculation
    let newYear = parseInt(year, 10) + 1;

    //Loop through unique values and if its the same size then its the next year
    while (true) {
      const yearStr = newYear.toString();
      const uniqueChars = new Set(yearStr);
      if (uniqueChars.size === yearStr.length) {
        setCherryYear(newYear);
        break;
      }
      newYear += 1;
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "20%",
        padding: "20px",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="year">Input a year:</label>
          <input
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            maxLength={4}
          ></input>
          <button type="submit">Check next Cherry Year</button>
        </div>
        {cherryYear && (
          <div>
            <h3>The next cherry year is: {cherryYear}</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default CherryYear;
