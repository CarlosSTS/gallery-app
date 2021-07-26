import AsyncStorage from "@react-native-async-storage/async-storage";
// import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'gallery',
    storage:AsyncStorage,
    whitelist: ['user'],
  }, 
  reducers 
  );
  return persistedReducer;
}