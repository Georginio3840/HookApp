import { useEffect, useState } from "react"


export const Message = () => {


    const [coords, setCoords] = useState({x:0,y:0});
    useEffect(() => {
        

        const onMouseMuve = ({x,y})=>{
            //const coords ={x,y};
            setCoords({x,y})
        }
        window.addEventListener('mousemove',onMouseMuve);
        return () => {
            //window.removeEventListener('mousemove',onMouseMuve);
        };
    }, []);

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}

    </>
  )
}
