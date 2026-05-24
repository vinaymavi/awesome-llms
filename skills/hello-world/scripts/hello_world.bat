@echo off
where python >nul 2>nul
if %errorlevel%==0 (
  python "%~dp0hello_world.py"
) else (
  echo Hello, World!
)
