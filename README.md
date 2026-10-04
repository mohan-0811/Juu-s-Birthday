# 🌻 Sunflower OS — Birthday Gift for Juu

A personal birthday website that looks and behaves like a tiny operating system, with a hidden
"Project: Birthday" mission game that unlocks a final surprise.

## How to open it
Just double-click **index.html** (works in Chrome, Edge, Safari, Firefox — on laptop and phone).
No installation, no internet connection required (fonts load in the background if online).

To share it with her, upload the whole folder to any free static host
(Netlify Drop, GitHub Pages, Cloudflare Pages) and send her the link.

## Your photos
All photos live in the **images/** folder and are named:

    img1.jpeg  img2.jpeg  img3.jpeg  ...  img12.jpeg

The folder currently holds numbered sunflower placeholders. **Replace them with your real photos
using exactly the same file names** and the site updates automatically. Where each one appears:

| File          | Used in                                                         |
|---------------|-----------------------------------------------------------------|
| img1.jpeg     | Welcome card avatar · "The Beginning" memory · Gallery #1 · Memory Match |
| img2.jpeg     | "The Chaos" memory · Gallery #2 · Memory Match                  |
| img3.jpeg     | "The Food Crimes" memory · Gallery #3 · Memory Match            |
| img4.jpeg     | "The Quiet Moments" memory · Gallery #4 · Memory Match          |
| img5.jpeg     | "The Adventures" memory · Gallery #5 · Memory Match             |
| img6.jpeg     | "The Celebrations" memory · Gallery #6 · Memory Match           |
| img7–img12    | Gallery #7–12 · floating photos in the final birthday screen    |

(img1–img6 are also the six pairs in the Memory Match mission, so pick six clearly different photos.)

**Tips**
- Use `.jpeg` as the extension (lower-case). To use `.jpg` instead, change `imageExt` in `js/app.js`.
- Square-ish photos look best; they are auto-cropped to fill the frame.
- Big phone photos (4–10 MB) make the site slow. Keep each under ~500 KB, or let the helper do it:
  `python3 tools/resize_photos.py "path/to/your/photos"` (needs `pip install pillow`) —
  it resizes, crops and names them img1.jpeg, img2.jpeg … for you.
- If a photo is missing, a sunflower is shown instead — nothing breaks.

## Personalise the text
Open **js/app.js**. The top of the file (section "PERSONALISE HERE") contains plain, editable lists:

- `CONFIG` — her name (`Juu`), the final birthday message, the secret code.
- `PHOTOS` — gallery captions.
- `MEMORIES` — the memory cards and their stories.
- `QUIZ` — the sibling quiz questions and the funny replies.
- `TRACKS` — the playlist (each song opens a YouTube search).
- `MESSAGES` — the chat in the Messages app.

## What's inside
- Boot screen → desktop with draggable, minimisable, maximisable windows and a dock
- **Memories**, **Gallery** (with full-screen viewer, arrow keys and next/previous buttons), **Messages** (type a reply!),
  **My Playlist**, **Sister AI** (animated analysis), **Garden**, **Terminal** (try `help`)
- **Project: Birthday** — four missions:
  1. Memory Match (flip cards to pair the photos)
  2. Decode the sunflower cipher
  3. Find all 8 hidden sunflowers in the garden (there's a hint button)
  4. The Sibling Intelligence quiz
  → then the final animated birthday reveal
- Progress is saved in the browser. Type `reset` in the terminal to start over.
- Fully responsive (phone, tablet, laptop).

## Secret commands (Terminal)
`help` · `status` · `hint` · `ls` · `open garden` · `whoami` · `love` · `birthday` · `reset`
