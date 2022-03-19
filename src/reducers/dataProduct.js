const initialState = {
    productData:[
        {
            barcode:"1234",
            name:"coke",
            category:"water",
            date:"19/01/2022",
            time:"19:11",
            
        }
    ],
    masterProduct:[
        {
            barcode:"8859520500017",
            name:"coke",
            category:"water",
        }
    ]
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          productData: action.payload
        };
        case "CHECK_PRODUCT":
            return {
              ...state,
              productData: action.payload
            };
      default:
        return state;
    }
  };