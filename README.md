# Agentic Skills Showcase

A modern, minimalist website to showcase powerful AI agentic prompts with step-by-step GIF demonstrations of agents accomplishing complex development tasks autonomously.

![Preview](preview.png)

## Features

- **Modern Minimalist Design** - Clean, professional UI with smooth animations
- **Dark/Light Theme** - Automatic theme switching with localStorage persistence
- **Expandable Cards** - Click to reveal detailed multi-step GIF demonstrations
- **Step Navigation** - Navigate through workflow steps with progress indicators
- **Category Filtering** - Filter prompts by category (Refactoring, Development, Testing, etc.)
- **Responsive Layout** - Optimized for desktop viewing with mobile support
- **Keyboard Navigation** - Arrow keys for step navigation, Escape to close
- **Copy Prompts** - One-click copy functionality for all prompts
- **Results Display** - Showcase metrics and outcomes for each demonstration

## Project Structure

```
ai-agentic-skills-site/
├── index.html          # Main HTML structure with all cards
├── styles.css          # Complete styling with design system
├── script.js           # Interactive functionality
├── assets/             # (Create this folder)
│   ├── previews/       # Preview GIFs for collapsed cards
│   │   ├── refactor-preview.gif
│   │   ├── fullstack-preview.gif
│   │   └── ...
│   └── demos/          # Step-by-step GIFs for expanded views
│       ├── refactor-step1.gif
│       ├── refactor-step2.gif
│       └── ...
└── README.md           # This file
```

## Quick Start

### 1. Clone or Download

```bash
git clone <your-repo-url>
cd ai-agentic-skills-site
```

### 2. Add Your GIFs

Create the assets folder structure:

```bash
mkdir -p assets/previews assets/demos
```

Add your GIF recordings (recommended dimensions):
- **Preview GIFs**: 684×385px (16:9) for collapsed cards
- **Demo GIFs**: 1200×675px (16:9) for expanded views
- **File size**: Aim for 2-5MB per GIF
- **Duration**: 5-12 seconds per step

### 3. Open in Browser

Simply open `index.html` in any modern browser. No build process required!

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### 4. Deploy to GitHub Pages

```bash
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages in repository settings
# Set source to main branch / root
# Your site will be live at: https://username.github.io/repo-name
```

## Adding New Prompts

### Step 1: Prepare Your Content

