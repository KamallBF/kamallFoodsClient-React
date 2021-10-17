import React, { } from "react";

const Button = ({textColor, shape=('round' | 'square' | 'oval'), backgroundColor = "blue", type, children}) => {
    const isRound = {
        borderRadius: '12px',
    }

    const isSquare = {
        padding: '15px 32px',
    }

    const isOval = {
        borderRadius: '50%',
    }

    const styleBuilder = Object.assign({}, {
        backgroundColor: backgroundColor,
        textColor: textColor,
    },(shape === 1 ? isRound : shape === 2 ? isSquare : isOval) );

    return (
        <button
            style={styleBuilder}
            className="button-square"
            type={type} >
            {children}
        </button>
    )
};

export default Button;
