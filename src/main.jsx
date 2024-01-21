import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
