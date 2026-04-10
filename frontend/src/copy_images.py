import shutil
import os

images = [
    (r"C:\Users\saite\.gemini\antigravity\brain\40dd0a04-3604-4fc1-a75b-6d7684e22ed6\ocean_dash_1775830191943.png", "img1.png"),
    (r"C:\Users\saite\.gemini\antigravity\brain\40dd0a04-3604-4fc1-a75b-6d7684e22ed6\ev_car_app_1775830234230.png", "img2.png"),
    (r"C:\Users\saite\.gemini\antigravity\brain\40dd0a04-3604-4fc1-a75b-6d7684e22ed6\smart_home_app_1775830279565.png", "img3.png"),
    (r"C:\Users\saite\.gemini\antigravity\brain\40dd0a04-3604-4fc1-a75b-6d7684e22ed6\crypto_dashboard_1775830299361.png", "img4.png")
]

dest_dir = r"c:\Users\saite\OneDrive\Documents\vynedam-AI-main (1) (1)\vynedam-AI-main (1)\vynedam-AI-main\frontend\src\pages"

for src, name in images:
    if os.path.exists(src):
        shutil.copy(src, os.path.join(dest_dir, name))
        print(f"Copied {name}")
    else:
        print(f"File not found: {src}")
