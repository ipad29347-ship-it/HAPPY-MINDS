# Happy Minds Home Tuition

Modern, fast, single-page scrolling website for a home tuition service in Lucknow.

## Features
- **SEO Optimized**: Meta tags, JSON-LD schema, and semantic HTML.
- **AI Assistant**: Powered by OpenRouter (Gemini 2.5 Flash).
- **Contact Form**: Integrated with Formspree.
- **Responsive Design**: Fully mobile-friendly with Tailwind CSS.
- **Copy-to-Clipboard**: Clickable phone number for easy contact.

## Deployment to GitHub Pages

This project is configured for automatic deployment via GitHub Actions.

### Setup Instructions

1.  **Create a Repository**: Create a new repository on GitHub.
2.  **Add Secrets**: Go to your repository settings > **Secrets and variables** > **Actions**. Add the following repository secrets:
    -   `VITE_FORMSPREE_URL`: Your Formspree endpoint URL.
    -   `VITE_OPENROUTER_API_KEY`: Your OpenRouter API key.
3.  **Push Code**: Push your code to the `main` branch.
4.  **Enable Pages**: Go to **Settings** > **Pages**. Under **Build and deployment**, set the **Source** to **GitHub Actions**.

The site will be automatically built and deployed whenever you push to the `main` branch.

## Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Create a `.env` file based on `.env.example` and add your keys.
3.  Start the development server:
    ```bash
    npm run dev
    ```
