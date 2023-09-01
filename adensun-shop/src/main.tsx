import ReactDOM from 'react-dom/client'
import App from './App.tsx'
/*import './index.css'*/
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from "react-router-dom"
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
)
