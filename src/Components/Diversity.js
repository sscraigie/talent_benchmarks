import diversity from "./Images/diversity.JPG"


const backgroundImageCSS = {
    backgroundImage: `url(${diversity})`,
    minWidth: "100%",
    minHeight: "auto",    
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"

}

function Diversity(props){
    const diversity = props.data.data.diversity
   
    return(
        <div class = "section">
            <h2 className = "section-title">Diversity</h2>
            <div style = {backgroundImageCSS}> 

                <br/>

                <div className = "row mt-5">

                    <div className = "col-3">
                       <p className = "diversity-numbers">{Number(diversity.regional).toLocaleString()}</p>
                       <p className = "diversity-description">Regional Diversity</p>
                    </div>
                    <div className = "col-3">
                       <p className = "diversity-numbers">{Math.trunc(diversity.regionalPct*100)}%</p>
                       <p className = "diversity-description">Local Population</p>
                    </div>
                    <div className = "col-3">
                       <p className = "diversity-numbers">{Number(diversity.national).toLocaleString()}</p>

                       <p className = "diversity-description">National Diversity</p>
                    </div>
                    <div className = "col-2">
                       <p className = "diversity-numbers">{Math.trunc(diversity.nationalPct*100)}%</p>
                       <p className = "diversity-description">National Population</p>
                    </div>
 
                    
                </div>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
        
        
    );

};

export default Diversity;
