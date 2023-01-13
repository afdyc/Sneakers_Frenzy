import React, { createContext, useState } from "react";
import View from "./View";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <View />
    </UserContext.Provider>
  );
}

export default App;
