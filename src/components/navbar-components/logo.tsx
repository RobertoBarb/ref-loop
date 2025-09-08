import { Bot } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Bot className="h-8 w-8 text-primary" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      </div>
      <span className="text-xl font-bold gradient-text">Loop AI</span>
    </div>
  );
}
