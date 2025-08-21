import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export const TableComponent = ({cols , rows})=>{
    return (
        <>
        <Table>
  <TableHeader >
    <TableRow className="bg-blue-500 text-white border-none text-lg h-14">
        {
            cols.map((value, index)=>{
                if (index ==0){
                    var style = "w-[100px] rounded-tl-xl rounded-bl-xl";
                }else if (index+1 == cols.length){
                    var style = "w-[100px] rounded-tr-xl rounded-br-xl";
                }else{
                    var style = "";
                }

                return (
                        <TableHead className={style}>{value.label}</TableHead>
                    
                )
            })
        }
      
    </TableRow>
  </TableHeader>
  <TableBody >
  <TableRow className="bg-[var(--sec)] h-2 text-white border-none">

</TableRow>
    {
        rows.map((value)=>{
            return (
                <><TableRow className="bg-[var(--sec)] h-14 text-white border-none">
                    {
                        cols.map((val, index)=>{
                            if (index ==0){
                                var style = "w-[100px] rounded-tl-xl rounded-bl-xl";
                            }else if (index+1 == cols.length){
                                var style = "w-[100px] rounded-tr-xl rounded-br-xl";
                            }else{
                                var style = "";
                            }
                            return (
                                <TableCell className = {style}>{value[val['key']]}</TableCell>
                            )
                        })
                    }
                   
                </TableRow>
                
                <TableRow className="bg-[var(--sec)] h-2 text-white border-none"></TableRow></>
            )
        })
    }
    
  </TableBody>
</Table>
        </>
    )
}