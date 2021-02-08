import React from 'react'
import Slider from "./Slider";


function Categoryes(props) {

    const arr = [
        {photo: "./img/гладкое.png", name: "Гладкоствольное оружие"}, 
        {photo: "./img/нарезное.png", name: "Нарезное оружие"}, 
    ]; 


    const arr2 = [
        {photo: "./img/obuv.png", name: "Обувь"}, 
        {photo: "./img/closes.jpg", name: "Одежда"}, 
    ]; 

   

    return (
        <section className="category-item">
        <div className="wrapper">
            <div className="first-level">
                <div className="slider-wrapper">
                    <div className="slider">
                        <Slider arr={arr} />
                    </div>
                </div>
                <div className="bullets">
                    <img src="./img/bullets.png" alt=""></img>
                    <button>Патроны</button>
                </div>
                <div className="optics">
                    <img src="./img/optic.jpg" alt=""></img>
                    <button>Оптика</button>
                </div>
            </div>
            <div className="second-level">
                <div className="presets">
                    <img src="./img/sertifikat.png" alt=""></img>
                    <button>Подарочный сертификат</button>
                </div>
                <div className="closet">
                    <div className="slider-wrapper">
                        <div className="slider">
                        <Slider arr={arr2} />
                        </div>      
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    )
}

export default Categoryes
