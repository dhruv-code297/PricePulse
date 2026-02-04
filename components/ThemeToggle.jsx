"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";


export const ThemeToggle = () => {
const { theme, toggleTheme } = useTheme();
return (
<Button variant="ghost" size="icon" onClick={toggleTheme}>
{theme === "light" ? <Moon /> : <Sun />}
</Button>
);
};