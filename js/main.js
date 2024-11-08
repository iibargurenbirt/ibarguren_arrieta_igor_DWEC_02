// ------------------------------ 1. VARIABLES GLOBALES ------------------------------
let tarifasJSON = null;
let gastosJSON = null;
let tarifasJSONpath = 'js/tarifasCombustible.json';
let gastosJSONpath =  'js/gastosCombustible.json';

// ------------------------------ 2. CARGA INICIAL DE DATOS (NO TOCAR!) ------------------------------
// Esto inicializa los eventos del formulario y carga los datos iniciales
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar los JSON cuando la página se carga, antes de cualquier interacción del usuario
    await cargarDatosIniciales();

    // mostrar datos en consola
    console.log('Tarifas JSON: ', tarifasJSON);
    console.log('Gastos JSON: ', gastosJSON);

    calcularGastoTotal();

    // Inicializar eventos el formularios
    document.getElementById('fuel-form').addEventListener('submit', guardarGasto);
});

// Función para cargar ambos ficheros JSON al cargar la página
async function cargarDatosIniciales() {

    try {
        // Esperar a que ambos ficheros se carguen
        tarifasJSON = await cargarJSON(tarifasJSONpath);
        gastosJSON = await cargarJSON(gastosJSONpath);

    } catch (error) {
        console.error('Error al cargar los ficheros JSON:', error);
    }
}

// Función para cargar un JSON desde una ruta específica
async function cargarJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${path}`);
    }
    return await response.json();
}

// ------------------------------ 3. FUNCIONES ------------------------------
// Calcular gasto total por año al iniciar la aplicación
function calcularGastoTotal() {
    // array asociativo con clave=año y valor=gasto total
    let aniosArray = {
        2010: 0,
        2011: 0,
        2012: 0,
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
        2018: 0,
        2019: 0,
        2020: 0
    }

    for(let i=0;i<gastosJSON.length;i++){
        let fecha = new Date(Date.parse(gastosJSON[i].date));
        console.log("f: "+fecha);
        console.log(typeof fecha);
        switch(fecha.getFullYear()){
            case 2010:
                aniosArray[2010] += gastosJSON[i].precioViaje;
                break;
            case 2011:
                aniosArray[2011] += gastosJSON[i].precioViaje;
                break;
            case 2012:
                aniosArray[2012] += gastosJSON[i].precioViaje;
                break;
            case 2013:
                aniosArray[2013] += gastosJSON[i].precioViaje;
                break;
            case 2014:
                aniosArray[2014] += gastosJSON[i].precioViaje;
                break;
            case 2015:
                aniosArray[2015] += gastosJSON[i].precioViaje;
                break;
            case 2016:
                aniosArray[2016] += gastosJSON[i].precioViaje;
                break;
            case 2017:
                aniosArray[2017] += gastosJSON[i].precioViaje;
                break;
            case 2018:
                aniosArray[2018] += gastosJSON[i].precioViaje;
                break;
            case 2019:
                aniosArray[2019] += gastosJSON[i].precioViaje;
                break;
            case 2020:
                aniosArray[2020] += gastosJSON[i].precioViaje;
        }
    }

    for(let anyo=2010;anyo<=2020;anyo++){
        document.getElementById("gasto"+anyo).textContent = aniosArray[anyo].toFixed(2);
    }
}

// guardar gasto introducido y actualizar datos
function guardarGasto(event) {
    event.preventDefault(); 

    // Obtener los datos del formulario
    const tipoVehiculo = document.getElementById('vehicle-type').value;
    const fecha = new Date(document.getElementById('date').value);
    const kilometros = parseFloat(document.getElementById('kilometers').value);
}

