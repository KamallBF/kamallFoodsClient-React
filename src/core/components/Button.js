import React, { } from "react";

const Button = ({textColor, shape=('square' | 'round' | 'oval'), backgroundColor = "#007DBF", type, children, onClick}) => {
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
    },(shape === 1 ? isOval : shape === 2 ? isRound : isSquare) );

    return (
        <button
            style={styleBuilder}
            className="button-square"
            type={type}
            onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;
