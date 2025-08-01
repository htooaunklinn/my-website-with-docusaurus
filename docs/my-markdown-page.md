---
sidebar_label: 'Day 1'
sidebar_position: 5
---

# My Documents

This page contains useful command line shortcuts, utilities, and tips for productivity and development.

## ⛓️ Command Line Shortcuts

- **Ctrl + L**: Clear screen  
- **Ctrl + C**: Abort current command  
- **Ctrl + U**: Delete entire line  
- **Ctrl + K**: Delete from cursor to end of line  
- **Ctrl + A**: Move to beginning of line  
- **Ctrl + E**: Move to end of line  
- **Ctrl + D**: Exit the shell  

---

## ⚙️ Common Utilities

- **List all files (including hidden):**  
    `ls -l -a`
- **Change directory:**  
    `cd [directory]`
- **Remove directory and contents:**  
    `rm -rf [directory]`
- **Create new directory:**  
    `mkdir [directory]`
- **Copy files:**  
    `cp [source] [destination]`
- **Move files:**  
    `mv [source] [destination]`
- **Print working directory:**  
    `pwd`
- **Display current user:**  
    `whoami`
- **Network configuration:**  
    `ifconfig`

---

## 📥 YouTube Downloader & Audio Conversion

- **Find video/audio format ID:**  
    `yt-dlp -F "[URL]"`
- **Download using format ID:**  
    `yt-dlp -f [ID] "[URL]"`

**Install FFmpeg (Homebrew):**  
`brew install ffmpeg`

**Extract high-quality audio:**  
`yt-dlp -f 140 -x --audio-format mp3 --audio-quality 0 "[URL]"`

---

## 🧪 Fun Terminal Commands

### 🐄 Cowsay + Fortune

- **Install:**  
    `brew install cowsay fortune`
- **Usage:**  
    `fortune`  
    `fortune | cowsay`  
    _Tip: Chain `fortune | cowsay` for random quotes spoken by a cow!_

### 🧍 Fake Identity Generator

- **Install:**  
    `brew install rig`
- **Generate fake identity:**  
    `rig`  
    _Great for testing fake names in dev environments._

---

## 🐘 PHP for macOS

- **Download:** [MAMP Official Website](https://www.mamp.info/)
- **Default file location:** `/Applications/MAMP/htdocs/index.php`
- **Localhost URL:** `localhost:8888`

---

## 🗣️ Text to Speech

- **Speak text:**  
    `say "Hello, World!"`
- **Save as AIFF:**  
    `say "Hello, World!" -o hello.aiff`
- **Convert AIFF to MP3:**  
    `ffmpeg -i hello.aiff hello.mp3`

---

## 🌐 Free Hosting

- [InfinityFree](https://www.infinityfree.com/)

---

## 🪟 Netsh for Windows

- **View saved WiFi password:**  
    ```
    netsh wlan show profile name="[WiFi_name]" key=clear
    ```
    _Displays detailed info about the specified WiFi network, including its password._