# 🍽️ La Indri Cafe & Restaurant - Ultra-Luxury QR & Table Standee Suite

Ek complete, isolated aur ultra-premium QR code, mobile landing page aur printable table standee ecosystem jo **La Indri Cafe & Restaurant** ke liye specially design kiya gaya hai (28 Paarroo architecture par based aur elevated design ke saath).

---

## 🏛️ Project Structure

```
Indri QR/
├── config.js                      # ⚙️ Central Restaurant Settings (Links, Name, Phone, Address)
├── index.html                     # 📱 Ultra-Luxury Mobile Landing Page
├── standee.html                   # 🖨️ Browser Printable Web Standee (Ctrl + P Ready)
├── generate_qr.py                 # 🐍 300 DPI Standee & QR Generator Script
├── new_restaurant.py              # ➕ Naya restaurant 5 second me clone karne ka script
├── logo.png                       # 💎 High-Res Clean Transparent Vector Logo (2500x2500)
├── logo_with_gold_rim.png         # 👑 Ultra-Luxury 24k Gold Bevel Rim Medallion Logo
├── qr_code.png                    # 🎯 Primary QR Code (Scan to Connect)
├── qr_google_direct.png           # ⭐ 100% Direct Google 5-Star Review Static QR
├── qr_instagram_direct.png        # 📸 100% Direct Instagram Static QR
├── qr_landing_page.png            # 🌐 Direct Landing Page QR
├── table_standee_printable.png    # 🏆 300 DPI Single Standee (Print Ready)
├── standee_dual_direct_static.png # 🏆 300 DPI Dual Standee (Google Left + Insta Right)
├── standee_google_direct.png      # 🏆 300 DPI Standee (Only Google 5-Star Reviews)
└── standee_instagram_direct.png   # 🏆 300 DPI Standee (Only Instagram Follow)
```

---

## 🎯 Standee Options (Print Whichever You Want!)

Folder ke andar 4 ready-to-print 300 DPI luxury standees hain:

1. **`standee_dual_direct_static.png` (Dual QR Standee - Side by Side)**:
   - **Left QR:** Direct Google 5-Star Review
   - **Right QR:** Direct Instagram Profile (`@la_indri_restroandcafe`)
   - Zero hosting required! Offline static scan direct opens Google & Insta!

2. **`table_standee_printable.png` (Single QR Standee)**:
   - Single QR jo luxury landing page kholta hai jahan customer Google review de sakta hai, Instagram follow kar sakta hai, aur call kar sakta hai.

3. **`standee_google_direct.png` (Google Review Dedicated Standee)**:
   - Standee par sirf Google 5-Star Review ka direct QR code.

4. **`standee_instagram_direct.png` (Instagram Dedicated Standee)**:
   - Standee par sirf Instagram Follow ka direct QR code.

---

## 🖨️ Standee Print Kaise Karein?

### Option 1: Direct Image Print (Recommended - Best Quality)
1. `table_standee_printable.png` ya `standee_dual_direct_static.png` ko open karein.
2. Direct print karein (300 DPI calibrated, A4/A5 acrylic standee holder me perfect fit).

### Option 2: Browser Print (Ctrl + P)
1. `standee.html` ko Chrome ya Edge browser me open karein.
2. Top bar me **Print Standee (Ctrl + P)** button click karein.
3. Destination me **Save as PDF** ya apna printer select karein aur print karein!

---

## ⚙️ Details Change Kaise Karein?

Agar aapko Google link, Instagram link, phone number ya address change karna ho:
1. `config.js` open karein.
2. Jo detail change karni ho use update karein aur save karein.
3. Command run karein:
   ```bash
   python generate_qr.py
   ```
4. Bas! Naye QR codes aur 300 DPI standees automatically regenerate ho jayenge!

---

## 🔗 Configured Details for La Indri:
- **Restaurant Name:** La Indri Cafe & Restaurant
- **Tagline:** A Symphony of Flavours • Cafe & Restaurant
- **Google Review Link:** `https://share.google/MbI90MD7WSUXWWWM7`
- **Instagram Link:** `https://www.instagram.com/la_indri_restroandcafe?stkn=a29ra3VqeTJyc2dz`
- **Instagram Handle:** `@la_indri_restroandcafe`
- **Phone / Reservation:** `99933 38676` (`+91 99933 38676`)
- **Address:** Gram Pigdamber, Rau-Pithampur Bypass (AB Road), Mhow, Indore
