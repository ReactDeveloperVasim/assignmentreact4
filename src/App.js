import React from "react";
import { Mobile } from "./components/Mobile";
import "./components/Style.css";

function App() {
  return (
    <div className="main">
        <Mobile  url="iphone1" name="Iphone 15" price="RS . 89,000" desc="APPLE Iphone 15 (Deep Gold, And 256 GB ROM " />
        <Mobile  url="iphone2" name="Iphone 15 Plus" price="RS . 1,07,000" desc="APPLE Iphone 15 Plus(Deep Gold, 512 GB ROM " />
        <Mobile  url="iphone3" name="Iphone 15 Pro" price="RS . 1,49,000" desc="APPLE Iphone 15 Pro (Deep Gold, 512 GB ROM " />
        <Mobile  url="iphone4" name="Iphone 15 Pro Max" price="RS . 1,99,000" desc="APPLE Iphone 15 Pro Max (Deep Gold, 1 TB ROM " />
    </div>
  );
}

export default App;
