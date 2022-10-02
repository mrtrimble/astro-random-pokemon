import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify/edge-functions';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-pokemon.netlify.app/',
  experimental: {
    integrations: true
  },
  integrations: [robotsTxt(), compress()],
  output: 'server',
  adapter: netlify()
});