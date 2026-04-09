import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Whatsapp icon
    content = re.sub(r'(\.whatsapp-float\s*\{[^}]*?)border-radius:\s*0;', r'\1border-radius: 50%;', content)
    
    # 2. Center footer
    # Find footer block specifically: footer { background-color: ... text-align: left;
    content = re.sub(r'(footer\s*\{[^}]*?)text-align:\s*left;', r'\1text-align: center;', content)
    
    # Make footer-logo centered explicitly if block
    content = re.sub(r'(\.footer-logo\s*\{[^}]*?)margin-bottom:\s*20px;', r'\1margin: 0 auto 20px auto;\n            display: block;', content)
    
    # 3. Resize member images
    # Replace max-width: 340px with 240px
    content = re.sub(r'(\.member-img[^}]*?)max-width:\s*340px;', r'\1max-width: 240px;', content)
    # Replace their left margin with auto margin
    content = re.sub(r'(\.member-img[^}]*?)margin:\s*0\s*0\s*15px\s*0;', r'\1margin: 0 auto 15px auto;', content)
    
    # Do the same for hover classes if they copy properties
    content = re.sub(r'max-width:\s*340px;', r'max-width: 240px;', content) # catch-all just in case
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Applied UI fixes across all HTML files.")
