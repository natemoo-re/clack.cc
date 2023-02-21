import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        headers: {
            'Cross-Origin-Embedder-Policy': 'require-corp',
            'Cross-Origin-Opener-Policy': 'same-origin',   
        }
    }
});
