const InitialState = 
{
    items: null, 
    item_page: 0
}


const items_reducer = (state = InitialState, action) => 
{
    switch (action.type)
    {
        case "GET_ITEMS": 
        {
            return {...state, items: action.items}
        }
        default: return state
    }
}

export default items_reducer; 