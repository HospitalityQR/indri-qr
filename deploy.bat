@echo off
echo ========================================================
echo  LA INDRI QR - DEPLOY TO HOSPITALITYQR GITHUB
echo ========================================================
echo.
echo 1. Pushing main branch...
git push -u origin main
echo.
echo 2. Pushing gh-pages branch...
git push origin main:gh-pages
echo.
echo ========================================================
echo  Deployment complete!
echo  Visit: https://hospitalityqr.github.io/indri-qr/
echo ========================================================
pause
