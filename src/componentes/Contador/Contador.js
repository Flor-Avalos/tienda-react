import React,{useState} from 'react';
import './Contador.css';

const FuncionContador = ({stock, initial}) =>{
    const [contador, setContador] = useState(1)

    const resta = () => {
        setContador(contador -1)
    }
    const suma = () =>{
        setContador(contador +1)
    }

    return (
        <>
        <h3> CONTADOR </h3>
        <h3> {contador}</h3>
        <botton onclick={resta}> - </botton>
        <botton onclick={suma}> + </botton>

        </>
    )
}

export default FuncionContador;