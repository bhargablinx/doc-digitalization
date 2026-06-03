import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Upload from "./pages/Upload";
import DocumentReview from "./pages/DocumentReview";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/upload" element={<Upload />} />
                <Route
                    path="/upload/review/:docId"
                    element={<DocumentReview />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
