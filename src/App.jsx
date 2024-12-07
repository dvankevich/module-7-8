import { Heading } from "components";
import { lazy, useEffect } from "react";
import { Header } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import { getUserInfo } from "service/opencagedataApi";
const Home = lazy(() => import("pages/Home"));
const Rates = lazy(() => import("pages/Rates"));

export const App = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      getUserInfo(coords)
    );
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* Інші маршрути */}
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
