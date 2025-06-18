# Csanád Budai - Multi-Page Personal Website (Refactored)

This is a professional multi-page personal website for Csanád Budai, featuring a **dynamically loaded sidebar** and **organized image structure**, inspired by mesh.html typography and academic design principles.

## Key Improvements in This Version

### 🔧 Dynamic Sidebar Loading
- **Single Definition**: Sidebar content is defined only once in `sidebar.html`
- **JavaScript Loading**: All pages dynamically load the sidebar via `script.js`
- **Easy Maintenance**: Add/remove navigation items by editing only `sidebar.html`
- **Consistent Appearance**: Sidebar appears identically across all pages

### 📁 Organized File Structure
- **Images Folder**: All images are organized in the `img/` directory
- **Clean Paths**: Updated all image references to use `img/` prefix
- **Better Organization**: Cleaner project structure with separated assets

## Features

- **Multi-Page Structure**: Separate HTML files for each section
- **Dynamic Sidebar**: Loaded once, appears everywhere consistently
- **Responsive Design**: Adapts to desktop, tablet, and mobile devices
- **Monospace Font**: Consolas font family matching mesh.html aesthetic
- **Active Page Highlighting**: Current page highlighted in navigation
- **Professional Content**: Comprehensive information across organized pages
- **Organized Assets**: All images properly structured in dedicated folder

## File Structure

```
csanad-webpage/
├── index.html              # About page (default/home)
├── cv.html                 # CV page
├── research.html           # Research page
├── olympiad.html           # Olympiad page
├── teaching.html           # Teaching page
├── contact.html            # Contact page
├── sidebar.html            # Sidebar template (loaded dynamically)
├── styles.css              # CSS for multi-page layout with sidebar
├── script.js               # JavaScript for dynamic sidebar and navigation
├── budai_csanad_cv.pdf     # Downloadable CV
├── img/                    # Images directory
│   ├── f1tenth_car.png     # F1Tenth research image
│   ├── physics_olympiad_team.jpg # Physics olympiad team image
│   ├── tutoring_session.jpg # Teaching section image
│   ├── profile_placeholder.jpg # Profile photo placeholder
│   └── [other images...]   # Additional images
└── README.md              # This file
```

## How the Dynamic Sidebar Works

### 1. Sidebar Template (`sidebar.html`)
Contains only the sidebar content:
```html
<div class="sidebar-header">
    <h1><a href="index.html">Csanád Budai</a></h1>
    <p class="subtitle">Robotics Engineering Student & Researcher</p>
</div>

<ul class="nav-links">
    <li><a href="index.html">About</a></li>
    <li><a href="cv.html">CV</a></li>
    <!-- ... other navigation items ... -->
</ul>
```

### 2. HTML Pages Structure
Each page has a placeholder for the sidebar:
```html
<nav class="sidebar" id="sidebar-placeholder"></nav>
```

### 3. JavaScript Loading (`script.js`)
Dynamically loads sidebar content:
```javascript
fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-placeholder').innerHTML = data;
        highlightCurrentPage();
    });
```

## Benefits of This Structure

### 🔧 **Maintainability**
- **Single Source**: Edit navigation in one place (`sidebar.html`)
- **Automatic Updates**: Changes appear across all pages instantly
- **Easy Additions**: Add new pages by updating only the sidebar template

### 📱 **Functionality**
- **Consistent Behavior**: Sidebar works identically on all pages
- **Active Highlighting**: Current page automatically highlighted
- **Responsive Design**: Mobile navigation handled uniformly

### 🎨 **Organization**
- **Clean Structure**: Images separated into dedicated folder
- **Logical Paths**: All image references use `img/` prefix
- **Professional Layout**: Maintains academic aesthetic throughout

## Deployment Instructions for GitHub Pages

1. **Create a new repository** on GitHub (e.g., `budaic.github.io`)

2. **Upload all files** from this directory to your repository

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

4. **Your website will be available** at: `https://budaic.github.io`

## Customization Guide

### Adding New Navigation Items
1. Edit `sidebar.html`
2. Add new `<li><a href="newpage.html">New Page</a></li>`
3. Create corresponding HTML file
4. Changes appear automatically across all pages

### Updating Images
1. Add new images to the `img/` folder
2. Reference them using `img/filename.jpg` in HTML
3. Update CSS if needed for styling

### Modifying Content
- **Personal Information**: Edit content in respective HTML files
- **Profile Photo**: Replace `img/profile_placeholder.jpg` with your actual photo
- **CV**: Replace `budai_csanad_cv.pdf` with your updated CV

## Technical Details

### Dynamic Loading Features
- **Fetch API**: Modern JavaScript for loading sidebar content
- **Error Handling**: Fallback sidebar creation if loading fails
- **Active Page Detection**: Automatic highlighting based on current URL
- **Mobile Support**: Responsive navigation with toggle functionality

### Image Organization
- **Centralized Location**: All images in `img/` directory
- **Consistent Paths**: All references use `img/` prefix
- **Error Handling**: Fallback for missing images
- **Optimized Loading**: Efficient image loading and display

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fetch API Support**: Requires modern browser (IE11+ with polyfill)

## Mesh.html Inspiration

This design maintains the mesh.html aesthetic:
- **Monospace Typography**: Consolas font family throughout
- **Simple Layout**: Clean, academic structure
- **Minimal Styling**: Focus on content over decoration
- **Professional Appearance**: Suitable for academic/research purposes

## Performance Benefits

- **Reduced Redundancy**: Sidebar defined once, not repeated
- **Faster Updates**: Single file changes propagate everywhere
- **Clean Code**: Separated concerns and organized structure
- **Efficient Loading**: Optimized JavaScript and CSS

---

**Created**: June 2025  
**Version**: 4.0 (Refactored with Dynamic Sidebar & Organized Images)  
**License**: Personal Use  
**Architecture**: Multi-page with dynamic components

