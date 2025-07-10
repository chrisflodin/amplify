#!/bin/bash

# Generate Sanity TypeScript types from schema
echo "🔄 Extracting Sanity schema from studio..."
cd ../studio-amplify && sanity schema extract --path=../amplify/sanity-schema.json

echo "🎯 Generating TypeScript types..."
cd ../amplify && sanity typegen generate

echo "✅ Sanity types generated successfully!"
echo "📁 Types are available in: types/sanity-schema.ts" 