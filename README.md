初始(一次性) : eas build:configure

可切換 ios 或 android : eas build --platform android

提交，亦可切換 ios 或 android : eas submit -p android --latest 

如果要推上store，app.json裡的

android.versionCode 和 ios.buildNumber都要往上+1

expo.version 也要往上調整 ex : 1.0.1 => 1.0.2 
