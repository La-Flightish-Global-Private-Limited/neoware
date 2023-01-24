import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import superAdminRouter from "./super_admin/router";

export default function App() {
  return <RouterProvider router={superAdminRouter} />
}