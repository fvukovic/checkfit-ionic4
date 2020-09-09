cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-android-permissions.Permissions",
      "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
      "pluginId": "cordova-plugin-android-permissions",
      "clobbers": [
        "cordova.plugins.permissions"
      ]
    },
    {
      "id": "cordova-plugin-background-geolocation.BackgroundGeolocation",
      "file": "plugins/cordova-plugin-background-geolocation/www/BackgroundGeolocation.js",
      "pluginId": "cordova-plugin-background-geolocation",
      "clobbers": [
        "BackgroundGeolocation"
      ]
    },
    {
      "id": "cordova-plugin-background-geolocation.radio",
      "file": "plugins/cordova-plugin-background-geolocation/www/radio.js",
      "pluginId": "cordova-plugin-background-geolocation"
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-nativeaudio.nativeaudio",
      "file": "plugins/cordova-plugin-nativeaudio/www/nativeaudio.js",
      "pluginId": "cordova-plugin-nativeaudio",
      "clobbers": [
        "window.plugins.NativeAudio"
      ]
    },
    {
      "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
      "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
      "pluginId": "cordova-plugin-nativegeocoder",
      "clobbers": [
        "nativegeocoder"
      ]
    },
    {
      "id": "cordova-plugin-sim.Sim",
      "file": "plugins/cordova-plugin-sim/www/sim.js",
      "pluginId": "cordova-plugin-sim",
      "merges": [
        "window.plugins.sim"
      ]
    },
    {
      "id": "cordova-plugin-sim.SimAndroid",
      "file": "plugins/cordova-plugin-sim/www/android/sim.js",
      "pluginId": "cordova-plugin-sim",
      "merges": [
        "window.plugins.sim"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
      "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
      "pluginId": "cordova-plugin-uniquedeviceid",
      "merges": [
        "window.plugins.uniqueDeviceID"
      ]
    },
    {
      "id": "mx.ferreyra.callnumber.CallNumber",
      "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
      "pluginId": "mx.ferreyra.callnumber",
      "clobbers": [
        "call"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-android-permissions": "1.0.2",
    "cordova-plugin-background-geolocation": "3.1.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-nativeaudio": "3.0.9",
    "cordova-plugin-nativegeocoder": "3.4.0",
    "cordova-plugin-sim": "1.3.3",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-uniquedeviceid": "1.3.2",
    "cordova-plugin-whitelist": "1.3.3",
    "mx.ferreyra.callnumber": "0.0.2",
    "cordova-plugin-ionic-webview": "4.2.1"
  };
});