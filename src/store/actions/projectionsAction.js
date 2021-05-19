// import axios from "axios";

// import { 
//     porcentajeDetalle,
//     recaudacionImpuesto,
//     lstImpuestos,
//     proyeccionRecaudacion,
//     lstSumImpuestos
// } from "../../services/paths";

export const GET_ALL_PROJECTIONS_LOADING = "GET_ALL_PROJECTIONS_LOADING";
export const GET_ALL_PROJECTIONS_SUCCESS = "GET_ALL_PROJECTIONS_SUCCESS";
export const GET_ALL_PROJECTIONS_FAIL = "GET_ALL_PROJECTIONS_FAIL";

export const GET_ALL_TAXES_PROJECTIONS_LOADING = "GET_ALL_TAXES_PROJECTIONS_LOADING";
export const GET_ALL_TAXES_PROJECTIONS_SUCCESS = "GET_ALL_TAXES_PROJECTIONS_SUCCESS";
export const GET_ALL_TAXES_PROJECTIONS_FAIL = "GET_ALL_TAXES_PROJECTIONS_FAIL";

export const GET_ALL_TAXES_LIST_LOADING = "GET_ALL_TAXES_LIST_LOADING";
export const GET_ALL_TAXES_LIST_SUCCESS = "GET_ALL_TAXES_LIST_SUCCESS";
export const GET_ALL_TAXES_LIST_FAIL = "GET_ALL_TAXES_LIST_FAIL";

export const GET_PROJECTIONS_COLLECTORS_LOADING = "GET_PROJECTIONS_COLLECTORS_LOADING";
export const GET_PROJECTIONS_COLLECTORS_SUCCESS = "GET_PROJECTIONS_COLLECTORS_SUCCESS";
export const GET_PROJECTIONS_COLLECTORS_FAIL = "GET_PROJECTIONS_COLLECTORS_FAIL";

export const GET_TAXES_LIST_TOTAL_LOADING = "GET_TAXES_LIST_LOADING";
export const GET_TAXES_LIST_TOTAL_SUCCESS = "GET_TAXES_LIST_SUCCESS";
export const GET_TAXES_LIST_TOTAL_FAIL = "GET_TAXES_LIST_FAIL";

const getAllProjectionsLoading = () => ({ type: GET_ALL_PROJECTIONS_LOADING });
const getAllProjectionsSuccess = (payload) => ({ type: GET_ALL_PROJECTIONS_SUCCESS, payload });
const getAllProjectionsFail = (payload) => ({ type: GET_ALL_PROJECTIONS_FAIL, payload });

const getAllTaxesProjectionsLoading = () => ({ type: GET_ALL_TAXES_PROJECTIONS_LOADING });
const getAllTaxesProjectionsSuccess = (payload) => ({ type: GET_ALL_TAXES_PROJECTIONS_SUCCESS, payload });
const getAllTaxesProjectionsFail = (payload) => ({ type: GET_ALL_TAXES_PROJECTIONS_FAIL, payload });

const getAllTaxesListLoading = () => ({ type: GET_ALL_TAXES_LIST_LOADING });
const getAllTaxesListSuccess = (payload) => ({ type: GET_ALL_TAXES_LIST_SUCCESS, payload });
const getAllTaxesListFail = (payload) => ({ type: GET_ALL_TAXES_LIST_FAIL, payload });

const getProjectionsCollectorsLoading = () => ({ type: GET_PROJECTIONS_COLLECTORS_LOADING });
const getProjectionsCollectorsSuccess = (payload) => ({ type: GET_PROJECTIONS_COLLECTORS_SUCCESS, payload });
const getProjectionsCollectorsFail = (payload) => ({ type: GET_PROJECTIONS_COLLECTORS_FAIL, payload });

const getTaxesListLoading = () => ({ type: GET_TAXES_LIST_TOTAL_LOADING });
const getTaxesListSuccess = (payload) => ({ type: GET_TAXES_LIST_TOTAL_SUCCESS, payload });
const getTaxesListFail = (payload) => ({ type: GET_TAXES_LIST_TOTAL_FAIL, payload });

