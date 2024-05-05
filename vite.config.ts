// also don't forget to `npm i -D @types/node`, so __dirname won't complain
import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react()],
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
});
