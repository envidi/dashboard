import path from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const prettierCommand = 'prettier --write';
const lintStage = {
  '*.{js,jsx,ts,tsx}': [prettierCommand, buildEslintCommand],
  '*.{json,css,md}': [prettierCommand],
};

export default lintStage;
