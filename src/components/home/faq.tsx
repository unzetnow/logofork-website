import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: "faq-1",
    question: "Can it do X?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  },
  {
    id: "faq-2",
    question: "Can it do Y?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  },
  {
    id: "faq-3",
    question: "Can it do Z?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  },
];

const FAQ = () => {
  return (
    <section className="py-32">
      <div className="mx-auto space-y-16 container-none">
        <Accordion
          type="single"
          collapsible
          className="w-full mx-auto lg:max-w-3xl"
        >
          {data.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center w-full p-4 text-center rounded-lg bg-accent md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-2.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 border size-16 md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="max-w-3xl mb-2 font-semibold lg:text-lg">
            Need more support?
          </h3>
          <p className="max-w-3xl mb-8 text-muted-foreground lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis!
          </p>
          <div className="flex flex-col justify-center w-full gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto">Call us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
