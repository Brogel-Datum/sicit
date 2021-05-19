import {
    GET_BANKS_AVERAGE_LOADING,
    GET_BANKS_AVERAGE_SUCCESS,
    GET_BANKS_AVERAGE_FAIL,
    GET_BANKS_COLLECTORS_LOADING,
    GET_BANKS_COLLECTORS_SUCCESS,
    GET_BANKS_COLLECTORS_FAIL,
} from "../actions/banksAction";

const initState = {
    getBanksAverage: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getBanks: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
}

const banksReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_BANKS_AVERAGE_LOADING: return {
            ...state,
            getBanksAverage: {
                ...state.getBanksAverage,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_BANKS_AVERAGE_SUCCESS: return {
            ...state,
            getBanksAverage: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_BANKS_AVERAGE_FAIL: return {
            ...state,
            getBanksAverage: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        case GET_BANKS_COLLECTORS_LOADING: return {
            ...state,
            getBanks: {
                ...state.getBanks,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_BANKS_COLLECTORS_SUCCESS: return {
            ...state,
            getBanks: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_BANKS_COLLECTORS_FAIL: return {
            ...state,
            getBanks: {
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

export default banksReducer;