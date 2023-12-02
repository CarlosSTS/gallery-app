import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

if (__DEV__) {
  const tron = Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    // .configure({host : ""})
    .useReactNative()
    .use(reactotronRedux())
    .connect()

  tron.clear();

  console.tron = tron;

}