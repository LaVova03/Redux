import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/PageTwo/PageTwo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/pageone" element={<PageOne />} />

            <Route element={<PrivateRoute />}>
                <Route path="/pagetwo" element={<PageTwo />} />
            </Route>

            <Route path="*" element={<div>404 | Page is not found !</div>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;