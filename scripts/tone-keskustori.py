"""Prepares the pale archive photograph of Keskustori as a near-neutral, natural-looking image (run once; output is committed)."""
import sys
from PIL import Image, ImageOps

im = Image.open(sys.argv[1]).convert('L')  # original 686b1a…jpg from the existing site
im.thumbnail((2400, 2400))
im = ImageOps.autocontrast(im, cutoff=1.0)
im = im.point(lambda v: int(255 * ((v / 255) ** 1.5)))
ImageOps.colorize(im, black='#0b1526', white='#eef2f8', mid='#6f7f99').save(
    'src/assets/photo/keskustori.jpg', quality=84, optimize=True
)
