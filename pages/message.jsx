import React, { useState } from "react";
import GroceryLayout from "/src/components/layout/GroceryLayout";
import { H3 } from "../src/components/Typography";
import { Box } from "@mui/system";
import Table from "../src/components/table/Table";
import { Button, Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";

const message = () => {
  const [detailsPage, setDetailsPage] = useState(false);
  const [number, setNumber] = useState();

  const detailPageFn = (size) => {
    setNumber(size);
    // console.log(s)
    setDetailsPage(!detailsPage);
  };

  function createData(name, code, population, size) {
    const details = (
      <Button
        color={"primary"}
        style={{ color: "white" }}
        onClick={() => detailPageFn(name)}
        variant={"contained"}
      >
        جزئییات
      </Button>
    );

    return { name, code, population, size, details };
  }

  const rows = [
    createData(
      "1398/06/02  11:35:02",
      "فروش",
      "ثبت پیش فاکتور",
      " فاکتور شما با شماره 2358 تایید شد"
    ),
    createData(
      "1398/06/02  11:35:02",
      "فروش",
      "ثبت پیش فاکتور",
      " فاکتور شما با شماره 2358 تایید شد"
    ),
    createData(
      "1398/06/02  11:35:02",
      "فروش",
      "ثبت پیش فاکتور",
      " فاکتور شما با شماره 2358 تایید شد"
    ),
  ];
  const columns = [
    { id: "name", label: "تاریخ ثبت", minWidth: 200, align: "right" },
    { id: "code", label: "بخش مربوطه", minWidth: 100, align: "right" },
    {
      id: "population",
      label: "عنوان پیام",
      minWidth: 150,
      align: "right",
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "size",
      label: "شرح پیام",
      minWidth: 190,
      align: "right",
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "details",
      label: "",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
  ];
  return (
    <GroceryLayout>
      <Box mt={3} mb={3}>
        <H3>{detailsPage ? "جزئیات پیام " : "پـــــــیام ها"}</H3>
      </Box>
      {detailsPage ? (
        <Box mb={6}>
          <Typography variant={"body2"}> جزئیات پیام {number} </Typography>
          <Button
            color={"primary"}
            style={{ color: "white", marginTop: "1rem" }}
            onClick={() => setDetailsPage(false)}
            variant={"contained"}
          >
            بازگشت به صفحه پیام ها
          </Button>
        </Box>
      ) : (
        <Box mb={6}>
          <Table rows={rows} columns={columns} />
        </Box>
      )}
    </GroceryLayout>
  );
};

export default message;
