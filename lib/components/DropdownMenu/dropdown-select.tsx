import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectSeparator
} from "./select"

import { ReactNode } from "react";

export interface optionValue {
    label: string;
    value: any;
    disabled?: boolean;
    icon?: ReactNode;
    isSeparate?: boolean;
}

export interface Dropdowntopic {
    value?: any;
    defaultValue?: any;
    options: optionValue[];
    onSelectChange?: (e: any) => void;
}


export function DropdownSelect(props: Dropdowntopic) {
    const {
        value = '',
        defaultValue = '',
        options = [],
        onSelectChange,
    } = props;


    const selectItem = (item: any, key: string) => {
        let result: any[] = [];
        if(item.isSeparate){
            let seperatorKeys = "separator-" + key;
            result.push(<SelectSeparator key={seperatorKeys} />)
        }
        result.push(
            <SelectItem
                value={item.value}
                key={key}
                disabled={item.disabled}
            >
                {item.label}
            </SelectItem>
        )
        return result;
    }

    // const checkValueType = (
    //     inputData: any,
    //     index: number
    // ) => {
    //     const readType = inputData.constructor;
    //     if (readType == Array) {
    //         let result: any[] = [];
    //         if (index != 0) {
    //             const multipleKey: string = "separator-".concat(index.toString());
    //             result.push(<SelectSeparator key={multipleKey} />);
    //         }
    //         for (let j = 0; j < inputData.length; j++) {

    //             let temp = selectItem(inputData[j], j.toString());
    //             result.push(temp);

    //         }
    //         return result;
    //     }
    //     return selectItem(inputData, index.toString());
    // };

    return (
        <Select onValueChange={onSelectChange} defaultValue={defaultValue} >
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder={value} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((item, i) => selectItem(item, i.toString()))}
                </SelectGroup>
            </SelectContent>
            
        </Select>
    )
}
