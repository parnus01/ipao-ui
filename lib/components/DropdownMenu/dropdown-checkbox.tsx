"use client"

import { Button } from "../button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"

import { Settings } from "lucide-react";

import { ReactNode, useState } from "react";

interface Dropdowntopic {
  children: ReactNode,
  value: any[],
  multiple?: boolean
}

export function DropdownMenuCheckboxes({ children, value, multiple }: Dropdowntopic) {

  const [showValue, setShowValue] = useState<string[]>([])
  const [showOneValue, setShowOneValue] = useState<string>("");
  const multipleValue: boolean = multiple ? true : false;

  const handleOnCheck = (item: string, checkMultiple: boolean) => {
    if (checkMultiple) {
      if (showValue.includes(item)) {
        const newValue = showValue.filter(f => f !== item);
        setShowValue(newValue);
      } else {
        setShowValue([...showValue, item])
      }
    } else {
      setShowOneValue(item);
    }
  }

  const checkboxItem = (item: string, keys: string, checkMultiple: boolean) => {
    if (checkMultiple) {
      return (

        <DropdownMenuCheckboxItem
          checked={showValue.includes(item)}
          onCheckedChange={() => handleOnCheck(item, checkMultiple)}
          key={keys}
          onSelect={e => e.preventDefault()}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>{item}</span>
        </DropdownMenuCheckboxItem>

      );
    } else {
      return (

        <DropdownMenuCheckboxItem
          checked={showOneValue.includes(item)}
          onCheckedChange={() => handleOnCheck(item, checkMultiple)}
          key={keys}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>{item}</span>
        </DropdownMenuCheckboxItem>

      );
    }

  }

  const checkValueType = (inputData: any, i: number, checkMultiple: boolean) => {
    const readType = typeof inputData;
    const cName = "dropdown-menu-";
    if (readType == 'object') {
      let result: any[] = [];
      let stringKey = (i + 1).toString();
      if (i != 0) {
        result.push(<DropdownMenuSeparator />)
      }
      for (let j = 0; j < inputData.length; j++) {
        let arrayKeys = stringKey.concat(j.toString());
        const dpName = cName.concat(arrayKeys);
        let temp = checkboxItem(inputData[j], dpName, checkMultiple);
        // console.log(arrayKeys);
        result.push(temp);
      }
      return result;
    }
    return checkboxItem(inputData, cName.concat(i.toString()), checkMultiple)
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {value.map((item, i) => (
          checkValueType(item, i, multipleValue)
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
