// import axios from "axios";

// import { porcentajeTotal, cierreBanco } from "../../services/paths";


export const GET_BANKS_COLLECTORS_LOADING = "GET_BANKS_COLLECTORS_LOADING";
export const GET_BANKS_COLLECTORS_SUCCESS = "GET_BANKS_COLLECTORS_SUCCESS";
export const GET_BANKS_COLLECTORS_FAIL = "GET_BANKS_COLLECTORS_FAIL";

export const GET_BANKS_AVERAGE_LOADING = "GET_BANKS_AVERAGE_LOADING";
export const GET_BANKS_AVERAGE_SUCCESS = "GET_BANKS_AVERAGE_SUCCESS";
export const GET_BANKS_AVERAGE_FAIL = "GET_BANKS_AVERAGE_FAIL";

const getBanksAverageLoading = () => ({ type: GET_BANKS_AVERAGE_LOADING });
const getBanksAverageSuccess = (payload) => ({ type: GET_BANKS_AVERAGE_SUCCESS, payload });
const getBanksAverageFail = (payload) => ({ type: GET_BANKS_AVERAGE_FAIL, payload });

const getBanksCollectorsLoading = () => ({ type: GET_BANKS_COLLECTORS_LOADING });
const getBanksCollectorsSuccess = (payload) => ({ type: GET_BANKS_COLLECTORS_SUCCESS, payload });
const getBanksCollectorsFail = (payload) => ({ type: GET_BANKS_COLLECTORS_FAIL, payload });

const porcentajeTotal = {
    "respuesta": {
        "mensaje": "some text",
        "fechaInicio": "2018-02-10T09:30Z",
        "fechaFin": "2018-01-17",
        "registrosRetornados": 19
    },
    "sumPresupuesto": 0.74,
    "sumIngresos": 9.59
}

const cierreBanco = [
    {
        "codigoBBanco": 76,
        "nombreBanco": "some text",
        "numeroTransacciones": 64.5,
        "numeroConciliadas": 7.55,
        "numeroNoConciliadas": 0.67,
        "montoColectado": 83.07,
        "montoConciliado": 70.92,
        "montoNoConciliado": 69.84,
        "respuesta": {
            "mensaje": "some text",
            "fechaInicio": "2018-02-10T09:30Z",
            "fechaFin": "2018-01-17",
            "registrosRetornados": 15
        }
    },
    {
        "codigoBBanco": 81,
        "nombreBanco": "some text",
        "numeroTransacciones": 53.55,
        "numeroConciliadas": 1.45,
        "numeroNoConciliadas": 21.73,
        "montoColectado": 46.88,
        "montoConciliado": 24.72,
        "montoNoConciliado": 40.96,
        "respuesta": {
            "mensaje": "some text",
            "fechaInicio": "2018-02-10T09:30Z",
            "fechaFin": "2018-01-17",
            "registrosRetornados": 16
        }
    }
]


const getBanksAverage = () => async (dispatch) => {
    dispatch(getBanksAverageLoading());
    // console.log('%ccollectorsAction.js line:83 process.env.REACT_APP_BASE_URL', 'color: #007acc;', process.env);
    // console.log('%ccollectorsAction.js line:86 porcentajeTotal(1621096814, 1621096814)', 'color: #007acc;', totalRecaudacion(1621096814, 1621096814));
    try {
        // let response = await axios.get(porcentajeTotal(1621096814, 1621096814));

        // let data = [];
        // if (response.status === 200) {
        //     console.log('%ccollectorsAction.js line:87 response', 'color: #007acc;', response);

        let data = {
            porcentajeTotal
        };

        dispatch(getBanksAverageSuccess(data))

        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getBanksAverage", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getBanksAverageFail(data));
    }
    return Promise.resolve();
};

const getBanksCollectors = () => async (dispatch) => {
    dispatch(getBanksCollectorsLoading());
    // console.log('%ccollectorsAction.js line:83 process.env.REACT_APP_BASE_URL', 'color: #007acc;', process.env);
    // console.log('%ccollectorsAction.js line:86 cierreBanco(1621096814, 1621096814)', 'color: #007acc;', totalRecaudacion(1621096814, 1621096814));
    try {
        // let response = await axios.get(cierreBanco(1621096814, 1621096814));

        // let data = [];
        // if (response.status === 200) {
        //     console.log('%ccollectorsAction.js line:87 response', 'color: #007acc;', response);

        let data = cierreBanco;

        dispatch(getBanksCollectorsSuccess(data))

        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getBanksCollectors", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getBanksCollectorsFail(data));
    }
    return Promise.resolve();
};

export {
    getBanksAverage,
    getBanksCollectors,
};