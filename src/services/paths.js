const baseDefault = process.env.REACT_APP_BASE_URL;

const baseDefaultSpecial = process.env.REACT_APP_SPECIAL_BASE_URL;

const context = process.env.REACT_APP_BASE_CONTEXT;

export const getData = () => `${baseDefault}/${context}`;

export const totalRecaudacion = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/totalRecaudacion?fechaInicio=${init}&fechaFin=${end}`;

export const totalDetaRecaudacion = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/totalDetaRecaudacion?fechaInicio=${init}&fechaFin=${end}`;

export const porcentajeTotal = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/porcentajeTotal?fechaInicio=${init}&fechaFin=${end}`;

export const montoBancos = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/montoBancos?fechaInicio=${init}&fechaFin=${end}`;

export const cierreBanco = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/cierreBanco?fechaInicio=${init}&fechaFin=${end}`;

export const porcentajeDetalle = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/porcentajeDetalle?fechaInicio=${init}&fechaFin=${end}`;

export const recaudacionImpuesto = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/recaudacionImpuesto?fechaInicio=${init}&fechaFin=${end}`;

export const lstImpuestos = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/lstImpuestos?fechaInicio=${init}&fechaFin=${end}`;

export const proyeccionRecaudacion = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/proyeccionRecaudacion?fechaInicio=${init}&fechaFin=${end}`;

export const lstSumImpuestos = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/lstSumImpuestos?fechaInicio=${init}&fechaFin=${end}`;

export const tendenciaMes = (init, end) => `http://api-ingreso-consultas-api-desa.apps.zibal.sefin.gob.hn/ingreso/consultas/tendenciaMes?fechaInicio=${init}&fechaFin=${end}`;

// maintenance

export const actionRecaudador = (code) => `http://api-clas-recaudador-api-desa.apps.zibal.sefin.gob.hn/clasificador/recaudador?codigoRecaudador=${code}`;

export const addRecaudador = () => `http://api-clas-recaudador-api-desa.apps.zibal.sefin.gob.hn/clasificador/recaudador`;
