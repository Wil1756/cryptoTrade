export interface TabAction {
    type: string;
    payload: { isVisible: boolean }
}

export const SET_TRADE_MODAL_VISIBILITY = 'SET_TRADE_MODAL_VISIBILITY';


export interface setTradeModalVisibilityAction {
    type: typeof SET_TRADE_MODAL_VISIBILITY;
    payload: { isVisible: boolean };
};

export const setTradeModalVisibilitySuccess = (isVisible: boolean): setTradeModalVisibilityAction => ({
    type: SET_TRADE_MODAL_VISIBILITY,
    payload: { isVisible }
});

export function setTradeModalVisibility(isVisible: boolean) {
    return (dispatch: React.Dispatch<setTradeModalVisibilityAction>) => {
        dispatch(setTradeModalVisibilitySuccess(isVisible))
    }
};

