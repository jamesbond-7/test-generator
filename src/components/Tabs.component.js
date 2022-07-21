import React, { useContext, useState } from "react";
import { StoreContext } from "../context/store-context";
import Steps from "./Steps.component";
import TabContent from "./TabContent.component";
import TabLinks from "./TabLinks.component";
// import TabLinks from "./TabLinks.component";

const Tabs = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-5/6 mx-auto py-16">
        <TabLinks />
        <TabContent />
      </div>
    </div>
  );
};

export default Tabs;
