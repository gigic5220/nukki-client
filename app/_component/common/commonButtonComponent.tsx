'use client';

import {ReactNode} from "react";
import {heightProperty, widthProperty} from "@/app/_constants/constants";
import {CommonCssProps} from "@/app/_type/common";

interface CommonButtonComponentProps extends CommonCssProps{
    textContent: string | ReactNode
    textColor?: string
    onClick: () => void
    disabled?: boolean
    backgroundColor?: string
}

const CommonButtonComponent = ({width, height, textContent, onClick, disabled = false, backgroundColor, textColor} : CommonButtonComponentProps) => {

    const baseClasses = "flex items-center justify-center rounded-md shadow-md";
    const widthClass = width ? widthProperty[width] : "w-full";
    const heightClass = height ? heightProperty[height] : "";
    const backgroundClass = disabled ? "bg-primary-disabled" : backgroundColor || "bg-tertiary-blue";
    const textClass = disabled ? "text-primary-disabled-text" : textColor || "text-primary-white";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseClasses} 
                ${widthClass}
                ${heightClass} 
                ${backgroundClass} 
                ${textClass}
            `}
        >
            {textContent}
        </button>
    );
}

export default CommonButtonComponent