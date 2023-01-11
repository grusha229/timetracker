import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store";
import TaskListPage from "./pages/TaskListPage";
// @ts-ignore
import FormPage from "./pages/AuthPage/AuthPage.jsx";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <TaskListPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "auth",
        element: <FormPage isRegistration={false}/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "reg",
        element: <FormPage isRegistration={true}/>,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
