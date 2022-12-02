import { BrowserRouter, Route, Routes } from "react-router-dom";

import IndexPage from "./app/pages/index/index_page";

export const Controller = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
};
