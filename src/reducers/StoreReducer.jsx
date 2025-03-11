// step1: creating the initial State for cart
export let initialState = {
  cart: JSON.parse(localStorage.getItem("cart"))||[]  
}

// step2: creating the Reducers

const reducer = (state, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      // checking the Item already it exists in the cart Or Not 
      let ExistingItem=state.cart.find((item)=>item.id === action.payload.id)
      console.log(ExistingItem)
      if(ExistingItem){
        return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
      }else{
        return {...state,cart:[...state.cart,{...action.payload,quantity:1}]}
      }

    case "REMOVE_ITEM_IN_CART":
      return {...state,cart:state.cart.filter((item)=>item.id !==action.payload.id)}
    case "INCREMENT":
      return  {...state,cart:state.cart.map((item)=>(item.id === action.payload.id?{...item,quantity:item.quantity+1}:item))}
    case "DECREMENT":
      //implementing the condtion that cart quantity >1 then the item it remove the  whole item  from cart page
      return {...state,cart:state.cart.map((item)=>(item.id === action.payload.id
        ?{...item,quantity:item.quantity-1}:item)).filter((item)=>item.quantity
        >0)}
     

    
     
   
     

    default:
      break;
  }
};


export default reducer