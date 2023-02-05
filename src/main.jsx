import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Header, Meme, App, AppConundrum, AppCounter} from "./index"



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <AppConundrum />
    <Meme />
    {/* <App /> */}
    {/* <AppCounter /> */}
    
  </>,
)
