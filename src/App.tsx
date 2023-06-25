import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { Error404, ItemListContainer, ItemDetailContainer } from "./pages";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
