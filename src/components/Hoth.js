// import Model from "./Model"
import hothImg from "../img/hoth.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";

function Hoth() {

let match = useRouteMatch();

return(
    <div id="content" className="container">
        {/* <Model className="planetImg" /> */}
        <img class="planetImg" src={hothImg}/>
            <h1 id="planetTitle">Hoth</h1>
            <Link to={`${match.url}`} id="category1" className="categoryButton categoryButtonPressed" >01 Overview</Link>
            <Link to={`${match.url}/info2`} id="category2" className="categoryButton" >02 </Link>
            <Link to={`${match.url}/info3`} id="category3" className="categoryButton" >03 </Link>
            <Switch>
                <Route path={`${match.path}/info2`}>
                    <p className="planetinfo">side 2</p>
                    <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Hoth">Wookieepedia</a></p>
                </Route>
                <Route path={`${match.path}/info3`}>
                    <p className="planetinfo">side 3</p>
                    <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Hoth">Wookieepedia</a></p>
                </Route>
                <Route path={match.path}>
                    <p className="planetinfo">Hoth was a remote, icy planet that was the sixth planet in the star system of the same name. It notably hosted Echo Base, the temporary headquarters of the Alliance to Restore the Republic, until the Galactic Empire located the Rebels, initiating a major confrontation known as the Battle of Hoth.</p>
                    <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Hoth">Wookieepedia</a></p>
                </Route>
            </Switch>
            <div className="bottomText" id="rot">
                <h2>ROTATION TIME</h2>
                <p>23 HOURS</p>  
            </div>
            <div className="bottomText" id="rev">
                <h2>REVOLUTION TIME</h2>
                <p>549 DAYS</p>
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

export default Hoth