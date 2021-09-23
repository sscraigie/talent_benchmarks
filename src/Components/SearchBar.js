import { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");

  async function ApiCall() {
    const response = await fetch(`http://localhost:8000/${title}/${city}`);
    const rawData = await response.json();
    let data = rawData;
    console.log(data);
    props.callback(data);
  }

  return (
    <div>
      <div className="category-column-home-search">
        <div className="input">
          <div className="row">
            <div className="col-2" />
            <div className="col">
              <input
                placeholder="Enter a Job Title or Keyword"
                className="form-control"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                placeholder="Enter a City and State"
                className="form-control"
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="col">
              <button
                className="button success"
                type="button"
                onClick={ApiCall}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="space" />
    </div>
  );
}

export default SearchBar;
