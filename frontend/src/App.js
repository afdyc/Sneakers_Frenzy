import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import View from "./View";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <View />
    </UserContext.Provider>
  );
}

export default App;
