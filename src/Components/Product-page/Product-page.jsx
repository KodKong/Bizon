import React from 'react'

function Product_page() {
    return (
        <section class="item-page">
            <div class="wrapper">
                <img src="./img/ак12.jpg" alt=""></img>
                <div class="description">
                        <h1>AK-12</h1>
                    <div class="text">
                        5,45 мм автомат Калашникова АК-12 является перспективным индивидуальным стрелковым оружием Российской армии и других силовых ведомств, обеспечивающим еще большую боевую эффективность оружия, универсальность применения, точность и кучность стрельбы.Назначение: основной образец индивидуального оружия личного состава пехотных и других подразделений Вооруженных сил.
                    </div>
                    <div class="calibr">Калибр: 5.45x39</div>
                    <div class="made-in">
                        Производитель: Russia
                    </div>
                    <div class="cost">
                    Стоимость: 57000 руб
                    </div>
                    <button>В корзину</button>
                </div>
            </div>
        </section>
    )
}

export default Product_page
