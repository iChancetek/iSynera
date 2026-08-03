'use client'

import * as React from 'react'
import { Moon, Sun, Check } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { useAutoTheme } from './AutoThemeProvider'

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const { isAutoThemeEnabled, setIsAutoThemeEnabled } = useAutoTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 rounded-xl border-border/50 bg-background/95 backdrop-blur-md shadow-2xl">
        <DropdownMenuItem onClick={() => {
          setIsAutoThemeEnabled(false);
          setTheme('light');
        }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          setIsAutoThemeEnabled(false);
          setTheme('dark');
        }}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          setIsAutoThemeEnabled(false);
          setTheme('system');
        }}>
          System
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={isAutoThemeEnabled}
          onCheckedChange={(checked) => setIsAutoThemeEnabled(!!checked)}
        >
          Auto Cycle Theme
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
