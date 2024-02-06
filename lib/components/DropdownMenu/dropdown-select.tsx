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
