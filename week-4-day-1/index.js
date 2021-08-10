// 1
console.log('////////// 1 //////////')

const is_date = date => date instanceof Date && !isNaN(date) ? true : false
console.log(is_date("October 13, 2014 11:13:00"))
console.log(is_date(new Date(86400000)))
console.log(is_date(new Date(99,5,24,11,33,30,0)))
console.log(is_date([1, 2, 4, 0]))
// 2
console.log('////////// 2 //////////')

const curday = (separator = '/') => {
  const curDate = new Date
  return curDate.getDay() + separator + curDate.getMonth() + separator + curDate.getFullYear()
}
console.log(curday('-'))
//3
console.log('////////// 3 //////////')

const getDaysInMonth = (month, year = new Date().getFullYear()) => new Date(year, month, 0).getDate()
console.log(getDaysInMonth(1, 2012))
console.log(getDaysInMonth(2, 2012))
console.log(getDaysInMonth(9, 2012))
console.log(getDaysInMonth(12, 2012))

// 4
console.log('////////// 4 //////////')

const month_name = date => new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date)
console.log(month_name(new Date("10/11/2009")))
console.log(month_name(new Date("11/13/2014")))
// 5
console.log('////////// 5 //////////')

const compare_dates = (firstDate, secondDate) => {
  if (firstDate - secondDate === 0) return 'Date1 = Date2'
  if (firstDate - secondDate > 0) return 'Date1 > Date2'
    else return 'Date2 > Date1'
}
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')))
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')))
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')))
// 6
console.log('////////// 6 //////////')

const add_minutes = (date, minutes) => new Date(date.getTime() + minutes * 60000)
console.log(add_minutes(new Date(2014,10,2), 30).toString())
// 7
console.log('////////// 7 //////////')

const is_weekend = date => new Date(date).getDay() === 6 || new Date(date).getDay() === 0 ? 'weekend' : undefined
console.log(is_weekend('Nov 15, 2014'))
console.log(is_weekend('Nov 16, 2014'))
console.log(is_weekend('Nov 17, 2014'))
// 8
console.log('////////// 8 //////////')

const date_diff_indays = (firstDate, secondDate) => Math.floor((new Date(secondDate) - new Date(firstDate)) / 1e3 / 60 / 60 / 24)
console.log(date_diff_indays('04/02/2014', '11/04/2014'))
console.log(date_diff_indays('12/02/2014', '11/04/2014'))
// 9
// Дублирование задания №3
// 10
console.log('////////// 10 //////////')

const yesterday = date => new Date(new Date(date) - (1e3 * 60 * 60 * 24))
console.log(yesterday('Nov 15, 2014'))
console.log(yesterday('Nov 16, 2015'))
console.log(yesterday('Nov 17, 2016'))
// 11
console.log('////////// 11 //////////')

const max_date = dateArray => dateArray.sort((a, b) => {
  if (a < b) return 1
    else return -1
})[0]
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']))
// 12
console.log('////////// 12 //////////')

const min_date = dateArray => dateArray.sort((a, b) => {
  if (a > b) return 1
    else return -1
})[0]
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']))
// 13
console.log('////////// 13 //////////')

const timeConvert = minutes => `${minutes} minutes = ${Math.floor(minutes / 60)} hour(s) and ${minutes % 60} minute(s).`
console.log(timeConvert(200))
// 14
console.log('////////// 14 //////////')

const days_of_a_year = year => year % 4 === 0 ? 366 : 365
console.log(days_of_a_year(2015))
console.log(days_of_a_year(2016))
// 15
console.log('////////// 15 //////////')

const quarter_of_the_year = date => {
  month = date.getMonth()
  if (month > 3) {
    if (month > 6) {
      if (month > 9) 
        return 4
      return 3
    }
    return 2
  }
  return 1
}
console.log(quarter_of_the_year(new Date(2015, 1, 21)))
console.log(quarter_of_the_year(new Date(2015, 10, 18)))
// 16
console.log('////////// 16 //////////')

const days_passed = date => Math.ceil((new Date(date.getTime()) - new Date(date.getFullYear(), 0, 1) + 1) / 1e3 / 60 / 60 / 24)
console.log(days_passed(new Date(2015, 0, 15)))
console.log(days_passed(new Date(2015, 11, 14)))
// 17
console.log('////////// 17 //////////')

const convertUnixTimestamp = time => new Date(time * 1e3).toISOString().slice(-13, -5)
console.log(convertUnixTimestamp(1466760005))
console.log(convertUnixTimestamp(1628539095))
// 18
console.log('////////// 18 //////////')

const calculate_age = date => Math.abs(new Date(Date.now() - date.getTime()).getUTCFullYear() - 1970)
console.log(calculate_age(new Date(1982, 11, 4)))
console.log(calculate_age(new Date(1962, 1, 1)))
// 19
console.log('////////// 19 //////////')

const day_of_the_month = date => new Intl.DateTimeFormat('en-US', {day: '2-digit'}).format(date)
console.log(day_of_the_month(new Date(2015, 10, 1)))
// 20
console.log('////////// 20 //////////')

const short_Days = date => new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(date)
console.log(short_Days(new Date(2015, 10, 1)))
// 21
console.log('////////// 21 //////////')

const long_Days = date => new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)
console.log(long_Days(new Date(2015, 10, 1)))
// 22
console.log('////////// 22 //////////')

