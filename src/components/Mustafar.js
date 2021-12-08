import mustafarImg from "../img/mustafar.png"
import Model from "./Model"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";

function CoruscantText1() {
    return (
        <div>
            <p className="planetinfo">Also known as Imperial Center during the rule of the Galactic Empire, was an <abbr title="a city-covered planet">ecumenopolis</abbr>, collectively known as Imperial City in the Coruscant system of the Core Worlds. Though debated by historians, it was generally believed that Coruscant was the original homeworld of humanity.</p>
            <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Coruscant">Wookieepedia</a></p>
        </div>
    )
}



export default function Mustafar() {

    let match = useRouteMatch();

    return(
        <div id="content" className="container">
            {/* <Model className="planetImg" /> */}
            <img class="planetImg" src={mustafarImg}/>
                <h1 id="planetTitle">Mustafar</h1>
                <Link to={`${match.url}`} id="category1" className="categoryButton categoryButtonPressed" >01 Overview</Link>
                <Link to={`${match.url}/info2`} id="category2" className="categoryButton" >02 </Link>
                <Link to={`${match.url}/Jedi_Temple`} id="category3" className="categoryButton" >03 Jedi Temple</Link>
                <Switch>
                    <Route path={match.path}>
                        <p className="planetinfo">Mustafar was a small planet located in the Mustafar system, within the Atravis sector of the galaxy's Outer Rim Territories. Once a garden world nourished by the Bright Star artifact, its orbit was shifted when Lady Corvax unleashed the energies of the Bright Star in an attempt to return her husband to life. The resulting gravimetric duel between the gas giants Jestefad and Lefrani over Mustafar heated the planet's core, transforming the lush world into an imbalanced volcanic hellscape.</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Coruscant">Wookieepedia</a></p>
                    </Route>
                    <Route path={`${match.path}/info2`}>
                        {/* <p className="planetinfo">side 2</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Coruscant">Wookieepedia</a></p> */}
                    </Route>
                    <Route path={`${match.path}/Jedi_Temple`}>
                        {/* <JediTemple /> */}
                        <p className="planetinfo">JEDI</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Coruscant">Wookieepedia</a></p>
                    </Route>
                </Switch>
            <div className="bottomText" id="rot">
                <h2>Rotation Time</h2>
                <p>36 hours</p>  
            </div>
            <div className="bottomText" id="rev">
                <h2>Revolution Time</h2>
                <p>618 Days</p>
            </div>
            <div className="bottomText" id="rad">
                <h2>Radius</h2>
                <p>2100km</p>
            </div>
            <div className="bottomText" id="temp">
                <h2>Temperature</h2>
                <p>~100°C</p>
            </div>
        </div>
    )
}

function JediTemple() {
    return (
        <div>
            <p className="planetinfo">side3</p>
            <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Coruscant">Wookieepedia</a></p>
        </div>
    )
}
