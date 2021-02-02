import React from 'react'

function About_company() {
    return (
        <section className="about-company">
        <div className="wrapper">
            <h1>О нас</h1>
           <div className="content-wrapper">
               <div className="shop">
                <img src="./img/shop.png" alt=""></img>
                <button>О магазине</button>
               </div>
               <div className="program">
                <img src="./img/programma-loyalnosti.png" alt=""></img>
                <button>Программа лояльности</button>
               </div>
               <div className="photo">
                <img src="./img/fotogallery.png" alt=""></img>
                <button>Фотогалерия</button>
               </div>
           </div>
        </div>
    </section>
    )
}

export default About_company; 
