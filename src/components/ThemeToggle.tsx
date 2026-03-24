import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-2xl bg-card-bg border border-border-main hover:bg-border-main/20 transition-all cursor-pointer group shadow-sm active:scale-95"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'light' ? (
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="text-zinc-900"
          >
            <Moon size={20} fill="currentColor" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="text-accent-main"
          >
            <Sun size={20} fill="currentColor" className="opacity-80" />
          </motion.div>
        )}
      </div>
    </button>
  )
}