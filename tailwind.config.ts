import type { Config } from 'tailwindcss'
import config from './config'

export default <Partial<Config>>{

    plugins: [
        require('tailwind-scrollbar'),
    ],

    theme: {
        extend: {
            colors: {
                ...config.tailwindColors
            }
        }
    }
}