const ISO_numeric_date = date => date.getDay() === 0 ? 7 : date.getDay()
console.log(ISO_numeric_date(new Date(2015, 10, 1)))
// 23 - 24 Найс нумерция???
// 25
console.log('////////// 25 //////////')

const full_month = date => new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date)
console.log(full_month(new Date(2015, 10, 1)))
// 26
console.log('////////// 26 //////////')

const numeric_month = date => new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(date)
console.log(numeric_month(new Date(2015, 10, 1)))
// 27 ???
// 28
console.log('////////// 28 //////////')

const full_year = date => new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(date)
console.log(full_year(new Date(2015, 10, 1)))
// 29
console.log('////////// 29 //////////')

const short_year = date => new Intl.DateTimeFormat('en-US', {year: '2-digit'}).format(date)
console.log(short_year(new Date(1989, 10, 1)))
// 30 - 32 ???
// 33 
console.log('////////// 33 //////////')

const hours_with_zeroes = date => new Intl.DateTimeFormat('en-US', {hourCycle: 'h24', timeStyle: "short"}).format(date)
console.log(hours_with_zeroes(new Date(1989, 10, 1)))
// 34 
console.log('////////// 34 //////////')

const hours_without_zeroes = date => new Intl.DateTimeFormat('en-US', {hourCycle: 'h23', timeStyle: "short"}).format(date)
console.log(hours_without_zeroes(new Date(1989, 10, 1)))
// 35
console.log('////////// 35 //////////')

const minutes_with_leading_zeros = date => new Intl.DateTimeFormat('en-US', {hourCycle: 'h24', minute: "2-digit"}).format(date)
console.log(minutes_with_leading_zeros(new Date(1989, 10, 1)))
// 36 
console.log('////////// 36 //////////')

const seconds_with_leading_zeros = date => new Intl.DateTimeFormat('en-US', {hourCycle: 'h24', second: "2-digit"}).format(date)
console.log(seconds_with_leading_zeros(new Date(1989, 10, 1)))
// 37
console.log('////////// 37 //////////')

const timeZone = date => new Intl.DateTimeFormat('en-US', {timeZoneName: 'long'}).format(date).split(', ')[1]
console.log(timeZone(new Date))
// 38 ???
// 39
console.log('////////// 39 //////////')

const diff_to_GMT = date => date.getTimezoneOffset() / 60
console.log(diff_to_GMT(new Date))
// 40 ???
// 41
console.log('////////// 41 //////////')

const add_years = (date, years) => {
  date.setFullYear(date.getFullYear() + years)
  return date
}
console.log(add_years(new Date(2014,10,2), 10).toString())
// 42
console.log('////////// 42 //////////')

const add_weeks = (date, weeks) => {
date.setDate(date.getDate() + weeks * 7)
return date
}
console.log(add_weeks(new Date(2014,10,2), 10).toString())
// 43
console.log('////////// 43 //////////')

const add_months = (date, months) => {
  date.setMonth(date.getMonth() + months)
  return date
}
console.log(add_months(new Date(2014,10,2), 10).toString())
// 44
console.log('////////// 44 //////////')

const diff_minutes = (firstDate, secondDate) => Math.floor((new Date(secondDate) - new Date(firstDate)) / 1e3 / 60)
console.log(diff_minutes(new Date("October 13, 2014 11:11:00"), new Date("October 13, 2014 11:13:00")))
// 45
console.log('////////// 45 //////////')

const diff_hours = (firstDate, secondDate) => Math.floor((new Date(secondDate) - new Date(firstDate)) / 1e3 / 60 / 60)
console.log(diff_hours(new Date("October 13, 2014 08:11:00"), new Date("October 13, 2014 11:13:00")))
// 46 Дублирование задания №8
// 47
console.log('////////// 47 //////////')

const diff_weeks = (firstDate, secondDate) => Math.floor((new Date(secondDate) - new Date(firstDate)) / 1e3 / 60 / 60 / 24 / 7)
console.log(diff_weeks(new Date("June 13, 2014 08:11:00"), new Date("October 19, 2014 11:13:00")))
// 48
console.log('////////// 48 //////////')

const diff_months = (firstDate, secondDate) => Math.ceil((new Date(secondDate) - new Date(firstDate)) / 1e3 / 60 / 60 / 24 / 30)
console.log(diff_months(new Date("June 13, 2014 08:11:00"), new Date("October 19, 2014 11:13:00")))
// 49
console.log('////////// 49 //////////')

const diff_years = (firstDate, secondDate) => Math.floor((new Date(secondDate) - new Date(firstDate)) / 1e3 / 60 / 60 / 24 / 365.25)
console.log(diff_years(new Date("June 13, 2014 08:11:00"), new Date("October 19, 2017 11:13:00")))
// 50
console.log('////////// 50 //////////')

const getMonday = date => {
  diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
  return new Date(date.setDate(diff));
}
console.log(getMonday(new Date("June 13, 2014 08:11:00")))
// 51
console.log('////////// 51 //////////')

const getSunday = date => {
  diff = date.getDate() + (7 - date.getDay())
  return new Date(date.setDate(diff));
}
console.log(getSunday(new Date("June 13, 2014 08:11:00")))
// 52
console.log('////////// 52 //////////')

const getFirstDayOfMonth = date => new Date(date.getFullYear(), date.getMonth(), 1)
console.log(getFirstDayOfMonth(new Date("June 13, 2014 08:11:00")))
// 53
console.log('////////// 53 //////////')

const getLastDayOfMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0)
console.log(getLastDayOfMonth(new Date("June 13, 2014 08:11:00")))