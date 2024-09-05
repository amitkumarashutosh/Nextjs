import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const value=[
    {
      id:1,
      question:"Is it accessible?",
      answer:" Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      id:2,
      question:"Is it styled?",
      answer:"  Yes. It comes with default styles that matches the other aesthetic."
    },
    {
      id:3,
      question:"Is it animated?",
      answer:" Yes. It is animated by default, but you can disable it if you prefer."
    },
  ]
  
  export default function AccordionDemo() {
    return (
      <div className=" flex justify-center">
        <div className="w-[500px]">
        <Accordion type="single" collapsible className="w-full">
        {value.map(item=>{
          return <AccordionItem value={`item-${item.id}`} className="p-2">
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
        })}
       
      </Accordion>
      </div>
      </div>
    )
  }
  