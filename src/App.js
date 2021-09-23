import { useState } from "react";
import SearchBar from "./Components/SearchBar.js";
import Supply from "./Components/Supply.js";
import Demand from "./Components/Demand.js";
import Compensation from "./Components/Compensation.js";
import Diversity from "./Components/Diversity.js";
import Map from "./Components/Map.js";
import logo from "./emsi_logo.png";
import "./App.css";
//Search Peramiters

//------------The App----------
function App() {
  const [data, setData] = useState({});

  const updateData = (apiData) => {
    setData(apiData);
  };

  return (
    <body>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <img src={logo} className="logo" />
          </div>
          <div className="col">
            <h1 className="title">Talent Benchmarks</h1>
          </div>
        </div>

        <SearchBar callback={updateData} />

        {"data" in data ? (
          <div>
            <Supply data={data} />
            <Demand data={data} />
            <Compensation data={data} />
            <Diversity data={data} />
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </body>
  );
}

export default App;
