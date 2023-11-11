import React,{useContext} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {

  const cartCtx = useContext(CartContext)
  
  const addItemToCart = (e)=>{
    e.preventDefault()
    const quantity = document.getElementById("amount_"+props.id).value
    cartCtx.addItem({...props.item,quantity:quantity})
    
  }
  return (
    <form  className={classes.form}>
      <div>
        <Input
          label="Amount"
          input={{
            id: "amount_"+props.id,
            type: "number",
            max: "5",
            min: "1",
            defaultValue: "1",
          }}
        />
      </div>
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
