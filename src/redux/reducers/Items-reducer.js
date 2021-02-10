
const InitialState = 
{
    items: null, 
    productPage: null, 
}


const items_reducer = (state = InitialState, action) => 
{
    switch (action.type)
    {
        case "GET_ITEMS": 
        {
            return {...state, items: action.items, productPage: state.productPage}
        }
        case "FILTER_BY_COUNTRY": 
        {
            debugger
          return {...state, filterItems: state.items.filter(e => e.homeland === action.homeland)}
        }
        case "GET_ITEMS_PAGE":
        {
            return {...state, productPage: state.items.find(e => e.id == action.page.item)}
        }
        default: return state
    }
}

export default items_reducer; 