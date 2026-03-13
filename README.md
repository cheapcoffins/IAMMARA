# Cheap Coffins — I AM MARA (Private EPK)

Static one-page private EPK site for sharing an advance stream with labels, media, promoters, and industry contacts.

## Folder Structure

- `index.html` — page layout and editable content sections
- `style.css` — visual styling (dark editorial theme)
- `script.js` — password gate logic + one-track-at-a-time audio playback
- `images/` — cover artwork and other image assets
- `audio/` — album MP3 files

## Where to Change the Password

Open `script.js` and update:

- `const EPK_PASSWORD = "cheapcoffins-private";`

This is a client-side gate for casual protection only.

## Where to Change Text Content

Open `index.html` and update the clearly labeled comment blocks:

- band name
- album title
- album blurb
- overview metadata
- track titles
- track notes
- contact information

## Replace the Cover Image

1. Put your final artwork in `images/`
2. Use `images/cover.jpg` (or update the image path in `index.html`)

## Replace MP3 Files

1. Place your audio files in `audio/`
2. Replace the placeholder files/paths:
   - `audio/track01.mp3` ... `audio/track09.mp3`

## Replace YouTube Links

In `index.html`, find the **Video** section and replace each `iframe src` URL with your desired embed links.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. In GitHub: **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your preferred branch), folder `/ (root)`
4. Save and wait for deployment.
5. GitHub will provide your Pages URL.
