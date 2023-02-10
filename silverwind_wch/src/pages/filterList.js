import React, { useState, useEffect } from "react";
import userPhoto from "../assets/userphoto-prime1.jpg";

const FilterList = () => {
  const options = [
    {
      value: "1",
      title: "All",
    },
    {
      value: "2",
      title: "20 and below",
    },
    {
      value: "3",
      title: "21 to 39",
    },
    {
      value: "4",
      title: "40 and above",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("1");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5d73bf3d3300003733081869")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#FAF2D0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#282419" }}>DISTRICT MANAGER</h1>
      </div>
      <div style={{ padding: "50px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="select" style={{ marginBottom: "10px" }}>
            <strong>Filter By Age</strong>
          </label>
          <select
            value={selectedValue}
            onChange={handleChange}
            style={{
              width: "200px",
              padding: "10px",
              border: "1px solid grey",
            }}
          >
            {options.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.title}
                </option>
              );
            })}
          </select>
        </div>
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "lightgray",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gridGap: "100px",
          }}
        >
          {employees
            .filter((employee) => {
              switch (selectedValue) {
                case "1":
                  return true;
                case "2":
                  return employee.age <= 20;
                case "3":
                  return employee.age > 20 && employee.age <= 39;
                case "4":
                  return employee.age >= 40;
                default:
                  return false;
              }
            })
            .map((employee) => (
              <div
                key={employee.id}
                style={{
                  boxShadow: " 2px 2px 10px grey",
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "20px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: `url(${userPhoto})`,
                      backgroundSize: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h2
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 0,
                    }}
                  >
                    {employee.name}
                  </h2>
                  <h4
                    style={{
                      fontWeight: "normal",
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 0,
                    }}
                  >
                    Email: <strong>{employee.email}</strong>
                  </h4>
                  <h4
                    style={{
                      fontWeight: "normal",
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 0,
                    }}
                  >
                    Mobile: <strong>{employee.phone}</strong>
                  </h4>
                  <h4
                    style={{
                      fontWeight: "normal",
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 0,
                    }}
                  >
                    Company: <strong>{employee.company} Sdn. Bhd.</strong>
                  </h4>
                  <h4
                    style={{
                      fontWeight: "normal",
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 0,
                    }}
                  >
                    Address: <strong>{employee.address.street}</strong>
                  </h4>
                  <h4
                    style={{
                      fontWeight: "normal",
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 0,
                    }}
                  >
                    Website: <strong>{employee.website}</strong>
                  </h4>
                  <h4
                    style={{
                      fontWeight: "normal",
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 0,
                    }}
                  >
                    Age: <strong>{employee.age}</strong>
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterList;
