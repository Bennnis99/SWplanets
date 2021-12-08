import nabooImg from "../img/naboo.png"
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
            <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Naboo">Wookieepedia</a></p>
        </div>
    )
}



export default function Naboo() {

    let match = useRouteMatch();

    return(
        <div id="content" className="container">
            {/* <Model className="planetImg" /> */}
            <img class="planetImg" src={nabooImg}/>
                <h1 id="planetTitle">Naboo</h1>
                <Link to={`${match.url}`} id="category1" className="categoryButton categoryButtonPressed" >01 Overview</Link>
                <Link to={`${match.url}/info2`} id="category2" className="categoryButton" >02 </Link>
                <Link to={`${match.url}/Jedi_Temple`} id="category3" className="categoryButton" >03 Jedi Temple</Link>
                <Switch>
                    <Route path={match.path}>
                        <p className="planetinfo">Naboo was a bountiful planet in the Chommell sector of the Mid Rim, close to the border of the Outer Rim Territories. It was home to the Gungan species and to a population of humans known as the Naboo. Naboo was pushed to the forefront of galactic politics as the birthplace of the Dark Lord of the Sith Sheev Palpatine, who served as its representative in the Senate of the Galactic Republic.</p>
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
                <p>26 hours</p>  
            </div>
            <div className="bottomText" id="rev">
                <h2>Revolution Time</h2>
                <p>312 Days</p>
            </div>
            <div className="bottomText" id="rad">
                <h2>Radius</h2>
                <p>6060km</p>
            </div>
            <div className="bottomText" id="temp">
                <h2>Temperature</h2>
                <p>-3° to 18°C</p>
            </div>
        </div>
    )
}
