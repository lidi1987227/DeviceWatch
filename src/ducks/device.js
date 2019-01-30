const SET_DEVICE_LIST = 'device/setDeviceList';

const initState = {
    deviceList: []
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_DEVICE_LIST:
            return Object.assign({}, state, { deviceList: action.list });
        default:
            return state;

    }
}

export const setDeviceList = (list) => window.$dispatch({ type: SET_DEVICE_LIST, list });
