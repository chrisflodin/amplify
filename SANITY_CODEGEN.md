# Sanity TypeScript Codegen Setup

This project is configured to automatically generate TypeScript types from your Sanity schema in the `../studio-amplify` project.

## Usage

There are two ways to generate the TypeScript types:

### Method 1: npm/pnpm script (recommended)

```bash
pnpm run sanity:codegen
# or
pnpm run generate-types
```

### Method 2: Direct shell script

```bash
./scripts/generate-types.sh
```

## What happens when you run the script:

1. **Schema Extraction**: The script navigates to `../studio-amplify` and extracts the Sanity schema to `sanity-schema.json`
2. **Type Generation**: Uses the schema to generate TypeScript types in `types/sanity-schema.ts`

## Generated Files

- `sanity-schema.json` - Raw schema extracted from your Sanity studio
- `types/sanity-schema.ts` - Generated TypeScript types

## Generated Types

The main types you'll use:

- `Article` - The article document type with all fields
- `SanityImageAsset` - For handling Sanity images
- `Slug` - For Sanity slug fields
- `AllSanitySchemaTypes` - Union of all schema types

## When to regenerate

Run the codegen script whenever you:

- Add new fields to your Sanity schema
- Modify existing field types
- Add new document types
- Change validation rules that affect TypeScript types

## Configuration Files

- `sanity-typegen.json` - Configuration for the type generator
- `sanity.cli.ts` - Sanity CLI configuration pointing to your project
- `scripts/generate-types.sh` - Shell script for easy execution

The generated types are automatically available for import in your TypeScript files:

```typescript
import { Article } from "@/types/sanity-schema";
```
