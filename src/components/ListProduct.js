import React from 'react'
import { connect} from "react-redux";
const ListProduct = ({data})=> {
  console.log(data.productData)
  return (
    <div>ListProduct</div>
  )
}
const mapStateToProps = (state) => {
  return {
    data: state.dataProduct,
  };
};
export default connect(mapStateToProps)(ListProduct)