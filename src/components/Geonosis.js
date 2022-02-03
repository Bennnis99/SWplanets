import React from "react"
import geonosisImg from "../img/geonosis.png"
import Model from "./Model"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";

export default function Geonosis() {

    const [catPressed1, SetCatPressed1] = React.useState(true)
    const [catPressed2, SetCatPressed2] = React.useState()
    const [catPressed3, SetCatPressed3] = React.useState()

    let match = useRouteMatch();

    return(
        <div id="content" className="container">
            {/* <Model className="planetImg" /> */}
            <img class="planetImg" src={geonosisImg}/>
                <h1 id="planetTitle">Geonosis</h1>
                <Link to={`${match.url}`} id="category1" className={`categoryButton ${catPressed1 ? "categoryButtonPressed" : ""}`} onClick={() => {SetCatPressed1(true); SetCatPressed2(false); SetCatPressed3(false)}} >01 Overview</Link>
                <Link to={`${match.url}/info2`} id="category2" className={`categoryButton ${catPressed2 ? "categoryButtonPressed" : ""}`} onClick={() => {SetCatPressed1(false); SetCatPressed2(true); SetCatPressed3(false)}} >02 </Link>
                <Link to={`${match.url}/info3`} id="category3" className={`categoryButton ${catPressed3 ? "categoryButtonPressed" : ""}`} onClick={() => {SetCatPressed1(false); SetCatPressed2(false); SetCatPressed3(true)}} >03 </Link>
                <Switch>
                    <Route path={`${match.path}/info2`}>
                        <p className="planetinfo">side 2</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Geonosis">Wookieepedia</a></p>
                    </Route>
                    <Route path={`${match.path}/info3`}>
                        {/* <JediTemple /> */}
                        <p className="planetinfo">side 3</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Geonosis">Wookieepedia</a></p>
                    </Route>
                    <Route path={match.path}>
                        <p className="planetinfo">Geonosis, referred to as Geonosia by some natives, and known as Genosha, was the desert home planet of the Geonosians. It was the Confederacy of Independent Systems' first capital and hosted its major battle droid foundries. It was the site of the First Battle of Geonosis, the opening conflict of the Clone Wars, as well as the subsequent invasion by the Galactic Republic.</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Geonosis">Wookieepedia</a></p>
                    </Route>
                </Switch>
            <div className="bottomText" id="rot">
                <h2>Rotation Time</h2>
                <p>30 hours</p>  
            </div>
            <div className="bottomText" id="rev">
                <h2>Revolution Time</h2>
                <p>256 Days</p>
            </div>
            <div className="bottomText" id="rad">
                <h2>Radius</h2>
                <p>5685km</p>
            </div>
            <div className="bottomText" id="temp">
                <h2>Temperature</h2>
                <p>-30° to 130°C</p>
            </div>
        </div>
    )
}
