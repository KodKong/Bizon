import React from 'react'
import { withRouter } from 'react-router'
import { getItemsAC } from "../../redux/actions/Items";
import { connect } from 'react-redux'
import axios from 'axios';

function Product_Page(props) {

    let trueProduct = props.product.find(function(it) {
        return it.id == props.params.item
    }); 

    console.log(trueProduct); 
    return (
        <section class="item-page">
            <div class="wrapper">
                <img src={trueProduct.photo} alt=""></img>
                <div class="description">
                        <h1>{trueProduct.name}</h1>
                    <div class="text">
                        {trueProduct.description}
                    </div>
                    <div class="calibr">Калибр: {trueProduct.calibr}</div>
                    <div class="made-in">
                        Производитель:{trueProduct.madeIn}
                    </div>
                    <div class="cost">
                    Стоимость: {trueProduct.cost} руб
                    </div>
                    <button>В корзину</button>
                </div>
            </div>
        </section>
    )
}


function Product_Page_API(props) {

    React.useEffect(() => {
        axios.get("http://localhost:3000/db/items.json")
        .then(responce => props.getItemsAC(responce.data.items)); 
     }, [])

    return (       
        props.items  &&  <Product_Page product={props.items} params={props.match.params}/>
    )

}


let mapStateToProps = (state) => 
{
    return {
        items: state.itemsPage.items
    }
}

let ItemWithRoute = withRouter(Product_Page_API)

const Items_container = connect(mapStateToProps, {getItemsAC})(ItemWithRoute); 



export default Items_container
