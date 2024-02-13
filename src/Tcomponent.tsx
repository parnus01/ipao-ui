import { Typography } from '../lib/components/Typography/Typography';
import { DropdownMenuCheckbox } from '../lib/components/DropdownMenu/dropdown-checkbox';
import { DropdownAction, actionList } from '../lib/components/DropdownMenu/dropdown-action';
import { Activity } from 'lucide-react';
import { DropdownSelect } from '../lib/components/DropdownMenu/dropdown-select'
import { useState } from 'react';
import { Button } from '../lib/components/button'



function Tcomponent() {

    const [smt, setSmt] = useState("choice4");

    const handleChange = (newVal: any) => {
        setSmt(newVal);
    }

    const valuetest = () => {
        console.log(smt);
    }

    const onClickTest = (index: number) => {
        console.log(index);
    }

    const handleApply = (result: string[]) => {
        console.log(result);
    }

    const handleCancle = (result: string[]) => {
        console.log(result);
    }


    const icon1 = "";
    const icon2 = <Activity />
    const label1 = "label-1";
    const label2 = "label-2";
    const label3 = "label-3";
    const label4 = "label-4";

    let dropdown1 = [
        {
            value: "choice1",
            label: "label1-short"
        },
        {
            value: "choice2",
            label: "label2-long"
        },
        {
            value: "choice3",
            label: "label3-longgggggggggggggggggggggggg",
        },
    ]
    let dropdown2 = [

        {
            value: "choice1",
            label: "label1",
        },
        {
            value: "choice2",
            icon: icon2,
            label: "label2"
        }
        ,

        {
            value: "choice3",
            label: "label3",
            disabled: true,
            isSeparate: true
        },
        {
            value: "choice4",
            label: "label4"
        }

    ]
    let action1: actionList[] = [
        {
            itemName: "choice1",
            onActionClick: () => onClickTest(1),
            icon: icon1,
            label: label1
        },
        {
            itemName: "choice2",
            onActionClick: () => onClickTest(2),
            icon: icon2,
            label: label2
        },
    ]
    let action2: actionList[][] = [
        [
            {
                itemName: "choice1",
                onActionClick: () => onClickTest(1),
                icon: icon1,
                label: label1
            },
            {
                itemName: "choice2",
                onActionClick: () => onClickTest(2),
                icon: icon2,
                label: label2,
            }
        ],
        [
            {
                itemName: "choice3",
                onActionClick: () => onClickTest(3),
                label: label3,
                isDisable: true
            },
            {
                itemName: "choice4",
                onActionClick: () => onClickTest(4),
                label: label4
            }
        ]
    ]

    return (
        <>
            <Typography variant='heading1'>h1</Typography>
            <Typography variant='heading2'>h2</Typography>
            <Typography variant='heading3'>h3</Typography>
            <Typography variant='heading4'>h4</Typography>
            <Typography variant='body1' weight="bold">body1-bold</Typography>
            <Typography variant='body1' weight="regular">body1-regular</Typography>
            <Typography variant='body2' weight="bold">body2-bold</Typography>
            <Typography variant='body2' weight="regular">body2-regular</Typography>
            <Typography variant='caption'>caption</Typography>
            {/* <DropdownMenuDemo>smt</DropdownMenuDemo> */}
            <br />
            <DropdownMenuCheckbox 
                options={dropdown1} 
                check_all 
                allSelectedText={"Handle selected all"} 
                onApply={handleApply} 
                onCancle={handleCancle} 
            />
            <DropdownAction value={action1} size={32} />
            <DropdownAction value={action2} size={"32px"} />
            <DropdownSelect
                onSelectChange={handleChange}
                options={dropdown2}
                value='select2-testDropdown'
            />
            <DropdownSelect
                onSelectChange={handleChange}
                options={dropdown2}
                value='select2-firstItemBorder'
                firstRowBorderBottom = {true}
            />
            <DropdownSelect
                onSelectChange={handleChange}
                options={dropdown2}
                value='select3-testDefaultValue'
                defaultValue={smt}
            />
            <p>{smt}</p>
            <Button variant="outline" onClick={valuetest}>Test</Button>
        </>
    )
}

export default Tcomponent;