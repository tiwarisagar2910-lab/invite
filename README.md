# Jyoti & Vaibhav — Public Wedding Invitation

This is the **separate public guest-facing invitation** for Friday 4 and Saturday 5 December 2026 in Nashik. It is independent of the internal `JV` wedding dashboard. Do not add private guest lists, budgets, or vendor details to this public repository.

**Official guest link once published:** https://tinyurl.com/jyotisangvaibhav

## Current deployment requirements

The site code (`index.html`, `styles.css`, `app.js`, `config.js`) and the Pages deployment workflow are committed. To finish the initial publishing setup:

1. Extract the `Jyoti_Vaibhav_Invitation_Assets.zip` package from ChatGPT. Upload its **`assets/` directory and its seven image files** to the root of this repository. Do not upload the ZIP itself.
2. Open **Settings → Pages** in this repository; under **Build and deployment**, set **Source → GitHub Actions**. The existing workflow at `.github/workflows/deploy-pages.yml` will run on the next commit or can be rerun from **Actions**.
3. Verify all images, schedule, family names, mobile layout, and Maps QR at https://tiwarisagar2910-lab.github.io/invite/
4. Verify TinyURL points to that URL before circulating the guest invitation.

## Celebration schedule

- Friday 4 December — Carnival, 4:00 PM
- Friday 4 December — Engagement & Sangeet, 8:00 PM
- Saturday 5 December — Pheras, 12:00–5:00 PM
- Saturday 5 December — Reception, 8:00 PM onward, Swaminarayan Banquet Hall, Panchavati, Nashik

Reception directions: https://maps.app.goo.gl/tUULMt9mxJoBoh8c6

## Future edits

Update **`config.js`** for dates, times, family names, and venue information. Edit `index.html` and `styles.css` only for design changes. Changes committed to `main` will trigger the configured Pages deployment.

Currently the venues for Carnival, Engagement & Sangeet, and Pheras are intentionally listed as *coming soon*, rather than being guessed.

## Privacy

Do not link this public site to the internal `/JV/` wedding operations dashboard. A client-side password like `Shashi` is not adequate protection for sensitive information on public GitHub Pages.
