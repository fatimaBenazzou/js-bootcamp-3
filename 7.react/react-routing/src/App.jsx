import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
import AppLayout from "./layouts/AppLayout";
import BlogLayout from "./layouts/BlogLayout";
import NotFoundPage from "./components/NotFoundPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="blogs" element={<BlogLayout />}>
                        <Route index element={<Blogs />} />
                        <Route path="idk" element={<BlogDetail />} />
                        <Route path=":id" element={<BlogDetail />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
