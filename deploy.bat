@echo off
echo ========================================================
echo  LA INDRI QR - INSTANT ONE-CLICK LIVE DEPLOY
echo ========================================================
echo.
echo [1/3] Adding changes...
git add .
echo [2/3] Committing changes...
git commit -m "update"
echo [3/3] Pushing live to main and gh-pages...
git push
echo.
echo ========================================================
echo  Done! Live site updated in seconds!
echo  URL: https://hospitalityqr.github.io/indri-qr/
echo ========================================================
pause
