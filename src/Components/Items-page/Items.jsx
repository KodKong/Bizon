import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux'
import { getItemsAC } from "../../redux/actions/Items";

function Item(props) {
    debugger
    return (
        <div className="item">
        <a href="#">
            <img src={props.properties.photo} alt=""></img>
            <div className="descr">{props.properties.name}</div>
            <div className="cost">{props.properties.cost}</div>
            <button>В корзину</button>
        </a>
        </div>
    )
}




function Items(props) {

    React.useEffect(() => {
       axios.get("http://localhost:3000/db/items.json")
       .then(responce => props.getItemsAC(responce.data.items)); 
    })


    debugger
    return (
        <section className="items">
        <div className="wrapper">
            {
                props.items  &&  props.items.map(x => <Item properties={x} />)
            }
        </div>
   </section>
    )
}

let mapStateToProps = (state) => 
{
    return {
        items: state.itemsPage.items
    }
}



const Items_container = connect(mapStateToProps, {getItemsAC})(Items); 


export default Items_container
