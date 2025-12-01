@echo off
setlocal

:: ================================
:: Variables
:: ================================
set BUCKET_NAME=fwdays-aws-test-2-bucket-via-aws-cli-12
set HTML_FILE=index.html
set CSS_FILE=styles.css
set REGION=eu-central-1

echo Creating bucket: %BUCKET_NAME%
aws s3api create-bucket --bucket %BUCKET_NAME% --region %REGION% --create-bucket-configuration LocationConstraint=eu-central-1

echo Uploading HTML and CSS files...
aws s3 cp "%HTML_FILE%" s3://%BUCKET_NAME%/index.html
aws s3 cp "%CSS_FILE%" s3://%BUCKET_NAME%/styles.css

echo Enabling static website hosting...
aws s3 website s3://%BUCKET_NAME%/ --index-document index.html

echo Disabling Public Access Block...
aws s3api put-public-access-block --bucket %BUCKET_NAME% ^
  --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false

echo Creating policy.json file...

(
  echo {
  echo   "Version": "2012-10-17",
  echo   "Statement": [
  echo     {
  echo       "Sid": "PublicReadGetObject",
  echo       "Effect": "Allow",
  echo       "Principal": "*",
  echo       "Action": "s3:GetObject",
  echo       "Resource": "arn:aws:s3:::%BUCKET_NAME%/*"
  echo     }
  echo   ]
  echo }
) > policy.json

echo Applying bucket policy...
aws s3api put-bucket-policy --bucket %BUCKET_NAME% --policy file://policy.json

echo Cleaning up...
del policy.json

echo.
echo ============================================
echo   Bucket created and website is ready!
echo   URL:
echo   http://%BUCKET_NAME%.s3-website-%REGION%.amazonaws.com/
echo ============================================
echo.

endlocal
pause
