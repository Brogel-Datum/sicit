import {
    GET_ALL_COLLECTORS_LOADING,
    GET_ALL_COLLECTORS_SUCCESS,
    GET_ALL_COLLECTORS_FAIL,

    GET_ALL_COLLECTORS_TOTAL_LOADING,
    GET_ALL_COLLECTORS_TOTAL_SUCCESS,
    GET_ALL_COLLECTORS_TOTAL_FAIL,

    GET_BANK_COLLECTORS_LOADING,
    GET_BANK_COLLECTORS_SUCCESS,
    GET_BANK_COLLECTORS_FAIL,

    GET_TREND_LOADING,
    GET_TREND_SUCCESS,
    GET_TREND_FAIL
} from "../actions/collectorsAction";

const initState = {
    getAllCollectors: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getAllCollectorsTotal: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getBankCollectors: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getTrend: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
}

const CollectorsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_COLLECTORS_LOADING: return {
            ...state,
            getAllCollectors: {
                ...state.getAllCollectors,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_ALL_COLLECTORS_SUCCESS: return {
            ...state,
            getAllCollectors: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_ALL_COLLECTORS_FAIL: return {
            ...state,
            getAllCollectors: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        case GET_ALL_COLLECTORS_TOTAL_LOADING: return {
            ...state,
            getAllCollectorsTotal: {
                ...state.getAllCollectorsTotal,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_ALL_COLLECTORS_TOTAL_SUCCESS: return {
            ...state,
            getAllCollectorsTotal: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_ALL_COLLECTORS_TOTAL_FAIL: return {
            ...state,
            getAllCollectorsTotal: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }


        case GET_BANK_COLLECTORS_LOADING: return {
            ...state,
            getBankCollectors: {
                ...state.getBankCollectors,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_BANK_COLLECTORS_SUCCESS: return {
            ...state,
            getBankCollectors: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_BANK_COLLECTORS_FAIL: return {
            ...state,
            getBankCollectors: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        case GET_TREND_LOADING: return {
            ...state,
            getTrend: {
                ...state.getTrend,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_TREND_SUCCESS: return {
            ...state,
            getTrend: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_TREND_FAIL: return {
            ...state,
            getTrend: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        default: return state;
    }
};

export default CollectorsReducer;