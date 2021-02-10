import React from 'react'
import { connect } from 'react-redux'
import { filtersByCountry } from "../../redux/actions/filters";

function Filters_Container(props) {
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
             <div>Иностранное<input type="checkbox" onClick={() => props.filtersByCountry(false)}></input></div>
             <div>Отечественное<input type="checkbox" onClick={() => props.filtersByCountry(true)} ></input></div>
         </div>
        </div>
    </section>
    )
}


let mapStateToProps = (state) => 
{
    return {
        filterItems: state.itemsPage.filterItems, 
        items: state.itemsPage.items,
    }
}

const Filters  = connect(mapStateToProps, {filtersByCountry})(Filters_Container); 


export default Filters
