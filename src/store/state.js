let defaultCity = '北京'
try {
  defaultCity = localStorage.city || defaultCity
} catch (e) {
  // catch error
}

export default {
  city: defaultCity
}
