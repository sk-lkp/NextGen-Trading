import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BookmarkFilledIcon, DotIcon } from "@radix-ui/react-icons"
import TradingForm from "./TradingForm"
import StockChart from "../Home/StockChart"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
//import { fetchCoinDetails } from "@/State/Coin/Action"



const StockDetails = () => {

  //const coinDetails = useSelector(store => store.coin.coinDetails);
  //const {coin}=useSelector(store=>store)
  
  const dispatch = useDispatch()

  //const {id}=useParams()
   const params = useParams()

 console.log("params",params)

  useEffect(()=> {
  // dispatch(fetchCoinDetails({coinId:id,jwt:localStorage.getItem("jwt")}))

  },[])

  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>


            <Avatar>
              <AvatarImage
              src={"https://imgs.search.brave.com/53PGZIUxuOXZXJ563jNggZYKUXpzKAlgFZlFBokCr_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzcyLzk0LzIz/LzM2MF9GXzc3Mjk0/MjM5OF91S3B4TU9B/cURHMmN1bmxpSmtE/QW4zMWIyTEh6SEtR/VS5qcGc"
                //coin.coinDetails?.image.large
                //coin.coinList?.image
              }
              />
            </Avatar>
       


         </div>
         <div className="flex items-center gap-2">
          <p>CRT</p>
          
          <DotIcon className="text-gray-400"/>
          <p className="text-gray-400">Crypto</p>   
         
         </div>
         <div className="flex items-end gap-2">
          <p className="text-xl font-bold">$65555</p>
          <p className="text-red-600">
            <span>45678</span>
            <span>(4.34567%)</span>
          </p>
        </div>
        </div>

         <div className="flex items-center gap-4">
         <Button>
          {
            true ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ): (
              <BookmarkFilledIcon className="h-6 w-6" />
            )
          }
         </Button>
         <Dialog>
  <DialogTrigger>
    <Button size="lg">
      Trade
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>How much do you want to spend</DialogTitle>
      
    </DialogHeader>
    <TradingForm />
  </DialogContent>
</Dialog>

</div>
      </div>
      <div className="mt-14">
      <StockChart />    //coinId //id
      </div>
      
    </div>
  )
}

export default StockDetails