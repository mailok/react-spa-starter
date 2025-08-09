export const themes = {
  default: {
    // Colors - Light mode color variables
    colors: {
      '--background': 'oklch(1 0 0)',
      '--foreground': 'oklch(0.129 0.042 264.695)',
      '--card': 'oklch(1 0 0)',
      '--card-foreground': 'oklch(0.129 0.042 264.695)',
      '--popover': 'oklch(1 0 0)',
      '--popover-foreground': 'oklch(0.129 0.042 264.695)',
      '--primary': 'oklch(0.208 0.042 265.755)',
      '--primary-foreground': 'oklch(0.984 0.003 247.858)',
      '--secondary': 'oklch(0.968 0.007 247.896)',
      '--secondary-foreground': 'oklch(0.208 0.042 265.755)',
      '--muted': 'oklch(0.968 0.007 247.896)',
      '--muted-foreground': 'oklch(0.554 0.046 257.417)',
      '--accent': 'oklch(0.968 0.007 247.896)',
      '--accent-foreground': 'oklch(0.208 0.042 265.755)',
      '--destructive': 'oklch(0.577 0.245 27.325)',
      '--border': 'oklch(0.929 0.013 255.508)',
      '--input': 'oklch(0.929 0.013 255.508)',
      '--ring': 'oklch(0.704 0.04 256.788)',
      '--chart-1': 'oklch(0.646 0.222 41.116)',
      '--chart-2': 'oklch(0.6 0.118 184.704)',
      '--chart-3': 'oklch(0.398 0.07 227.392)',
      '--chart-4': 'oklch(0.828 0.189 84.429)',
      '--chart-5': 'oklch(0.769 0.188 70.08)',
      '--sidebar': 'oklch(0.985 0 0)',
      '--sidebar-foreground': 'oklch(0.145 0 0)',
      '--sidebar-primary': 'oklch(0.205 0 0)',
      '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
      '--sidebar-accent': 'oklch(0.97 0 0)',
      '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
      '--sidebar-border': 'oklch(0.922 0 0)',
      '--sidebar-ring': 'oklch(0.708 0 0)',
    },

    // Sizing - Dimensions, fonts, shadows, radius, etc.
    sizing: {
      '--radius': '0.625rem',
      '--font-sans':
        'Geist Sans, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      '--font-mono':
        'Geist Mono, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
      '--radius-sm': 'calc(var(--radius) - 4px)',
      '--radius-md': 'calc(var(--radius) - 2px)',
      '--radius-lg': 'var(--radius)',
      '--radius-xl': 'calc(var(--radius) + 4px)',
      '--theme-font-scale': '1',
      '--theme-line-height': '1.5',
      '--theme-shadow':
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      '--theme-shadow-lg':
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      '--theme-shadow-dark':
        '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
      '--theme-shadow-lg-dark':
        '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    },

    // Dark - Dark mode color variables
    dark: {
      '--background': 'oklch(0.129 0.042 264.695)',
      '--foreground': 'oklch(0.984 0.003 247.858)',
      '--card': 'oklch(0.208 0.042 265.755)',
      '--card-foreground': 'oklch(0.984 0.003 247.858)',
      '--popover': 'oklch(0.208 0.042 265.755)',
      '--popover-foreground': 'oklch(0.984 0.003 247.858)',
      '--primary': 'oklch(0.929 0.013 255.508)',
      '--primary-foreground': 'oklch(0.208 0.042 265.755)',
      '--secondary': 'oklch(0.279 0.041 260.031)',
      '--secondary-foreground': 'oklch(0.984 0.003 247.858)',
      '--muted': 'oklch(0.279 0.041 260.031)',
      '--muted-foreground': 'oklch(0.704 0.04 256.788)',
      '--accent': 'oklch(0.279 0.041 260.031)',
      '--accent-foreground': 'oklch(0.984 0.003 247.858)',
      '--destructive': 'oklch(0.704 0.191 22.216)',
      '--border': 'oklch(1 0 0 / 10%)',
      '--input': 'oklch(1 0 0 / 15%)',
      '--ring': 'oklch(0.551 0.027 264.364)',
      '--chart-1': 'oklch(0.488 0.243 264.376)',
      '--chart-2': 'oklch(0.696 0.17 162.48)',
      '--chart-3': 'oklch(0.769 0.188 70.08)',
      '--chart-4': 'oklch(0.627 0.265 303.9)',
      '--chart-5': 'oklch(0.645 0.246 16.439)',
      '--sidebar': 'oklch(0.205 0 0)',
      '--sidebar-foreground': 'oklch(0.985 0 0)',
      '--sidebar-primary': 'oklch(0.488 0.243 264.376)',
      '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
      '--sidebar-accent': 'oklch(0.269 0 0)',
      '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
      '--sidebar-border': 'oklch(1 0 0 / 10%)',
      '--sidebar-ring': 'oklch(0.439 0 0)',
    },

    // Layout - Layout-specific variables (header, sidebar, spacing)
    layout: {
      '--header-height': 'calc(var(--spacing) * 12)',
      '--sidebar-width': 'calc(var(--spacing) * 72)',
    },
  },

  // Blue theme - Adaptando colores de shadcn blue a nuestra estructura
  blue: {
    colors: {
      '--background': 'oklch(1 0 0)',
      '--foreground': 'oklch(0.129 0.042 264.695)',
      '--card': 'oklch(1 0 0)',
      '--card-foreground': 'oklch(0.129 0.042 264.695)',
      '--popover': 'oklch(1 0 0)',
      '--popover-foreground': 'oklch(0.129 0.042 264.695)',
      '--primary': 'oklch(0.45 0.15 230)', // blue-600
      '--primary-foreground': 'oklch(0.97 0.01 230)', // blue-50
      '--secondary': 'oklch(0.968 0.007 247.896)',
      '--secondary-foreground': 'oklch(0.208 0.042 265.755)',
      '--muted': 'oklch(0.968 0.007 247.896)',
      '--muted-foreground': 'oklch(0.554 0.046 257.417)',
      '--accent': 'oklch(0.968 0.007 247.896)',
      '--accent-foreground': 'oklch(0.208 0.042 265.755)',
      '--destructive': 'oklch(0.577 0.245 27.325)',
      '--border': 'oklch(0.929 0.013 255.508)',
      '--input': 'oklch(0.929 0.013 255.508)',
      '--ring': 'oklch(0.65 0.12 230)', // blue-400
      '--chart-1': 'oklch(0.75 0.08 230)', // blue-300
      '--chart-2': 'oklch(0.6 0.15 230)', // blue-500
      '--chart-3': 'oklch(0.45 0.15 230)', // blue-600
      '--chart-4': 'oklch(0.35 0.18 230)', // blue-700
      '--chart-5': 'oklch(0.25 0.2 230)', // blue-800
      '--sidebar': 'oklch(0.985 0 0)',
      '--sidebar-foreground': 'oklch(0.145 0 0)',
      '--sidebar-primary': 'oklch(0.45 0.15 230)', // blue-600
      '--sidebar-primary-foreground': 'oklch(0.97 0.01 230)', // blue-50
      '--sidebar-accent': 'oklch(0.97 0 0)',
      '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
      '--sidebar-border': 'oklch(0.922 0 0)',
      '--sidebar-ring': 'oklch(0.65 0.12 230)', // blue-400
    },
    sizing: {
      '--radius': '0.625rem',
      '--font-sans':
        'Geist Sans, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      '--font-mono':
        'Geist Mono, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
      '--radius-sm': 'calc(var(--radius) - 4px)',
      '--radius-md': 'calc(var(--radius) - 2px)',
      '--radius-lg': 'var(--radius)',
      '--radius-xl': 'calc(var(--radius) + 4px)',
      '--theme-font-scale': '1',
      '--theme-line-height': '1.5',
      '--theme-shadow':
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      '--theme-shadow-lg':
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      '--theme-shadow-dark':
        '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
      '--theme-shadow-lg-dark':
        '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    },
    dark: {
      '--background': 'oklch(0.129 0.042 264.695)',
      '--foreground': 'oklch(0.984 0.003 247.858)',
      '--card': 'oklch(0.208 0.042 265.755)',
      '--card-foreground': 'oklch(0.984 0.003 247.858)',
      '--popover': 'oklch(0.208 0.042 265.755)',
      '--popover-foreground': 'oklch(0.984 0.003 247.858)',
      '--primary': 'oklch(0.6 0.15 230)', // blue-500
      '--primary-foreground': 'oklch(0.97 0.01 230)', // blue-50
      '--secondary': 'oklch(0.279 0.041 260.031)',
      '--secondary-foreground': 'oklch(0.984 0.003 247.858)',
      '--muted': 'oklch(0.279 0.041 260.031)',
      '--muted-foreground': 'oklch(0.704 0.04 256.788)',
      '--accent': 'oklch(0.279 0.041 260.031)',
      '--accent-foreground': 'oklch(0.984 0.003 247.858)',
      '--destructive': 'oklch(0.704 0.191 22.216)',
      '--border': 'oklch(1 0 0 / 10%)',
      '--input': 'oklch(1 0 0 / 15%)',
      '--ring': 'oklch(0.15 0.03 230)', // blue-900
      '--chart-1': 'oklch(0.75 0.08 230)', // blue-300
      '--chart-2': 'oklch(0.6 0.15 230)', // blue-500
      '--chart-3': 'oklch(0.45 0.15 230)', // blue-600
      '--chart-4': 'oklch(0.35 0.18 230)', // blue-700
      '--chart-5': 'oklch(0.25 0.2 230)', // blue-800
      '--sidebar': 'oklch(0.205 0 0)',
      '--sidebar-foreground': 'oklch(0.985 0 0)',
      '--sidebar-primary': 'oklch(0.6 0.15 230)', // blue-500
      '--sidebar-primary-foreground': 'oklch(0.97 0.01 230)', // blue-50
      '--sidebar-accent': 'oklch(0.269 0 0)',
      '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
      '--sidebar-border': 'oklch(1 0 0 / 10%)',
      '--sidebar-ring': 'oklch(0.15 0.03 230)', // blue-900
    },
    layout: {
      '--header-height': 'calc(var(--spacing) * 12)',
      '--sidebar-width': 'calc(var(--spacing) * 72)',
    },
  },

  // Green theme - Adaptando colores de shadcn green/lime a nuestra estructura
  green: {
    colors: {
      '--background': 'oklch(1 0 0)',
      '--foreground': 'oklch(0.129 0.042 264.695)',
      '--card': 'oklch(1 0 0)',
      '--card-foreground': 'oklch(0.129 0.042 264.695)',
      '--popover': 'oklch(1 0 0)',
      '--popover-foreground': 'oklch(0.129 0.042 264.695)',
      '--primary': 'oklch(0.54 0.17 135)', // lime-600
      '--primary-foreground': 'oklch(0.97 0.02 135)', // lime-50
      '--secondary': 'oklch(0.968 0.007 247.896)',
      '--secondary-foreground': 'oklch(0.208 0.042 265.755)',
      '--muted': 'oklch(0.968 0.007 247.896)',
      '--muted-foreground': 'oklch(0.554 0.046 257.417)',
      '--accent': 'oklch(0.968 0.007 247.896)',
      '--accent-foreground': 'oklch(0.208 0.042 265.755)',
      '--destructive': 'oklch(0.577 0.245 27.325)',
      '--border': 'oklch(0.929 0.013 255.508)',
      '--input': 'oklch(0.929 0.013 255.508)',
      '--ring': 'oklch(0.73 0.14 135)', // lime-400
      '--chart-1': 'oklch(0.78 0.1 145)', // green-300
      '--chart-2': 'oklch(0.64 0.15 145)', // green-500
      '--chart-3': 'oklch(0.49 0.17 145)', // green-600
      '--chart-4': 'oklch(0.38 0.19 145)', // green-700
      '--chart-5': 'oklch(0.28 0.2 145)', // green-800
      '--sidebar': 'oklch(0.985 0 0)',
      '--sidebar-foreground': 'oklch(0.145 0 0)',
      '--sidebar-primary': 'oklch(0.54 0.17 135)', // lime-600
      '--sidebar-primary-foreground': 'oklch(0.97 0.02 135)', // lime-50
      '--sidebar-accent': 'oklch(0.97 0 0)',
      '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
      '--sidebar-border': 'oklch(0.922 0 0)',
      '--sidebar-ring': 'oklch(0.73 0.14 135)', // lime-400
    },
    sizing: {
      '--radius': '0.625rem',
      '--font-sans':
        'Geist Sans, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      '--font-mono':
        'Geist Mono, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
      '--radius-sm': 'calc(var(--radius) - 4px)',
      '--radius-md': 'calc(var(--radius) - 2px)',
      '--radius-lg': 'var(--radius)',
      '--radius-xl': 'calc(var(--radius) + 4px)',
      '--theme-font-scale': '1',
      '--theme-line-height': '1.5',
      '--theme-shadow':
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      '--theme-shadow-lg':
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      '--theme-shadow-dark':
        '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
      '--theme-shadow-lg-dark':
        '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    },
    dark: {
      '--background': 'oklch(0.129 0.042 264.695)',
      '--foreground': 'oklch(0.984 0.003 247.858)',
      '--card': 'oklch(0.208 0.042 265.755)',
      '--card-foreground': 'oklch(0.984 0.003 247.858)',
      '--popover': 'oklch(0.208 0.042 265.755)',
      '--popover-foreground': 'oklch(0.984 0.003 247.858)',
      '--primary': 'oklch(0.54 0.17 135)', // lime-600 (same in dark)
      '--primary-foreground': 'oklch(0.97 0.02 135)', // lime-50
      '--secondary': 'oklch(0.279 0.041 260.031)',
      '--secondary-foreground': 'oklch(0.984 0.003 247.858)',
      '--muted': 'oklch(0.279 0.041 260.031)',
      '--muted-foreground': 'oklch(0.704 0.04 256.788)',
      '--accent': 'oklch(0.279 0.041 260.031)',
      '--accent-foreground': 'oklch(0.984 0.003 247.858)',
      '--destructive': 'oklch(0.704 0.191 22.216)',
      '--border': 'oklch(1 0 0 / 10%)',
      '--input': 'oklch(1 0 0 / 15%)',
      '--ring': 'oklch(0.15 0.04 135)', // lime-900
      '--chart-1': 'oklch(0.78 0.1 145)', // green-300
      '--chart-2': 'oklch(0.64 0.15 145)', // green-500
      '--chart-3': 'oklch(0.49 0.17 145)', // green-600
      '--chart-4': 'oklch(0.38 0.19 145)', // green-700
      '--chart-5': 'oklch(0.28 0.2 145)', // green-800
      '--sidebar': 'oklch(0.205 0 0)',
      '--sidebar-foreground': 'oklch(0.985 0 0)',
      '--sidebar-primary': 'oklch(0.6 0.15 135)', // lime-500
      '--sidebar-primary-foreground': 'oklch(0.97 0.02 135)', // lime-50
      '--sidebar-accent': 'oklch(0.269 0 0)',
      '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
      '--sidebar-border': 'oklch(1 0 0 / 10%)',
      '--sidebar-ring': 'oklch(0.15 0.04 135)', // lime-900
    },
    layout: {
      '--header-height': 'calc(var(--spacing) * 12)',
      '--sidebar-width': 'calc(var(--spacing) * 72)',
    },
  },

  // Purple theme - Adaptando colores de shadcn purple a nuestra estructura
  purple: {
    colors: {
      '--background': 'oklch(1 0 0)',
      '--foreground': 'oklch(0.129 0.042 264.695)',
      '--card': 'oklch(1 0 0)',
      '--card-foreground': 'oklch(0.129 0.042 264.695)',
      '--popover': 'oklch(1 0 0)',
      '--popover-foreground': 'oklch(0.129 0.042 264.695)',
      '--primary': 'oklch(0.49 0.16 285)', // purple-600
      '--primary-foreground': 'oklch(0.97 0.01 285)', // purple-50
      '--secondary': 'oklch(0.968 0.007 247.896)',
      '--secondary-foreground': 'oklch(0.208 0.042 265.755)',
      '--muted': 'oklch(0.968 0.007 247.896)',
      '--muted-foreground': 'oklch(0.554 0.046 257.417)',
      '--accent': 'oklch(0.968 0.007 247.896)',
      '--accent-foreground': 'oklch(0.208 0.042 265.755)',
      '--destructive': 'oklch(0.577 0.245 27.325)',
      '--border': 'oklch(0.929 0.013 255.508)',
      '--input': 'oklch(0.929 0.013 255.508)',
      '--ring': 'oklch(0.67 0.12 285)', // purple-400
      '--chart-1': 'oklch(0.75 0.08 285)', // purple-300
      '--chart-2': 'oklch(0.6 0.15 285)', // purple-500
      '--chart-3': 'oklch(0.49 0.16 285)', // purple-600
      '--chart-4': 'oklch(0.39 0.17 285)', // purple-700
      '--chart-5': 'oklch(0.3 0.18 285)', // purple-800
      '--sidebar': 'oklch(0.985 0 0)',
      '--sidebar-foreground': 'oklch(0.145 0 0)',
      '--sidebar-primary': 'oklch(0.49 0.16 285)', // purple-600
      '--sidebar-primary-foreground': 'oklch(0.97 0.01 285)', // purple-50
      '--sidebar-accent': 'oklch(0.97 0 0)',
      '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
      '--sidebar-border': 'oklch(0.922 0 0)',
      '--sidebar-ring': 'oklch(0.67 0.12 285)', // purple-400
    },
    sizing: {
      '--radius': '0.625rem',
      '--font-sans':
        'Geist Sans, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      '--font-mono':
        'Geist Mono, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
      '--radius-sm': 'calc(var(--radius) - 4px)',
      '--radius-md': 'calc(var(--radius) - 2px)',
      '--radius-lg': 'var(--radius)',
      '--radius-xl': 'calc(var(--radius) + 4px)',
      '--theme-font-scale': '1',
      '--theme-line-height': '1.5',
      '--theme-shadow':
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      '--theme-shadow-lg':
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      '--theme-shadow-dark':
        '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
      '--theme-shadow-lg-dark':
        '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    },
    dark: {
      '--background': 'oklch(0.129 0.042 264.695)',
      '--foreground': 'oklch(0.984 0.003 247.858)',
      '--card': 'oklch(0.208 0.042 265.755)',
      '--card-foreground': 'oklch(0.984 0.003 247.858)',
      '--popover': 'oklch(0.208 0.042 265.755)',
      '--popover-foreground': 'oklch(0.984 0.003 247.858)',
      '--primary': 'oklch(0.6 0.15 285)', // purple-500
      '--primary-foreground': 'oklch(0.97 0.01 285)', // purple-50
      '--secondary': 'oklch(0.279 0.041 260.031)',
      '--secondary-foreground': 'oklch(0.984 0.003 247.858)',
      '--muted': 'oklch(0.279 0.041 260.031)',
      '--muted-foreground': 'oklch(0.704 0.04 256.788)',
      '--accent': 'oklch(0.279 0.041 260.031)',
      '--accent-foreground': 'oklch(0.984 0.003 247.858)',
      '--destructive': 'oklch(0.704 0.191 22.216)',
      '--border': 'oklch(1 0 0 / 10%)',
      '--input': 'oklch(1 0 0 / 15%)',
      '--ring': 'oklch(0.15 0.03 285)', // purple-900
      '--chart-1': 'oklch(0.75 0.08 285)', // purple-300
      '--chart-2': 'oklch(0.6 0.15 285)', // purple-500
      '--chart-3': 'oklch(0.49 0.16 285)', // purple-600
      '--chart-4': 'oklch(0.39 0.17 285)', // purple-700
      '--chart-5': 'oklch(0.3 0.18 285)', // purple-800
      '--sidebar': 'oklch(0.205 0 0)',
      '--sidebar-foreground': 'oklch(0.985 0 0)',
      '--sidebar-primary': 'oklch(0.6 0.15 285)', // purple-500
      '--sidebar-primary-foreground': 'oklch(0.97 0.01 285)', // purple-50
      '--sidebar-accent': 'oklch(0.269 0 0)',
      '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
      '--sidebar-border': 'oklch(1 0 0 / 10%)',
      '--sidebar-ring': 'oklch(0.15 0.03 285)', // purple-900
    },
    layout: {
      '--header-height': 'calc(var(--spacing) * 12)',
      '--sidebar-width': 'calc(var(--spacing) * 72)',
    },
  },
};