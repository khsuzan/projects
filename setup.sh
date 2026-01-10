#!/usr/bin/env bash
# eSort Product Page - Installation & Setup Guide

echo "🚀 eSort Product Page Setup"
echo "============================"
echo ""

# Step 1: Install Tailwind Dependencies
echo "📦 Step 1: Installing Tailwind CSS and dependencies..."
pnpm install -D tailwindcss postcss autoprefixer @tailwindcss/forms

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Error installing dependencies. Please run:"
    echo "   pnpm install -D tailwindcss postcss autoprefixer @tailwindcss/forms"
    exit 1
fi

echo ""
echo "✨ Setup Complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Choose which page you want to use (see SWITCH_PAGES.md)"
echo "2. Run: pnpm dev"
echo "3. Visit: http://localhost:5173"
echo ""
echo "📚 Documentation:"
echo "   - ESORT_PAGE_GUIDE.md - Complete feature guide"
echo "   - SWITCH_PAGES.md - How to switch between page versions"
echo "   - DESIGN_SYSTEM.md - Design colors and styles"
echo "   - PRODUCT_PAGE_SETUP.md - Customization tips"
echo ""
echo "🎨 Available Pages:"
echo "   - ProductPage.tsx  → Interactive feature tabs"
echo "   - LandingPage.tsx  → Full marketing page"
echo "   - HeroPage.tsx     → Bold hero-focused design"
echo ""
echo "Happy coding! 🎉"
