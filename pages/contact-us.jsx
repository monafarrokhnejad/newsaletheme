import React, { useState } from "react";
import GroceryLayout from "/src/components/layout/GroceryLayout";
import { H3 } from "../src/components/Typography";
import { Box } from "@mui/system";
import Table from "../src/components/table/Table";
import { Button, Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";

const contactUs = () => {
  const [detailsPage, setDetailsPage] = useState(false);
  const [number, setNumber] = useState();

  const detailPageFn = (size) => {
    setNumber(size);
    // console.log(s)
    setDetailsPage(!detailsPage);
  };
  function createData(name, code, population, status, size) {
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

    return { name, code, population, size, status, details };
  }

  const rows = [
    createData(
      "840320",
      "پیگیری آخرین سفارش",
      "فروش",
      "98/01/15",
      "پاسخ داده شده"
    ),
    createData(
      "840320",
      "پیگیری آخرین سفارش",
      "فروش",
      "98/01/15",
      "پاسخ داده شده"
    ),
  ];
  const columns = [
    { id: "name", label: "شماره", minWidth: 100, align: "right" },
    { id: "code", label: "عنوان تیکت", minWidth: 100, align: "right" },
    {
      id: "population",
      label: "بخش مربوطه",
      minWidth: 140,
      align: "right",
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "size",
      label: "تاریخ ثبت",
      minWidth: 130,
      align: "right",
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "status",
      label: "وضغیت",
      minWidth: 130,
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
      <Box mt={3} mb={3} display="flex" justifyContent={"space-between"}>
        <H3>{detailsPage ? "ارسال تیکت جدید " : "ارتباط با ما"}</H3>
        <Button
          color={"primary"}
          variant={"contained"}
          style={{ color: "white" }}
        >
          + ارسال تیکت جدید
        </Button>
      </Box>
      {detailsPage ? (
        <Box mb={6}>
          <Button
            color={"primary"}
            style={{ color: "white", marginTop: "1rem" }}
            onClick={() => setDetailsPage(false)}
            variant={"contained"}
          >
            بازگشت به صفحه قبل
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

export default contactUs;
