import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
export default function FilterOrders({ status, handleTabChange }) {
  return (
  
      
      <Tabs
        value={status}
        onChange={handleTabChange}
        textColor="secondary"
        className="tab-container"

        aria-label="secondary tabs example"
        
      >
        <Tab value="pending" label="Pending" />
        <Tab value="canceled" label="Canceled" />
        <Tab value="delivered" label="Delivered" />
      </Tabs>
 
  );
}
