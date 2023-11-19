import * as tabActions from "./tabActions";

interface TabState {
    isTradeModalVisible: boolean;
}

const initialState = {
    isTradeModalVisible: false
};

const tabReducer = (state: TabState = initialState, action: tabActions.TabAction) => {
    switch (action.type) {
        case tabActions.SET_TRADE_MODAL_VISIBILITY:
            return {
                ...state,
                isTradeModalVisible: action.payload.isVisible
            };
        default:
            return state;
    }
}
export default tabReducer;
