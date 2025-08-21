import { CustomInput } from "../global/input"

export const CreateProductModal = ({setIsModalDisplayed})=>{
    return (
        <div className="fixed left-0 top-0 w-full h-screen backdrop-blur-md z-20 flex items-center justify-center bg-white/10">
            <div className = "w-2/4 p-2 rounded-xl flex flex-col items-center bg-[var(--sec)]">
                <span className="w-full text-white font-black text-3xl border-b border-white/10 py-2">
                    create product
                </span>

                <ImageUploaderComponent/>
                
                <div className="w-full my-2 flex gap-2">
                    <CustomInput label = "title" placeholder="product title"/>
                    <CustomInput label = "price" placeholder="product price"/>
                    <CustomInput label = "slug" placeholder="product slug"/>
                </div>

                <div className="w-full my-2 flex gap-2">
                    <CustomInput label = "description" placeholder="product description" isTextArea={true}/>
                </div>

                <div className="w-full mt-5 flex justify-between items-center">
                    <button onClick={()=>setIsModalDisplayed(false)} className="text-red-500 py-3 px-5 rounded-lg transition-all hover:bg-red-500 hover:text-white">
                        Close Modal
                    </button>

                    <button className="bg-blue-500 py-3 px-5 rounded-lg transition-all hover:bg-blue-700 text-white">
                        Create product
                    </button>
                </div>
            </div>
        </div>
    )
}



const ImageUploaderComponent = ()=>{
    return (
        <label className="w-full h-60 border-2 border-dashed border-white/10 rounded-xl my-2 flex items-center justify-center flex-col">
            <span className="text-2xl text-white">
                Select Image
            </span>

            <input type = "file" hidden/>
        </label>
    )
}