import React from 'react'

function Filters() {
    return (
        <section className="filters">
        <div className="wrapper">
         <div className="filter">
             <h1>Цена</h1>
             <div> По возрастанию<input type="checkbox" ></input></div>
             <div> По убыванию<input type="checkbox" ></input></div>
         </div>
         <div className="filter">
             <h1>Тип</h1>
             <div>Нарезное<input type="checkbox" ></input></div>
             <div>Гладкоствольное<input type="checkbox" ></input></div>
         </div>
         <div className="filter">
             <h1>Производство</h1>
             <div>Иностранное<input type="checkbox" ></input></div>
             <div>Отечественное<input type="checkbox" ></input></div>
         </div>
        </div>
    </section>
    )
}

export default Filters
