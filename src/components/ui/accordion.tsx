"use client";

import {
  Root,
  Item,
  Trigger,
  Header,
  Content,
} from "@radix-ui/react-accordion";
import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import React from "react";

const Accordion = Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all  [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronUp className="h-8 w-8 text-white transition-transform duration-200" />
    </Trigger>
  </Header>
));
AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </Content>
));
AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
