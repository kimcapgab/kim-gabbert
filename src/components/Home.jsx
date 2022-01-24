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
        
        <div className="listContainer content">
          <h3 className="mainName3">A LITTLE ABOUT ME:</h3>
          <div className="animateList content__container">
          <ul className="kimList content__container__list">
            <li class="content__container__list__item">PUZZLE ENTHUSIAST</li>
            <li class="content__container__list__item">LATINA</li>
            <li class="content__container__list__item">TRAVEL ENTHUSIAST</li>
            <li class="content__container__list__item">BAKER</li>
            </ul>
            </div>
        </div>
      </div>
      <Link to="/enter">Continue to Portfolio</Link>
    </div>
  );
}
