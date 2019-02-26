import { combineReducers} from 'redux';
import deviceWatch from './deviceWatch';
import device from './device';
import company from './company';
import check from './check';
import supervisory from './supervisory';
import common from './common';

export default combineReducers({
    deviceWatch,
    company,
    device,
    check,
    supervisory,
    common,
});
