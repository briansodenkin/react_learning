import React, { useState } from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import ChartContextProvider from "./store/ChartContextProvider.js";
function App() {
  const [isOpened, setIsOpened] = useState(false);

  const showHandler = ()=>{
    setIsOpened(true)
  }
  
  const hideHandler = ()=>{
    setIsOpened(false)
  }

  return (
    <ChartContextProvider>
      {isOpened && <Cart onHide={hideHandler}/>}
      <Header onShow={showHandler}/>
      <main>
        <Meals />
      </main>
    </ChartContextProvider>
  );
}

export default App;
