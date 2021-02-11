import axios from 'axios';

export const getItemsAC = (items) => 
{
    return {
        type: "GET_ITEMS", 
        items
    }
}

export const getItemsPageAC = (page) => 
{
    return {
        type: "GET_ITEMS_PAGE", 
        page
    }
}

export const getItemsThunkCreator = () => 
{
    return (dispatch) => 
    {
        axios.get("http://localhost:3000/db/items.json")
       .then(responce => dispatch(getItemsAC(responce.data.items))); 
    }
}