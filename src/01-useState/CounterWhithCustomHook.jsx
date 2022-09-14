
import { useCounter } from "../hooks/UseCounter"
export const CounterWhithCustomHook = () => {


    const{counter, increment, decrement,resetear}= useCounter();

  return (
    <>
    <h1>Counter with Hook:{counter}</h1>
    <hr />
    <button onClick={ ()=> increment(2)} className="btn btn-primary">+1</button>
    <button onClick={resetear}  className="btn btn-primary" >Reset</button>
    <button onClick={()=> decrement(2)} className="btn btn-primary">-1</button>
    </>
  )
}
