import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // Import motion from Framer Motion

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SwitchDark() {
  const { setTheme, resolvedTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }} // Animate scale on hover
          whileTap={{ scale: 0.9 }} // Animate scale on tap
        >
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
