This is a repro for the react native issue at https://github.com/facebook/react-native/issues/18440

This is made up of a react-native app created with create-react-native-app and an express server that returns an invalid response.

In order to run this you have to start both the express server and the react native app.

For the server:
```
cd server && yarn && yarn start
```

For the react native app:
```
yarn && yarn run ios && yarn start
```

You should see a redbox that looks like this:

![image](https://user-images.githubusercontent.com/272280/37572993-eb4cea72-2b0a-11e8-906c-30f024a145fa.png)
