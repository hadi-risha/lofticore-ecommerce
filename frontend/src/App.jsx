import { Routes, Route } from "react-router-dom"; // Import correctly
import Header from "./components/Header";
import Home from "./test/home";
import Navbar from "./components/HeaderNavbar";
import CheckOut from "./test/checkOut";

function App() {
  return (
    <div className="App bg-[#485D56]">
      <Header />
      <main className="pt-32">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
