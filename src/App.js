import "./sass/style.scss";
import Headers from "./Components/Main-page/Headers/Headers";
import Footer from "./Components/Main-page/Footer/Footer";
import Items_page from "./Components/Items-page/Items-page";
import Main_page from "./Components/Main-page/Main-page";
import Product_page from "./Components/Product-page/Product-page";
import { Route, Redirect } from "react-router-dom";
function App() {
  return (
    <>
    <Headers/>
    <Route path="/Main" render={() => <Main_page/>}/>
    <Route path="/Items" render={() => <Items_page/>}/>
    <Route path="/Product/:item" render={() => <Product_page/>}/>
    <Footer/>
    <Redirect from="/" to="/Main"/>
    </>
  )
}

export default App;
