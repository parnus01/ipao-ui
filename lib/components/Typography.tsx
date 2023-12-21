import React from "react";
import {ReactNode} from "react";

interface ITypography {
    children: ReactNode,
    size: number
}

export const Typography = ({children, size}: ITypography) => {
    return <p className={'ipao-typo'}>{children}, {size}</p>
}