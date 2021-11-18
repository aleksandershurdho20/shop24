import React, { useState, useEffect, useMemo } from "react";
import { apiInstance } from "utils/api";
import Chart from "common/Charts";
import months from "utils/months";
import Statistics from "components/Statistics";
// import { DataGrid,GridToolbar } from "@material-ui/data-grid";
import MoreButton from "common/MoreButton";


export default function Dashboard() {
  const [statistics, setStatistics] = useState([]);
  const Months = useMemo(() => months, []);
  useEffect(() => {
    apiInstance
      .get("/users/statistics")
      .then((res) =>
        res.data.data.map((item) =>
          setStatistics((prev) => [
            ...prev,
            { name: Months[item._id - 1], "Active User": item.total },
          ])
        )
      )
      .catch((err) => console.log("err", err));
  }, [Months]);


  
  return (
    <>
    <Statistics/>
      <Chart
        data={statistics}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </>
  );
}
