import * as types from '../actions/actionTypes';

export default function (state = {
    n: 'user',
    data: [],
    realTimeData: {},
    error: null,
    activeItem: null,
    weekDays: [],
    monthDays: [],
    months: []

}, action = null) {
    switch (action.type) {
        case state.n + types.GET_ITEMS:
            console.log("action payload ", action.payload)
            return Object.assign({}, state, { data: action.payload, error: action.iserror });
        case state.n + types.SELECT_ITEM:
            return { ...state, activeItem: action.payload };
        case state.n + types.CREATE_ITEM:
            // we are dispatching to this reducer in the two cases sucess and error (look crud postData)
            if (action.payload)
                state.data.push(action.payload);
            return state;
        case state.n + types.SELECT_ITEM:
            return { ...state, activeItem: action.payload };


        default:
            return state;
    }
}