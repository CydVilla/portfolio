#!/usr/bin/env bash
#
# Prepare camera originals for the photography gallery.
#
#   ./scripts/add-photos.sh ~/Desktop/photography/IMG_1234.JPG sunset-pier
#   ./scripts/add-photos.sh ~/Desktop/new-batch          # slugs from filenames
#
# Writes two web-ready files into public/assets/photography/:
#   <slug>.jpg        1800px, used in the lightbox
#   <slug>-thumb.jpg   900px, used in the grid
#
# Both are re-encoded with -strip, which removes EXIF. That matters: camera
# files routinely carry GPS coordinates, and these are published publicly.
#
# After running, add an entry to src/data/photos.ts pointing at the new slug.
#
# Requires ImageMagick (brew install imagemagick).

set -euo pipefail

OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/assets/photography"

if ! command -v magick >/dev/null 2>&1; then
  echo "ImageMagick not found. Install it with: brew install imagemagick" >&2
  exit 1
fi

if [ $# -lt 1 ]; then
  echo "Usage: $0 <image-or-directory> [slug]" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"

process() {
  local src="$1"
  local slug="$2"
  magick "$src" -auto-orient -strip -resize 1800x1800 -quality 82 \
    -interlace Plane -colorspace sRGB "$OUT_DIR/$slug.jpg"
  magick "$src" -auto-orient -strip -resize 900x900 -quality 80 \
    -interlace Plane -colorspace sRGB "$OUT_DIR/$slug-thumb.jpg"
  echo "$slug.jpg + $slug-thumb.jpg"
}

slugify() {
  basename "$1" | sed 's/\.[^.]*$//' | tr '[:upper:] ._' '[:lower:]---' \
    | sed 's/--*/-/g; s/^-//; s/-$//'
}

if [ -d "$1" ]; then
  shopt -s nullglob nocaseglob
  for src in "$1"/*.jpg "$1"/*.jpeg "$1"/*.png "$1"/*.heic; do
    process "$src" "$(slugify "$src")"
  done
else
  process "$1" "${2:-$(slugify "$1")}"
fi

echo
echo "Done. Now add the entries to src/data/photos.ts."
