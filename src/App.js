import React from "react";
import "./App.css";
import baniLogo from "./assets/images/banilogo.png";
import Button from "./components/common/button/button";
import SlickCarousel from "./components/common/slickCarousel/slickCarousel";
// import Category from "./components/common/category/category";
import Timer from "./components/common/timer/timer";

function App() {
  const startDate = new Date().getTime() + 31536000000;

  return (
    <div className="App">
      <img className="logo" src={baniLogo} />

      <Button
        textButton="۱خرید + ۱هدیه با ۱۰٪ تخفیف بیشتر"
        buttonCustomStyle="discount"
      />

      <SlickCarousel />

      <Button
        textButton="دانلود اپلیکیشن بانی مد"
        buttonCustomStyle="download"
      />

      {/* <Category /> */}

      <Timer startDate={startDate} />

      {/* <img id="buyGif" src="/images/buy-gif.jpg" /> */}
    </div>
  );
}

export default App;
