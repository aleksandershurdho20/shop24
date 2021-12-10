import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
export default function FilterOrders({ status, handleTabChange }) {
  return (
    <div>
      FilterOrders
      <Tabs
        value={status}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="pending" label="Pending" />
        <Tab value="canceled" label="Canceled" />
        <Tab value="delivered" label="Delivered" />
      </Tabs>
    </div>
  );
}
