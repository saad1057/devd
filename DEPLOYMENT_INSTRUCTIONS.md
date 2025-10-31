# Deployment Instructions for DevD Portfolio Website

## Time Estimate
- **GitHub Setup & Push**: 5-10 minutes
- **Vercel Deployment**: 2-5 minutes
- **Total**: ~10-15 minutes

## Step 1: Push to GitHub

### Option A: Create New Repository via GitHub Website
1. Go to https://github.com/new
2. Repository name: `devd-portfolio` (or any name you prefer)
3. Choose Public or Private
4. **DO NOT** initialize with README (we already have one)
5. Click "Create repository"

### Option B: Use GitHub CLI (if installed)
```bash
gh repo create devd-portfolio --public --source=. --remote=origin --push
```

### Manual Push (if Option B doesn't work)
```bash
# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/devd-portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Website (Recommended)
1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository (`devd-portfolio`)
5. Vercel will auto-detect Vite:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
6. Click "Deploy"
7. Wait 2-5 minutes for deployment
8. Your site will be live at: `https://your-project.vercel.app`

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Configuration Files Already Added

✅ `vercel.json` - Vercel configuration
✅ `vite.config.js` - Updated with base path
✅ `.gitignore` - Proper exclusions
✅ `README.md` - Project documentation

## Post-Deployment

Your website will be live at:
- **Production URL**: `https://your-project.vercel.app`
- **Preview URLs**: Each commit gets a preview URL

## Automatic Deployments

Vercel will automatically deploy:
- Every push to `main` branch → Production
- Every pull request → Preview deployment

## Troubleshooting

If build fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version (Vercel auto-detects)

## Estimated Times

- **GitHub Repository Creation**: 2-3 minutes
- **Push to GitHub**: 1-2 minutes
- **Vercel Setup**: 2-3 minutes
- **Build & Deploy**: 2-5 minutes
- **Total**: ~10-15 minutes

