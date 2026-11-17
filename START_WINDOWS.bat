@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Node.js belum terpasang. Unduh di https://nodejs.org
 pause
 exit /b 1
)
start "" "http://localhost:3000"
npm run dev
pause
