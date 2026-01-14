# GitHub Pages Setup Guide

## ✅ What's Ready

I've created a complete GitHub Actions workflow that will automatically deploy your site to GitHub Pages. The workflow is already pushed to your repository on branch `claude/audit-dependencies-mke88bwvw6ybglff-Z2jwQ`.

## 🚀 Quick Setup (3 Steps)

### Option A: Deploy from Claude Branch (Fastest - 2 minutes)

1. **Go to your repository on GitHub**:
   ```
   https://github.com/Karrot-Tech/ai-agentic-skills-site
   ```

2. **Enable GitHub Pages**:
   - Click **Settings** → **Pages** (left sidebar)
   - Under **Source**, select: **GitHub Actions**
   - That's it! No branch selection needed.

3. **Trigger deployment**:
   - Go to **Actions** tab
   - Click on **"Deploy to GitHub Pages"** workflow
   - Click **"Run workflow"** → Select `claude/audit-dependencies-mke88bwvw6ybglff-Z2jwQ` → **Run**

4. **View your live site** (after ~1 minute):
   ```
   https://karrot-tech.github.io/ai-agentic-skills-site/
   ```

---

### Option B: Merge to Main First (Recommended for Production)

If you prefer using the standard `main` branch:

#### Step 1: Create Main Branch

**Via GitHub UI** (Easiest):
1. Go to your repository on GitHub
2. Click the branch dropdown (currently shows `claude/audit-dependencies...`)
3. Type `main` in the search box
4. Click **"Create branch: main from claude/audit-dependencies..."**

**Or via Command Line** (if you have permissions):
```bash
# Clone the repo if you haven't
git clone https://github.com/Karrot-Tech/ai-agentic-skills-site.git
cd ai-agentic-skills-site

# Create and push main branch
git checkout claude/audit-dependencies-mke88bwvw6ybglff-Z2jwQ
git checkout -b main
git push -u origin main
```

#### Step 2: Enable GitHub Actions for Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select: **GitHub Actions**
3. Save (if there's a save button)

#### Step 3: Workflow Runs Automatically

- The workflow will trigger automatically on the next push to `main`
- Or manually trigger it:
  1. Go to **Actions** tab
  2. Select **"Deploy to GitHub Pages"**
  3. Click **"Run workflow"** → Select `main` → **Run**

#### Step 4: View Your Site

After ~1 minute, your site will be live at:
```
https://karrot-tech.github.io/ai-agentic-skills-site/
```

---

### Option C: Create Pull Request (Best Practice)

1. **Create PR via GitHub UI**:
   - Go to repository
   - Click **"Pull requests"** → **"New pull request"**
   - Base: `main` (create if doesn't exist)
   - Compare: `claude/audit-dependencies-mke88bwvw6ybglff-Z2jwQ`
   - Click **"Create pull request"**
   - Add title: "Initial site deployment with mock data"
   - Click **"Create pull request"**

2. **Review and Merge**:
   - Review the changes
   - Click **"Merge pull request"**
   - Confirm merge

3. **Enable GitHub Actions** (if not already):
   - Settings → Pages → Source: **GitHub Actions**

4. **Site deploys automatically** after merge

---

## 📋 What the Workflow Does

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. ✅ Trigger on every push to `main` (or manual trigger)
2. ✅ Checkout your code
3. ✅ Configure GitHub Pages
4. ✅ Upload the entire site as an artifact
5. ✅ Deploy to GitHub Pages
6. ✅ Provide the deployment URL in the action logs

No build step needed - it's a static site!

---

## 🔧 Troubleshooting

### "403 Error" when pushing to main

This is expected - the repository may have branch protection rules. Use Option A (deploy from claude branch) or create main branch via GitHub UI.

### GitHub Actions workflow not appearing

1. Make sure you're looking at the **Actions** tab on GitHub
2. Refresh the page
3. The workflow file should be visible at `.github/workflows/deploy.yml`

### Site not deploying

1. Check the **Actions** tab for errors
2. Make sure **Pages** is set to **"GitHub Actions"** source (not "Deploy from a branch")
3. Verify the workflow ran successfully (green checkmark)
4. Check the workflow logs for the deployment URL

### 404 Error on site

1. Wait 1-2 minutes after deployment completes
2. Clear your browser cache
3. Try accessing: `https://karrot-tech.github.io/ai-agentic-skills-site/`
4. Check if `.nojekyll` file exists in the repository root

---

## 🎯 Repository Structure

```
ai-agentic-skills-site/
├── .github/
│   └── workflows/
│       └── deploy.yml       ← GitHub Actions workflow
├── .nojekyll                ← Bypass Jekyll processing
├── assets/
│   ├── demos/               ← Demo step SVGs
│   └── previews/            ← Preview SVGs
├── index.html               ← Main page
├── styles.css               ← Styles
├── script.js                ← Interactive functionality
└── README.md                ← Documentation
```

---

## 📊 Expected Deployment Timeline

| Step | Time |
|------|------|
| Push to main / Trigger workflow | 0s |
| Workflow starts | ~5s |
| Checkout & setup | ~10s |
| Upload artifact | ~5s |
| Deploy to Pages | ~30s |
| Site live | ~1 min total |

---

## 🌐 Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the repository root:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. Configure DNS:
   - Add CNAME record pointing to `karrot-tech.github.io`
   - Or A records pointing to GitHub Pages IPs

3. Update in **Settings** → **Pages** → **Custom domain**

---

## 📞 Need Help?

- **Check deployment status**: Repository → Actions tab
- **View deployment logs**: Click on the workflow run
- **Deployment URL**: Available in the workflow output

---

## ✨ Next Steps After Deployment

Once your site is live:

1. **Share the URL**: `https://karrot-tech.github.io/ai-agentic-skills-site/`
2. **Replace SVG placeholders** with real GIF recordings
3. **Add more agentic prompt examples**
4. **Customize branding and content**
5. **Set up analytics** (optional)

Enjoy your agentic skills showcase! 🚀
