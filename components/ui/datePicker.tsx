"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from "react-responsive"
import { DialogTitle } from "@radix-ui/react-dialog"

export function DatePickerResponsive() {
  const [date, setDate] = React.useState<Date>()
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery({minWidth:768})
  
  // Calculate date range
  const today = new Date()
  const twoMonthsLater = new Date(today)
  twoMonthsLater.setMonth(today.getMonth() + 2)

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        
           <h3 className="text-gray-900 dark:text-white text-base font-medium mb-3 text-start mt-4">
        Pick an Appoitment Date
      </h3>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full md:w-[500px] h-10 justify-start  text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[30vw] top-0 p-0 absolute   " align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate)
              setOpen(false)
            }}
            numberOfMonths={1}
            fromDate={today}
            toDate={twoMonthsLater}
            disabled={(date) => date < today || date > twoMonthsLater}
            initialFocus
            className="w-full"
          />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
             <h3 className="text-gray-900 dark:text-white text-base font-medium mb-3 text-start mt-4">
        Pick an Appoitment Date
      </h3>
      <DrawerTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DialogTitle className="text-center text-gray-600 text-lg font-medium">Pick a date</DialogTitle>
        <div className="p-3 w-[100%]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate)
              setOpen(false)
            }}
            fromDate={today}
            toDate={twoMonthsLater}
            disabled={(date) => date < today || date > twoMonthsLater}
            initialFocus
            className="rounded-md border w-full"
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
