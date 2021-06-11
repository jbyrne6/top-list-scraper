import { INCREMENT, DECREMENT, SET_SEARCH_LOADING, SET_SEARCH_RESULTS } from './scraper.types';


const INITIAL_STATE = {
    count: 0,
    searchLoading: false,
    searchResults: {},
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case INCREMENT:
           return {
             ...state, count: state.count + 1,
           };

        case DECREMENT:
           return {
              ...state, count: state.count - 1,
           };

        case SET_SEARCH_LOADING:
        return {
          ...state, searchLoading: action.payload,
        };

        case SET_SEARCH_RESULTS:
          return {
            ...state, searchResults: action.payload,
          };

         default: return state;

    }

};

export default reducer;