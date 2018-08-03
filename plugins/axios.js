export default ({ $axios, redirect }) => {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  // $axios.defaults.baseURL =
  //   process.env.NODE_ENV === 'production'
  //     ? 'http://127.0.0.1:3000/api'
  //     : 'http://127.0.0.1:3000/api'
  // $axios.defaults.headers.post['Content-Type'] =
  //   'application/x-www-form-urlencoded'

  // req interceptor
  $axios.interceptors.request.use(
    function (config) {
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  // res interceptor
  $axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )
}
