
const InitialState = 
{
    items: null, 
    productPage: null, 
    filterItems: null
}


const items_reducer = (state = InitialState, action) => 
{
    switch (action.type)
    {
        case "GET_ITEMS": 
        {
            return {...state, items: action.items, productPage: state.productPage}
        }
        case "GET_ITEMS_PAGE":
        {
            return {...state, productPage: state.items.find(e => e.id == action.page.item)}
        }
        case "FILTER_BY_COUNTRY": 
        {
          return {...state, filterItems: state.items.filter(e => e.homeland === action.homeland)}
        }
        case "FILTER_BY_COST_DOWN": 
        {
            debugger
            return {...state, filterItems: state.items.sort((a, b) => b.cost-a.cost)}
        }
        case "FILTER_BY_COST_UP": 
        {
            debugger
            return {...state, filterItems: state.items.sort((a, b) => a.cost-b.cost)}
        }
        case "FILTER_BY_TYPE":
        {
            return {...state, filterItems: state.items.filter(e => e.turn === action.turn)}
        }
        case "DELETE_FILTERS":
        {
            return {...state, filterItems: state.items}
        }
        default: return state
    }
}

export default items_reducer; 