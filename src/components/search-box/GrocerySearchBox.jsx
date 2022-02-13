import BazarButton from "components/BazarButton";
import { Box, debounce, MenuItem, TextField } from "@mui/material";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SearchOutlinedIcon, SearchResultCard } from "./SearchBox";

const GrocerySearchBox = () => {
  const [resultList, setResultList] = useState([]);
  const parentRef = useRef();
  const search = debounce(e => {
    const value = e.target?.value;
    if (!value) setResultList([]);else setResultList(dummySearchResult);
  }, 200);
  const hanldeSearch = useCallback(event => {
    event.persist();
    search(event);
  }, []);

  const handleDocumentClick = () => {
    setResultList([]);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto" {...{
    ref: parentRef
  }}>
      <TextField variant="outlined" placeholder="به دنبال ..." fullWidth onChange={hanldeSearch} InputProps={{
      sx: {
        height: 44,
        borderRadius: 300,
        paddingLeft: 0,
        color: "grey.700",
        overflow: "hidden",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main"
        }
      },
      endAdornment: <BazarButton color="primary" variant="contained" disableElevation sx={{
        px: "3rem",
        height: "100%",
        borderRadius: "300px 0 0 300px",
        color:"white",
      }}>
        جست‌وجو
            </BazarButton>,
      startAdornment: <SearchOutlinedIcon fontSize="small" />
    }} />

      {!!resultList.length && <SearchResultCard elevation={2}>
          {resultList.map(item => <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>{item}</MenuItem>
            </Link>)}
        </SearchResultCard>}
    </Box>;
};

const dummySearchResult = ["محصولات شما", "Asus K555LA", "Acer Aspire X453", "iPad Mini 3"];
export default GrocerySearchBox;