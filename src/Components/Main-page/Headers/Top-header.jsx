import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Top_header() {

    const[isEdit,clickObj] = useState(false); 

    const activedMod = () => 
    {
        if(isEdit === false)
        {
            clickObj(true);
        }else if (isEdit === true)
        {
            clickObj(false); 
        }
        console.log(isEdit); 
    }

    return (
        <div className="top-wrapper" >
         <div className="top-header">
             <div className="top-header__nav">
                 <ul>
                     <li><NavLink to="/Main">Главная</NavLink></li>
                     <li><a href="#" class="catalog" onClick={activedMod}>Каталог</a>  
                        {
                            isEdit &&  <div className="wrapper-menu">             
                                        <div class="menu">
                                <div class="menu__category">
                                    <ul>
                                        <li class="main"><NavLink to="/Items">Оружие</NavLink></li>
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
                                        <li><a href="#">Рюкзаки, сумки</a></li>
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
                                    </div> 
                        }
                     </li>
                     <li><a href="#">Доставка и оплата</a></li>
                     <li><a href="#">Услуги</a></li>
                     <li><a href="#">О магазине</a></li>
                     <li><a href="#">Контакты</a></li>
                 </ul> 
             </div>
             <div className="top-header__contacts">
                 <div className="phone">8 (343) 243-55-85</div>
                 <div className="adress">Улица Героев 3</div>
             </div>
         </div>
     </div>
    )
}

export default Top_header
