const InitialState = 
{
    items: [ {
        "name": "AK-12",
        "id": 1,
        "photo": "./img/ак12.jpg",
        "calibr": "5,45x39", 
        "madeIn": "Russia", 
        "description": "I love orange",
        "cost": 89000     
    }, 
    {
        "name": "AK-74",
        "id": 2,
        "photo": "./img/ак74.jpg",
        "calibr": "5,45x39", 
        "madeIn": "Russia", 
        "description": "I love orange",
        "cost": 57000     
    }, ]
}


const items_reducer = (state = InitialState, action) => 
{
    switch (action.type)
    {
        case "GET_ITEMS": 
        {
            return {...state, items: action.items}
        }
    }
}