import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="landingPage">
      <div className="innerLandingPage">
        <h1 className="mainName animate__animated animate__zoomIn">
          KIM GABBERT
        </h1>
        <h3 className="mainName2 animate__animated animate__zoomIn">
          JUNIOR SOFTWARE ENGINEER
        </h3>
        
        <div className="listContainer animate__animated animate__zoomIn">
          <h3 className="mainName3" >A LITTLE ABOUT ME:</h3>
          <div className="animateList content__container">
          <div className="kimList" id="flip">
            <div><div>PUZZLE ENTHUSIAST</div></div>
            <div><div>PROUD LATINA</div></div>
            <div><div> WORLD TRAVELER</div></div>
            </div>
            </div>
        </div>
      </div>
      <div id="draw-border">
      <Link to="/enter"><button className="continue">Continue to Portfolio</button></Link>
      </div>
    </div>
  );
}
