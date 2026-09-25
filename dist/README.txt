1. Install Node.js 18+ (Node.js 20+ recommended).
2. Open this project folder in VS Code.
3. Run: npm install
4. Run: npm run dev
5. Open the localhost URL shown by Vite.

Before deployment:
- Put your real resume PDF at public/resume.pdf.
- Edit src/main.jsx and replace YOUR_EMAIL, YOUR_PHONE_NUMBER, LinkedIn and GitHub placeholders.
- Replace project GitHub/live-demo links.
- Replace the placeholder experience company/dates with your real details.
- For the contact form, connect Formspree, EmailJS, or your own backend.

Production build:
npm run build

Deploy the generated dist folder to Vercel, Netlify or AWS Amplify.
For Vercel/Netlify, the build command is "npm run build" and output directory is "dist".
