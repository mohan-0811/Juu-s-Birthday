#!/usr/bin/env python3
"""
Turn a folder of your own photos into img1.jpeg, img2.jpeg, ... for Sunflower OS.

  1. Put your photos (any names, .jpg/.jpeg/.png/.heic-converted etc.) in one folder.
  2. Run:   python3 tools/resize_photos.py  "C:/path/to/my photos"
  3. The resized, square-cropped files are written to ../images/ as img1.jpeg ...

Photos are sorted by filename, so name them 01.jpg, 02.jpg ... to control order.
Needs Pillow:   pip install pillow
"""
import sys, pathlib
from PIL import Image, ImageOps

SIZE = 1000          # final width/height in pixels (keeps the site fast)
MAX_PHOTOS = 12      # img1 ... img12
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff"}

def main():
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(1)
    src = pathlib.Path(sys.argv[1]).expanduser()
    out = pathlib.Path(__file__).resolve().parent.parent / "images"
    out.mkdir(exist_ok=True)
    files = sorted(p for p in src.iterdir() if p.suffix.lower() in EXTS)[:MAX_PHOTOS]
    if not files:
        print("No photos found in", src); sys.exit(1)
    for i, f in enumerate(files, 1):
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
        im = ImageOps.fit(im, (SIZE, SIZE), Image.LANCZOS, centering=(0.5, 0.4))
        dest = out / f"img{i}.jpeg"
        im.save(dest, "JPEG", quality=82, optimize=True, progressive=True)
        print(f"{f.name}  ->  images/{dest.name}  ({dest.stat().st_size // 1024} KB)")
    print(f"\nDone: {len(files)} photo(s). Refresh the website to see them.")
    if len(files) < MAX_PHOTOS:
        print(f"Tip: img{len(files)+1}..img{MAX_PHOTOS} still hold placeholders; add more photos any time.")

if __name__ == "__main__":
    main()
