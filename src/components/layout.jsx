import { Outlet } from "react-router-dom"
import ProfileImage from "../assets/image.png"
import { SidebarButton } from "./sidebar/sidebar-buttons"
import { HiOutlineHome } from "react-icons/hi2";
import { FiBox } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export const Layout = ()=>{
    return (
        <div className="w-full h-screen bg-[var(--background)] flex overflow-x-hidden font">
            
            <div className="w-1/4 z-10 h-full flex justify-center items-center">
                <div className="w-10/12 flex flex-col items-center p-2 bg-[var(--sec)] h-11/12 rounded-2xl">
                    <div className="w-11/12 flex items-center my-4 text-white gap-2 justify-start">
                        <img src = {ProfileImage} className="w-20"/>
                        <div className="flex flex-col">
                            <span className="text-2xl">
                                Rezafaghih
                            </span>
                            <span className="text-gray-400">
                                CEO
                            </span>
                        </div>
                    </div>

                    <SidebarButton icon={<HiOutlineHome/> } title = "Dashboard" path = "/"/>
                    <SidebarButton icon={<FiBox/> } title = "Products" path = "/products"/>
                    <SidebarButton icon={<FiUsers/> } title = "Users" path = "/users"/>
                    <SidebarButton icon={<IoSettingsOutline/> } title = "Settings" path = "/settings"/>
                </div>
            </div>
            <div className="w-3/4 z-10 overflow-y-auto overflow-x-hidden">
                <Outlet/>
            </div>
        </div>
    )
}