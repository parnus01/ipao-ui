import {ReactNode} from "react";
import '@mantine/core/styles.css'
import {Text, TextProps} from '@mantine/core';
import "./Typography.css"

export interface ITypography extends TextProps {
    children: ReactNode,
    category: string
}


export const Typography = ({children, ...rest}: ITypography) => {
    return (
        <Text {...rest}>{children}</Text>
    )
}