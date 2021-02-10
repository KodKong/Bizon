

export const filtersByCountry = (homeland) => 
{
    return {
        type: "FILTER_BY_COUNTRY", 
        homeland
    }
}


export const filtersByType = (turn) => 
{
    return {
        type: "FILTER_BY_TYPE", 
        turn
    }
}

export const filtersByCostDown = (cost) => 
{
    return {
        type: "FILTER_BY_COST_DOWN", 
        cost
    }
}

export const filtersByCostUp = (cost) => 
{
    return {
        type: "FILTER_BY_COST_UP", 
        cost
    }
}

export const deleteFilters = () => 
{
    return {
        type: "DELETE_FILTERS", 
    }
}

