// import Model from "./Model"
import tatooineImg from "../img/tatooine.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";

function Tatooine() {

    let match = useRouteMatch();

    return(
        <div id="content" className="container">
                <img className="planetImg" src={tatooineImg}/>
                    <h1 id="planetTitle">TATOOINE</h1>
                    <Link to={`${match.url}`} id="category1" className="categoryButton categoryButtonPressed" >01 Overview</Link>
                    <Link to={`${match.url}/info2`} id="category2" className="categoryButton" >02 </Link>
                    <Link to={`${match.url}/info3`} id="category3" className="categoryButton" >03 </Link>
                    <Switch>
                        <Route path={`${match.path}/info2`}>
                            <p className="planetinfo">side 2</p>
                            <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Tatooine">Wookieepedia</a></p>
                        </Route>
                        <Route path={`${match.path}/info3`}>
                            <p className="planetinfo">side 3</p>
                            <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Tatooine">Wookieepedia</a></p>
                        </Route>
                        <Route path={match.path}>
                            <p className="planetinfo">Tatooine was a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories. Part of a binary star system, the planet was oppressed by scorching suns, resulting in the world lacking the necessary surface water to sustain large populations. As a result, many residents of the planet instead drew water from the atmosphere via moisture farms. The planet also had little surface vegetation.</p>
                            <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Tatooine">Wookieepedia</a></p>
                        </Route>
                    </Switch>
                <div className="bottomText" id="rot">
                    <h2>ROTATION TIME</h2>
                    <p>34 HOURS</p>  
                </div>
                <div className="bottomText" id="rev">
                    <h2>REVOLUTION TIME</h2>
                    <p>304 DAYS</p>
                </div>
                <div className="bottomText" id="rad">
                    <h2>RADIUS</h2>
                    <p>7200km</p>
                </div>
                <div className="bottomText" id="temp">
                    <h2>TEMPERATURE</h2>
                    <p>-61°C</p>
                </div>
        </div>
    )
}

export default Tatooine