import * as tabActionTypes from './tabActions';

interface TabState {
    isTradeModalVisible: boolean;
}

const initialState = {
    isTradeModalVisible: false
};

const tabReducer = (state: TabState = initialState, action: any) => {
    switch (action.type) {
        case tabActionTypes.SET_TRADE_MODAL_VISIBILITY:
            return {
                ...state,
                isTradeModalVisible: action.payload.isVisible
            };
        default:
            return state;
    }
}
export default tabReducer;
