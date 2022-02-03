import React from "react"
import kaminoImg from "../img/kamino.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
  } from "react-router-dom";


export default function Kamino() {

    const [catPressed1, SetCatPressed1] = React.useState(true)
    const [catPressed2, SetCatPressed2] = React.useState()
    const [catPressed3, SetCatPressed3] = React.useState()

    let match = useRouteMatch();

    return(
        <div id="content" className="container">
            {/* <Model className="planetImg" /> */}
            <img class="planetImg" src={kaminoImg}/>
                <h1 id="planetTitle">Kamino</h1>
                <Link to={`${match.url}`} id="category1" className={`categoryButton ${catPressed1 ? "categoryButtonPressed" : ""}`} onClick={() => {SetCatPressed1(true); SetCatPressed2(false); SetCatPressed3(false)}} >01 Overview</Link>
                <Link to={`${match.url}/info2`} id="category2" className={`categoryButton ${catPressed2 ? "categoryButtonPressed" : ""}`} onClick={() => {SetCatPressed1(false); SetCatPressed2(true); SetCatPressed3(false)}} >02 </Link>
                <Link to={`${match.url}/info3`} id="category3" className={`categoryButton ${catPressed3 ? "categoryButtonPressed" : ""}`} onClick={() => {SetCatPressed1(false); SetCatPressed2(false); SetCatPressed3(true)}} >03 </Link>
                <Switch>
                    <Route path={`${match.path}/info2`}>
                        <p className="planetinfo">side 2</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Kamino">Wookieepedia</a></p>
                    </Route>
                    <Route path={`${match.path}/info3`}>
                        {/* <JediTemple /> */}
                        <p className="planetinfo">side 3</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Kamino">Wookieepedia</a></p>
                    </Route>
                    <Route path={match.path}>
                        <p className="planetinfo">Kamino was an aquatic planet located in an extragalactic star system that straggled south of the Rishi Maze satellite galaxy and beyond the larger galaxy. It was inhabited by the Kaminoans—a race of tall, elegant beings with long necks who were regarded as a mysterious species that tended to keep to themselves. They were also known for their cloning technology, which was used to create a clone army for the Galactic Republic.</p>
                        <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Kamino">Wookieepedia</a></p>
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

