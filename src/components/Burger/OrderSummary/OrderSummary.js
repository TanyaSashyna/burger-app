import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    }

    render() {
        const { ingredients, price, purchaseCancelled, purchaseContinued } = this.props;

        const ingredientSummary = Object.keys(ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span 
                            style={{
                                textTransform: 'capitalize'
                            }}
                        >{igKey}</span> : {ingredients[igKey]}
                    </li>
                )
            })

        return(
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>
                    <strong>Total Price: {price.toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={purchaseCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={purchaseContinued}>Continue</Button>
            </Aux>
        )
    }
};

export default OrderSummary;