
export const DashboardInformationBox = ({icon, value, title, bg, text})=>{
    return (
        <div className="w-full h-24 rounded-3xl bg-[var(--sec)] flex p-3 justify-start items-center">
            <div className = {`w-20 h-20 ${bg} flex justify-center items-center text-3xl ${text} rounded-3xl`}>
                {icon}
            </div>

            <div className="flex text-white ml-3 flex-col items-start">
                <span className="text-3xl">{value}</span>
                <span className="text-gray-400">{title}</span>
            </div>
        </div>
    )
}