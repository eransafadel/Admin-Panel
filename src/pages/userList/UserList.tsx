import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {rows,DataGridRows} from "./data/data";

const UserList = () => {
  const [data, setData] = useState <DataGridRows[]> (rows);
  const handleDelete= (id:number)=>{
    setData(data.filter((item)=> item.id!==id ));
  }
  const cols = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Name",
      width: 200,
      renderCell: (params:any) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params:any) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutline className="userListDelete" onClick={ ()=>handleDelete(params.row.id) } />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={cols}
        // disdisableSelectionOnClick={disableSelectionOnClickOptions}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
