import React from "react";
class CartItem extends React.Component{
    render(){
        return(
           <div className="cart-item">
            <div className="left-item">
                <img style={styles.Image} />
            </div>
            <div className="right-item">
                {/* Action Buttons*/}
                <div>Phone</div>
                <div>Rs 999/-</div>
                <div>Qty : 1</div>
                <div className="">

                </div>
            </div>
           </div>
        )
    }
}

const styles = {

    Image:{

        height:110,
        width:110,
        borderRadius:20
    }
}

export default CartItem;