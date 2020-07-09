const lang = navigator.language
var date = new Date()

var takeMonth = date.toLocaleString(lang, {month: 'long'})
var takeWeekDay = date.toLocaleString(lang, {weekday: 'long'})
var takeMonthDay = date.getDate()
var takeYear = date.getFullYear()

var month = document.getElementById('mes').innerHTML = takeMonth
var weekDay = document.getElementById('diaSemana').innerHTML = takeWeekDay
var monthDay = document.getElementById('diaMes').innerHTML = takeMonthDay
var year = document.getElementById('ano').innerHTML = takeYear