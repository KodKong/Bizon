import React from 'react'
import { withRouter } from 'react-router'
import { getItemsPageAC, getItemsAC } from "../../redux/actions/Items";
import { connect } from 'react-redux'; 
import axios from 'axios';


function Product_Page(props) {

    return (
        <section className="item-page">
            <div className="wrapper">
                <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt=""></img>
                <div className="description">
                        <h1>{props.product.name}</h1>
                    <div className="text">
                        {props.product.description}
                    </div>
                    <div className="calibr">Калибр: {props.product.calibr}</div>
                    <div className="made-in">
                        Производитель:{props.product.madeIn}
                    </div>
                    <div className="cost">
                    Стоимость: {props.product.cost} руб
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
        props.getItemsPageAC(props.match.params); 
    }, [])

    if(!props.productPage)
    {
        return "Ошибка"
    }

    return (     
        props.productPage  &&  <Product_Page product={props.productPage} />
    )

}


let mapStateToProps = (state) => 
{
    return {
        items: state.itemsPage.items, 
        productPage: state.itemsPage.productPage
    }
}

let ItemWithRoute = withRouter(Product_Page_API)

const Items_container = connect(mapStateToProps, {getItemsPageAC, getItemsAC})(ItemWithRoute); 



export default Items_container
