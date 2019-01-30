import { combineReducers} from 'redux';
import deviceWatch from './deviceWatch';
import device from './device';
import company from './company';

export default combineReducers({
    deviceWatch,
    company,
    device
});
