import React from 'react';
import ReactDOM from 'react-dom';
import {createReactApp} from '@tarojs/runtime';
import {createRouter} from '@tarojs/router';
import Taro, * as apis from '@tarojs/taro';
import PropTypes from 'prop-types';

const transformApi = () => {
  // Taro.* API 是 `babel-plugin-transform-taroapi` 生成的，测试时需主动关联
  // TODO 改为 `babel-plugin-transform-taroapi` 去生成？
  // from '@tarojs/taro-h5/dist/taroApis.js';
  const names = new Set(['EditorContext', 'addCard', 'addFileToFavorites', 'addInterceptor', 'addPhoneCalendar', 'addPhoneContact', 'addPhoneRepeatCalendar', 'addVideoToFavorites', 'advancedGeneralIdentify', 'animalClassify', 'arrayBufferToBase64', 'authPrivateMessage', 'authorize', 'authorizeForMiniProgram', 'base64ToArrayBuffer', 'canIUse', 'canvasGetImageData', 'canvasPutImageData', 'canvasToTempFilePath', 'carClassify', 'checkIsOpenAccessibility', 'checkIsSoterEnrolledInDevice', 'checkIsSupportFacialRecognition', 'checkIsSupportSoterAuthentication', 'checkSession', 'chooseAddress', 'chooseContact', 'chooseImage', 'chooseInvoice', 'chooseInvoiceTitle', 'chooseLicensePlate', 'chooseLocation', 'chooseMedia', 'chooseMessageFile', 'choosePoi', 'chooseVideo', 'clearStorage', 'clearStorageSync', 'closeBLEConnection', 'closeBluetoothAdapter', 'closeSocket', 'cloud', 'compressImage', 'compressVideo', 'connectSocket', 'connectWifi', 'createAnimation', 'createAudioContext', 'createBLEConnection', 'createBLEPeripheralServer', 'createBufferURL', 'createCameraContext', 'createCanvasContext', 'createInnerAudioContext', 'createIntersectionObserver', 'createInterstitialAd', 'createLivePlayerContext', 'createLivePusherContext', 'createMapContext', 'createMediaAudioPlayer', 'createMediaContainer', 'createMediaRecorder', 'createOffscreenCanvas', 'createRewardedVideoAd', 'createSelectorQuery', 'createTCPSocket', 'createUDPSocket', 'createVKSession', 'createVideoContext', 'createVideoDecoder', 'createWebAudioContext', 'createWorker', 'disableAlertBeforeUnload', 'dishClassify', 'downloadFile', 'drawCanvas', 'enableAlertBeforeUnload', 'exitMiniProgram', 'exitVoIPChat', 'faceDetect', 'faceVerifyForPay', 'getAccountInfoSync', 'getApp', 'getAvailableAudioSources', 'getBLEDeviceCharacteristics', 'getBLEDeviceRSSI', 'getBLEDeviceServices', 'getBLEMTU', 'getBackgroundAudioManager', 'getBackgroundAudioPlayerState', 'getBackgroundFetchData', 'getBackgroundFetchToken', 'getBatteryInfo', 'getBatteryInfoSync', 'getBeacons', 'getBluetoothAdapterState', 'getBluetoothDevices', 'getChannelsLiveInfo', 'getChannelsLiveNoticeInfo', 'getClipboardData', 'getConnectedBluetoothDevices', 'getConnectedWifi', 'getCurrentInstance', 'getCurrentPages', 'getEnterOptionsSync', 'getExptInfoSync', 'getExtConfig', 'getExtConfigSync', 'getFileInfo', 'getFileSystemManager', 'getGroupEnterInfo', 'getHCEState', 'getImageInfo', 'getLaunchOptionsSync', 'getLocalIPAddress', 'getLocation', 'getLogManager', 'getMenuButtonBoundingClientRect', 'getNFCAdapter', 'getNetworkType', 'getOpenUserInfo', 'getPerformance', 'getRandomValues', 'getRealtimeLogManager', 'getRecorderManager', 'getSavedFileInfo', 'getSavedFileList', 'getScreenBrightness', 'getSelectedTextRange', 'getSetting', 'getShareInfo', 'getStorage', 'getStorageInfo', 'getStorageInfoSync', 'getStorageSync', 'getSwanId', 'getSystemInfo', 'getSystemInfoSync', 'getUpdateManager', 'getUserCryptoManager', 'getUserInfo', 'getUserProfile', 'getVideoInfo', 'getWeRunData', 'getWifiList', 'hideHomeButton', 'hideKeyboard', 'hideLoading', 'hideNavigationBarLoading', 'hideShareMenu', 'hideTabBar', 'hideTabBarRedDot', 'hideToast', 'imageAudit', 'initFaceDetect', 'initTabBarApis', 'isBluetoothDevicePaired', 'joinVoIPChat', 'loadFontFace', 'login', 'logoClassify', 'makeBluetoothPair', 'makePhoneCall', 'navigateBack', 'navigateBackMiniProgram', 'navigateBackSmartProgram', 'navigateTo', 'navigateToMiniProgram', 'navigateToSmartGameProgram', 'navigateToSmartProgram', 'nextTick', 'notifyBLECharacteristicValueChange', 'objectDetectIdentify', 'ocrBankCard', 'ocrDrivingLicense', 'ocrIdCard', 'ocrVehicleLicense', 'offAccelerometerChange', 'offAppHide', 'offAppShow', 'offAudioInterruptionBegin', 'offAudioInterruptionEnd', 'offBLECharacteristicValueChange', 'offBLEConnectionStateChange', 'offBLEMTUChange', 'offBLEPeripheralConnectionStateChanged', 'offBeaconServiceChange', 'offBeaconUpdate', 'offBluetoothAdapterStateChange', 'offBluetoothDeviceFound', 'offCompassChange', 'offCopyUrl', 'offDeviceMotionChange', 'offError', 'offGetWifiList', 'offGyroscopeChange', 'offHCEMessage', 'offKeyboardHeightChange', 'offLocalServiceDiscoveryStop', 'offLocalServiceFound', 'offLocalServiceLost', 'offLocalServiceResolveFail', 'offLocationChange', 'offLocationChangeError', 'offMemoryWarning', 'offNetworkStatusChange', 'offPageNotFound', 'offThemeChange', 'offUnhandledRejection', 'offUserCaptureScreen', 'offVoIPChatInterrupted', 'offVoIPChatMembersChanged', 'offVoIPChatStateChanged', 'offVoIPVideoMembersChanged', 'offWifiConnected', 'offWindowResize', 'onAccelerometerChange', 'onAppHide', 'onAppShow', 'onAudioInterruptionBegin', 'onAudioInterruptionEnd', 'onBLECharacteristicValueChange', 'onBLEConnectionStateChange', 'onBLEMTUChange', 'onBLEPeripheralConnectionStateChanged', 'onBackgroundAudioPause', 'onBackgroundAudioPlay', 'onBackgroundAudioStop', 'onBackgroundFetchData', 'onBeaconServiceChange', 'onBeaconUpdate', 'onBluetoothAdapterStateChange', 'onBluetoothDeviceFound', 'onCompassChange', 'onCopyUrl', 'onDeviceMotionChange', 'onError', 'onGetWifiList', 'onGyroscopeChange', 'onHCEMessage', 'onKeyboardHeightChange', 'onLocalServiceDiscoveryStop', 'onLocalServiceFound', 'onLocalServiceLost', 'onLocalServiceResolveFail', 'onLocationChange', 'onLocationChangeError', 'onMemoryWarning', 'onNetworkStatusChange', 'onPageNotFound', 'onSocketClose', 'onSocketError', 'onSocketMessage', 'onSocketOpen', 'onThemeChange', 'onUnhandledRejection', 'onUserCaptureScreen', 'onVoIPChatInterrupted', 'onVoIPChatMembersChanged', 'onVoIPChatSpeakersChanged', 'onVoIPChatStateChanged', 'onVoIPVideoMembersChanged', 'onWifiConnected', 'onWindowResize', 'openBluetoothAdapter', 'openCard', 'openChannelsActivity', 'openChannelsEvent', 'openChannelsLive', 'openCustomerServiceChat', 'openDocument', 'openEmbeddedMiniProgram', 'openLocation', 'openSetting', 'openVideoEditor', 'pageScrollTo', 'pauseBackgroundAudio', 'pauseVoice', 'plantClassify', 'playBackgroundAudio', 'playVoice', 'pluginLogin', 'preloadSubPackage', 'previewImage', 'previewMedia', 'reLaunch', 'readBLECharacteristicValue', 'redirectTo', 'removeSavedFile', 'removeStorage', 'removeStorageSync', 'removeTabBarBadge', 'reportAnalytics', 'reportEvent', 'reportMonitor', 'reportPerformance', 'request', 'requestOrderPayment', 'requestPayment', 'requestPolymerPayment', 'requestSubscribeMessage', 'reserveChannelsLive', 'revokeBufferURL', 'saveFile', 'saveFileToDisk', 'saveImageToPhotosAlbum', 'saveVideoToPhotosAlbum', 'scanCode', 'seekBackgroundAudio', 'sendHCEMessage', 'sendSocketMessage', 'setBLEMTU', 'setBackgroundColor', 'setBackgroundFetchToken', 'setBackgroundTextStyle', 'setClipboardData', 'setEnable1v1Chat', 'setEnableDebug', 'setInnerAudioOption', 'setKeepScreenOn', 'setNavigationBarColor', 'setNavigationBarTitle', 'setPageInfo', 'setScreenBrightness', 'setStorage', 'setStorageSync', 'setTabBarBadge', 'setTabBarItem', 'setTabBarStyle', 'setTopBarText', 'setVisualEffectOnCapture', 'setWifiList', 'setWindowSize', 'shareFileMessage', 'shareToWeRun', 'shareVideoMessage', 'showActionSheet', 'showLoading', 'showModal', 'showNavigationBarLoading', 'showRedPackage', 'showShareImageMenu', 'showShareMenu', 'showTabBar', 'showTabBarRedDot', 'showToast', 'startAccelerometer', 'startBeaconDiscovery', 'startBluetoothDevicesDiscovery', 'startCompass', 'startDeviceMotionListening', 'startFacialRecognitionVerify', 'startFacialRecognitionVerifyAndUploadVideo', 'startGyroscope', 'startHCE', 'startLocalServiceDiscovery', 'startLocationUpdate', 'startLocationUpdateBackground', 'startPullDownRefresh', 'startRecord', 'startSoterAuthentication', 'startWifi', 'stopAccelerometer', 'stopBackgroundAudio', 'stopBeaconDiscovery', 'stopBluetoothDevicesDiscovery', 'stopCompass', 'stopDeviceMotionListening', 'stopFaceDetect', 'stopGyroscope', 'stopHCE', 'stopLocalServiceDiscovery', 'stopLocationUpdate', 'stopPullDownRefresh', 'stopRecord', 'stopVoice', 'stopWifi', 'subscribeVoIPVideoMembers', 'switchTab', 'textReview', 'textToAudio', 'updateShareMenu', 'updateVoIPChatMuteConfig', 'updateWeChatApp', 'uploadFile', 'vibrateLong', 'vibrateShort', 'writeBLECharacteristicValue']);
  names.forEach(name => {
    Taro[name] = apis[name];
  });
};

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return this.props.children;
  }
}

const Page = () => {
  return 'page';
};

const config = {
  pages: [
    'pages/index/index',
    'pages/about/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#333',
    selectedColor: '#409EFF',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [{
      pagePath: '/pages/index/index', text: '首页',
    }, {
      pagePath: '/pages/about/about', text: '关于我们',
    }],
    mode: 'hash',
    basename: '/test/app',
    customRoutes: {
      '/pages/about/index': '/about',
    },
  },
  router: {mode: 'hash'},
};
config.routes = config.pages?.map(path => ({
  path, load: () => Page,
}));

const init = () => {
  transformApi();
  const inst = createReactApp(App, React, ReactDOM, config);
  createRouter(inst, config, 'React');
};

export {init};
