// import Model from "./Model"
import {Category1Button, Category2Button, Category3Button} from "./CategoryButton.js"
import hothImg from "../img/hoth.png"

function Hoth() {
    return(
        <div id="content" className="container">
                <img className="planetImg" src={hothImg}/>
                    <h1 id="planetTitle">HOTH</h1>
                    <p className="planetinfo">Hoth was a remote, icy planet that was the sixth planet in the star system of the same name. It notably hosted Echo Base, the temporary headquarters of the Alliance to Restore the Republic, until the Galactic Empire located the Rebels, initiating a major confrontation known as the Battle of Hoth.</p>
                    <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Hoth">Wookieepedia</a></p>
                        <a id="category1" className="categoryButton categoryButtonPressed" href="" onclick={Category1Button}>01 Overview</a>
                        <a id="category2" className="categoryButton" href="" onclick={Category2Button}>02 </a>
                        <a id="category3" className="categoryButton" href="" onclick={Category3Button}>03</a>
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