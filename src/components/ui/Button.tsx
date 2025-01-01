import { ReactElement } from "react";

const variantStyle = {
    primary : "bg-blue-600 text-white font-bold hover:bg-blue-900",
    secondary: "bg-custom-3 border border-blue-500 text-purple-200 font-bold"
}


const defaultStyles = "flex items-center px-4 py-2 rounded-md transition-all duration-500 hover:-translate-y-2";

export const Button = ({variant , text , startIcon , endIcon}: {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement
}) => {
    return (
        <>
            <button 
                className={`${variantStyle[variant]} ${defaultStyles}`}
            >
                {startIcon && <div className="mr-2">
                    {startIcon}
                </div> }
                {text} 
                
                {endIcon && <div className="ml-2">
                    {endIcon}
                </div>}
            </button>
        </>
    )
}