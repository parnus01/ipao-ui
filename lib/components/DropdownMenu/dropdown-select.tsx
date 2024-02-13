// import * as React from "react"

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
    firstRowBorderBottom? : boolean;
}

export function DropdownSelect(props: Dropdowntopic) {
    const {
        value = '',
        defaultValue = '',
        options = [],
        onSelectChange,
        firstRowBorderBottom = false,
    } = props;

    const selectItem = (item: any, key: number) => {
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
        );
        if(firstRowBorderBottom && key==0){
            result.push(<SelectSeparator key={"firstRowBorderBottom"} />)
        }

        return result;
    }

    return (
        <Select onValueChange={onSelectChange} defaultValue={defaultValue} >
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder={value} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((item, i) => selectItem(item, i))}
                </SelectGroup>
            </SelectContent>
            
        </Select>
    )
}
