"use client"

import { ReactNode } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu"

import { MoreHorizontal } from "lucide-react"

export interface actionList {
    itemName: string,
    label: string,
    onActionClick: () => void,
    icon?: ReactNode,
    isDisable?: boolean
}

interface Dropdowntopic {
    value: actionList[] | actionList[][],
    size: number | string
}

export function DropdownAction({ value, size }: Dropdowntopic) {

    const dropdownItem = (item: actionList, index: number) => {
        const itemKey = item.label.concat(index.toString());
        return (
            
                <DropdownMenuItem
                    onClick={item.onActionClick}
                    key={itemKey}
                    disabled={item.isDisable} 
                >
                    {item.icon}
                    <span className="pl-2">{item.itemName}</span>
                </DropdownMenuItem>
            
        );
    }

    const checkValueType = (inputData: any, index: number) => {
        const readType = inputData.constructor;
        if (readType == Array) {
            let result: any[] = [];
            if (index != 0) {
                result.push(<DropdownMenuSeparator key={index} />)
            }
            for (let j = 0; j < inputData.length; j++) {
                let temp = dropdownItem(inputData[j], index);
                // console.log(arrayKeys);
                result.push(temp);
            }
            return result;
        }
        return dropdownItem(inputData, index)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MoreHorizontal className=" m-2 rounded-full hover:bg-blue-300 text-blue-600" size={size} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {value.map((item, index) => (
                    checkValueType(item, index)
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


