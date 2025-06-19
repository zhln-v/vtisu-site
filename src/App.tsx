import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NewsPage } from "./pages/NewsPage";
import { ProgramPage } from "./pages/ProgramPage";
import { ProgramsBlock } from "./components/ProgramBlock/ProgramBlock";
import { ScrollToTop } from "./utils/ScrollToTop";
import { AboutPage } from "./pages/AboutPage";
import { StaffsPage } from "./pages/StaffsPage";
import { ContactPage } from "./pages/ContactsPage";
// import { NotFoundPage } from "./pages/NotFoundPage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { StaffDetail } from "./pages/StaffDetail";
import { Page } from "./pages/Page";
// import { buildApiUrl } from "./api/buildApiUrl";
// import { useApiData } from "./hooks/useApiData";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "./store";
// import { useEffect } from "react";
// import { fetchMenuItems } from "./store/slices/menuSlice";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DefaultPage } from "./pages/_DefaultPage/DefaultPage";
import { useEffect } from "react";

export const App = () => {
    // const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     dispatch(fetchMenuItems());
    // }, [dispatch]);

    return (
        <Router>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/home" element={<MainPage />} />

                <Route path="/home/*" element={<DefaultPage />} />
                <Route
                    path="/science/design-center"
                    element={<DefaultPage />}
                />

                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:slug" element={<NewsDetailPage />} />

                <Route path="/about" element={<AboutPage />} />
                {/* <Route path="/staff" element={<GoToTeachers />} /> */}
                <Route path="/staff/teachers" element={<StaffsPage />} />
                <Route path="/staff/teachers/*" element={<StaffDetail />} />

                <Route path="/contacts" element={<ContactPage />} />
                <Route path="/staff/leadership" element={<LeadershipPage />} />
                <Route path="/education/program" element={<ProgramsBlock />} />

                <Route
                    path="/education/program/:level"
                    element={<ProgramPage />}
                />
                <Route path="/*" element={<NotFoundPage />} />

                {/* Уже обработано */}
                {/* <Route path="/staff/teachers" element={<StaffsPage />} />
                <Route path="/staff/profile/:slug" element={<StaffDetail />} /> */}

                {/* <Route path="*" element={<Page />} />
                <Route path="/" element={<NewsPage />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
};
