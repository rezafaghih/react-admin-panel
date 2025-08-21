export const CustomInput = ({label, placeholder, isTextArea = false})=>{
    return (
        <div className="w-full flex flex-col">
            <label className="text-white">
                {label}
            </label>
            <input placeholder={placeholder} className={`${isTextArea?"h-24":""} bg-[var(--background)] p-3 rounded-lg text-white`}/>
        </div>
    )
}