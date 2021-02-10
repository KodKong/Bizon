import React from 'react'
import { connect } from 'react-redux'
import { filtersByCountry, deleteFilters, filtersByCostDown, filtersByCostUp, filtersByType } from "../../redux/actions/filters";

function Filters_Container(props) {
    return (
        <section className="filters">
        <div className="wrapper">
         <div className="filter">
             <h1>Цена</h1>
             <div> По порядку<input type="checkbox" onChange={() => props.deleteFilters()}></input></div>
             <div> По возрастанию<input type="checkbox" onChange={() => props.filtersByCostUp()}></input></div>
             <div> По убыванию<input type="checkbox" onChange={() => props.filtersByCostDown()}></input></div>
         </div>
         <div className="filter">
             <h1>Тип</h1>
             <div>Все<input type="checkbox" onChange={() => props.deleteFilters()}></input></div>
             <div>Нарезное<input type="checkbox" onChange={() => props.filtersByType(true)}></input></div>
             <div>Гладкоствольное<input type="checkbox" onChange={() => props.filtersByType(false)}></input></div>
         </div>
         <div className="filter">
             <h1>Производство</h1>
             <div>Все<input type="checkbox" onChange={() => props.deleteFilters()}></input></div>
             <div>Иностранное<input type="checkbox" onChange={() => props.filtersByCountry(false)}></input></div>
             <div>Отечественное<input type="checkbox" onChange={() => props.filtersByCountry(true)} ></input></div>
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

const Filters  = connect(mapStateToProps, {filtersByCountry, deleteFilters, filtersByCostDown, filtersByCostUp, filtersByType})(Filters_Container); 


export default Filters
