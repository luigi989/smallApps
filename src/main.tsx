import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Bin2Dec from "./routes/bin2Dec";
import BorderRadiousPreviewer from "./routes/borderRadiousPreviewer";
import Calculator from "./routes/calculator";
import ChristmasLights from './routes/christmasLights';
import CauseEffect from './routes/causeEffect';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="bin2dec" element={<Bin2Dec />} />
        <Route path="borderRadiousPreviewer" element={<BorderRadiousPreviewer />} />
        <Route path="calc" element={<Calculator />} />
        <Route path="christmasLights" element={<ChristmasLights />} />
        <Route path='causeEffect' element={<CauseEffect />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
)
