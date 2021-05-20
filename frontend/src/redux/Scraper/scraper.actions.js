import { INCREMENT, DECREMENT } from './scraper.types';


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