import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetWind,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'hw-full': 'h-full w-full',
    'hw-screen': 'h-screen w-screen',
    'icon-btn': 'op30 hover:op100 hover:bg-primary_hover',
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-col-center': 'flex-col flex-center',
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetWind(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
      xxl: '1920px',
    },
    colors: {

    },
  },
})
