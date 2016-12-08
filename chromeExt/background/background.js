/**
 * Created by MyhailoAndrushkiv on 31.10.2016.
 */

function checkWeather() {
    var weatherReminder = new CWeatherReminder();
    var weatherProvider = new COpenWeatherMapProvider(weatherReminder);

    var weather = new CWeather(weatherProvider);
    var result = weather.checkWeather('Lviv'); // ID 702550 @TODO needed to change to use ID.
}
var HOUR_4 = 14400;
var HAULF_HOUR = 3600;
var checkWeatherPeriod = HOUR_4 * 1000;
clearInterval(window.timerId);
window.timerId = window.setInterval(function () {
    // alert(123);
    console.log('notification');
    checkWeather();
}, checkWeatherPeriod);
var num = 99;
// chrome.browserAction.setBadgeText({text: num.toString()});
// var timerId = setInterval(checkWeather(), checkWeatherPeriod)

// chrome.alarms.create('string name', {
//     periodInMinutes: 1,
// });
// chrome.alarms.onAlarm.addListener(function (alarm) {
//     alert(456);
// });