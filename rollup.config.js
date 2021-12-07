import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import image from "@rollup/plugin-image";
import url from "@rollup/plugin-url";
import path from "path";

export default {
  input: "src/index.js",
  output: [
    {
      file: "public/dist/js/bundle.js",
      format: "cjs",
    },
    {
      file: "public/dist/js/bundle.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],
  plugins: [
    json(),
    image(),
    url({
      include: ["src/ui/**/*.wav", "src/ui/**/*.mp3"],
      limit: 2000,
      emitFiles: true,
      sourceDir: __dirname,
      destDir: path.join(__dirname, "public/dist/audio"),
    }),
  ],
};
