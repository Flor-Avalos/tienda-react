
const FuncionContador = () =>{
    let contador = 0

    const resta = () => {
        contador -1
    }
    const suma = () =>{
        contador +1
    }

    return (
        <>
        <h3> Contador</h3>
        <h3> {contador}</h3>
        <botton onclick={resta}> - </botton>
        <botton onclick={suma}> + </botton>

        </>
    )
}

export default FuncionContador;