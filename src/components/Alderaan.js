import alderaanImg from "../img/alderaan.png"
import Model from "./Model"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";


export default function Alderaan() {

    let match = useRouteMatch();

    return(
        <div id="content" className="container">
            {/* <Model className="planetImg" /> */}
            <img class="planetImg" src={alderaanImg}/>
                <h1 id="planetTitle">Alderaan</h1>
                <Link to={`${match.url}`} id="category1" className="categoryButton categoryButtonPressed" >01 Overview</Link>
                <Link to={`${match.url}/info2`} id="category2" className="categoryButton" >02 </Link>
                <Link to={`${match.url}/info3`} id="category3" className="categoryButton" >03 </Link>
                <Switch>
                    <Route path={`${match.path}/info2`}>
                        <p className="planetinfo">side 2</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Alderaan">Wookieepedia</a></p>
                    </Route>
                    <Route path={`${match.path}/info3`}>
                        {/* <JediTemple /> */}
                        <p className="planetinfo">side 3</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Alderaan">Wookieepedia</a></p>
                    </Route>
                    <Route path={match.path}>
                        <p className="planetinfo">Alderaan, located in the Core Worlds, was a terrestrial planet covered with mountains. During the waning decades of the Galactic Republic, it was ruled by Queen Breha Organa and represented in the Galactic Senate by her husband, Senator Bail Prestor Organa.
                        {/* <br /> Following the rise of Sheev Palpatine's Galactic Empire, Alderaan played a pivotal role in the establishment of the Rebel Alliance, a movement that sought to restore the Old Republic's values. */}
                        </p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Alderaan">Wookieepedia</a></p>
                    </Route>
                </Switch>
            <div className="bottomText" id="rot">
                <h2>Rotation Time</h2>
                <p>18 hours</p>  
            </div>
            <div className="bottomText" id="rev">
                <h2>Revolution Time</h2>
                <p>364 Days</p>
            </div>
            <div className="bottomText" id="rad">
                <h2>Radius</h2>
                <p>6250km</p>
            </div>
            <div className="bottomText" id="temp">
                <h2>Temperature</h2>
                <p>-49° to 59°C</p>
            </div>
        </div>
    )
}