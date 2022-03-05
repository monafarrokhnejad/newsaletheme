import React, {useState} from "react";
import GroceryLayout from "/src/components/layout/GroceryLayout";
import {H3} from "../src/components/Typography";
import {Box} from "@mui/system";
import Table from "../src/components/table/Table";
import {Button, Typography} from "@mui/material";

const profile = () => {
    const [detailsPage, setDetailsPage] = useState(false);
    const [number, setNumber] = useState();

    const detailPageFn = (size) => {
        setNumber(size);
        // console.log(s)
        setDetailsPage(!detailsPage);
    }

    function createData(name, code, population, size) {
        const details = <Button color={"primary"} style={{color: "white"}} onClick={() => detailPageFn(size)}
                                variant={"contained"}>جزئییات</Button>

        return {name, code, population, size, details};
    }

    const rows = [
        createData('ارسال شده', '1,000,000', '98/01/15', 11),
        createData('لغو شده', '1,000,000', '98/01/15', 2),
        createData('در انتظار تایید', '1,000,000', '98/01/15', 3),
        createData('ارسال شده', '1,000,000', '98/01/15', 4),
        createData('ارسال شده', '1,000,000', '98/01/15', 5),
        createData('ارسال شده', '1,000,000', '98/01/15', 840320),
        createData('ارسال شده', '1,000,000', '98/01/15', 15),
        createData('ارسال شده', '1,000,000', '98/01/15', 840320),
        createData('ارسال شده', '1,000,000', '98/01/15', 840320),
        createData('ارسال شده', '1,000,000', '98/01/15', 840320),
        createData('ارسال شده', '1,000,000', '98/01/15', 840320),
        createData('ارسال شده', '1,000,000', '98/01/15', 840320),
        createData('ارسال شده', '1,000,000', '98/01/15', 840320),
        createData('ارسال شده', '1,000,000', '98/01/15', 840320),
    ];
    const columns = [
        {id: 'name', label: 'وضعیت', minWidth: 170, align: 'right',},
        {id: 'code', label: 'مبلغ سفارش', minWidth: 170, align: 'right',},
        {
            id: 'population',
            label: 'تاریخ',
            minWidth: 170,
            align: 'right',
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'size',
            label: 'شماره فاکتور',
            minWidth: 170,
            align: 'right',
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'details',
            label: '',
            minWidth: 170,
            align: 'center',
            // format: (value) => value.toFixed(2),
        },
    ];

    return <GroceryLayout>
        <Box mt={3} mb={6}>
            <H3>
                {detailsPage ? 'جزئیات فاکتور ' : "فاکتور و صورتحساب ها"}
            </H3>
        </Box>
        {detailsPage ? <Box mb={6}>
            <Typography variant={"body2"}> جزئیات فاکتور شماره {number}  </Typography>
                <Button color={"primary"}
                        style={{color: "white" , marginTop:"1rem"}}
                        onClick={()=>setDetailsPage(false)}
                        variant={"contained"}>بازگشت به
                    صفحه فاکتور ها</Button>
            </Box>
            : <Box mb={6}><Table rows={rows} columns={columns}/></Box>
        }
    </GroceryLayout>;
};


export default profile;