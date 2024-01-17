"use client";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItemMultiple
} from "./dropdown-menu";

import { ReactNode, useState } from "react";

export interface choiceList {
  itemName: string;
  icon?: ReactNode;
  label?: string;
  isDisable?: boolean;
}

export interface Dropdowntopic {
  children: ReactNode;
  value: choiceList[] | choiceList[][];
  multiple?: boolean;
}

export const DropdownMenuCheckbox = ({ children, value, multiple }: Dropdowntopic) => {
  const [showValue, setShowValue] = useState<string[]>([]);
  const [showOneValue, setShowOneValue] = useState<string>("");
  const multipleValue: boolean = multiple ? true : false;

  const handleOnCheck = (item: string, checkMultiple: boolean) => {
    if (checkMultiple) {
      if (showValue.includes(item)) {
        const newValue = showValue.filter((f) => f !== item);
        setShowValue(newValue);
      } else {
        setShowValue([...showValue, item]);
      }
    } else {
      if (showOneValue.includes(item)) {
        setShowOneValue("");
      } else {
        setShowOneValue(item);
      }
    }
  };


 const checkboxItem = (item: any, key: string, checkMultiple: boolean) => {
    if (checkMultiple) {
      return (
        <DropdownMenuCheckboxItemMultiple
          checked={showValue.includes(item)}
          onCheckedChange={() => handleOnCheck(item, checkMultiple)}
          key={key}
          disabled = {item.isDisable}
          onSelect={(e: Event) => e.preventDefault()}
        >
          <span>{item.itemName}</span>
        </DropdownMenuCheckboxItemMultiple>
      );
    } else {
      return (
        <DropdownMenuCheckboxItem
          checked={showOneValue.includes(item.itemName)}
          onCheckedChange={() => handleOnCheck(item.itemName, checkMultiple)}
          key={key}
          disabled = {item.isDisable}
          // onSelect={(e: Event) => e.preventDefault()}
          className={showOneValue.includes(item.itemName) ? "active:bg-blue-100 text-blue-600 bg-blue-100 focus:text-blue-600 font-bold" : "hover:bg-accent"}
        >
          <span>{item.itemName}</span>
        </DropdownMenuCheckboxItem>
      );
    }
  };
  

  const checkValueType = (
    inputData: any,
    index: number,
    checkMultiple: boolean,
  ) => {
    const readType = inputData.constructor;
    if (readType == Array) {
      let result: any[] = [];
      if (index != 0) {
        const multipleKey: string = "seperator-".concat(index.toString());
        result.push(<DropdownMenuSeparator key={multipleKey} />);
      }
      for (let j = 0; j < inputData.length; j++) {
        let temp = checkboxItem(inputData[j], j.toString(), checkMultiple);
        // console.log(arrayKeys);
        result.push(temp);
      }
      return result;
    }
    return checkboxItem(inputData, index.toString(), checkMultiple);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {value.map((item, i) => checkValueType(item, i, multipleValue))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
  }
