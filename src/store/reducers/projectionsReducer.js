import {
    GET_ALL_PROJECTIONS_LOADING,
    GET_ALL_PROJECTIONS_SUCCESS,
    GET_ALL_PROJECTIONS_FAIL,

    GET_ALL_TAXES_PROJECTIONS_LOADING,
    GET_ALL_TAXES_PROJECTIONS_SUCCESS,
    GET_ALL_TAXES_PROJECTIONS_FAIL,

    GET_ALL_TAXES_LIST_LOADING,
    GET_ALL_TAXES_LIST_SUCCESS,
    GET_ALL_TAXES_LIST_FAIL,

    GET_PROJECTIONS_COLLECTORS_LOADING,
    GET_PROJECTIONS_COLLECTORS_SUCCESS,
    GET_PROJECTIONS_COLLECTORS_FAIL,

    GET_TAXES_LIST_TOTAL_LOADING,
    GET_TAXES_LIST_TOTAL_SUCCESS,
    GET_TAXES_LIST_TOTAL_FAIL
} from "../actions/projectionsAction";

const initState = {
    getAllProjections: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getAllTaxesProjections: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getAllTaxesList: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getProjectionsCollectors: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
    getTaxesList: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    },
}

const ProjectionsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTIONS_LOADING: return {
            ...state,
            getAllProjections: {
                ...state.getAllProjections,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_ALL_PROJECTIONS_SUCCESS: return {
            ...state,
            getAllProjections: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_ALL_PROJECTIONS_FAIL: return {
            ...state,
            getAllProjections: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        case GET_ALL_TAXES_PROJECTIONS_LOADING: return {
            ...state,
            getAllTaxesProjections: {
                ...state.getAllTaxesProjections,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_ALL_TAXES_PROJECTIONS_SUCCESS: return {
            ...state,
            getAllTaxesProjections: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_ALL_TAXES_PROJECTIONS_FAIL: return {
            ...state,
            getAllTaxesProjections: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        case GET_ALL_TAXES_LIST_LOADING: return {
            ...state,
            getAllTaxesList: {
                ...state.getAllTaxesList,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_ALL_TAXES_LIST_SUCCESS: return {
            ...state,
            getAllTaxesList: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_ALL_TAXES_LIST_FAIL: return {
            ...state,
            getAllTaxesList: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        case GET_PROJECTIONS_COLLECTORS_LOADING: return {
            ...state,
            getProjectionsCollectors: {
                ...state.getProjectionsCollectors,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_PROJECTIONS_COLLECTORS_SUCCESS: return {
            ...state,
            getProjectionsCollectors: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_PROJECTIONS_COLLECTORS_FAIL: return {
            ...state,
            getProjectionsCollectors: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }

        case GET_TAXES_LIST_TOTAL_LOADING: return {
            ...state,
            getTaxesList: {
                ...state.getTaxesList,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_TAXES_LIST_TOTAL_SUCCESS: return {
            ...state,
            getTaxesList: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload,
            }
        }
        case GET_TAXES_LIST_TOTAL_FAIL: return {
            ...state,
            getTaxesList: {
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

export default ProjectionsReducer;