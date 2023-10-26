import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Page/HomePage";
import { SelectedVidoPage } from "../Page/SelectedVideoPage";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/:id", element: <SelectedVidoPage /> },
];
