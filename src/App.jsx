import { useState } from "react";
import Navbar from "./components/Navbar";
import CreateStoreSection from "./components/CreateStoreSection";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />

      <main>
        <CreateStoreSection />
      </main>
    </>
  );
}

export default App;
