import React from 'react';
import {AppRouter} from './src/app/router';
import { Provider } from 'react-redux';
import configureStore from './src/data/store';
import {LogBox, Platform} from 'react-native';
import AppStateManager from './src/data/utils/AppStateManager';
import * as BackgroundService from './src/data/service/backgroundService';
import NetworkStateManager from './src/data/utils/NetworkStateManager';
import { PunchAttendanceServiceImpl } from './src/data/domain/implements/PunchAttendanceServiceImpl';
import * as commonUtil from './src/data/utils/commonUtils';
import realmInstance from './src/data/db/realm/realmInstance';

LogBox.ignoreLogs(['Animated: useNativeDriver was not specified. This is a required option and must be explicitly set to true or false']);
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
LogBox.ignoreLogs(['Cant perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.']);
LogBox.ignoreAllLogs();
const store = configureStore();

const App = () => {
  if(Platform.OS =='android'){
  commonUtil.requestAllPermissions()
  // BackgroundService.startBackgroundService();
  // navigator.geolocation = require('@react-native-community/geolocation');
  }
  BackgroundService.startBackgroundService();
  if(realmInstance.path != null){
    if(commonUtil.hasOrgLocTrackPermission()){
   const punchDetail = PunchAttendanceServiceImpl.getLastPunchRecord();
  
  if(punchDetail != undefined){
  if(punchDetail.atStatus === 'IN'){
    
    commonUtil.stopLocationService();
    commonUtil.stopLocationService();
    commonUtil.startLocationServices();
  }else{
    commonUtil.stopLocationService();
  }
}
 }
}
  return (
    <Provider store={store}> 
      <AppRouter/>
      <AppStateManager/>
      <NetworkStateManager/>
    </Provider>
  );
}
export default App;