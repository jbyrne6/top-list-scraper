import { INCREMENT, DECREMENT, SET_SEARCH_LOADING, SET_SEARCH_RESULTS } from './scraper.types';


export const increaseScraper = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseScraper = () => {

    return {

       type: DECREMENT,

    };

};

export const setSearchLoadingA = (setTerm) => {

    return {

       type: SET_SEARCH_LOADING,
       payload: setTerm,

    };

};

export const setSearchResultsA = (results) => {

    return {

       type: SET_SEARCH_RESULTS,
       payload: results,

    };

};