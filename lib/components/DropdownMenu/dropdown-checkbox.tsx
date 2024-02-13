"use client";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItemMultiple
} from "./dropdown-menu";

import { useEffect, useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

export interface choiceList {
  value: any;
  label: string;
}

export interface Dropdowntopic {
  value?: string;
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
    options = [],
    onApply,
    onCancle,
    allSelectedText = '',
    check_all,
  } = props;

  const [showValue, setShowValue] = useState<choiceList[]>([]);
  const defaultAlltext = "Select All";
  const [open,setOpen] = useState(false);
  let optionValues: Array<choiceList> = options;
  let isCheckAll = false;
  if(check_all != null){
    isCheckAll = check_all;
  }
  const [checkAllFlag, setCheckAllFlag] = useState<boolean>(isCheckAll);
  const [isApplyDisable, setIsApplyDisable] = useState<boolean>(false);

  useEffect(() => {
    if(showValue.length == options.length){
      setCheckAllFlag(true);
    }else if(checkAllFlag){
      setShowValue(optionValues);
    }
    setIsApplyDisable(showValue.length === 0);
  },[showValue, checkAllFlag, isApplyDisable]);

  const handleOnCheck = (item: choiceList) => {
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
        checked={showValue.includes(item)}
        onCheckedChange={() => handleOnCheck(item)}
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
      setIsApplyDisable(false);
    } else {
      setShowValue([]);
      setIsApplyDisable(true);
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

  const handleShowText = () => {
    if(showValue.length > 0 && showValue.length !== options.length){
      return showValue.map((data) => data.label).join(', ');
    }
    else{
      return handleAllText();
    }
  }

  const handleReset = () => {
    setCheckAllFlag(false);
    setShowValue([]);
    setIsApplyDisable(true);
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
      <DropdownMenuTrigger asChild className="w-full min-w-[17rem] max-w-[19rem]">
        <Button variant="outline" className="flex justify-between">
          <div className="truncate">{handleShowText()}</div>
          <div>{open? <ChevronUp className="h-4 w-4 opacity-50 " /> : <ChevronDown className="h-4 w-4 opacity-50 " />}</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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
        <div className="flex justify-between">
          <div className="">
            <Button variant="ghost" className="rounded-[32px] " onClick={handleReset}>Clear All</Button>
          </div>
          <div className="">
            <Button variant="secondary" className="rounded-[32px]" onClick={handleCancle}>Cancle</Button>
            <Button variant="default" onClick={handleApply} className="rounded-[32px]" disabled={isApplyDisable}>Apply</Button>
          </div>
        </div>
        
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { DropdownMenuCheckbox };
