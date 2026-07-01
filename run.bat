@echo off
echo Building Tailwind CSS...
call npx tailwindcss -i ./input.css -o ./assets/css/style.min.css

echo.
echo Starting local server...
echo Your portfolio will open in your default browser shortly.
echo Press Ctrl+C in this window to stop the server.
echo.

start http://localhost:8000
python -m http.server 8000
