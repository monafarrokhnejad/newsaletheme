import BabyBoy from "components/icons/BabyBoy";
import BabyGirl from "components/icons/BabyGirl";
import Car from "components/icons/Car";
import mona from "components/icons/testsvg";
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
    icon: mona,
    title: "کود",
    href: "/fashion",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "اصلاح کننده",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "اصلاح 1",
              href: "/product/search/shirt",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "اصلاح 2",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "اصلاح 3",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
          ],
        },
        {
          title: "محافظت کننده های دو منظوره",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "محافظ 1",
              href: "/product/search/belt",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "محافظ 2",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
          ],
        },
        {
          title: "تغذیه ای",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "تغذیه 1",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "تغذیه 2",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
          ],
        },
        {
          title: "محرک های رشد",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "محرک 1",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "محرک 2",
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
    icon: MotorBike,
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
                  title: "گوجه 1",
                  href: "/product/search/shirt",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
                {
                  title: "گوجه 2",
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
                  title: "خیار 1",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
                {
                  title: "خیار2 ",
                  href: "/product/search/Hat",
                  imgUrl: "/assets/images/products/categories/hat.png",
                },
                {
                  title: "خیار 3",
                  href: "/product/search/Watches",
                  imgUrl: "/assets/images/products/categories/watch.png",
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
                  title: "گوجه 1",
                  href: "/product/search/shirt",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
                {
                  title: "گوجه 2",
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
                  title: "خیار 1",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
                {
                  title: "خیار2 ",
                  href: "/product/search/Hat",
                  imgUrl: "/assets/images/products/categories/hat.png",
                },
                {
                  title: "خیار 3",
                  href: "/product/search/Watches",
                  imgUrl: "/assets/images/products/categories/watch.png",
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
