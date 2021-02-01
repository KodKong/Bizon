import "./sass/style.scss";
import Headers from "./Components/Headers/Headers";

function App() {
  return (
    <>
    <Headers/>

    <section class="category-item">
        <div class="wrapper">
            <div class="first-level">
                <div class="slider-wrapper">
                    <div class="slider">
                        <div class="img-slider">
                            <img src="./img/гладкое.png" alt=""></img>
                        </div>
                    </div>
                    <button>
                        Гладкоствольное оружие
                    </button>
                </div>
                <div class="bullets">
                    <img src="./img/bullets.png" alt=""></img>
                    <button>Патроны</button>
                </div>
                <div class="optics">
                    <img src="./img/optic.jpg" alt=""></img>
                    <button>Оптика</button>
                </div>
            </div>
            <div class="second-level">
                <div class="presets">
                    <img src="./img/sertifikat.png" alt=""></img>
                    <button>Подарочный сертификат</button>
                </div>
                <div class="closet">
                    <div class="slider-wrapper">
                        <div class="slider">
                            <div class="img-slider">
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

    <section class="about-company">
        <div class="wrapper">
            <h1>О нас</h1>
           <div class="content-wrapper">
               <div class="shop">
                <img src="./img/shop.png" alt=""></img>
                <button>О магазине</button>
               </div>
               <div class="program">
                <img src="./img/programma-loyalnosti.png" alt=""></img>
                <button>Программа лояльности</button>
               </div>
               <div class="photo">
                <img src="./img/fotogallery.png" alt=""></img>
                <button>Фотогалерия</button>
               </div>
           </div>
        </div>
    </section>

    <footer>
        <div class="wrapper">
            <h1>BIZON</h1>
            <div class="phone">8 (343) 243-55-85</div>
            <div class="adress">Улица Героев 3</div>
        </div>
    </footer>
    </>
  )
}

export default App;
