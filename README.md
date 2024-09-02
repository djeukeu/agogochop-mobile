## Requirements

- Get the `.env.development` for the project and add to the root directory of the project
- Get the `sentry.properties file` for the project and add it to `android/` folder
- Get the `sentry.properties file` for the project and add it to `ios/` folder
- Get the `google-services.json file` for the project and add it to `android/app/` folder
- Get the `GoogleService-Info.plist file` for the project and add it to `ios/marketti/` folder
- Install the correct node version as indicated in `.nvmrc` file

## GuideLine

- `Install packages, using:` yarn
- `Install pods for ios, using:` cd ios/ && pod install
- `Run the android version, using:` yarn android:dev
- `Run the ios version, using:` yarn ios:dev

## Commands

- `Run the Android version (without any environment), using: :` yarn android
- `Run the Android version (in development environment), using: :` yarn android:dev
- `Run the Android version (in staging environment), using: :` yarn android:stage
- `Run the iOS version (without any environment), using: :` yarn ios
- `Run the iOS version (in development environment), using: :` yarn ios:dev
- `Run the iOS version (in staging environment), using: :` yarn ios:stage
- `Start the metro server :` yarn start
- `Launch the test runner using:` yarn test
- `To test linting:` yarn lint
- `To test and fix automaticaly linting errors:` yarn lint:fix
- `To automaticaly prettify all files:` yarn pretty
- `Build the Android beta app using:` yarn android:beta
- `Build the iOS beta app using:` yarn ios:beta
