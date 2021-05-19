import { combineReducers } from 'redux';

import collectorsReducer from './collectorsReducer';
import banksReducer from './banksReducer';
import projectionsReducer from './projectionsReducer';
import maintenanceCollectorsReducer from './maintenanceCollectorsReducer';

const rootReducer = combineReducers({
    collectorsReducer,
    banksReducer,
    projectionsReducer,
    maintenanceCollectorsReducer
});

export default rootReducer;