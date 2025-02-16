'use client';

import React from "react";
import { CommonCssProps } from "@/app/_type/common";
import { heightProperty, widthProperty, fontSizeProperty } from "@/app/_constants/constants";

interface CommonInputComponentProps extends CommonCssProps {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
    type?: string;
    fontSize?: number;
    maxLength?: number;
    textAlign?: 'center' | 'left' | 'right';
    disabled?: boolean;
}

const CommonInputComponent = (props: CommonInputComponentProps) => {
    const {
        value,
        width,
        height,
        placeholder = '',
        onChange,
        type,
        className,
        fontSize,
        maxLength,
        textAlign,
        disabled = false
    } = props;

    const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const baseClasses = 'block px-3 py-1.5 text-base placeholder:text-gray-400 border-b-2 border-secondary-nukki';
    const focusClasses = 'focus: border-b-2 focus:border-primary-nukki focus:outline-none';
    const widthClass = width ? widthProperty[width] : '';
    const heightClass = height ? heightProperty[height] : '';
    const textClass = `${!!textAlign ? `text-${textAlign}` : ''} ${!!fontSize ? `${fontSizeProperty[fontSize]}` : ''}`;

    return (
        <input
            disabled={disabled}
            maxLength={maxLength}
            value={value}
            className={`
                ${baseClasses}
                ${focusClasses}
                ${widthClass}
                ${heightClass}
                ${textClass}
                ${className} 
                ${disabled ? 'cursor-not-allowed' : ''}
            `}
            onChange={handleOnChangeInput}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default CommonInputComponent;
