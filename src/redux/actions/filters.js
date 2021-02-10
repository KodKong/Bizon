

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

export const filtersByCost = (turn) => 
{
    return {
        type: "FILTER_BY_COST", 
        turn
    }
}

