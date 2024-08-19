import React from 'react'
import { Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow } 
  from '@/components/ui/table'
import { Avatar, AvatarImage } from '@/components/ui/avatar'    



const Activity = () => {
  return (
    <div className='p-5 lg:px-20'>
        <h1 className='font-bold text-3xl pb-5'>Activity</h1>

    <Table className="border">
 
    <TableHeader>
      <TableRow>
        <TableHead className="py-5">Date & Time</TableHead>
        <TableHead>Trading pair</TableHead>
        <TableHead>Buy Price</TableHead>
        <TableHead>Selling Price</TableHead>
        <TableHead>Order Type</TableHead>
        <TableHead className="">Profit/Loss</TableHead>
        <TableHead className="text-right ">VALUE</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[1,1,1,1,1,1,1,1,1,1].map((item, index)=> 
      <TableRow key={index}>
        <TableCell>
             <p>2024/08/15</p>
             <p className='text-gray-400'>12:36:32</p>
        </TableCell>
        <TableCell className="font-medium flex items-center gap-2">
          <Avatar className="-z-50">
              <AvatarImage src="https://cdn.pixabay.com/photo/2017/08/14/14/38/bitcoin-2640692_1280.png "/>
          </Avatar>
          <span>Bitcoin</span>
        </TableCell>
        <TableCell className="">$56746</TableCell>

        <TableCell>1117878036249</TableCell>
        <TableCell>4.33922</TableCell>
        <TableCell className="">$56746</TableCell>
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

export default Activity