1. **Record your GIFs**: Use tools like [Kap](https://getkap.co/), [LICEcap](https://www.cockos.com/licecap/), or [ScreenToGif](https://www.screentogif.com/)
2. **Optimize GIFs**: Use [ezgif.com](https://ezgif.com/optimize) to reduce file size
3. **Organize files**: Save to `assets/previews/` and `assets/demos/`

### Step 2: Add HTML Card

Copy one of the existing card templates in `index.html` and modify:

```html
<article class="skill-card" data-category="YOUR-CATEGORY" data-prompt-id="your-prompt-id">
    <!-- Collapsed View -->
    <div class="card-collapsed">
        <div class="card-header">
            <div class="card-icon">
                <!-- Your SVG icon -->
            </div>
            <div class="card-tags">
                <span class="tag">Tag1</span>
                <span class="tag">Tag2</span>
            </div>
        </div>
        <div class="preview-container">
            <img src="assets/previews/your-preview.gif" alt="Preview" class="preview-gif" loading="lazy">
        </div>
        <h2 class="card-title">Your Prompt Title</h2>
        <p class="card-description">Brief description of what this prompt does</p>
        <button class="btn-view-demo">View Complete Demo →</button>
    </div>

    <!-- Expanded View -->
    <div class="card-expanded" hidden>
        <!-- Copy the expanded structure from existing cards -->
        <!-- Update:
             - Title and tags
             - Prompt text
             - Number of steps (progress dots)
             - Step info for each step
             - Timeline items
             - Results metrics
        -->
    </div>
</article>
```

### Step 3: Update Categories

If adding a new category, add a filter button in the filter section:

```html
<button class="filter-btn" data-filter="new-category">New Category</button>
```

### Step 4: Configure Steps

For each step in your workflow:

1. **Add a progress dot**:
```html
<button class="dot" data-step="X" aria-label="Step X"></button>
```

2. **Add step info**:
```html
<div class="step-info" data-step="X">
    <div class="step-header">
        <span class="step-number">Step X</span>
        <h3 class="step-title">Step Title</h3>
    </div>
    <div class="callout">
        <div class="callout-icon">🎯</div>
        <ul class="callout-points">
            <li>Key point 1</li>
            <li>Key point 2</li>
            <li>Key point 3</li>
        </ul>
    </div>
</div>
```

3. **Add timeline item**:
```html
<button class="timeline-item" data-step="X">
    <span class="timeline-number">0X</span>
    <div class="timeline-content">
        <span class="timeline-step-title">Step Title</span>
        <span class="timeline-duration">0:00 - 0:08</span>
    </div>
</button>
```

4. **Add GIF** (if using actual GIF files):
```html
<img src="assets/demos/your-prompt-stepX.gif" alt="Step X" class="step-gif" data-step="X">
```

## Customization

### Colors & Theme

Edit CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #3B82F6;    /* Primary accent color */
    --accent-hover: #2563EB;      /* Hover state */
    --success: #10B981;           /* Success/completed color */
    /* ... more variables */
}
```

### Typography

Change fonts by updating the Google Fonts link in `index.html` and the CSS variable:

```css
:root {
    --font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Layout

Adjust container width and card dimensions:

```css
:root {
    --container-max: 1400px;      /* Max content width */
    --gif-width: 1200px;          /* Expanded GIF width */
    --gif-height: 675px;          /* Expanded GIF height */
}
```

### Hero Section

Edit the hero content in `index.html`:

```html
<h1 class="hero-title">
    <span class="gradient-text">Your Title</span>
    <span class="hero-subtitle-inline">Tagline</span>
</h1>
<p class="hero-subtitle">Your description</p>
```

## Recording Best Practices

### Tools
- **Mac**: [Kap](https://getkap.co/) - Free, high quality
- **Windows**: [ScreenToGif](https://www.screentogif.com/) - Free, built-in optimizer
- **Cross-platform**: [OBS Studio](https://obsproject.com/) - Professional, free

### Settings
- **Resolution**: 1920×1080 recording → resize to 1200×675
- **Frame rate**: 10-15 fps (sufficient for code demos)
- **Format**: Record as MP4/MOV → convert to GIF
- **Colors**: Reduce to 128 colors for smaller file size

### Optimization
```bash
# Using FFmpeg to create optimized GIF
ffmpeg -i input.mov -vf "fps=10,scale=1200:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif

# Using ezgif.com (easier)
1. Upload video/GIF
2. Resize to 1200px width
3. Optimize with lossy compression (30-50)
4. Reduce colors to 128
```

### Content Tips
- **Focus**: Show only the relevant code/terminal
- **Timing**: 5-12 seconds per step is ideal
- **Highlight**: Use cursor movement to guide attention
- **Loop**: Make sure GIFs loop smoothly
- **Text**: Ensure code is readable (minimum 14pt font)

## Features Breakdown

### Expandable Cards
- Click "View Complete Demo" to expand
- Click close button or press Escape to collapse
- Only one card can be expanded at a time
- Smooth scroll to keep card in view

### Step Navigation
- **Progress Dots**: Click to jump to any step
- **Next/Previous Buttons**: Sequential navigation
- **Timeline**: Click any timeline item to jump
- **Keyboard**: Left/Right arrows to navigate steps
- **Auto-update**: Counter, status icons, and highlights update automatically

### Category Filtering
- Click any category button to filter
- Cards fade in/out with animation
- "All Skills" shows everything

### Copy Prompts
- Click the copy icon in the prompt box
- Visual feedback with checkmark
- Automatically resets after 2 seconds

### Theme Toggle
- Click sun/moon icon in top right
- Preference saved in localStorage
- Smooth transitions between themes

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Features used:
- CSS Grid & Flexbox
- CSS Custom Properties
- IntersectionObserver (lazy loading)
- Clipboard API
- LocalStorage

## Performance

- No frameworks or dependencies
- Vanilla JS for maximum performance
- Lazy loading for GIFs
- CSS-only animations
- Optimized for 60fps

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AA)
- Focus indicators
- Screen reader friendly

## GitHub Pages Configuration

### Enable GitHub Pages

1. Go to repository Settings
2. Navigate to "Pages" section
3. Select source: `main` branch, `/ (root)`
4. Save
5. Site will be live at: `https://username.github.io/repo-name`

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain:
```bash
echo "yourdomain.com" > CNAME
```

2. Configure DNS:
```
Type: CNAME
Host: @
Value: username.github.io
```

## Troubleshooting

### GIFs not loading
- Check file paths are correct
- Ensure files are in the `assets/` directory
- Verify file names match exactly (case-sensitive)
- Check browser console for 404 errors

### Cards not expanding
- Check JavaScript console for errors
- Ensure `script.js` is loaded correctly
- Verify class names match between HTML and JS

### Theme not persisting
- Check if localStorage is enabled in browser
- Clear localStorage and try again: `localStorage.clear()`

### Slow performance
- Optimize GIF file sizes (aim for < 5MB)
- Reduce GIF dimensions if needed
- Enable lazy loading for all images
- Consider using WebP format with GIF fallback

## Future Enhancements

Potential additions:
- [ ] Video support (MP4 with GIF fallback)
- [ ] Search functionality
- [ ] Share buttons (Twitter, LinkedIn)
- [ ] Analytics integration
- [ ] PWA support with offline mode
- [ ] Dynamic content loading from JSON
- [ ] Fullscreen GIF viewer modal
- [ ] Side-by-side code/result view
- [ ] Export prompt collection

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this template for your own projects!

## Credits

- Design & Development: Built with AI assistance
- Icons: Inline SVGs (Feather Icons style)
- Fonts: Inter from Google Fonts
- Animations: Pure CSS

---

**Built to showcase the power of AI-driven autonomous development** 🚀
