//import { useState } from "react";
import supply from "./Images/supply.JPG";

const backgroundImageCSS = {
  backgroundImage: `url(${supply})`,
  minWidth: "100%",
  minHeight: "auto",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

function Supply(props) {
  const supply = props.data.data.supply;

  return (
    <div class="section">
      <h2 className="section-title">Supply</h2>
      <h3 className="section-header">Source: Online Social Profiles</h3>
      <p className="packet-description">
        All matching profiles updated within the last 3 years from over 130
        online professional hubs and social networks.
      </p>

      <div style={backgroundImageCSS}>
        <div className="row mt-5">
          <div className="col-2"></div>
          <div className="col-2">
            <p className="supply-numbers">
              {Number(supply.profiles).toLocaleString()}
            </p>
            <p className="supply-description">Profiles</p>
          </div>
          <div className="col-3 ">
            <p className="supply-numbers">
              X {Number(supply.benchmarkIndex).toLocaleString()}{" "}
            </p>
            <p className="supply-description">National Average</p>
          </div>
          <div className="col-5 ">
            <p className="supply-numbers">
              {Number(supply.companies).toLocaleString()}
            </p>
            <p className="supply-description">Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supply;
