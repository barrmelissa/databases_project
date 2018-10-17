@echo off
SETLOCAL


echo %1
IF "%1" == "watch" GOTO :watch

GOTO :eof

:watch
    sass --watch "%~dp0src/stylesheets/sass/":"%~dp0src/stylesheets/css/"
    EXIT /B 0
