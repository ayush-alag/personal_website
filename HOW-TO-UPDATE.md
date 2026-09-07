# Updating your site

## Biography and links

Edit the paragraphs in `src/App.tsx`. Update your name, email, and social links in the `personal` object in `src/content.ts`.

The current copy uses past experience rather than asserting a current employer or student status. Update it when you want to feature what you are doing now.

## Work, writing, and news

Each section in `src/content.ts` contains an `entries` array. Add entries in the order you want them displayed. Each entry has:

- `title`: the linked heading.
- `description`: a short sentence explaining it.
- `href`: the full destination URL.
- `meta`: a short label or date, such as `Essay · September 2026`.

Use an empty array to hide a section. Adding its first entry automatically reveals the section and its navigation link; you do not need to change the page component. Entries currently open an external destination. Writing and news can link to your published articles or announcements; this site does not include a publishing editor or article pages yet.

## Photo and appearance

Replace `public/profile.jpg` to change the portrait. The crop and responsive sizes are set in `.portrait` in `src/index.css`. The image has reserved dimensions to avoid layout jumps.

The color variables are at the top of `src/index.css`. Links have visible keyboard focus styles, and motion respects the visitor's reduced-motion setting.

## Preview and publish

Run `npm run dev` to preview, then `npm run build` before publishing. The `codex/personal-site-redesign` branch is separate from the live `main` branch. Pushing to `main` triggers the existing GitHub Pages deployment; changes on the redesign branch do not update the public website.
