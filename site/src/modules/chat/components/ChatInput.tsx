"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
  isHeroSection?: boolean;
};

const ChatInput = ({ isHeroSection }: Props) => {
  return (
    <div className="max-w-xl relative w-full flex flex-col">
      <TextareaAutosize
        placeholder="Ask anything you want..."
        className={cn(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-14 px-4 py-3 pb-12.5 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 w-full resize-none bg-black/5 backdrop-blur-lg border shadow-xs rounded-md scrollbar-thin"
        )}
        maxRows={6}
        minRows={2}
        // disabled={isLoading}
        // value={message}
        // onChange={(e) => setMessage(e.target.value)}
        // onKeyDown={(e) => {
        //   if (
        //     e.key == "Enter" &&
        //     !e.shiftKey &&
        //     (message.trim() !== "" || imageFiles.length > 0)
        //   ) {
        //     e.preventDefault();
        //     onSubmit(imageFiles);
        //   }
        // }}
      />
      <div className="flex absolute bottom-0 inset-x-0 h-12 items-start gap-2 justify-end px-2">
        {isHeroSection && (
          <Link href={"/signin"}>
            <Button size={"lg"} variant={"outline"}>
              Signin
            </Button>
          </Link>
        )}
        <Button
          disabled={isHeroSection}
          type="submit"
          size={"icon"}
          className="size-10"
        >
          <ArrowUp className="size-5" />
        </Button>
      </div>
    </div>
  );
};
export default ChatInput;
