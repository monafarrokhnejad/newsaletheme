import React from "react";
const newsData = [
  {
    image: "/assets/images/newsletters/Bonitto-banner.jpg",
    categories: " برنامه غذایی",
    title: "برنامه غذایی خیار گلخانه ای",
    description: " توضیح در مورد خیار گلخانه برنامه غذایی خیار گلخانه ای",
    sender: "مونا فرخ نژاد",
    commentCount: "3",
    date: "28 آوریل",
  },
  {
    image: "/assets/images/newsletters/apple.jpg",
    categories: "برنامه غذایی",
    title: "برنامه غذایی سیب",
    description: " درمورد سیب های  جدید برنامه غذایی سیب ",
    sender: " پریسا رضایی ",
    commentCount: "5",
    date: "26 مه",
    table: [
      {
        title: "سمپاشی زمستانه",
        rows: [createData("محلولپاشی", "کوکسیل ( 1 کیلوگرم در 1000 )")],
        columns: [
          { id: "name", label: "شیوه مصرف", minWidth: 200, align: "right" },
          { id: "code", label: "میزان مصرف", minWidth: 100, align: "right" },
        ],
      },
      {
        title: " تورم جوانه ",
        rows: [
          createData(
            "محلولپاشی",
            " استارت پاور ( 1/5 – 1 لیتر در 1000 ) + کدامین 150 ( 1 لیتر در 1000 )"
          ),
        ],
        columns: [
          { id: "name", label: "شیوه مصرف", minWidth: 200, align: "right" },
          { id: "code", label: "میزان مصرف", minWidth: 100, align: "right" },
        ],
      },
      {
        title: " بعد از ریزش گلبرگ ها",
        rows: [
          createData(
            "محلولپاشی",
            "کداکلبرو یا آنتی پیت ( 1 لیتر در 1000 ) + هایپرتونیک ( 0/5 لیتر در 1000 )"
          ),
          createData(
            "کود آبیاری",
            "نوتری پیست 10-52-10 ( 10-5 کیلوگرم در هکتار ) یا یونی فوس ( 10-5 لیتر در هکتار )"
          ),
          createData("کود آبیاری", "نومافر ( 30 تا 50 گرم ) به ازای هر درخت"),
        ],
        columns: [
          { id: "name", label: "شیوه مصرف", minWidth: 200, align: "right" },
          { id: "code", label: "میزان مصرف", minWidth: 100, align: "right" },
        ],
      },
      {
        title: " فندقی شدن میوه",
        rows: [
          createData(
            "محلولپاشی",
            "تروکوئن ( 1/5 کیلوگرم در 1000 ) + مارمارین ( 1/5 در 1000 )"
          ),
          createData(
            "محلولپاشی",
            "کداکلبرو ( 1 لیتر در 1000 ) + وینچ ( 1/5 لیتر در 1000 )"
          ),
          createData(
            "کود آبیاری",
            "نوتری پیست 20-20-20 ( 10-5 کیلوگرم در هکتار )"
          ),
          createData("کود آبیاری", "هوبست ( 2 کیلوگرم در هکتار )"),
        ],
        columns: [
          { id: "name", label: "شیوه مصرف", minWidth: 200, align: "right" },
          { id: "code", label: "میزان مصرف", minWidth: 100, align: "right" },
        ],
      },
      {
        title: " درشت شدن میوه",
        rows: [
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
        ],
        columns: [
          { id: "name", label: "شیوه مصرف", minWidth: 200, align: "right" },
          { id: "code", label: "میزان مصرف", minWidth: 100, align: "right" },
        ],
      },
      {
        title: " رنگ گیری میوه",
        rows: [
          createData(
            "محلولپاشی",
            "اینترسل ( 1/5 لیتر در 1000 ) + پتاسول 52 ( 1/5 لیتر در 1000 )"
          ),
          createData("محلولپاشی", "کداکلبرو ( 1 در 1000 )"),
        ],
        columns: [
          { id: "name", label: "شیوه مصرف", minWidth: 200, align: "right" },
          { id: "code", label: "میزان مصرف", minWidth: 100, align: "right" },
        ],
      },
      {
        title: " بعد از برداشت",
        rows: [
          createData(
            "محلولپاشی",
            "استارت پاور ( 1 لیتر در 1000 ) + کدامین 150 ( 1 لیتر در 1000 )"
          ),
        ],
        columns: [
          { id: "name", label: "شیوه مصرف", minWidth: 200, align: "right" },
          { id: "code", label: "میزان مصرف", minWidth: 100, align: "right" },
        ],
      },
    ],
    more: [
      "در باغ هایی با مشکل شوری خاک ، مصرف کداسال پلاس 2000 در برنامه کود دهی قرار گیرد",
      "مصرف کداسول پی اچ ، سبب کاهش پی اچ خاک و افزایش جذب عناصر غذایی به ویژه عناصر ریز مغذی می گردد",
      "مصرف کدابریکس در مرحله رنگ گیری در افزایش قند و رنگ میوه موثر می باشد",
      "در سیب قرمز ، مصرف کدامنیزیم در مرحله رنگ گیری در افزایش رنگ میوه موثر می باشد",
    ],
  },
  {
    image: "/assets/images/newsletters/Dalgin-Cover-2-1.jpg",
    categories: " اخبار کشاورزی",
    title: "اخبار کشاورزی اول",
    description:
      "تاثیر محرک رشد دالجین عصاره (Ascophyllum Nodosum) بر روی صفات مورفولوژیکی، عملکرد و اجزای عملکرد ارقام ",
    sender: "سینا سهبا ",
    commentCount: "0",
    date: "12 آوریل",
  },
  {
    image: "/assets/images/newsletters/marmarine-cover-1.jpg",
    categories: " اخبار کشاورزی",
    title: "اخبار کشاورزی دوم",

    description:
      "  بررسی محلول پاشی عصاره جلبک دریایی (مارمارین) بر روی عملکرد و اجزای عملکرد کشت دوم ارقام",
    sender: "سهند تصدیقی  ",
    commentCount: "2",
    date: "15 ژوئن",
  },
];
function createData(name, code) {
  return { name, code };
}
export default newsData;
