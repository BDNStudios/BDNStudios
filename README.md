# One More Hit Press Kit

This repository contains a static GitHub Pages press kit for the Android game One More Hit.

## Preview Locally

Open `docs/onemorehit/index.html` directly in a browser. For testing behavior closer to GitHub Pages, you can optionally run a local server from the repository root:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/docs/onemorehit/`.

## Publish With GitHub Pages

1. Commit the repository.
2. In GitHub, open repository settings.
3. Go to Pages.
4. Select the `docs` folder as the publishing source.
5. Visit the deployed project URL and test the subpath, such as `https://username.github.io/repository-name/onemorehit/`.

GitHub Pages paths are case-sensitive. Keep references such as `images/Gameplay_DraftDecision.png` exactly matched to the filenames on disk.

## Placeholders To Replace

Update these near the top of `docs/onemorehit/index.html`:

- `REPLACE_WITH_PUBLIC_PRESS_KIT_URL`
- `BDN Studios`, if the public developer or studio name should be different
- `bdngamingstudios@gmail.com`, if the press contact should be different
- Optional website and support URL comments, if those public links become available

The Google Play link is set in `docs/onemorehit/index.html` as `https://play.google.com/store/apps/details?id=com.bdnstudios.onemorehit`.

## Media Updates

Screenshots are referenced from `docs/onemorehit/images/`. To add or replace screenshots, place the file in that folder and update the matching `<img>`, lightbox, and asset download links in `docs/onemorehit/index.html`.

Gameplay videos are referenced from `docs/onemorehit/videos/`. To add or replace videos, place the MP4 in that folder and update the `<source>` and download links in `docs/onemorehit/index.html`.

The complete downloadable press kit is linked at `docs/onemorehit/downloads/OneMoreHit_PressKit.zip`. To replace it, keep that filename or update both download buttons in `docs/onemorehit/index.html`.

Always test the deployed GitHub Pages project-subpath URL, not only local file paths, before sharing the press kit publicly.
