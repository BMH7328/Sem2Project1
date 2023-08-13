import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ShoppingList from "./pages/shoppinglist";
import EditItems from "./pages/edit";
import React from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { AppShell, Navbar, Header } from "@mantine/core";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 200 }} p="xs">   
          <Navbar.Section className="mt-5 text-center" href="/add.js"> 

              <Button variant="secondary" size="sm">
               Home 
              </Button>
            
            </Navbar.Section>
    
          {/* <Navbar.Section grow>
          <Link 
              to="/"
              className="me-2 fs-5 btn-btn-secondary">

              <Button  
              variant="secondary" size="sm">
               Shopping List
              </Button>
            </Link>
            </Navbar.Section>  */}
    
          

    </Navbar>}
      header={
        <Header height={60} p="xs">
          FC ShoppingList
        </Header>
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
