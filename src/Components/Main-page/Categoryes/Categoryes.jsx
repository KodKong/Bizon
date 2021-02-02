import React from 'react'

function Categoryes() {
    return (
        <section className="category-item">
        <div className="wrapper">
            <div className="first-level">
                <div className="slider-wrapper">
                    <div className="slider">
                        <div className="img-slider">
                            <img src="./img/гладкое.png" alt=""></img>
                        </div>
                    </div>
                    <button>
                        Гладкоствольное оружие
                    </button>
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
                            <div className="img-slider">
                                <img src="./img/closes.jpg" alt=""></img>
                            </div>
                        </div>
                        <button>
                            Одежда
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    )
}

export default Categoryes
