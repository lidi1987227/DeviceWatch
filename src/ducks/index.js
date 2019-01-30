import { combineReducers} from 'redux';
import deviceWatch from './deviceWatch';
import device from './device';

export default combineReducers({
    deviceWatch,
    device
});
