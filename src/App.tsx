import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Research } from "./pages/Research";
import { CategoryDetail } from "./pages/CategoryDetail";
import { Reports } from "./pages/Reports";
import { ReportDetail } from "./pages/ReportDetail";
import { Library } from "./pages/Library";
import { About } from "./pages/About";
import { GetInvolved } from "./pages/GetInvolved";
import { Ecosystem } from "./pages/Ecosystem";
import { NotFound } from "./pages/NotFound";

// HashRouter is used deliberately: the site is deployed as a static bundle to
// GitHub Pages with no server-side rewrites, so hash-based routes avoid 404s
// on refresh/deep-link without any extra build-time configuration.
function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="research" element={<Research />} />
            <Route path="research/:slug" element={<CategoryDetail />} />
            <Route path="reports" element={<Reports />} />
            <Route path="reports/:slug" element={<ReportDetail />} />
            <Route path="library" element={<Library />} />
            <Route path="about" element={<About />} />
            <Route path="ecosystem" element={<Ecosystem />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
