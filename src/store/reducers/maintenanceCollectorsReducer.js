import {
    GET_ALL_COLLECTORS_LOADING,
    GET_ALL_COLLECTORS_SUCCESS,
    GET_ALL_COLLECTORS_FAIL,

    ADD_COLLECTOR_LOADING,
    ADD_COLLECTOR_SUCCESS,
    ADD_COLLECTOR_FAIL,

    UPDATE_COLLECTOR_LOADING,
    UPDATE_COLLECTOR_SUCCESS,
    UPDATE_COLLECTOR_FAIL,

    DELETE_COLLECTOR_LOADING,
    DELETE_COLLECTOR_SUCCESS,
    DELETE_COLLECTOR_FAIL
} from "../actions/maintenanceCollectorsActions";

const initState = {
    getAllCollectors: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    addCollector: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    updateCollector: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    deleteCollector: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    }
}

const collectorsReducer = (state = initState, action) => {
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

        case ADD_COLLECTOR_LOADING: return {
            ...state,
            addCollector: {
                ...state.addCollector,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case ADD_COLLECTOR_SUCCESS: return {
            ...state,
            addCollector: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case ADD_COLLECTOR_FAIL: return {
            ...state,
            addCollector: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }


        case UPDATE_COLLECTOR_LOADING: return {
            ...state,
            updateCollector: {
                ...state.updateCollector,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case UPDATE_COLLECTOR_SUCCESS: return {
            ...state,
            updateCollector: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case UPDATE_COLLECTOR_FAIL: return {
            ...state,
            updateCollector: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        case DELETE_COLLECTOR_LOADING: return {
            ...state,
            deleteCollector: {
                ...state.deleteCollector,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case DELETE_COLLECTOR_SUCCESS: return {
            ...state,
            deleteCollector: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case DELETE_COLLECTOR_FAIL: return {
            ...state,
            deleteCollector: {
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

export default collectorsReducer;