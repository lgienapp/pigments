// theme.js - For use with styled-components
import { createGlobalStyle } from 'styled-components';

export const theme = {
  pigments: {
    gray: {
      100: '#f1f0ef',
      200: '#dddad7',
      300: '#c8c4bf',
      400: '#b3afab',
      500: '#9d9a97',
      600: '#898683',
      700: '#75726f',
      800: '#615f5d',
      900: '#4f4d4a',
      1000: '#3d3b38',
    },
    blue: {
      100: '#e2f5f0',
      200: '#b7eceb',
      300: '#98d4dd',
      400: '#79bacd',
      500: '#5ea4c0',
      600: '#4590a9',
      700: '#2e7c92',
      800: '#176778',
      900: '#0b5561',
      1000: '#074248',
    },
    green: {
      100: '#f0f5c2',
      200: '#d7e9b4',
      300: '#b3cd9b',
      400: '#9bb989',
      500: '#89a377',
      600: '#788d64',
      700: '#677851',
      800: '#56633f',
      900: '#4a512d',
      1000: '#40401f',
    },
    yellow: {
      100: '#f9f2c8',
      200: '#f6e299',
      300: '#e6c069',
      400: '#d9a850',
      500: '#c98f39',
      600: '#b77927',
      700: '#9f6520',
      800: '#825420',
      900: '#5f3d16',
      1000: '#4b3313',
    },
    red: {
      100: '#ffede8',
      200: '#ffd3cc',
      300: '#ffb0a4',
      400: '#ff9283',
      500: '#f27666',
      600: '#e15953',
      700: '#cb4245',
      800: '#aa333f',
      900: '#94202b',
      1000: '#720d1e',
    },
    violet: {
      100: '#f9ecff',
      200: '#eddbff',
      300: '#d7b8fb',
      400: '#c4a1f1',
      500: '#a98ce4',
      600: '#9177d4',
      700: '#7e62c0',
      800: '#6d4da5',
      900: '#5f3f7e',
      1000: '#502f5a',
    },
    black: '#000000',
    white: '#ffffff',
  },
  // Semantic theme colors based on the pigments palette
  colors: {
    primary: '#2e7c92', // blue-700
    secondary: '#7e62c0', // violet-700
    success: '#677851', // green-700
    warning: '#b77927', // yellow-600
    danger: '#cb4245', // red-700
    info: '#5ea4c0', // blue-500
    light: '#f1f0ef', // gray-100
    dark: '#3d3b38', // gray-1000
    background: '#f1f0ef', // gray-100
    text: '#3d3b38', // gray-1000
    muted: '#9d9a97', // gray-500
    border: '#dddad7', // gray-200
  },
  typography: {
    fontFamily: {
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", serif',
      mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
};

// Example of how to create CSS custom properties from the theme
export const GlobalStyle = createGlobalStyle`
  :root {
    /* Gray */
    --pigments-gray-100: ${props => props.theme.pigments.gray[100]};
    --pigments-gray-200: ${props => props.theme.pigments.gray[200]};
    --pigments-gray-300: ${props => props.theme.pigments.gray[300]};
    --pigments-gray-400: ${props => props.theme.pigments.gray[400]};
    --pigments-gray-500: ${props => props.theme.pigments.gray[500]};
    --pigments-gray-600: ${props => props.theme.pigments.gray[600]};
    --pigments-gray-700: ${props => props.theme.pigments.gray[700]};
    --pigments-gray-800: ${props => props.theme.pigments.gray[800]};
    --pigments-gray-900: ${props => props.theme.pigments.gray[900]};
    --pigments-gray-1000: ${props => props.theme.pigments.gray[1000]};

    /* Blue */
    --pigments-blue-100: ${props => props.theme.pigments.blue[100]};
    --pigments-blue-200: ${props => props.theme.pigments.blue[200]};
    --pigments-blue-300: ${props => props.theme.pigments.blue[300]};
    --pigments-blue-400: ${props => props.theme.pigments.blue[400]};
    --pigments-blue-500: ${props => props.theme.pigments.blue[500]};
    --pigments-blue-600: ${props => props.theme.pigments.blue[600]};
    --pigments-blue-700: ${props => props.theme.pigments.blue[700]};
    --pigments-blue-800: ${props => props.theme.pigments.blue[800]};
    --pigments-blue-900: ${props => props.theme.pigments.blue[900]};
    --pigments-blue-1000: ${props => props.theme.pigments.blue[1000]};

    /* Green */
    --pigments-green-100: ${props => props.theme.pigments.green[100]};
    --pigments-green-200: ${props => props.theme.pigments.green[200]};
    --pigments-green-300: ${props => props.theme.pigments.green[300]};
    --pigments-green-400: ${props => props.theme.pigments.green[400]};
    --pigments-green-500: ${props => props.theme.pigments.green[500]};
    --pigments-green-600: ${props => props.theme.pigments.green[600]};
    --pigments-green-700: ${props => props.theme.pigments.green[700]};
    --pigments-green-800: ${props => props.theme.pigments.green[800]};
    --pigments-green-900: ${props => props.theme.pigments.green[900]};
    --pigments-green-1000: ${props => props.theme.pigments.green[1000]};

    /* Yellow */
    --pigments-yellow-100: ${props => props.theme.pigments.yellow[100]};
    --pigments-yellow-200: ${props => props.theme.pigments.yellow[200]};
    --pigments-yellow-300: ${props => props.theme.pigments.yellow[300]};
    --pigments-yellow-400: ${props => props.theme.pigments.yellow[400]};
    --pigments-yellow-500: ${props => props.theme.pigments.yellow[500]};
    --pigments-yellow-600: ${props => props.theme.pigments.yellow[600]};
    --pigments-yellow-700: ${props => props.theme.pigments.yellow[700]};
    --pigments-yellow-800: ${props => props.theme.pigments.yellow[800]};
    --pigments-yellow-900: ${props => props.theme.pigments.yellow[900]};
    --pigments-yellow-1000: ${props => props.theme.pigments.yellow[1000]};

    /* Red */
    --pigments-red-100: ${props => props.theme.pigments.red[100]};
    --pigments-red-200: ${props => props.theme.pigments.red[200]};
    --pigments-red-300: ${props => props.theme.pigments.red[300]};
    --pigments-red-400: ${props => props.theme.pigments.red[400]};
    --pigments-red-500: ${props => props.theme.pigments.red[500]};
    --pigments-red-600: ${props => props.theme.pigments.red[600]};
    --pigments-red-700: ${props => props.theme.pigments.red[700]};
    --pigments-red-800: ${props => props.theme.pigments.red[800]};
    --pigments-red-900: ${props => props.theme.pigments.red[900]};
    --pigments-red-1000: ${props => props.theme.pigments.red[1000]};

    /* Violet */
    --pigments-violet-100: ${props => props.theme.pigments.violet[100]};
    --pigments-violet-200: ${props => props.theme.pigments.violet[200]};
    --pigments-violet-300: ${props => props.theme.pigments.violet[300]};
    --pigments-violet-400: ${props => props.theme.pigments.violet[400]};
    --pigments-violet-500: ${props => props.theme.pigments.violet[500]};
    --pigments-violet-600: ${props => props.theme.pigments.violet[600]};
    --pigments-violet-700: ${props => props.theme.pigments.violet[700]};
    --pigments-violet-800: ${props => props.theme.pigments.violet[800]};
    --pigments-violet-900: ${props => props.theme.pigments.violet[900]};
    --pigments-violet-1000: ${props => props.theme.pigments.violet[1000]};

    /* Base Colors */
    --pigments-black: ${props => props.theme.pigments.black};
    --pigments-white: ${props => props.theme.pigments.white};
  }
`;