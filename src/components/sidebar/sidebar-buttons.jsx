import { BiHome } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"


export const SidebarButton = ({path, title, icon})=>{
    const location = useLocation();

    return (
        <Link to = {path} className={`w-11/12 p-4 flex items-center gap-3  text-xl rounded-xl my-1 ${location.pathname == path? "text-white bg-blue-500" : "text-gray-300"}`}>
            {icon}
            <span>{title}</span>
        </Link>
    )
}