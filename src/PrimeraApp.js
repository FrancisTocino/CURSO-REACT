import React from "react";
import PropTypes from "prop-types"; // Hay que importar esto para
// que se pueda hacer validación de las props

const PrimeraApp = ({ saludo }) => {

    console.log (saludo);
    return (
        <>
            <h1>HOLA {saludo} </h1>
            <h4>Mi Primera Aplicación</h4>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
} // Esto es para que sea obligatorio enviar los prop
  // y tambien que sea de tipo string.


  PrimeraApp.defaultProps  = {
        saludo: 'Saludo por Defecto',
  } // Esto es otra forma de poner valores
    // por defectos a las props sin tener 
    // que guarrear arriba

export default PrimeraApp;

