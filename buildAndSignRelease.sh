printf  "Select Option. 1) Build->Sign-> Install\n2)Sign->Install\n3)Install:\n"
read CH



#Build APK
if [ $CH == "1" ]
then
	ionic cordova build android --release
fi

# Sign APK
if [ $CH == "1" -o  $CH == "2" ]
then
	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore edubigg.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk edubigg
fi

echo "Copying to apk/..."
mkdir -p "apk/"
cp "platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk" "apk/edubig.apk"


if [ $CH == "1" -o  $CH == "2" -o  $CH == "3" ]
then

	echo "Installing..."
	adb install platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
fi
