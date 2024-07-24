import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { arrayBuffer } from "stream/consumers"
export default function CardWithForm() {
  const arr=[1,2,3,4,5,6]
  return (
    <Card className="w-[290px]">
      <CardHeader>
        <div className="flex justify-around">
          <div>
            <CardTitle >18°</CardTitle>
            <CardDescription>Sunday Morning.</CardDescription>
          </div>
          <div>
            <Image src={"/../../assests/weather/day.svg"} alt="oops" width={50} height={50} />
          </div>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
       {arr.map(item=>(
         <div className="flex justify-around">
         <div>
           <Image src={"/../../assests/weather/day.svg"} alt="oops" width={50} height={50} />
         </div>
         <div>
           <div>
             Wind Speed
           </div>
           <div>
             18 Km/h
           </div>
         </div>
         <div className="flex items-center">
           +2↑
         </div>
       </div>
       ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
