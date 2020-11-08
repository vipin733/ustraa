import App from 'next/app'
import React from 'react'
import axios from 'axios'
const API_URL = process.env.API_URL

class MyApp extends App {

  constructor(props){
    super(props)
    axios.defaults.baseURL = API_URL
    axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8'
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default MyApp
