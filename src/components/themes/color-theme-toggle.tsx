import { Palette, Waves, Trees, Zap } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { useColorTheme, type ColorTheme } from './color-provider';

const themes = [
  {
    value: 'default' as ColorTheme,
    label: 'Default',
    icon: Palette,
    description: 'Clean and minimal',
    colors: {
      primary: 'oklch(0.208 0.042 265.755)',
      secondary: 'oklch(0.646 0.222 41.116)',
    },
  },
  {
    value: 'blue' as ColorTheme,
    label: 'Blue',
    icon: Waves,
    description: 'Professional ocean',
    colors: {
      primary: 'oklch(0.45 0.15 230)',
      secondary: 'oklch(0.75 0.08 230)',
    },
  },
  {
    value: 'green' as ColorTheme,
    label: 'Green',
    icon: Trees,
    description: 'Natural harmony',
    colors: {
      primary: 'oklch(0.54 0.17 135)',
      secondary: 'oklch(0.78 0.1 145)',
    },
  },
  {
    value: 'purple' as ColorTheme,
    label: 'Purple',
    icon: Zap,
    description: 'Creative energy',
    colors: {
      primary: 'oklch(0.49 0.16 285)',
      secondary: 'oklch(0.75 0.08 285)',
    },
  },
];

export function ColorThemeToggle() {
  const { currentTheme, setTheme } = useColorTheme();

  const currentThemeData = themes.find((theme) => theme.value === currentTheme);
  const CurrentIcon = currentThemeData?.icon || Palette;

  return (
    <Select value={currentTheme} onValueChange={setTheme}>
      <SelectTrigger className="border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-9 w-9 cursor-pointer items-center justify-center border [&>svg:last-child]:hidden">
        <CurrentIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Select color theme</span>
      </SelectTrigger>
      <SelectContent align="end" className="w-56">
        {themes.map((theme) => {
          const Icon = theme.icon;
          return (
            <SelectItem
              key={theme.value}
              value={theme.value}
              className="flex cursor-pointer items-center justify-between"
            >
              <div className="flex w-36 flex-1 items-center gap-3">
                <Icon className="h-4 w-4 flex-shrink-0" />
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium">
                    {theme.label}
                  </span>
                  <span className="text-muted-foreground truncate text-xs">
                    {theme.description}
                  </span>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center gap-1">
                <div
                  className="border-border/50 h-3 w-3 rounded-full border"
                  style={{ backgroundColor: theme.colors.primary }}
                  title="Primary color"
                />
                <div
                  className="border-border/50 h-3 w-3 rounded-full border"
                  style={{ backgroundColor: theme.colors.secondary }}
                  title="Secondary color"
                />
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
