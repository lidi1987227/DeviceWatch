const CHANGE_TEST = 'deviceWatch/changeTest';

const initState={
    test:'test'
};

export default function reducer(state=initState,action) {
    switch (action.type) {
        case CHANGE_TEST:
            return Object.assign({},state,{test:action.data});
        default:
            return state;

    }
}

export const changeTest = (data)=>window.$dispatch({type:CHANGE_TEST,data});

window.changeTest=changeTest;