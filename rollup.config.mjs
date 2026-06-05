import { babel } from '@rollup/plugin-babel';
import { Addon } from '@embroider/addon-dev/rollup';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

const rootDirectory = dirname(fileURLToPath(import.meta.url));
const babelConfig = resolve(rootDirectory, './babel.publish.config.cjs');

export default {
  output: addon.output(),

  plugins: [
    addon.publicEntrypoints(['**/*.{js,gjs}', 'index.js']),

    addon.appReexports([
      'components/**/*.{js,gjs}',
      'helpers/**/*.{js,gjs}',
      'modifiers/**/*.{js,gjs}',
      'services/**/*.{js,gjs}',
    ]),

    addon.dependencies(),

    addon.gjs(),

    babel({
      extensions: ['.js', '.gjs'],
      babelHelpers: 'bundled',
      configFile: babelConfig,
    }),

    addon.keepAssets(['**/*.css']),

    addon.clean(),
  ],
};
