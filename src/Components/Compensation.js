import bell_curve from "./Images/bell-curve-original.JPG"
import './Compensation.css';

const backgroundImageCSS = {
    backgroundImage: `url(${bell_curve})`,
    minWidth: "100%",
    minHeight: "100%",    
    backgroundPosition: "center",
    backgroundSize: "cover"
}

function Compensation(props){
    const compensation = props.data.data.compensation
    return(
        <div class = "section">
            <h2 class = "section-title" >Compensation</h2>

            <div className = "compensation" style = {backgroundImageCSS}>
                <br/>
                <div className = "row mt-5" > 
                    <div className = "col-12">
                        <h3 class = "compensation-numbers">${Number(compensation.medianAdvertisedSalary).toLocaleString()}</h3>
                        <p>Median Advertised Salary</p>
                    </div>
                </div>
                
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className = "row mt-5">
                    <div className = "col-4">
                        <h5>${Number(compensation.minSalary).toLocaleString()}</h5>
                        <p>Minimum Salary</p>
                    </div>
                    <div className = "col-4">
                        <h5>${Number(compensation.medianSalary).toLocaleString()}</h5>
                        <p>Median Salary</p>
                    </div>
                    <div className = "col-4">
                        <h5>${Number(compensation.maxSalary).toLocaleString()}</h5>
                        <p>MaxSalary</p>
                    </div>

                </div>
            
            </div>
        </div>
    );

};




export default Compensation;