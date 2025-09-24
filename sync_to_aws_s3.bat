@echo off
echo ========================================
echo    SYNCING TO AWS S3 - MONORS & PIC2CAL
echo ========================================
echo.

echo 🗑️  Deleting all files from S3 buckets...
aws s3 rm s3://monors.ca/ --recursive
aws s3 rm s3://pic2cal.monors.ca/ --recursive

echo.
echo 📤 Uploading Monors website...
aws s3 sync monors/ s3://monors.ca/ --delete

echo.
echo 📤 Uploading Pic2Cal website...
aws s3 sync pic2cal/ s3://pic2cal.monors.ca/ --delete

echo.
echo ✅ Upload complete!
echo.
echo 🌐 Your websites are live at:
echo Monors: https://monors.ca.s3-website-us-east-1.amazonaws.com/
echo Pic2Cal: https://pic2cal.monors.ca.s3-website-us-east-1.amazonaws.com/
echo.
pause
