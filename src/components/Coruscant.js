import React from "react"
import coruscantImg from "../img/coruscant.png"
import Model from "./Model"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";



export default function Coruscant() {

    function CatButton() {
        document.getElementById('category1').classlist.remove('categoryButtonPressed')
    }

    let match = useRouteMatch();
    
    return(
        <div id="content" className="container">
            {/* <Model className="planetImg" /> */}
            <img class="planetImg" src={coruscantImg}/>
                <h1 id="planetTitle">CORUSCANT</h1>
                <Link to={`${match.url}`} id="category1" className="categoryButton categoryButtonPressed" >01 Overview</Link>
                <Link to={`${match.url}/info2`} id="category2" className="categoryButton" >02 </Link>
                <Link to={`${match.url}/Jedi_Temple`} id="category3" className="categoryButton" >03 Jedi Temple</Link>
                <Switch>
                    <Route path={`${match.path}/info2`}>
                        <p className="planetinfo">side 2</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Coruscant">Wookieepedia</a></p>
                    </Route>
                    <Route path={`${match.path}/Jedi_Temple`}>
                        <p className="planetinfo">
                            As the galactic capital, Coruscant was also home to the Jedi Order, guardians of peace and justice in the galaxy. An order of Force-sensitives, the Jedi Knights served the Republic for thousands of years as keepers of the peace. Built on a plain of low lying urban blocks, the Jedi Temple was easily recognizable on the Coruscant cityscape with its distinctive five spires. Part school and part monastery, the Temple was the hub of all Jedi activity throughout the galaxy.
                        </p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Coruscant">Wookieepedia</a></p>
                    </Route>
                    <Route path={match.path}>
                        <p className="planetinfo">Also known as Imperial Center during the rule of the Galactic Empire, was an <abbr title="a city-covered planet">ecumenopolis</abbr>, collectively known as Imperial City in the Coruscant system of the Core Worlds. Though debated by historians, it was generally believed that Coruscant was the original homeworld of humanity.</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Coruscant">Wookieepedia</a></p>
                    </Route>
                </Switch>
            <div className="bottomText" id="rot">
                <h2>Rotation Time</h2>
                <p>24 hours</p>  
            </div>
            <div className="bottomText" id="rev">
                <h2>Revolution Time</h2>
                <p>365 Days</p>
            </div>
            <div className="bottomText" id="rad">
                <h2>Radius</h2>
                <p>6120km</p>
            </div>
            <div className="bottomText" id="temp">
                <h2>Temperature</h2>
                <p>-49° to 59°C</p>
            </div>
        </div>
    )
}

