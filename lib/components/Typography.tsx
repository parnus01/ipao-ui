import { ReactNode } from "react";
import '@mantine/core/styles.css'
import { createTheme, rem, Text } from "@mantine/core";
import "./Typography.css"
interface ITypography {
    children: ReactNode,
    category: string
}



export const Typography = ({ children, category }: ITypography) => {
    let input: any = children?.toString();
    return (
        <>
                <div className={category} dangerouslySetInnerHTML={{__html: input }} />
                <Text fz="lg" lh="lg" component="div">smt</Text>
        </>
    )

}