import * as marketActions from './marketActions';



interface MarketState {
    myHoldings: string | number;
    coins: number[];
    error: any;
    loading: boolean;
}

const initialState: MarketState = {
    myHoldings: '',
    coins: [],
    error: null,
    loading: false
};


type Action =
    | { type: typeof marketActions.GET_HOLDINGS_BEGIN | typeof marketActions.GET_COIN_MARKET_BEGIN }
    | { type: typeof marketActions.GET_HOLDINGS_SUCCESS, payload: { myHoldings: string | number } }
    | { type: typeof marketActions.GET_HOLDINGS_FAILURE | typeof marketActions.GET_COIN_MARKET_FAILURE, payload: { error: any } }
    | { type: typeof marketActions.GET_COIN_MARKET_SUCCESS, payload: { coins: number[] } };

const marketReducer = (state: MarketState = initialState, action: Action) => {
    switch (action.type) {
        case marketActions.GET_HOLDINGS_BEGIN:
        case marketActions.GET_COIN_MARKET_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case marketActions.GET_HOLDINGS_SUCCESS:
            return {
                ...state,
                myHoldings: action.payload.myHoldings,
                loading: false,
                error: null
            };
        case marketActions.GET_HOLDINGS_FAILURE:
        case marketActions.GET_COIN_MARKET_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                loading: false
            };
        case marketActions.GET_COIN_MARKET_SUCCESS:
            return {
                ...state,
                coins: action.payload.coins,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export default marketReducer;
