import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ShoppingList from "./pages/shoppinglist";
import EditItems from "./pages/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/edit/:id" element={<EditItems />} />
      </Routes>
    </Router>
  );
}

export default App;
