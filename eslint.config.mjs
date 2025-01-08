import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:tailwindcss/recommended'
  ),
  {
    rules: {
      'tailwindcss/classnames-order': 'error',
      'no-console': 'warn', // Cảnh báo khi sử dụng console
      semi: ['error', 'always'], // Yêu cầu dấu chấm phẩy
      quotes: ['error', 'single'], // Yêu cầu sử dụng nháy đơn
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ], // Bỏ qua biến bắt đầu bằng "_"
    },
  },
];

export default eslintConfig;
