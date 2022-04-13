import BabyBoy from "components/icons/BabyBoy";
import BabyGirl from "components/icons/BabyGirl";
import Car from "components/icons/Car";
import kood from "components/icons/pro_icons/taghzieh";
import bazr from "components/icons/pro_icons/hybrid";

import Food from "components/icons/Food";
import Gift from "components/icons/Gift";
import Laptop from "components/icons/Laptop";
import MakeUp from "components/icons/MakeUp";
import Man from "components/icons/Man";
import Microphone from "components/icons/Microphone";
import MotorBike from "components/icons/MotorBike";
import Pets from "components/icons/Pets";
import PlantPot from "components/icons/PlantPot";
import TeddyBear from "components/icons/TeddyBear";
import Woman from "components/icons/Woman";
const navigations = [
  {
    icon: kood,
    title: "کود",
    href: "/fashion",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "  تغذیه ای (1)",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "نومافر",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "کدامیکس ",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "تروکوئین",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "کداسیتروس",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "استارت پاور",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "یونی فوس",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "ازوتاب",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "دکاپ",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "کدا فول کا45",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "پتاسول 52",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "سیلپاورکی",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
          ],
        },
        {
          title: "تغذیه ای (2)",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "کداکل بور",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "آنتی پیت",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "های کال",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "کدا روی",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "دیسکوئین روسس 15%",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "کدامین بور- مولیبدن",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "مولبور",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "مورست",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "کدامنیزیم",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "کدا منگنز",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
          ],
        },
        {
          title: "محرک رشد",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "کدامین رادیکولار",
              href: "/product/search/shirt",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "دالجین",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "ای دالجین ",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "مارمارین ",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "مارین پاور ",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "کدا استینگ",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "کدابریکس",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "هایپر تونیک ",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
          ],
        },
        {
          title: "اصلاح کننده ها",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "کدا سول پی اچ",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "کدا سال پرمیوم ",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "کدا هوموس",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "هوبست",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "هوموسویل",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "کدا هورت پلاس",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
          ],
        },
        {
          title: "محافظت کننده ها",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "کوکسیل 91",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "آلپاسید",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "کدا فوس کی",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "وین فوس",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "سولفورین کی",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "ای کدا اولئوکی",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
          ],
        },

        {
          title: "ضد تنش",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: " وای جی پلاس",
              href: "/product/search/belt",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "کدامین 150",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: " اینترسل",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "وینچ",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
          ],
        },

        {
          title: "ان پی کا",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "نوتریفولیار",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "نوتری پیست ",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "ترو فرت 20-20-20",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "تروفرت52-0-0",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/offer-1.png",
        href: "/sale-page-1",
      },
    },
  },
  {
    icon: bazr,
    title: "بذر",
    href: "/product/search/bikes",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        icon: Man,
        title: "فضای باز",
        href: "/product/search/fashion",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "گوجه",
              href: "/product/search/man-clothes",
              subCategories: [
                {
                  title: "ربکا",
                  href: "/product/search/shirt",
                  imgUrl: "components/icons/pro_icons/taghzieh",
                },
                {
                  title: " کاندیدا",
                  href: "/product/search/t-shirt",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
                {
                  title: " پابلو",
                  href: "/product/search/t-shirt",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
                {
                  title: " آماندا",
                  href: "/product/search/t-shirt",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
              ],
            },
            {
              title: "خیار",
              href: "/product/search/accessories",
              subCategories: [
                {
                  title: "رومان",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
                {
                  title: "مینیکو ",
                  href: "/product/search/Hat",
                  imgUrl: "/assets/images/products/categories/hat.png",
                },
              ],
            },
            {
              title: "کدو",
              href: "/product/search/accessories",
              subCategories: [
                {
                  title: " ایت بال تیره",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
                {
                  title: "ایت بال روشن ",
                  href: "/product/search/Hat",
                  imgUrl: "/assets/images/products/categories/hat.png",
                },
                {
                  title: " ایت بال طلایی",
                  href: "/product/search/Watches",
                  imgUrl: "/assets/images/products/categories/watch.png",
                },
              ],
            },
            {
              title: "هندوانه",
              href: "/product/search/accessories",
              subCategories: [
                {
                  title: " نیکولاس",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: Man,
        title: "گلخانه ای",
        href: "/product/search/fashion",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "گوجه",
              href: "/product/search/man-clothes",
              subCategories: [
                {
                  title: " الیوت",
                  href: "/product/search/shirt",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
              ],
            },
            {
              title: "خیار",
              href: "/product/search/accessories",
              subCategories: [
                {
                  title: " آدرین سالار",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
                {
                  title: "جمینی ",
                  href: "/product/search/Hat",
                  imgUrl: "/assets/images/products/categories/hat.png",
                },
              ],
            },
            {
              title: "فلفل",
              href: "/product/search/accessories",
              subCategories: [
                {
                  title: "  فلفل سامورائی",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
              ],
            },
          ],
        },
      },
    ],
  },
];
export default navigations;
