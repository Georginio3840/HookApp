import React from 'react'
import ReactDOM from 'react-dom/client'
import { Ejemplo } from './02-useEffect/Ejemplo'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'


 
//import { CounterWhithCustomHook } from './01-useState/CounterWhithCustomHook'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
   <MultipleCustomHooks/>
  //</React.StrictMode>
)
