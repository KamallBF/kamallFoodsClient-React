import React from "react";

const Button = ({
                    textColor = "#FFFFFF",
                    shape = ('square' | 'round' | 'oval'),
                    backgroundColor = "#125fca",
                    textSize ,
                    type = "text",
                    children,
                    onClick
                }) => {

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
        color : textColor,
        fontSize: textSize
    }, (shape === 1 ? isOval : shape === 2 ? isRound : isSquare));

    return (
        <button
            style={styleBuilder}
            className="button-square"
            type={type}
            color={textColor}
            onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;
