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
import TimelinePage from "./pages/TimelinePage";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <TaskListPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/timeline",
        element: <TimelinePage />,
        errorElement: <ErrorPage/>
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
