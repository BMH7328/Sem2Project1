import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ShoppingList from "./pages/shoppinglist";
import EditItems from "./pages/edit";
import React from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { AppShell, Navbar, Header } from "@mantine/core";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 200 }} p="xs"> 
      <div className ="navbtn">
          <Navbar.Section className="mt-3 text-center"> 
            <a href="/">
                <Button variant="primary" size="lg">
              <AiOutlineHome />Home 
              </Button>
              </a>
            </Navbar.Section>
    
            <Navbar.Section className="mt-3 text-center"> 
            <a href="/add">
                <Button variant="primary" size="lg">
              <AiOutlineShoppingCart />Add
              </Button>
              </a>
            </Navbar.Section>
            </div>
      </Navbar>}
      header={
        <div className="picture">
        <Header height={60} p="xs">
        <img src="/FCSL.png" style={{ width: "100%", maxWidth: "50px" }} />
        </Header>
        </div>
      }
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.dark[0]
        }
      })}
    >
      <Router>
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/edit/:id" element={<EditItems />} />
        </Routes>
      </Router>
    </AppShell>
  );
}

// export const usage: MantineDemo = {
//   type: "demo",
//   component: Demo,
//   demoProps: { spacing: false },
//   code
// };

export default App;
