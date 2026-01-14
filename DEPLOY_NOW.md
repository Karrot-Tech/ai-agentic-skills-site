# 🚀 Deploy Your Site NOW - 2 Minute Guide

Your site is **100% ready** and all code is pushed to GitHub! Follow these simple steps to deploy.

---

## ⚡ FASTEST Method (2 clicks, 1 minute)

### Step 1: Enable GitHub Actions for Pages

**Click this link** → **[Enable GitHub Pages](https://github.com/Karrot-Tech/ai-agentic-skills-site/settings/pages)**

On the Pages settings:
- Under **"Build and deployment"**
- **Source**: Select **"GitHub Actions"** from dropdown
- Click **Save** (if button appears)

### Step 2: Trigger Deployment

**Click this link** → **[Run Workflow](https://github.com/Karrot-Tech/ai-agentic-skills-site/actions/workflows/deploy.yml)**

On the workflow page:
- Click the **"Run workflow"** button (top right)
- Select branch: **`claude/audit-dependencies-mke88bwvw6ybglff-Z2jwQ`**
- Click green **"Run workflow"** button

### Step 3: Watch it Deploy (30 seconds)

The workflow runs automatically. After ~30 seconds, your site is live at:

**🌐 https://karrot-tech.github.io/ai-agentic-skills-site/**

---

## 📋 Alternative: Create Main Branch First

If you prefer deploying from `main` branch:

### Option A: Via GitHub UI (Easiest)

1. **[Go to repository](https://github.com/Karrot-Tech/ai-agentic-skills-site)**

2. **Create main branch**:
   - Click branch dropdown (currently shows `claude/audit-dependencies...`)
   - Type: `main`
   - Click: **"Create branch: main from 'claude/audit-dependencies...'"**

3. **[Enable GitHub Pages](https://github.com/Karrot-Tech/ai-agentic-skills-site/settings/pages)**:
   - Source: **GitHub Actions**

4. Done! Workflow runs automatically, site deploys to:
   - https://karrot-tech.github.io/ai-agentic-skills-site/

### Option B: Create Pull Request

1. **[Create new PR](https://github.com/Karrot-Tech/ai-agentic-skills-site/compare/main...claude/audit-dependencies-mke88bwvw6ybglff-Z2jwQ)**
   - This link auto-fills the branch comparison
   - If `main` doesn't exist, GitHub will create it

2. **Fill in PR details**:
   - Title: "Deploy agentic skills showcase site"
   - Description: (optional)
   - Click **"Create pull request"**

3. **Merge the PR**:
   - Click **"Merge pull request"**
   - Click **"Confirm merge"**

4. **[Enable GitHub Pages](https://github.com/Karrot-Tech/ai-agentic-skills-site/settings/pages)**:
   - Source: **GitHub Actions**

5. Site deploys automatically!

---

## 🔍 Verify Deployment

### Check Workflow Status

**[View Actions](https://github.com/Karrot-Tech/ai-agentic-skills-site/actions)**

You'll see:
- ✅ Green checkmark = Deployed successfully
- 🟡 Yellow circle = Deploying now (wait ~30s)
- ❌ Red X = Error (check logs)

### Find Your Site URL

After deployment completes:
1. Click on the completed workflow run
2. Look for **"deploy"** step
3. The deployment URL is shown in the logs

Or just visit: **https://karrot-tech.github.io/ai-agentic-skills-site/**

---

## ❓ Quick Troubleshooting

### "I don't see the workflow in Actions"

- Make sure you're looking at: https://github.com/Karrot-Tech/ai-agentic-skills-site/actions
- Refresh the page
- The workflow file is at: `.github/workflows/deploy.yml`

### "GitHub Actions is not an option in Pages settings"

- The workflow file must exist in your repository first
- Check that `.github/workflows/deploy.yml` is present
- Try creating the main branch first

### "Workflow failed"

- Click on the failed run to see logs
- Common issues:
  - Pages not enabled in repository settings
  - Workflow permissions need adjustment

- Fix: Go to **Settings** → **Actions** → **General**
  - Scroll to **"Workflow permissions"**
  - Select: **"Read and write permissions"**
  - Check: **"Allow GitHub Actions to create and approve pull requests"**
  - Click **Save**

### "Site shows 404"

- Wait 1-2 minutes after deployment
- Clear browser cache (Ctrl+Shift+R)
- Verify URL: https://karrot-tech.github.io/ai-agentic-skills-site/
- Check that deployment completed successfully

---

## 📦 What You're Deploying

Your site includes:

✅ **Complete working demo site** with:
- Modern minimalist UI
- Dark/Light theme toggle
- 4 interactive prompt showcase cards
- 7 realistic SVG mockups
- Expandable cards with step navigation
- Category filtering
- Copy-to-clipboard functionality
- Smooth animations
- Fully responsive design

✅ **GitHub Actions workflow** for automatic deployments

✅ **Zero dependencies** - pure vanilla JavaScript

✅ **Lightweight** - ~100KB total

---

## 🎯 After Deployment

Once your site is live:

1. **Share it**:
   ```
   https://karrot-tech.github.io/ai-agentic-skills-site/
   ```

2. **Test all features**:
   - Click "View Complete Demo" on first card
   - Navigate through steps with arrows
   - Toggle dark/light theme
   - Try category filters

3. **Customize**:
   - Replace SVG placeholders with real GIFs
   - Add more prompt examples
   - Update branding/content
   - See `README.md` for instructions

4. **Future updates**:
   - Just push to `main` branch
   - Site redeploys automatically
   - Takes ~1 minute per deployment

---

## 🆘 Still Need Help?

**Quick Links**:
- **[Repository](https://github.com/Karrot-Tech/ai-agentic-skills-site)**
- **[Actions Tab](https://github.com/Karrot-Tech/ai-agentic-skills-site/actions)**
- **[Pages Settings](https://github.com/Karrot-Tech/ai-agentic-skills-site/settings/pages)**
- **[Create PR](https://github.com/Karrot-Tech/ai-agentic-skills-site/compare)**

**Documentation**:
- `README.md` - Complete usage guide
- `GITHUB_PAGES_SETUP.md` - Detailed setup instructions
- `assets/README.md` - Asset guidelines

---

## ✨ Pro Tips

- **Bookmark your site**: Add to favorites for easy access
- **Monitor deployments**: Star the Actions tab
- **Test locally first**: Open `index.html` in browser before pushing
- **Auto-deploy**: Every push to `main` triggers deployment
- **Manual deploy**: Always available via Actions → Run workflow

---

**Ready? Click the links above and your site will be live in 1 minute! 🚀**
