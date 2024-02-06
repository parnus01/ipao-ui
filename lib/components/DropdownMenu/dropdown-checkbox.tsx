"use client";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItemMultiple
} from "./dropdown-menu";

import { ReactNode, useEffect, useState } from "react";

export interface choiceList {
  value: any;
  label: string;
  isDisable?: boolean;
}

export interface Dropdowntopic {
  value?: ReactNode;
  options: choiceList[];
  onApply?: Function;
  placeholder?: string;
  allStatus?: boolean;
  onCancle?: any;
  allSelectedText?: string;
  label?: string;
  check_all?: boolean;
}

const DropdownMenuCheckbox = (props: Dropdowntopic) => {

  const {
    value = '',
    options = [],
    onApply,
    onCancle,
    allSelectedText = '',
    check_all,
  } = props;

  const [showValue, setShowValue] = useState<string[]>([]);
  const defaultAlltext = "Select All";
  const [open,setOpen] = useState(false);
  let optionValues: Array<string> = options.map(data => data.value);
  let isCheckAll = false;
  if(check_all != null){
    isCheckAll = check_all;
  }
  const [checkAllFlag, setCheckAllFlag] = useState<boolean>(isCheckAll);

  useEffect(() => {
    if(showValue.length == options.length){
      setCheckAllFlag(true);
    }else if(checkAllFlag){
      setShowValue(optionValues);
    }
  },[showValue, checkAllFlag]);

  const handleOnCheck = (item: string) => {
    if (showValue.includes(item)) {
      const newValue = showValue.filter((f) => f !== item);
      setShowValue(newValue);
      setCheckAllFlag(false);
    } else {
      setShowValue([...showValue, item]);
    }
  };

  const checkboxItem = (item: any, key: number) => {
    return (
      <DropdownMenuCheckboxItemMultiple
        checked={showValue.includes(item.value)}
        onCheckedChange={() => handleOnCheck(item.value)}
        key={key}
        disabled={item.isDisable}
        onSelect={(e: Event) => e.preventDefault()}
      >
        <span>{item.label}</span>
      </DropdownMenuCheckboxItemMultiple>
    );
  };

  const handleSelectedAll = () => {
    if (!checkAllFlag) {
      setShowValue(optionValues);
    } else {
      setShowValue([]);
    }
    setCheckAllFlag(!checkAllFlag);
  }

  const handleAllText = () => {
    let tempAllText = "";
    if (allSelectedText != '') {
      tempAllText = allSelectedText;
    } else {
      tempAllText = defaultAlltext;
    }
    return tempAllText;
  }

  const handleReset = () => {
    setCheckAllFlag(false);
    setShowValue([]);
  }

  const handleCancle = () => {
    if(onCancle){
      onCancle([]);
    }
      setOpen(false);
  }

  const handleApply = () => {
    if(onApply){
      onApply(showValue);
    }
    setOpen(false);
  }

  return (
    <DropdownMenu onOpenChange={setOpen} open={open}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" aria-placeholder={"smt"}>{value}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuCheckboxItemMultiple
            checked={checkAllFlag}
            onCheckedChange={() => handleSelectedAll()}
            key={"allStatusChecked"}
            onSelect={(e: Event) => e.preventDefault()}
          >
            <span>{handleAllText()}</span>
        </DropdownMenuCheckboxItemMultiple>
        <DropdownMenuSeparator />
        {options.map((item, i) => checkboxItem(item, i))}
        {/* <Button variant="ghost" onClick={handleTest}>test</Button> */}
        <Button variant="ghost" onClick={handleReset}>Reset</Button>
        <Button variant="secondary" onClick={handleCancle}>Cancle</Button>
        <Button onClick={handleApply}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { DropdownMenuCheckbox };
