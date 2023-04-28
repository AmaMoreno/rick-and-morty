import {ADD_FAV, REMOVE_FAV} from "./actions-types"


const initialState = {
    myFavorites: [],
    allCharactersFav : []
}

const reducer = (state = initialState, {type, payload}) => {
        switch(type){
            case ADD_FAV:
        return{...state,
        myFavorites: payload,
        allCharactersFav: payload
        }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: payload
            }

        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter(allCharactersFav)
            return{
                ...state,
                myFavorites:
                payload === 'allCharactersFav'
                ?[...state.allCharactersFav]
                : allCharactersFiltered
            }


        default:
            return{...state} 
        }
    }

export default reducer;