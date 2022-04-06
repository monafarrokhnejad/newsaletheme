import React from "react";

import GroceryLayout from "../src/components/layout/GroceryLayout";
import WhiteLayout from "../src/components/layout/WhiteLayout";

import { H3, H4 } from "../src/components/Typography";
import Table from "../src/components/table/Table";

import { Box, Grid } from "@mui/material";

const news = () => {
  const rows1 = [createData("محلولپاشی", "کوکسیل ( 1 کیلوگرم در 1000 )")];
  const rows2 = [
    createData(
      "محلولپاشی",
      " استارت پاور ( 1/5 – 1 لیتر در 1000 ) + کدامین 150 ( 1 لیتر در 1000 )"
    ),
  ];
  const rows3 = [
    createData(
      "محلولپاشی",
      "کداکلبرو یا آنتی پیت ( 1 لیتر در 1000 ) + هایپرتونیک ( 0/5 لیتر در 1000 )"
    ),
    createData(
      "کود آبیاری",
      "نوتری پیست 10-52-10 ( 10-5 کیلوگرم در هکتار ) یا یونی فوس ( 10-5 لیتر در هکتار )"
    ),
    createData("کود آبیاری", "نومافر ( 30 تا 50 گرم ) به ازای هر درخت"),
  ];
  const rows4 = [
    createData(
      "محلولپاشی",
      "تروکوئن ( 1/5 کیلوگرم در 1000 ) + مارمارین ( 1/5 در 1000 )"
    ),
    createData(
      "محلولپاشی",
      "کداکلبرو ( 1 لیتر در 1000 ) + وینچ ( 1/5 لیتر در 1000 )"
    ),
    createData("کود آبیاری", "نوتری پیست 20-20-20 ( 10-5 کیلوگرم در هکتار )"),
    createData("کود آبیاری", "هوبست ( 2 کیلوگرم در هکتار )"),
  ];

  const rows5 = [
    createData(
      "محلولپاشی",
      "دکاپ ( 1/5 لیتر در 1000 ) + مارمارین ( 1/5 لیتر در 1000 )"
    ),
    createData(
      "محلولپاشی",
      "های کال ( 1 لیتر در 1000 ) + وینچ ( 1 لیتر در 1000 )"
    ),
    createData(
      "کود آبیاری",
      "نوتری پیست 44-12-12 ( 10-5 کیلوگرم در هکتار ) + کداهورت پلاس ( 10-5 لیتر در هکتار )"
    ),
    createData("کود آبیاری", "تروفرت 52-0-0 ( 20-15 کیلوگرم در هکتار )"),
  ];

  const rows6 = [
    createData(
      "محلولپاشی",
      "اینترسل ( 1/5 لیتر در 1000 ) + پتاسول 52 ( 1/5 لیتر در 1000 )"
    ),
    createData("محلولپاشی", "کداکلبرو ( 1 در 1000 )"),
  ];

  const rows7 = [
    createData(
      "محلولپاشی",
      "استارت پاور ( 1 لیتر در 1000 ) + کدامین 150 ( 1 لیتر در 1000 )"
    ),
  ];

  const columns = [
    { id: "name", label: "شیوه مصرف", minWidth: 200, align: "right" },
    { id: "code", label: "میزان مصرف", minWidth: 100, align: "right" },
  ];
  function createData(name, code) {
    return { name, code };
  }
  return (
    <GroceryLayout>
      <WhiteLayout main={true} title={"اخبار جدید (برنامه غذایی)"}>
        <Grid container>
          <Grid item col={12}>
            <Box position={"relative"} width={"100%"}>
              <div
                style={{
                  color: "gray",
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: " 7px 10px",
                }}
              >
                <div>
                  <span>ارسال توسط :</span>
                  <span>مونافرخ نژاد</span>
                </div>
                <div className="data">
                  <span>28 می 2020 </span>
                </div>
              </div>
              <img
                style={{ borderRadius: "8px" }}
                className="imageinner"
                src="/assets/images/newsletters/apple.jpg"
                alt="news"
              />
            </Box>
          </Grid>
        </Grid>
        <div>
          <p>برنامه غذایی سیب</p>
        </div>

        <H4 mt={5} mb={2}>
          سمپاشی زمستانه
        </H4>
        <Table rows={rows1} columns={columns} />

        <H4 mt={5} mb={2}>
          تورم جوانه
        </H4>
        <Table rows={rows2} columns={columns} />

        <H4 mt={5} mb={2}>
          بعد از ریزش گلبرگ ها
        </H4>
        <Table rows={rows3} columns={columns} />

        <H4 mt={5} mb={2}>
          فندقی شدن میوه
        </H4>
        <Table rows={rows4} columns={columns} />

        <H4 mt={5} mb={2}>
          درشت شدن میوه
        </H4>
        <Table rows={rows5} columns={columns} />

        <H4 mt={5} mb={2}>
          رنگ گیری میوه
        </H4>
        <Table rows={rows6} columns={columns} />

        <H4 mt={5} mb={2}>
          بعد از برداشت
        </H4>
        <Table rows={rows7} columns={columns} />
        <div className="hr" style={{ background: "none" }}></div>
        <p>
          <span> - </span>
          در باغ هایی با مشکل شوری خاک ، مصرف کداسال پلاس 2000 در برنامه کود دهی
          قرار گیرد
        </p>
        <p>
          <span> - </span>
          مصرف کداسول پی اچ ، سبب کاهش پی اچ خاک و افزایش جذب عناصر غذایی به
          ویژه عناصر ریز مغذی می گردد
        </p>
        <p>
          <span> - </span>
          مصرف کدابریکس در مرحله رنگ گیری در افزایش قند و رنگ میوه موثر می باشد
        </p>
        <p>
          <span> - </span>
          در سیب قرمز ، مصرف کدامنیزیم در مرحله رنگ گیری در افزایش رنگ میوه موثر
          می باشد
        </p>
      </WhiteLayout>
    </GroceryLayout>
  );
};

export default news;
