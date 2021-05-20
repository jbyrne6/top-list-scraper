import { combineReducers } from 'redux';


import scraperReducer from './Scraper/scraper.reducer';


const rootReducer = combineReducers({

    scraper: scraperReducer,

});

export default rootReducer;