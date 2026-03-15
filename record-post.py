"""
Records weather-briefing-post.html as a high-quality 1080x1080 MP4.
Captures individual frames as PNG screenshots, then assembles with ffmpeg.
Usage: python record-post.py
Output: weather-briefing-post.mp4 on Desktop
"""

from playwright.sync_api import sync_playwright
import os, shutil, subprocess

HTML_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "weather-briefing-post.html")
FRAMES_DIR = os.path.join(os.path.expanduser("~"), "Desktop", "_frames")
OUTPUT_PATH = os.path.join(os.path.expanduser("~"), "Desktop", "weather-briefing-post.mp4")
FFMPEG = r"C:\Users\LRAus\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.0.1-full_build\bin\ffmpeg.exe"

FPS = 30
DURATION_SEC = 30
WIDTH = 1080
HEIGHT = 1080

def main():
    total_frames = FPS * DURATION_SEC
    frame_interval_ms = 1000 / FPS  # ~33.3ms per frame

    # Clean up / create frames dir
    if os.path.exists(FRAMES_DIR):
        shutil.rmtree(FRAMES_DIR)
    os.makedirs(FRAMES_DIR)

    print(f"Capturing {total_frames} frames at {FPS}fps, {WIDTH}x{HEIGHT}...")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": WIDTH, "height": HEIGHT},
            device_scale_factor=2,  # 2x for crisp rendering
        )
        page = context.new_page()
        page.goto(f"file:///{HTML_PATH.replace(os.sep, '/')}")

        # Wait for fonts + images to load
        page.wait_for_timeout(3000)

        for i in range(total_frames):
            frame_path = os.path.join(FRAMES_DIR, f"frame_{i:05d}.png")
            page.screenshot(path=frame_path, clip={"x": 0, "y": 0, "width": WIDTH, "height": HEIGHT})

            if i % FPS == 0:
                print(f"  {i}/{total_frames} frames ({i // FPS}s / {DURATION_SEC}s)")

            # Advance time for animations
            page.wait_for_timeout(int(frame_interval_ms))

        context.close()
        browser.close()

    print(f"\nAll {total_frames} frames captured. Encoding MP4...")

    # Encode with ffmpeg - maximum quality
    if os.path.exists(OUTPUT_PATH):
        os.remove(OUTPUT_PATH)

    cmd = [
        FFMPEG,
        "-y",
        "-framerate", str(FPS),
        "-i", os.path.join(FRAMES_DIR, "frame_%05d.png"),
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-crf", "12",        # very high quality
        "-preset", "slow",
        "-s", f"{WIDTH}x{HEIGHT}",  # ensure exact output size
        OUTPUT_PATH
    ]

    subprocess.run(cmd, check=True)

    # Clean up frames
    shutil.rmtree(FRAMES_DIR)

    size_mb = os.path.getsize(OUTPUT_PATH) / (1024 * 1024)
    print(f"\nDone! Video saved: {OUTPUT_PATH}")
    print(f"  {WIDTH}x{HEIGHT}, {FPS}fps, {DURATION_SEC}s, {size_mb:.1f} MB")

if __name__ == "__main__":
    main()
