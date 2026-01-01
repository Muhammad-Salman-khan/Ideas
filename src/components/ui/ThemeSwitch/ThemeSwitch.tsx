import { Button } from "@/components/button";
import { useTheme } from "@/Contexts/ThemeContext";

import { Moon, Sun } from "lucide-react";
const ThemeSwitch = ({ className }: { className?: string }) => {
  const { Theme, switchTheme }: any = useTheme();

  return (
    <>
      <Button
        className={`${className}`}
        variant="ghost"
        size="sm"
        onClick={() => switchTheme()}
      >
        {Theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </>
  );
};

export default ThemeSwitch;
