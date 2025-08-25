// eslint.config.ts
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default tseslint.config(
  {
    // 모든 JS/TS/JSX/TSX 파일 대상
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }, // 브라우저 + Node 환경
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // TypeScript 타입 체크를 위한 tsconfig
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      prettier: pluginPrettier,
    },
    extends: [
      js.configs.recommended, // 기본 JS 규칙
      ...tseslint.configs.recommended, // TypeScript 기본 규칙
      ...tseslint.configs["recommended-type-checked"], // TypeScript 타입 체크 규칙
      pluginReact.configs.flat.recommended, // React 추천 규칙
      pluginReact.configs.flat["jsx-runtime"], // React 17+ (JSX 자동 import)
      prettier, // Prettier와 ESLint 충돌 방지
    ],
    rules: {
      "prettier/prettier": "error", // Prettier 위반 시 에러
      "react/prop-types": "off", // TypeScript 사용 시 prop-types 불필요
      "react/react-in-jsx-scope": "off", // React 17+에서 불필요
      "react-hooks/rules-of-hooks": "error", // Hooks 규칙 강제
      "react-hooks/exhaustive-deps": "warn", // useEffect 의존성 경고
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // _로 시작하는 변수는 미사용 경고 제외
      "@typescript-eslint/explicit-module-boundary-types": "off", // 명시적 반환 타입 강제 비활성화
    },
    settings: {
      react: {
        version: "detect", // React 버전 자동 감지
      },
    },
  },
  {
    // 테스트 파일은 일부 규칙 완화
    files: ["**/*.test.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // 테스트에서 any 허용
    },
  }
);
