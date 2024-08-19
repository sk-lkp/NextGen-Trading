import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { DotFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

const TopupForm = () => {
    const [amount, setAmount] = React.useState('')
    const [paymentmethod, setPaymentMethod] = React.useState("RAZORPAY")
    
    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value)
    }
    
    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSubmit = () => {
        console.log(amount, paymentmethod);
    };

  return (
    <div className='pt-10 space-y-5'>
        
        <div>
            <h1 className='pb-1'>Enter Amount</h1>
            <Input 
            onChange={handleChange}
            value={amount}
            className="py-7 text-lg"
            placeholder="$9999"
            />
        </div>

        <div>
            <h1 className='pb-1'>Select payment Method</h1>
            <RadioGroup
            onValueChange={(value)=>handlePaymentMethodChange(value)}
            className="flex"
            defaultValue="RAZORPAY">
                <div className='flex items-center space-x-2 border p-3 px-5
                rounded-md'>

                    <RadioGroupItem
                    icon={DotFilledIcon}
                    className="h-9 w-9"
                    value="RAZORPAY"
                    id="r1"
                    />
                    <Label htmlFor="r1">
                        <div className='bg-white rounded-md px-5 py-2 w-32'>
                            <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png"
                            alt=""
                            />

                        </div>

                    </Label>

                    
                </div>

                <div className='flex items-center space-x-2 border p-3 px-5
                rounded-md'>

                    <RadioGroupItem
                    icon={DotFilledIcon}
                    className="h-9 w-9"
                    value="PAYTM"
                    id="r2"
                    />
                    <Label htmlFor="r2">
                        <div className='bg-white rounded-md px-5 py-2 w-32'>
                            <img
                            className='h-5'
                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.svg"
                            alt=""
                            />

                        </div>

                    </Label>

                    
                </div>

            </RadioGroup>
        </div>

        <Button onClick={handleSubmit} className="w-full py-7">
            Submit
        </Button>

    </div>
  )
}

export default TopupForm