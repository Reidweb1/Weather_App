# Sample Weather App

This is a simple application meant to fetch, process, and display data from https://openweathermap.org/.
The application is built with React Native "v0.61.5".

## Build and Run

This project requires the machine to have both Xcode and Android studio.

*IMPORTANT*

This project will not be able to run without the `AppId.ts` file. this file is not checked in to the github repository to
protect the Open Weather Map access token. This file must be located at the following path (relative to this project's local
root directory): `./src/appId/AppId.ts`

### iOS

Run the following commands from the root directory to run the application on iOS.

```
npm install
```

```
npm run ios
```

### Android

Run the following commands from the root directory to run the application on Android.

Note: You'll need to have an Android emulator running before the `npm run android` command.

```
npm install
```

```
npm run android
```

## Test Suite

The test files are located under the `./__tests__` directory. They can be run with the following commands.

```
npm run test
```


