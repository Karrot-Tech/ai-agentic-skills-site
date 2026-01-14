# Assets Folder

This folder contains all media assets for the Agentic Skills Showcase.

## Folder Structure

```
assets/
├── previews/       # Preview GIFs for collapsed cards (684×385px)
│   ├── refactor-preview.gif
│   ├── fullstack-preview.gif
│   ├── bug-investigation-preview.gif
│   └── ...
└── demos/          # Step-by-step demonstration GIFs (1200×675px)
    ├── refactor-step1.gif
    ├── refactor-step2.gif
    ├── refactor-step3.gif
    └── ...
```

## Adding Your GIFs

### Preview GIFs (Collapsed Cards)
- **Location**: `assets/previews/`
- **Dimensions**: 684×385px (16:9 aspect ratio)
- **File Size**: Aim for 2-4MB
- **Duration**: 5-8 seconds, looping
- **Purpose**: Quick preview shown when card is collapsed

**Naming Convention**:
```
[prompt-id]-preview.gif
Example: refactor-duplicates-preview.gif
```

### Demo GIFs (Expanded Steps)
- **Location**: `assets/demos/`
- **Dimensions**: 1200×675px (16:9 aspect ratio)
- **File Size**: Aim for 3-5MB per step
- **Duration**: 8-12 seconds per step
- **Purpose**: Detailed step-by-step workflow demonstration

**Naming Convention**:
```
[prompt-id]-step[number].gif
Example: refactor-duplicates-step1.gif
```

## Recording Tips

### Setup
1. **Screen Resolution**: Record at 1920×1080
2. **Font Size**: Minimum 14pt for code
3. **Theme**: Use high contrast (dark theme recommended)
4. **Clean Up**: Hide personal info, notifications

### Recording
1. **Focus**: Show only relevant windows/panels
2. **Timing**:
   - Preview: 5-8 seconds
   - Steps: 8-12 seconds each
3. **Actions**:
   - Move cursor deliberately
   - Highlight important parts
   - Show clear before/after states

### Export Settings
- **Frame Rate**: 10-15 fps
- **Colors**: 128-256 colors
- **Compression**: Lossy (30-50% quality reduction okay)
- **Format**: GIF (WebP fallback optional)

## Optimization

### Using ezgif.com (Easiest)
1. Go to https://ezgif.com/optimize
2. Upload your GIF
3. Use these settings:
   - Optimization level: 35-50
   - Reduce colors to 128
   - Remove duplicate frames
4. Download optimized GIF

### Using FFmpeg (Command Line)
```bash
# Convert video to optimized GIF
ffmpeg -i input.mov \
  -vf "fps=10,scale=1200:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  -loop 0 \
  output.gif

# For preview GIFs (smaller)
ffmpeg -i input.mov \
  -vf "fps=10,scale=684:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  -loop 0 \
  preview.gif
```

### Using Gifski (Best Quality)
```bash
# Install: brew install gifski

# Convert video to GIF
gifski -o output.gif --fps 10 --quality 80 --width 1200 input.mov
```

## Linking GIFs in HTML

### Preview GIF (Collapsed Card)
```html
<div class="preview-container">
    <img src="assets/previews/your-prompt-preview.gif"
         alt="Preview"
         class="preview-gif"
         loading="lazy">
</div>
```

### Demo GIFs (Expanded Steps)
```html
<div class="gif-container">
    <img src="assets/demos/your-prompt-step1.gif"
         alt="Step 1"
         class="step-gif"
         data-step="1">
    <img src="assets/demos/your-prompt-step2.gif"
         alt="Step 2"
         class="step-gif"
         data-step="2">
    <!-- Add more steps... -->
</div>
```

## File Size Guidelines

| Type | Dimensions | Target Size | Max Size |
|------|-----------|-------------|----------|
| Preview | 684×385 | 2-4 MB | 5 MB |
| Step Demo | 1200×675 | 3-5 MB | 8 MB |

**Total page weight goal**: < 50MB with all assets

## Alternative: Using Placeholder Images

If you don't have GIFs yet, the site uses placeholder graphics. To replace:

1. Record your demo
2. Optimize the GIF
3. Add to appropriate folder
4. Uncomment the `<img>` tag in `index.html`
5. Remove or comment out the placeholder `<div>`

## Example Workflow

1. **Record** your agentic workflow
2. **Split** into logical steps (5-step max recommended)
3. **Export** each step as separate GIF
4. **Optimize** all GIFs to target sizes
5. **Name** following convention
6. **Add** to appropriate folders
7. **Update** HTML with file paths
8. **Test** in browser
9. **Commit** and push to GitHub

## Need Help?

Refer to the main README.md for detailed instructions and troubleshooting.
