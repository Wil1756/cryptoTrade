export const portfolio: {
    balance: string;
    changes: string;
} = {
    balance: "12,724.33",
    changes: "+2.36%",
};

export interface TrendingCurrency {
    id: number;
    currency: string;
    code: string;
    image: string;
    amount: string;
    changes: string;
    type: string;
    description: string;
    chartData: { x: number; y: number }[];
    wallet: {
        value: string;
        crypto: string;
    };
    transactionHistory: {
        id: number;
        description: string;
        amount: number;
        currency: string;
        type: string;
        date: string;
    }[];
}

export const trendingCurrencies: TrendingCurrency[] = [
    {
        id: 1,
        currency: "Bitcoin",
        code: "BTC",
        image: require("../../assets/images/bitcoin.png"),
        amount: "29,455.74",
        changes: "+7.24%",
        type: "I",
        description:
            "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.",
        chartData: [
            { x: 1, y: 2.5 },
            { x: 1.5, y: 2 },
            { x: 2, y: 2.3 },
            { x: 2.5, y: 1.4 },
            { x: 3, y: 1.5 },
            { x: 3.5, y: 2.3 },
            { x: 4, y: 2.8 },
        ],
        wallet: {
            value: "170435.86",
            crypto: "5.1",
        },
        transactionHistory: [
            {
                id: 1,
                description: "Sold Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",
                date: "14:20 12 Apr",
            },
            {
                id: 2,
                description: "Bought Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr",
            },
        ],
    },

];

export const transactionHistory: TrendingCurrency["transactionHistory"] = [
    {
        id: 1,
        description: "Sold Ethereum",
        amount: -2.0034,
        currency: "ETH",
        type: "S",
        date: "14:20 12 Apr",
    },
    {
        id: 2,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr",
    },
];

export interface ChartOption {
    id: number;
    label: string;
}

export const chartOptions: ChartOption[] = [
    {
        id: 1,
        label: "1 hr",
    },
    {
        id: 2,
        label: "3 Days",
    },
    {
        id: 3,
        label: "1 Week",
    },
    {
        id: 4,
        label: "1 Month",
    },
    {
        id: 5,
        label: "3 Months",
    },
];

const dummyData = {
    portfolio,
    trendingCurrencies,
    transactionHistory,
    chartOptions,
};

export default dummyData;
