import os
import glob

old_favicon = "ChatGPT Image 26 ago 2025, 14_11_32.png"
new_favicon = "favicon.png"

# Rename file if exists
if os.path.exists(old_favicon):
    os.rename(old_favicon, new_favicon)
    print(f"Renamed '{old_favicon}' to '{new_favicon}'")

# Update all HTML files
html_files = glob.glob("*.html")
for file in html_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = content.replace(old_favicon, new_favicon)

    if new_content != content:
        with open(file, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {file}")
