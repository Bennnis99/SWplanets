// import Model from "./Model"
import {Category1Button, Category2Button, Category3Button} from "./CategoryButton"
import tatooineImg from "../img/tatooine.png"

function Tatooine() {
    return(
        <div id="content" className="container">
                <img className="planetImg" src={tatooineImg}/>
                    <h1 id="planetTitle">TATOOINE</h1>
                    <p className="planetinfo">Tatooine was a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories. Part of a binary star system, the planet was oppressed by scorching suns, resulting in the world lacking the necessary surface water to sustain large populations. As a result, many residents of the planet instead drew water from the atmosphere via moisture farms. The planet also had little surface vegetation.</p>
                    <p id="planetlink">link <a href="https://starwars.fandom.com/wiki/Tatooine">Wookieepedia</a></p>
                        <a id="category1" className="categoryButton categoryButtonPressed" href="" onclick={Category1Button}>01 Overview</a>
                        <a id="category2" className="categoryButton" href="" onclick={Category2Button}>02 </a>
                        <a id="category3" className="categoryButton" href="" onclick={Category3Button}>03</a>
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