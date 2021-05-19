// import axios from "axios";

// import { totalRecaudacion, totalDetaRecaudacion, montoBancos, tendenciaMes } from "../../services/paths";

export const GET_ALL_COLLECTORS_LOADING = "GET_ALL_COLLECTORS_LOADING";
export const GET_ALL_COLLECTORS_SUCCESS = "GET_ALL_COLLECTORS_SUCCESS";
export const GET_ALL_COLLECTORS_FAIL = "GET_ALL_COLLECTORS_FAIL";

export const GET_ALL_COLLECTORS_TOTAL_LOADING = "GET_ALL_COLLECTORS_TOTAL_LOADING";
export const GET_ALL_COLLECTORS_TOTAL_SUCCESS = "GET_ALL_COLLECTORS_TOTAL_SUCCESS";
export const GET_ALL_COLLECTORS_TOTAL_FAIL = "GET_ALL_COLLECTORS_TOTAL_FAIL";

export const GET_BANK_COLLECTORS_LOADING = "GET_BANK_COLLECTORS_LOADING";
export const GET_BANK_COLLECTORS_SUCCESS = "GET_BANK_COLLECTORS_SUCCESS";
export const GET_BANK_COLLECTORS_FAIL = "GET_BANK_COLLECTORS_FAIL";

export const GET_TREND_LOADING = "GET_TREND_LOADING";
export const GET_TREND_SUCCESS = "GET_TREND_SUCCESS";
export const GET_TREND_FAIL = "GET_TREND_FAIL";

const getAllCollectorsLoading = () => ({ type: GET_ALL_COLLECTORS_LOADING });
const getAllCollectorsSuccess = (payload) => ({ type: GET_ALL_COLLECTORS_SUCCESS, payload });
const getAllCollectorsFail = (payload) => ({ type: GET_ALL_COLLECTORS_FAIL, payload });

const getAllCollectorsTotalLoading = () => ({ type: GET_ALL_COLLECTORS_TOTAL_LOADING });
const getAllCollectorsTotalSuccess = (payload) => ({ type: GET_ALL_COLLECTORS_TOTAL_SUCCESS, payload });
const getAllCollectorsTotalFail = (payload) => ({ type: GET_ALL_COLLECTORS_TOTAL_FAIL, payload });

const getBankCollectorsLoading = () => ({ type: GET_BANK_COLLECTORS_LOADING });
const getBankCollectorsSuccess = (payload) => ({ type: GET_BANK_COLLECTORS_SUCCESS, payload });
const getBankCollectorsFail = (payload) => ({ type: GET_BANK_COLLECTORS_FAIL, payload });

const getTrendLoading = () => ({ type: GET_TREND_LOADING });
const getTrendSuccess = (payload) => ({ type: GET_TREND_SUCCESS, payload });
const getTrendFail = (payload) => ({ type: GET_TREND_FAIL, payload });

const recaudadores = {
    respuesta: {
        mensaje: "some text",
        fechaInicio: "2018-02-10T09:30Z",
        fechaFin: "2018-01-17",
        registrosRetornados: 16
    },
    detalleRecaudacion: [
        {
            codigoRecaudador: "some text",
            totalRecaudacionCorta: 37.55,
            nombreRecaudador: "some text",
            totalRecaudacionCompleta: 94.3,
            color: "some text"
        },
        {
            codigoRecaudador: "some text",
            totalRecaudacionCorta: 29.32,
            nombreRecaudador: "some text",
            totalRecaudacionCompleta: 70.7,
            color: "some text"
        }
    ]
}

const total = {
    respuesta: {
        mensaje: "some text",
        fechaInicio: "2018-02-10T09:30Z",
        fechaFin: "2018-01-17",
        registrosRetornados: 81
    },
    sumTotal: {
        sumIngresosCompleta: 74.98,
        sumIngresosCorta: 63.65
    }
}

const recaudacionBanco = [
    {
        "codigoColector": 70,
        "nombreColector": "some text",
        "montoColectado": 85.71
    },
    {
        "codigoColector": 11,
        "nombreColector": "some text",
        "montoColectado": 4.21
    }
]

const trend = {
    "respuesta": {
        "mensaje": "some text",
        "fechaInicio": "2018-02-10T09:30Z",
        "fechaFin": "2018-01-17",
        "registrosRetornados": 15
    },
    "tendencia": [
        {
            "mes": "some text",
            "periodoFiscal": 97,
            "montoTotal": 86.41
        },
        {
            "mes": "some text",
            "periodoFiscal": 66,
            "montoTotal": 11.2
        }
    ]
}


const getAllCollectors = () => async (dispatch) => {
    dispatch(getAllCollectorsLoading());
    // console.log('%ccollectorsAction.js line:83 process.env.REACT_APP_BASE_URL', 'color: #007acc;', process.env);
    // console.log('%ccollectorsAction.js line:86 totalDetaRecaudacion(1621096814, 1621096814)', 'color: #007acc;', totalRecaudacion(1621096814, 1621096814));
    try {
        // let response = await axios.get(totalDetaRecaudacion(1621096814, 1621096814));

        // let data = [];
        // if (response.status === 200) {
        //     console.log('%ccollectorsAction.js line:87 response', 'color: #007acc;', response);

        let data = {
            ...recaudadores
        };

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

const getAllCollectorsTotal = () => async (dispatch) => {
    dispatch(getAllCollectorsTotalLoading());
    try {
        // let response = await axios.get(totalRecaudacion(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = {
            ...total
        };
        dispatch(getAllCollectorsTotalSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getAllCollectorsTotal", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getAllCollectorsTotalFail(data));
    }
    return Promise.resolve();
};

const getBankCollectors = () => async (dispatch) => {
    dispatch(getBankCollectorsLoading());
    try {
        // let response = await axios.get(montoBancos(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = [
            ...recaudacionBanco
        ];
        dispatch(getBankCollectorsSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getBankCollectors", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getBankCollectorsFail(data));
    }
    return Promise.resolve();
};

const getTrend = () => async (dispatch) => {
    dispatch(getTrendLoading());
    try {
        // let response = await axios.get(tendenciaMes(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = trend;
        dispatch(getTrendSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getTrend", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getTrendFail(data));
    }
    return Promise.resolve();
};

export {
    getAllCollectors,
    getAllCollectorsTotal,
    getBankCollectors,
    getTrend
};