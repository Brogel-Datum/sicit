// import axios from "axios";

// import { actionRecaudador, addRecaudador } from "../../services/paths";

export const GET_ALL_COLLECTORS_LOADING = "GET_ALL_COLLECTORS_LOADING";
export const GET_ALL_COLLECTORS_SUCCESS = "GET_ALL_COLLECTORS_SUCCESS";
export const GET_ALL_COLLECTORS_FAIL = "GET_ALL_COLLECTORS_FAIL";

export const ADD_COLLECTOR_LOADING = "ADD_COLLECTOR_LOADING";
export const ADD_COLLECTOR_SUCCESS = "ADD_COLLECTOR_SUCCESS";
export const ADD_COLLECTOR_FAIL = "ADD_COLLECTOR_FAIL";

export const UPDATE_COLLECTOR_LOADING = "UPDATE_COLLECTOR_LOADING";
export const UPDATE_COLLECTOR_SUCCESS = "UPDATE_COLLECTOR_SUCCESS";
export const UPDATE_COLLECTOR_FAIL = "UPDATE_COLLECTOR_FAIL";

export const DELETE_COLLECTOR_LOADING = "DELETE_COLLECTOR_LOADING";
export const DELETE_COLLECTOR_SUCCESS = "DELETE_COLLECTOR_SUCCESS";
export const DELETE_COLLECTOR_FAIL = "DELETE_COLLECTOR_FAIL";

const getAllCollectorsLoading = () => ({ type: GET_ALL_COLLECTORS_LOADING });
const getAllCollectorsSuccess = (payload) => ({ type: GET_ALL_COLLECTORS_SUCCESS, payload });
const getAllCollectorsFail = (payload) => ({ type: GET_ALL_COLLECTORS_FAIL, payload });

const addCollectorLoading = () => ({ type: ADD_COLLECTOR_LOADING });
const addCollectorSuccess = (payload) => ({ type: ADD_COLLECTOR_SUCCESS, payload });
const addCollectorFail = (payload) => ({ type: ADD_COLLECTOR_FAIL, payload });

const updateCollectorLoading = () => ({ type: UPDATE_COLLECTOR_LOADING });
const updateCollectorSuccess = (payload) => ({ type: UPDATE_COLLECTOR_SUCCESS, payload });
const updateCollectorFail = (payload) => ({ type: UPDATE_COLLECTOR_FAIL, payload });

const deleteCollectorLoading = () => ({ type: DELETE_COLLECTOR_LOADING });
const deleteCollectorSuccess = (payload) => ({ type: DELETE_COLLECTOR_SUCCESS, payload });
const deleteCollectorFail = (payload) => ({ type: DELETE_COLLECTOR_FAIL, payload });

const getRecaudacion = {
    "mensaje": "Registros recuperados con exito",
    "detalleRecaudador": {
        "descripcionInstitucion": "some text",
        "contactosRecaudador": [
            {
                "nombreContacto": "some text",
                "correoContacto": "some text",
                "codigoContacto": 92,
                "puestoContacto": "some text",
                "estadoContacto": 16,
                "creadoPor": "some text",
                "modificadoPor": "some text"
            },
            {
                "nombreContacto": "some text",
                "correoContacto": "some text",
                "codigoContacto": 28,
                "puestoContacto": "some text",
                "estadoContacto": 7,
                "creadoPor": "some text",
                "modificadoPor": "some text"
            }
        ],
        "creadoPor": "some text",
        "codigoRecaudador": "some text",
        "nombreReaudador": "some text",
        "estadoRecaudador": true,
        "modificadoPor": "some text"
    },
    "registros": 1
}

