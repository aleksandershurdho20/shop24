import React, { useEffect, useState } from "react";
import BoxTitle from "common/BoxTitle";
import Table from "common/Table";
import { apiInstance } from "utils/api";
import Loader from "common/Loader";
import Chip from "@material-ui/core/Chip";
import moment from "moment";
import MoreButton from "common/MoreButton/MoreButton";
import { useHistory } from "react-router";
export default function Tags() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    apiInstance
      .get("/tags")
      .then((res) => {
        const parsedArr = res.data.tags.map((el) => {
          const { _id, ...rest } = el;
          return {
            ...rest,
            id: el._id,
          };
        });
        setData(parsedArr);
        setLoading(false);
      })
      .catch((err) => console.log({ err }));
  }, []);
  const handleChange = (e) => {
    console.log({ e });
  };



  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      renderCell: (params) =>
        params.row.tags.map((el) => (
          <Chip label={el.title} variant="outlined" />
        )),
    },
    {
      field: "createdAt",
      headerName: "Created At",
      renderCell: (params) =>
        params.row.tags.map((el) => moment(el.createdAt).format("LLL")),
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <MoreButton
          links={[
            {
              label: "Edit",
              onClick: () => history.push("/app/tag/edit/" + params.row.id),
            },
          ]}
        />
      ),
    },
  ];
  return (
    <>
      <BoxTitle
        title="Tags"
        showInput={true}
        buttonTitle=" Create Tag"
        onChange={handleChange}
        path="tags/create"
      />
      {loading ? (
        <Loader />
      ) : (
        <div style={{ height: 350 }}>
          <Table rows={data} columns={columns} />
        </div>
      )}
    </>
  );
}
