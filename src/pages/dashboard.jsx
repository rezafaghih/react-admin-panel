import { DashboardInformationBox } from "../components/dashboard/dashboard-information-box"
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

import { TableComponent } from "../components/dashboard/table";
import { useState } from "react";

export const DashboardPage = ()=>{
    const cols = [
        {key:"invoice", label:"invoice"},
        {key:"status", label:"status"},
        {key:"method", label:"method"},
        {key:"amount", label:"amount"},
        {key:"action", label:"action"},
    ]
    const [rows, setRows] = useState([
        {invoice:"146123", status:"Paid", method:"Paypal", amount:"$250", action:<button className="text-blue-500">More info</button>},
        {invoice:"146123", status:"Paid", method:"Paypal", amount:"$250", action:<button className="text-blue-500">More info</button>},
        {invoice:"146123", status:"Paid", method:"Paypal", amount:"$250", action:<button className="text-blue-500">More info</button>},
        {invoice:"146123", status:"Paid", method:"Paypal", amount:"$250", action:<button className="text-blue-500">More info</button>},
    ])

    return (
        <div className="w-full mt-[4.5%]">
            <div className="w-11/12 flex mx-auto justify-between items-center gap-5">
                <DashboardInformationBox icon = {<FaRegUser/>} title = "users" value = {5123125123} bg = "bg-orange-500/10" text = {"text-orange-500"}/>
                <DashboardInformationBox icon = {<IoBagCheckOutline/>} title = "sold" value = {124} bg = "bg-blue-500/10" text = {"text-blue-500"}/>
                <DashboardInformationBox icon = {<TiMessages/>} title = "Tickets" value = {15} bg = "bg-green-500/10" text = {"text-green-500"}/>
            </div>
            <div className="w-11/12 mx-auto mt-10">
            <TableComponent cols={cols} rows={rows}/>
            </div>
        </div>
    )
}