import React from 'react'
import { Table, TableBody, TableCaption, TableCell,
    TableHead, TableHeader, TableRow } 
    from '@/components/ui/table'
  import { Avatar, AvatarImage } from '@/components/ui/avatar'  

const Withdrawl = () => {
  return (
    
    <div className='p-5 lg:px-20'>
        <h1 className='font-bold text-3xl pb-5'>Withdrawl</h1>

    <Table className="border">
 
    <TableHeader>
      <TableRow>
        <TableHead className="py-5">Date</TableHead>
        <TableHead>Method</TableHead>
        <TableHead>Amount</TableHead>
        
        <TableHead className="text-right ">Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[1,1,1,1,1,1,1,1,1,1].map((item, index)=> 
      <TableRow key={index}>
        <TableCell>
             <p>August 15, 2024 at 12:00</p>
             
        </TableCell>
        
        <TableCell className="">Bank</TableCell>

        <TableCell>1117878036249</TableCell>
        
        <TableCell className="text-right">
          345
        </TableCell>
      </TableRow>
      )}
  
      
  
    </TableBody>
  </Table>
  </div>
  )
}

export default Withdrawl