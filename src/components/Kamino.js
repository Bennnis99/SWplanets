import kaminoImg from "../img/kamino.png"
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



export default function Kamino() {

    let match = useRouteMatch();

    return(
        <div id="content" className="container">
            {/* <Model className="planetImg" /> */}
            <img class="planetImg" src={kaminoImg}/>
                <h1 id="planetTitle">Kamino</h1>
                <Link to={`${match.url}`} id="category1" className="categoryButton categoryButtonPressed" >01 Overview</Link>
                <Link to={`${match.url}/info2`} id="category2" className="categoryButton" >02 </Link>
                <Link to={`${match.url}/Jedi_Temple`} id="category3" className="categoryButton" >03 Jedi Temple</Link>
                <Switch>
                    <Route path={match.path}>
                        <p className="planetinfo">Kamino was an aquatic planet located in an extragalactic star system that straggled south of the Rishi Maze satellite galaxy and beyond the larger galaxy. It was inhabited by the Kaminoans—a race of tall, elegant beings with long necks who were regarded as a mysterious species that tended to keep to themselves. They were also known for their cloning technology, which was used to create a clone army for the Galactic Republic.</p>
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
                <p>27 hours</p>  
            </div>
            <div className="bottomText" id="rev">
                <h2>Revolution Time</h2>
                <p>463 Days</p>
            </div>
            <div className="bottomText" id="rad">
                <h2>Radius</h2>
                <p>9635km</p>
            </div>
            <div className="bottomText" id="temp">
                <h2>Temperature</h2>
                <p> ~20°C</p>
            </div>
        </div>
    )
}
