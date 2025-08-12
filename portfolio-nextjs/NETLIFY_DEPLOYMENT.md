# Netlify Deployment Guide

## 🚀 Deploy to Netlify

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Portfolio website ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your `Portfolio_Website` repository

3. **Configure Build Settings**:
   - **Base directory**: `portfolio-nextjs`
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` (set in Environment variables)

4. **Deploy**: Click "Deploy site" - Netlify will automatically build and deploy!

### Method 2: Manual Upload

If you prefer manual deployment:

1. **Build locally**:
   ```bash
   cd portfolio-nextjs
   npm run build
   ```

2. **Upload to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder to Netlify
   - Your site will be live immediately!

### Method 3: Netlify CLI

For command-line deployment:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy**:
   ```bash
   cd portfolio-nextjs
   npm run build
   netlify login
   netlify deploy --prod --dir=out
   ```

## ⚙️ Netlify Configuration

Create a `netlify.toml` file in your `portfolio-nextjs` directory for optimal configuration:

```toml
[build]
  base = "portfolio-nextjs"
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production.environment]
  NODE_ENV = "production"
```

## 🔧 Environment Variables (if needed)

In Netlify dashboard → Site settings → Environment variables:
- `NODE_VERSION`: `18`
- `NODE_ENV`: `production`

## 🌐 Custom Domain

After deployment:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate will be automatically provisioned

## 📊 Performance Optimization

Your Next.js static site is already optimized for Netlify:
- ✅ Static files served from CDN
- ✅ Automatic compression
- ✅ Edge caching
- ✅ HTTP/2 support

## 🚨 Troubleshooting

**Build fails?**
- Ensure Node version is 18+ in Netlify settings
- Check that all dependencies are in `package.json`
- Verify build works locally with `npm run build`

**404 errors?**
- Make sure publish directory is set to `out`
- Check that `next.config.ts` has `output: 'export'`

**CSS not loading?**
- Verify all CSS imports are correct
- Check that assets are in the `public` directory

## 🎉 Success!

Once deployed, your portfolio will be available at:
- `https://[random-name].netlify.app` (auto-generated)
- Your custom domain (if configured)

The site will automatically rebuild and redeploy whenever you push changes to GitHub!
