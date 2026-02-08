
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
*   **Animal Face Test**: A feature that uses a Teachable Machine model to classify live webcam input as either a "dog" or a "cat," displaying real-time predictions.

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
