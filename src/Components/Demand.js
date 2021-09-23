import demand from "./Images/demand.JPG";

const backgroundImageCSS = {
  backgroundImage: `url(${demand})`,
  minWidth: "100%",
  minHeight: "auto",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  display: "inline-block",
};
function Demand(props) {
  const supply = props.data.data.demand;

  return (
    <div className="section">
      <div className="row mt-5">
        <h2 className="section-title">Demand</h2>
        <h3 className="section-header">Source: Online Job Boards</h3>
        <p className="packet-description">
          All employers in the region who posted for this job, as well as the
          total number of unique postings for this position, are based on the
          last 12 months.
        </p>
        <div style={backgroundImageCSS} className="row">
          <div className="row mt-5">
            <div className="col-4 demand-numbers">
              {supply.companies} Employers Competing
            </div>
            <div className="col-4 demand-numbers">
              {supply.benchmarkIndex}X the National Average
            </div>
            <div className="col-4 demand-numbers">
              {supply.postings} Unique Job Postings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demand;
