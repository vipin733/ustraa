import React from 'react'
import Layout from '../layout/default'
import Home from '../components/Home'
import Head from 'next/head'
import axios from 'axios'

class Index extends React.Component {

  constructor(props){
    super(props)
    this.state =  {
      is_loading: true,
      categories: []
    }
    
  }

  componentDidMount(){
    this._getCategories()
  }

  async _getCategories(){
    try {
      let {data} = await axios.get('homemenucategories/v1.0.1?device_type=mob')
      this.setState({
        categories: data.category_list,
        is_loading: false
      })
    } catch (error) {
      console.log(error)
      this.setState({
        is_loading: false
      })
    }
  }

  render() {
    let {is_loading, categories } = this.state
    return (
      <>
        <Head>          
          <title>
            Grooming Products by USTRAA - Happily Unmarried
          </title>
          <link href="/css/public.css" rel="stylesheet" />
        </Head>
        <Layout>
          {is_loading ? 'Loading...' : <Home categories={categories}/>}
        </Layout>
      </>
    )
  }
}

export default Index
