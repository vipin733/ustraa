import Category from './category/index'
import Products from './products'
import React from 'react'
import axios from 'axios'
import Add from '@material-ui/icons/Add'
import MinimizeIcon from '@material-ui/icons/Minimize'
import Button from '@material-ui/core/Button'
import CategoryMenu from './category/category_menu'

class Index extends React.Component {
  constructor(props){
    super(props)
    this.state =  {
      is_loading: false,
      products: [],
      product_list: [],
      category: props.categories.length > 0 ? props.categories[0] : {},
      product_list_key: 1
    }
  }

  setLoading(is_loading){
    this.setState({
      is_loading
    })
  }

  componentDidMount(){
    this._getProducts(this.state.category, true)
  }

  async _getProducts  (selected_category, on_load) {
    try {

      let {is_loading, product_list_key, category} = this.state
      
      if (!on_load) {
        if (selected_category.category_id == category.category_id) {
          return
        }

        if (is_loading) {
          return
        }
      }
      
      product_list_key++
      this.setState({
        category: selected_category,
        product_list_key
      })
      this.setLoading(true)
      let {data} = await axios.get(`catalog/v1.0.1?category_id=${selected_category.category_id}&device_type=mob`)
      let products = [...data.products]
      products.length =  3
     
      this.setState({
        products: data.products,
        product_list: products,
        product_list_key,
        category: selected_category
      })
      this.setLoading(false)
    } catch (error) {
      console.log(error);
      this.setLoading(false)
    }
  }

  _changeProducts =  () => {
    let {products, product_list, product_list_key} = this.state
    let productList = [...products]

    if (product_list.length > 3) {
      productList.length = 3
    }
    product_list_key ++
    this.setState({
      product_list: productList,
      product_list_key
    })
  }

  render(){
    let {is_loading, category, product_list, product_list_key } = this.state
    let {categories} = this.props
   
    return (
      <React.Fragment >
        <Category categories={categories}  onCategoryChange={category => this._getProducts(category, false) }/>
        {
          is_loading ? <h3>Loading...</h3> : <React.Fragment ><h3>Products</h3> <Products key={product_list_key}  products={product_list}/> </React.Fragment>
        }

        <div class="showing-change">
          <div class="left-content">
            <span>Showing for 
              <strong className="category-name">{category.category_name}</strong>
            </span>
          </div>
          <div class="right-txt">
            <CategoryMenu categories={categories} key={product_list_key} 
              category={category} onCategoryChange={category => this._getProducts(category, false) }/>
              <Button
                  onClick={() => this._changeProducts()}
                  startIcon={product_list.length > 3 ? <MinimizeIcon/> : <Add/>}
                >
                {product_list.length > 3 ? <p>Less more</p> : <p>View more</p> }
              </Button>
          </div>
        </div>

      </React.Fragment>
    )
  }

}


export default Index