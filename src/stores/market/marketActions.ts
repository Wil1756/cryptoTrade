import axios from 'axios';

export const GET_HOLDINGS_BEGIN = "GET_HOLDINGS_BEGIN"
export const GET_HOLDINGS_SUCCESS = "GET_HOLDINGS_SUCCESS"
export const GET_HOLDINGS_FAILURE = "GET_HOLDINGS_FAILURE"
export const GET_COIN_MARKET_BEGIN = "GET_COIN_MARKET_BEGIN"
export const GET_COIN_MARKET_SUCCESS = "GET_COIN_MARKET_SUCCESS"
export const GET_COIN_MARKET_FAILURE = "GET_COIN_MARKET_FAILURE"

// api
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d&locale=en


// Holding /my holdings
export const getHoldingsBegin = () => ({
    type: GET_HOLDINGS_BEGIN,
})

export const getHoldingsSuccess = (myHoldings: any[]) => ({
    type: GET_HOLDINGS_SUCCESS,
    payload: { myHoldings }
})

export const getHoldingsFailure = (error: any) => ({
    type: GET_HOLDINGS_FAILURE,
    payload: { error }
})


export function getHoldings(
    holdings: { id: string; qty: number }[] = [],
    currency: string = "usd",
    orderBy: string = "market_cap_desc",
    sparkline: boolean = true,
    priceChangePerc: string = "7d",
    perPage: number = 10,
    page: number = 1
) {
    return (dispatch: any) => {
        dispatch(getHoldingsBegin())

        let ids = holdings.map((item) => { return item.id }).join(",")

        let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`

        return axios({
            url: apiUrl,
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }).then((response) => {
            // console.log("GetHoldings")
            // console.log(response)
            if (response.status === 200) {
                // play with the data

                let myHoldings = response.data.map((item: any) => {
                    // retrieve the current holdings
                    let coin: any = holdings.find(a => a.id == item.id)

                    // price from 7days ago
                    let price7d = item.current_price / (1 + item.price_change_percentage_7d_in_currency * 0.01)

                    return {
                        id: item.id,
                        symbol: item.symbol,
                        name: item.name,
                        image: item.image,
                        current_price: item.current_price,
                        qty: coin.qty,
                        total: coin.qty * item.current_price,
                        price_change_percentage_7d_in_currency: item.price_change_percentage_7d_in_currency,
                        holding_value_change_7d: (item.current_price - price7d) * coin.qty,
                        sparkline_in_7d: {
                            value: item.sparkline_in_7d.price.map((price: number) => {
                                return price * coin.qty
                            })
                        }

                    }
                })
                dispatch(getHoldingsSuccess(myHoldings))
            } else {
                dispatch(getHoldingsFailure(response.data))
            }
        }).catch((error: any) => {
            dispatch(getHoldingsFailure(error))
        })
    }
}

// coin market 

export const getCoinMarketBegin = () => ({
    type: GET_COIN_MARKET_BEGIN
})

export const getCoinMarketSuccess = (coins: number) => ({
    type: GET_COIN_MARKET_SUCCESS,
    payload: { coins }
})

export const getCoinMarketFailure = (error: any) => ({
    type: GET_COIN_MARKET_FAILURE,
    payload: { error }
})

export function getCoinMarket(
    currency = 'usd',
    orderBy = "market_cap_desc",
    sparkline = true,
    priceChangePerc = "7d",
    perPage = 10,
    page = 1
) {
    return (dispatch: any) => {
        dispatch(getCoinMarketBegin())

        let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`

        return axios({
            url: apiUrl,
            method: 'GET',
            headers: {
                Accept: "application/json"
            }
        }).then((response) => {
            // console.log("GetCoinMarket")
            // console.log(response)
            if (response.status === 200) {
                dispatch(getCoinMarketSuccess(response.data))
            } else {
                dispatch(getCoinMarketFailure(response.data))
            }
        }).catch((error) => {
            dispatch(getCoinMarketFailure(error))
        })
    }

}
