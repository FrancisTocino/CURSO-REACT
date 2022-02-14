import React from "react";
import PropTypes from "prop-types"; // Hay que importar esto para
// que se pueda hacer validación de las props

const CounterApp = ({value}) => {

    console.log (value);
    return (
        <>
            <h1>CounterApp</h1>
            <h4> { value } </h4>
        </>
    );
}


CounterApp.propTypes = {
   value: PropTypes.number.isRequired,
} // Esto es para que sea obligatorio enviar los prop
  // y tambien que sea de tipo string.


  CounterApp.defaultProps  = {
    value: 909090,
  } // Esto es otra forma de poner valores
    // por defectos a las props sin tener 
    // que guarrear arriba

export default CounterApp;

