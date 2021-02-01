import "./sass/style.scss";


function App() {
  return (
    <>
    <section class="headers">
       <div class="top-wrapper">
        <div class="top-header">
            <div class="top-header__nav">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#" class="catalog">Каталог</a>     
                     {/* <div class="wrapper-menu">             
                        <div class="menu">
                            <div class="menu__category">
                                <ul>
                                    <li class="main"><a href="#">Оружие</a></li>
                                    <li><a href="#">Нарезное</a></li>
                                    <li><a href="#">Гладкоствольное</a></li>
                                    <li><a href="#">Комиссионное</a></li>
                                    <li><a href="#">Пневматическое</a></li>
                                    <li><a href="#">Ограниченного поражения</a></li>
                                    <li><a href="#">Арбалеты</a></li>
                                </ul>
                            </div>
                            <div class="menu__category">
                                <ul>
                                    <li class="main"><a href="#">Патроны</a></li>
                                    <li><a href="#">Нарезные патроны</a></li>
                                    <li><a href="#">Гладкоствольные патроны</a></li>
                                    <li><a href="#">Для пневматики</a></li>
                                    <li><a href="#">Травматические</a></li>
                                    <li><a href="#">Фальшпатроны</a></li>
                                    <li><a href="#">Лазерные патроны</a></li>
                                </ul>
                            </div>
                            <div class="menu__category">
                                <ul>
                                    <li class="main"><a href="#">Оптика</a></li>
                                    <li><a href="#">Прицелы дневные</a></li>
                                    <li><a href="#">Тепловизионные прицелы</a></li>
                                    <li><a href="#">Прицелы ночного видения</a></li>
                                    <li><a href="#">Коллиматоры</a></li>
                                    <li><a href="#">Аксессуары для оптики</a></li>
                                    <li><a href="#">Бинокли</a></li>
                                </ul>
                            </div>
                            <div class="menu__category">
                                <ul>
                                    <li class="main"><a href="#">Аксессуары для оружия</a></li>
                                    <li><a href="#">Кейсы</a></li>
                                    <li><a href="#">Чехлы</a></li>
                                    <li><a href="#">Кобуры</a></li>
                                    <li><a href="#">Магазины</a></li>
                                    <li><a href="#">Тюнинг</a></li>
                                    <li><a href="#">Патронажи и кейсы</a></li>
                                </ul>
                            </div>
                            <div class="menu__category">
                                <ul>
                                    <li class="main"><a href="#">Рыбалка</a></li>
                                    <li><a href="#">Удилища</a></li>
                                    <li><a href="#">Катушки</a></li>
                                    <li><a href="#">Платформы, кресла, обвесы</a></li>
                                    <li><a href="#">Подсадчеки, садки</a></li>
                                    <li><a href="#">Кейсы, ящики, хранение</a></li>
                                    <li><a href="#">Эхолоты и подводные камеры</a></li>
                                </ul>
                            </div>
                            <div class="menu__category">
                                <ul>
                                    <li class="main"><a href="#">Туризм</a></li>
                                    <li> <a href="#">Термосы</a></li>
                                    <li><a href="#">>Рюкзаки, сумки</a></li>
                                    <li><a href="#">Лопаты, топоры</a></li>
                                    <li><a href="#">Палатки, тены</a></li>
                                    <li><a href="#">Спальные мешки</a></li>
                                    <li><a href="#">Мебель туристическая</a></li>
                                </ul>
                            </div>
                            <div class="menu__category">
                                <ul>
                                    <li class="main"><a href="#">Одежда</a></li>
                                    <li><a href="#">Головные уборы</a></li>
                                    <li><a href="#">Куртки</a></li>
                                    <li><a href="#">Брюки</a></li>
                                    <li><a href="#">Костюмы</a></li>
                                    <li><a href="#">Термобелье</a></li>
                                    <li><a href="#">Носки</a></li>
                                </ul>
                            </div>
                            <div class="menu__category">
                                <ul>
                                    <li class="main"><a href="#">Обувь</a></li>
                                    <li><a href="#">Ножи</a></li>
                                    <li><a href="#">Часы</a></li>
                                    <li><a href="#">Сейфы для оружия</a></li>
                                    <li><a href="#">Кронштейны</a></li>
                                    <li><a href="#">Уход за оружием</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>  */}
                    </li>
                    <li><a href="#">Доставка и оплата</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">О магазине</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul> 
            </div>
            <div class="top-header__contacts">
                <div class="phone">8 (343) 243-55-85</div>
                <div class="adress">Улица Героев 3</div>
            </div>
        </div>
    </div>
    <div class="bottom-wrapper">
        <div class="bottom-header">
            <div class="wrapper">
            <div class="logo">
                BIZON
            </div>
            <div class="buttons">
                <button>Заказать звонок</button>
                <button>Мастерские</button>
                <button>3D-тур</button>
            </div>
            <div class="search">
                <input type="text" name="" id="" placeholder="ПОИСК"></input>
                <button>Найти</button>
                <button>
                    Корзина
                </button>
            </div>
        </div>
        </div>
    </div>
    </section>

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
