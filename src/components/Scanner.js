import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState } from "react";
import { connect } from "react-redux";

const Scanner = ({master})=> {
  const [data, setData] = useState("Not Found");
  return (
    
    <div>
      <div className="row pt-5">
        <div className="col-6"></div>
        <div className="col-6">
          <h2 className="text-white">Add Product</h2>
        </div>
      </div>
     <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result){
            master.masterProduct.map((val)=>{
              if(val.barcode==result.text){
               
                console.log("url")
                
              }else{
                console.log("fail",result.text)
              }
            })
            // console.log(master.masterProduct)  
            // dispatch({
            //   type: "ADD_DATA_COMPANY",
            //   payload: response.data.result,
            //   loading: true
            // });
            // setData(result.text);
          }
          else setData("Not Found");
        }}
      />
      <p>{data}</p>

     
      
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    master: state.dataProduct,
  };
};
export default connect(mapStateToProps)(Scanner)
