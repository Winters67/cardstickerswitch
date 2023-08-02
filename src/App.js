import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/AuthPage/AuthPage";
import Profile from "./views/ProfilePage/ProfilePage";
import CollectionPage from "./views/CollectionPage/CollectionPage";
import TradeCardPage from "./views/TradeCardPage/TradeCardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/trade" element={<TradeCardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
