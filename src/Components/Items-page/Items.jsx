import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getItemsAC } from "../../redux/actions/Items";

function Item(props) {
    
    return (
        <div className="item">
        <NavLink to={`/Product/` + props.properties.id}>
            <img src={props.properties.photo} alt=""></img>
            <div className="descr">{props.properties.name}</div>
            <div className="cost">{props.properties.cost}</div>
            <button>Подробнее</button>
        </NavLink>
        </div>
    )
}

function Items(props) {

    React.useEffect(() => {
       axios.get("http://localhost:3000/db/items.json")
       .then(responce => props.getItemsAC(responce.data.items)); 
    }, [])

    React.useEffect(() => 
    {
        props.getItemsAC(props.items)
    }, [props.items])


    if(!props.items)
    {
       return "загрузочка"
    }

    return (
        <section className="items">
        <div className="wrapper">
        {
            props.filterItems ? props.filterItems.map(x => <Item properties={x}/>) : props.items.map(x => <Item properties={x}/>)
        }
        </div>
   </section>
    )
}

let mapStateToProps = (state) => 
{
    return {
        items: state.itemsPage.items, 
        filterItems: state.itemsPage.filterItems
    }
}

const Items_container = connect(mapStateToProps, {getItemsAC})(Items); 

export default Items_container
