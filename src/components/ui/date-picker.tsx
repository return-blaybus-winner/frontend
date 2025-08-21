"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  className,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger className="h-12 flex items-center border border-gray-300 rounded-[6px] px-5 gap-2">
        <CalendarIcon className="text-gray-500" />
        {value ? (
          format(value, "PPP")
        ) : (
          <span className="text-gray-500">{placeholder}</span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  );
}

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Pick a date"
      className="w-[280px]"
    />
  );
}
