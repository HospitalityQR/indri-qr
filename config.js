// =============================================================================
// 🍽️ LA INDRI CAFE & RESTAURANT - CONFIGURATION SETTINGS
// =============================================================================
// Sirf yahan details badlein — Poora webpage, standee aur links automatically update ho jayenge!
// Is restaurant ka kisi dusre restaurant se koi lena-dena nahi hai (100% Isolated).
// =============================================================================

var RESTAURANT_CONFIG = {
    // 1. Restaurant Basic Details
    restaurantId: "la-indri",
    restaurantName: "La Indri",
    subtitle: "Cafe & Restaurant",
    tagline: "A Symphony of Flavours • Cafe & Restaurant",
    logoImage: "logo_with_gold_rim.png",
    cleanLogoImage: "logo.png",

    // 2. Standee & QR Mode:
    // "dual_link"   -> Single QR opens the Landing Page (both Google & Instagram buttons)
    // "google_only" -> Single QR opens Google Review directly (Static)
    // "insta_only"  -> Single QR opens Instagram directly (Static)
    qrMode: "dual_link",

    // 3. Standee Premium Text
    standeeHeading: "SCAN TO CONNECT",
    standeeSubheading: "Rate Us on Google • Follow Us on Instagram",

    // 4. Google Review Link & Luxury Text
    googleReviewLink: "https://share.google/MbI90MD7WSUXWWWM7",
    googleRatingText: "Rate Us on Google",
    googleRatingSubtext: "Share your 5-Star experience on Google",

    // 5. Instagram Link & Profile Handle
    instagramLink: "https://www.instagram.com/la_indri_restroandcafe?stkn=a29ra3VqeTJyc2dz",
    instagramUsername: "@la_indri_restroandcafe",
    instagramActionText: "Follow Us on Instagram",
    instagramSubtext: "@la_indri_restroandcafe • Food, Vibe & Reels",

    // 6. Contact & Location Details
    phoneNumber: "9993338676",
    phoneDisplay: "+91 99933 38676",
    phoneButtonText: "Call / Reservation: 99933 38676",
    address: "La Indri Cafe & Restaurant, Rau-Pithampur Bypass (AB Road), Mhow, Indore",
    shortAddress: "Gram Pigdamber, Rau-Pithampur Bypass, Mhow, Indore",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=La+Indri+Cafe+and+Restaurant+Gram+Pigdamber+Mhow+Indore",

    // 7. Footer Message (Italic Gold)
    footerThanks: "Thank You For Visiting La Indri ✨",
    footerCity: "Crafted with passion in Indore",

    // 8. Hosted Landing Page URL on HospitalityQR / GitHub Pages
    landingPageUrl: "https://hospitalityqr.github.io/indri-qr/"
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RESTAURANT_CONFIG;
}
