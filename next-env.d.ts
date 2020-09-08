/// <reference types="next" />
/// <reference types="next/types/global" />

declare const __DEV__: boolean

declare module '*.mdx' {
  // https://github.com/jescalan/babel-plugin-import-glob-array/issues/7
  export const frontMatter: unknown
}
