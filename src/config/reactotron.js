import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

if(__DEV__) {
  const tron = Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({host : "192.168.0.110"})
  .useReactNative()
  .use(reactotronRedux())
  .connect()
 
  tron.clear();

  console.tron = tron;
 
}