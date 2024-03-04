import {CodegenConfig} from '@graphql-codegen/cli';

const token =
  'eyJraWQiOiJ3dzZsUjJWdlN1VnhTMkJ6a2VzN3V0WVc3R1ZBMWc1Y2lzbHJiODM1YUJvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5YTU2Njg2Ni1iZmIyLTQ4ZjAtYjMwZS04NWQ1ZGRhYTI0MWMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmNhLWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9jYS1jZW50cmFsLTFfZzFFZEU2SWJnIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6IjlhNTY2ODY2LWJmYjItNDhmMC1iMzBlLTg1ZDVkZGFhMjQxYyIsIm9yaWdpbl9qdGkiOiI3OGQ4YTAyYi0yYzQxLTQzNzctOWRmYi1lMjAyZTVjOGIzMTEiLCJjdXN0b206dXNlclR5cGUiOiJEcml2ZXIiLCJhdWQiOiIydWU4OGVwazNmZHFtazA2MzFrcjdjZDFpcyIsImV2ZW50X2lkIjoiNzQxZDRlYjUtZmFjZS00ZTc3LWFiOGYtY2VjYWYyMjU3N2QxIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MDkxMDM1OTIsInBob25lX251bWJlciI6IisxODY1Njc1MjMyIiwiZXhwIjoxNzA5Mjg0NTU0LCJpYXQiOjE3MDkyODA5NTQsImp0aSI6ImFhMDI2OWQwLTg0NDUtNDE4Ny1hMjkxLWY2NWI5ZDFmMGE1NyIsImVtYWlsIjoiZHJpdmVyXzFfQGdtYWlsLmNvbSJ9.na4LKIYTbvSRwbQKenOrd62evniXm-AHpo4B8Wicn9iVMNCZCkVkVJUvqko6Azpe7macFfFOmOwz0KKgtsnaXzpWY7XcXIJgtEAwUDz7LfogtJy7gkNWT1D7kuUPulQvDnkYczowq8cHxgBvRplHpH69WhlP80dxzw_Q4NGHRI3MjFOi4e1ZJvNayAuYoY-q2V8tS38u5Fi1f0MV7tSeRyjGLSUZCNcUmDf6f0pW99XBV_fP_QxXtGA51T0TD695dsDOPXalEtzgJwroTmUfBYd1B7VKHkFyYmfejkeXfk4vg3WaVoqLd5PBk-gQKkVV2bZAWx5zg70KAM4I8ZFMrg';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://api-uat.pikthat.com/driver/graphql': {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  ],
  documents: ['./src/**/*.graphql'],
  emitLegacyCommonJSImports: false,
  generates: {
    'src/graphql/generated/graphql.tsx': {
      // preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  // hooks: {afterAllFileWrite: ['prettier --write']},
};

export default config;
