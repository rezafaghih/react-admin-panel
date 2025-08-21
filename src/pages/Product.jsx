import { useState } from "react";
import { TableComponent } from "../components/dashboard/table"
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { CreateProductModal } from "../components/modals/create-product-modal";

export const ProductPage = ()=>{
    const [isModalDisplayed, setIsModalDisplayed] = useState(false);
    const cols = [
        {key:"id", label:"id"},
        {key:"title", label:"title"},
        {key:"solds", label:"solds"},
        {key:"price", label:"price"},
        {key:"action", label:"action"},
    ];

    const [rows, setRows] = useState([
        {id:"1", title:"Smart Tv", solds : "241", price:"$250.000", action:<button className="text-blue-500">Edit Product</button>},
        {id:"2", title:"Smart Phone", solds : "20", price:"$350.000", action:<button className="text-blue-500">Edit Product</button>},
        {id:"3", title:"Apple Watch", solds : "10", price:"$150.000", action:<button className="text-blue-500">Edit Product</button>}
    ])
    
    return (
        <div className="w-full mt-[4.5%]">
            {
                isModalDisplayed?<CreateProductModal setIsModalDisplayed = {setIsModalDisplayed}/>:""
            }
            
            <div className="w-11/12 flex justify-between mx-auto mb-5 items-center">
                <span className="text-white font-black text-2xl">Products</span>
                <button onClick={()=>setIsModalDisplayed(true)} className="py-2 flex gap-2 px-4 rounded-xl bg-blue-500 text-white">
                    <Plus className="-translate-y-[1px]"/>
                    <span>Create Product</span>
                </button>
            </div>
            <div className="w-11/12 mx-auto">
                <TableComponent cols = {cols} rows={rows}/>
            </div>
        </div>
    )
}