const addRecaudacion = {
    "descripcionInstitucion": "some text",
    "contactosRecaudador": [
        {
            "nombreContacto": "some text",
            "correoContacto": "some text",
            "codigoContacto": 37,
            "puestoContacto": "some text",
            "estadoContacto": 66,
            "creadoPor": "some text",
            "modificadoPor": "some text"
        },
        {
            "nombreContacto": "some text",
            "correoContacto": "some text",
            "codigoContacto": 53,
            "puestoContacto": "some text",
            "estadoContacto": 68,
            "creadoPor": "some text",
            "modificadoPor": "some text"
        }
    ],
    "creadoPor": "some text",
    "nombreReaudador": "some text",
    "estadoRecaudador": true,
    "modificadoPor": "some text"
}

const deleteRecaudacion = {
    "mensaje": "Registros dados de baja con exito",
        "detalleRecaudador": {
        "descripcionInstitucion": "some text",
            "contactosRecaudador": [
                {
                    "nombreContacto": "some text",
                    "correoContacto": "some text",
                    "codigoContacto": 91,
                    "puestoContacto": "some text",
                    "estadoContacto": 78,
                    "creadoPor": "some text",
                    "modificadoPor": "some text"
                },
                {
                    "nombreContacto": "some text",
                    "correoContacto": "some text",
                    "codigoContacto": 75,
                    "puestoContacto": "some text",
                    "estadoContacto": 90,
                    "creadoPor": "some text",
                    "modificadoPor": "some text"
                }
            ],
                "creadoPor": "some text",
                    "codigoRecaudador": "some text",
                        "nombreReaudador": "some text",
                            "estadoRecaudador": true,
                                "modificadoPor": "some text"
    },
    "registros": 1
}

const updateRecaudacion = {
    "descripcionInstitucion": "some text",
    "contactosRecaudador": {
        "nombreContacto": "some text",
        "correoContacto": "some text",
        "codigoContacto": 23,
        "puestoContacto": "some text",
        "estadoContacto": 38,
        "creadoPor": "some text",
        "modificadoPor": "some text"
    },
    "creadoPor": "some text",
    "codigoRecaudador": "some text",
    "nombreReaudador": "some text",
    "estadoRecaudador": true,
    "modificadoPor": "some text"
}


const getAllCollectors = () => async (dispatch) => {
    dispatch(getAllCollectorsLoading());
    // console.log('%ccollectorsAction.js line:83 process.env.REACT_APP_BASE_URL', 'color: #007acc;', process.env);
    // console.log('%ccollectorsAction.js line:86 actionRecaudador(1621096814, 1621096814)', 'color: #007acc;', totalRecaudacion(1621096814, 1621096814));
    try {
        // let response = await axios.get(actionRecaudador(1621096814, 1621096814));

        // let data = [];
        // if (response.status === 200) {
        //     console.log('%ccollectorsAction.js line:87 response', 'color: #007acc;', response);

        let data = getRecaudacion;

        dispatch(getAllCollectorsSuccess(data))

        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getAllCollectors", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getAllCollectorsFail(data));
    }
    return Promise.resolve();
};

const addCollector = () => async (dispatch) => {
    dispatch(addCollectorLoading());
    try {
        // let response = await axios.get(addRecaudador(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = addRecaudacion;
        dispatch(addCollectorSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction addCollector", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(addCollectorFail(data));
    }
    return Promise.resolve();
};

const updateCollector = () => async (dispatch) => {
    dispatch(updateCollectorLoading());
    try {
        // let response = await axios.get(actionRecaudador(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = updateRecaudacion;
        dispatch(updateCollectorSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction updateCollector", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(updateCollectorFail(data));
    }
    return Promise.resolve();
};

const deleteCollector = () => async (dispatch) => {
    dispatch(deleteCollectorLoading());
    try {
        // let response = await axios.get(actionRecaudador(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = deleteRecaudacion;
        dispatch(deleteCollectorSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction deleteCollector", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(deleteCollectorFail(data));
    }
    return Promise.resolve();
};

export {
    getAllCollectors,
    addCollector,
    updateCollector,
    deleteCollector
};