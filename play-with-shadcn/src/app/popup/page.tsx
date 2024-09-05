import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
export default function Pop(){
    return (
        <div className="flex justify-center text-3xl">
            <Popover>
             <PopoverTrigger>Open</PopoverTrigger>
             <PopoverContent>Place content for the popover   here.</PopoverContent>
            </Popover>
        </div>

    )
}