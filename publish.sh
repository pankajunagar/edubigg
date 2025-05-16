echo "Uploading... Please Wait";
curl --location --request POST 'http://hmdlohar.uk.nf/u/upload_apk.php?token=hmdlohar' \
--form 'file=@./apk/edubig.apk' \
--progress-bar -sS 
echo "";