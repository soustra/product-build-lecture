
# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. It's built using modern web technologies like Web Components, and it's designed to be visually appealing and easy to use.

## Implemented Features

*   Generates 6 unique random numbers between 1 and 45.
*   Displays the numbers with a nice animation.
*   Modern and responsive design.
*   Web component for lotto balls.
*   **Affiliate Inquiry Form (Formspree)**: A simple contact form for affiliate inquiries, integrated using Formspree for backend processing. It includes fields for name, email, and message, with basic styling to match the website's theme.
*   **Disqus Comments**: Integrated a Disqus comment section to allow users to leave comments and engage with the page content.
*   **Animal Face Test**: A feature that uses a Teachable Machine model to classify an uploaded image as either a "dog" or a "cat," displaying predictions.
*   **Google AdSense Integration**: Integrated Google AdSense by adding the `adsbygoogle.js` script to the `<head>` of `index.html` and creating an `ads.txt` file in the root directory.
*   **Multi-language Support (i18n)**: Implemented multi-language functionality using JSON translation files (`en.json`, `ko.json`, and 28 additional placeholder language files), `data-i18n` attributes for content, a language switcher in the navigation, and client-side language detection/persistence.
    *   **Default Language**: Set to English.
    *   **Additional Languages**: Added options for 28 more commonly used languages in the switcher. *Note: Placeholder translation files have been created for these languages; manual translation of content will be required.*

## AdSense High-Quality Site Optimization
*   **Essential Pages**: Created `about.html` and `privacy.html` with relevant content to build trust and meet AdSense requirements.
*   **Clear Navigation**: Implemented a global navigation menu across all pages (`index.html`, `about.html`, `privacy.html`) for improved user experience.
*   **Enriched Homepage Content**: Added descriptive text to the "Lotto Number Generator" and "Animal Face Test" sections on `index.html` to provide more valuable and unique content.

## Layout and Functionality Updates
*   **"Animal Face Test" Placement**: The "Animal Face Test" section has been moved to appear directly below the "Lotto Number Generator" for better logical flow.
*   **"Affiliate Inquiry" Relocation**: The "Affiliate Inquiry" section is now positioned at the very bottom of the page within a new `<footer>` element. The previous top-right link has been removed, and a new "Affiliate Inquiry" text link has been added within the footer to toggle the visibility of the form. The text for this link is now handled by the i18n system and defaults to English.

## Current Plan: Bug Fix & Design Overhaul

### Bug Fix
*   **main.js**: Fix a bug where lottery numbers were not displayed on the balls. This was due to the number attribute being read in the constructor before it was set. The fix involves moving the rendering logic to the `connectedCallback` lifecycle method of the web component, ensuring the component has been fully connected to the DOM and its attributes are available.

### Design Enhancements

*   **index.html**: Import a new, more playful font (`Paytone One`) from Google Fonts for the main title.
*   **style.css**:
    *   **Background**: Apply a vibrant linear-gradient to the body for a more energetic feel.
    *   **Texture**: Add a subtle noise texture over the background to give it a premium, tactile quality.
    *   **Shadows**: Enhance the `container` with a multi-layered `box-shadow` to create a sense of depth, making it look "lifted."
    *   **Button Glow**: Add a glowing `box-shadow` effect to the "Generate" button to make it more interactive.
    *   **Animations**: Replace the simple `pop-in` animation for the lotto balls with a more dynamic "drop-and-bounce" effect.
*   **main.js**: No major changes needed for the design enhancements, as they are primarily CSS-based. The bug fix will be the main change.
