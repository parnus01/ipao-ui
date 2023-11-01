import {ReactNode} from "react";

interface ITypography {
    children: ReactNode
}

export const Typography = ({children}: ITypography) => {
    return <p className={'ipao-typo'}>{children}</p>
}