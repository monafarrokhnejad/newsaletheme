import React from "react";
import Link from "next/link";
import GroceryLayout from "../../src/components/layout/GroceryLayout";
import WhiteLayout from "../../src/components/layout/WhiteLayout";

const index = () => {
  return (
    <GroceryLayout>
      <WhiteLayout main={true} title={" همه اخبارها "}>
        <ul>
          <li>
            <Link href={"/news/1"}>
              <a>خبر یک</a>
            </Link>
          </li>
          <li>
            <Link href={"/news/2"}>
              <a>خبر دو</a>
            </Link>
          </li>
          <li>
            <Link href={"/news/3"}>
              <a>خبر سه</a>
            </Link>
          </li>
          <li>
            <Link href={"/news/4"}>
              <a>خبر چهار</a>
            </Link>
          </li>
        </ul>
      </WhiteLayout>
    </GroceryLayout>
  );
};

export default index;
