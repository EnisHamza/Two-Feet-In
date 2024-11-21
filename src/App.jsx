import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<Layout />}>
          <Route index element={<p>List of Cities</p>} />
          <Route path="cities" element={<p>List of Cities</p>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
