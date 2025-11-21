// Manually define types to replace missing vite/client and support process.env usage

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Augment NodeJS namespace to include API_KEY in ProcessEnv
// This avoids redeclaring 'process' which causes conflicts with @types/node
// and allows vite.config.ts to use the correct process.cwd() type.
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  }
}