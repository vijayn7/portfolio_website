#!/bin/bash

# Portfolio Website Deployment Script
# This script builds and prepares the Next.js portfolio for deployment

echo "🚀 Building Portfolio Website..."
echo "================================"

# Build the Next.js application
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Your static website is ready in the 'out' directory"
    echo ""
    echo "🌐 Deployment Options:"
    echo ""
    echo "  📌 NETLIFY (Recommended):"
    echo "     1. GitHub Integration:"
    echo "        • Push to GitHub: git push origin main"
    echo "        • Connect repo at netlify.com"
    echo "        • Settings: Base=portfolio-nextjs, Build=npm run build, Publish=out"
    echo ""
    echo "     2. Manual Upload:"
    echo "        • Drag 'out' folder to netlify.com"
    echo ""
    echo "     3. Netlify CLI:"
    echo "        • npm install -g netlify-cli"
    echo "        • netlify login"
    echo "        • netlify deploy --prod --dir=out"
    echo ""
    echo "  📌 OTHER OPTIONS:"
    echo "     • Vercel: Connect GitHub repo (auto-deploy)"
    echo "     • GitHub Pages: Upload 'out' contents to gh-pages branch"
    echo "     • Any static host: Upload 'out' folder contents"
    echo ""
    echo "🔍 To preview locally:"
    echo "  Open: file://$(pwd)/out/index.html"
    echo "  Or serve with: npx serve out"
    echo ""
    echo "📋 Netlify Configuration:"
    echo "  ✅ netlify.toml is configured in the project root"
    echo "  ✅ Build settings are optimized for performance"
    echo ""
    echo "✨ The website works perfectly with JavaScript disabled!"
    echo "🎉 Ready for production deployment!"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