const allProjections = {
    "detallePresupuestado": [
        {
            "codRecaudador": "some text",
            "nombreRecaudador": "some text",
            "sumProyeccion": 68.02,
            "sumRecaudado": 6.48
        },
        {
            "codRecaudador": "some text",
            "nombreRecaudador": "some text",
            "sumProyeccion": 83.02,
            "sumRecaudado": 62.26
        }
    ],
    "respuesta": {
        "mensaje": "some text",
        "fechaInicio": "2018-02-10T09:30Z",
        "fechaFin": "2018-01-17",
        "registrosRetornados": 98
    }
}

const allTaxesProjections = [
    {
        "rubro": "some text",
        "impuesto": "some text"
    },
    {
        "rubro": "some text",
        "impuesto": "some text"
    }
]

const allTaxesList = {
    "codigoInstRecaudadora": "some text",
    "rubros": [
        "some text",
        "some text"
    ]
}

const projectionsCollectors = [
    {
        "agrupamiento": "some text",
        "itemAgrupamiento": "some text",
        "montoRecaudado": 81.19,
        "promedioProyectado": 17.02
    },
    {
        "agrupamiento": "some text",
        "itemAgrupamiento": "some text",
        "montoRecaudado": 48.31,
        "promedioProyectado": 54.66
    }
]

const taxesList = [
    {
        "categoria": "some text",
        "montoProyectado": 26.28,
        "montoRecaudado": 12.4
    },
    {
        "categoria": "some text",
        "montoProyectado": 31.68,
        "montoRecaudado": 86.32
    }
]

const getAllProjections = () => async (dispatch) => {
    dispatch(getAllProjectionsLoading());
    // console.log('%ccollectorsAction.js line:83 process.env.REACT_APP_BASE_URL', 'color: #007acc;', process.env);
    // console.log('%ccollectorsAction.js line:86 porcentajeDetalle(1621096814, 1621096814)', 'color: #007acc;', totalRecaudacion(1621096814, 1621096814));
    try {
        // let response = await axios.get(porcentajeDetalle(1621096814, 1621096814));

        // let data = [];
        // if (response.status === 200) {
        //     console.log('%ccollectorsAction.js line:87 response', 'color: #007acc;', response);

        let data = allProjections;

        dispatch(getAllProjectionsSuccess(data))

        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllProjectionsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getAllProjections", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getAllProjectionsFail(data));
    }
    return Promise.resolve();
};

const getAllTaxesProjections = () => async (dispatch) => {
    dispatch(getAllTaxesProjectionsLoading());
    try {
        // let response = await axios.get(recaudacionImpuesto(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = allTaxesProjections;
        dispatch(getAllTaxesProjectionsSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getAllTaxesProjections", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getAllTaxesProjectionsFail(data));
    }
    return Promise.resolve();
};

const getAllTaxesList = () => async (dispatch) => {
    dispatch(getAllTaxesListLoading());
    try {
        // let response = await axios.get(lstImpuestos(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = allTaxesList;
        dispatch(getAllTaxesListSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getAllTaxesList", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getAllTaxesListFail(data));
    }
    return Promise.resolve();
};

const getProjectionsCollectors = () => async (dispatch) => {
    dispatch(getProjectionsCollectorsLoading());
    try {
        // let response = await axios.get(proyeccionRecaudacion(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = projectionsCollectors;
        dispatch(getProjectionsCollectorsSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getProjectionsCollectors", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getProjectionsCollectorsFail(data));
    }
    return Promise.resolve();
};

const getTaxesList = () => async (dispatch) => {
    dispatch(getTaxesListLoading());
    try {
        // let response = await axios.get(lstSumImpuestos(1621096814, 1621096814));
        // let data = [];
        // if (response.status === 200) {

        let data = taxesList;
        dispatch(getTaxesListSuccess(data))
        // } else {
        //     data = {
        //         status: null,
        //         message: "Error",
        //         result: [],
        //     };
        //     dispatch(getAllCollectorsFail(data));
        // }
    } catch (error) {
        console.log("error actionAction getTaxesList", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: [],
        };
        dispatch(getTaxesListFail(data));
    }
    return Promise.resolve();
};

export {
    getAllProjections,
    getAllTaxesProjections,
    getAllTaxesList,
    getProjectionsCollectors,
    getTaxesList
};