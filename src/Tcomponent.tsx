import { Typography } from '../lib/components/Typography/Typography';
import { DropdownMenuCheckboxes } from '../lib/components/DropdownMenu/dropdown-checkbox';
import { DropdownAction, actionList } from '../lib/components/DropdownMenu/dropdown-action';
import { Activity } from 'lucide-react';



function Tcomponent() {


    const onClickTest = (index: number) => {
        alert(index);
    }
    const icon1 = "";
    const icon2 = <Activity />
    const label1 = "label-1";
    const label2 = "label-2";
    const label3 = "label-3";
    const label4 = "label-4";

    let choice: Array<string> = ['1', '2', '3', '4', '5', '6']
    let choice2: Array<Array<string>> = [['1', '2', '3'], ['4', '5', '6']]
    let choice3: actionList[] = [
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
    let choice4: actionList[][] = [
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
            <DropdownMenuCheckboxes value={choice}>Dropdown-menu-checkbox</DropdownMenuCheckboxes>
            <DropdownMenuCheckboxes value={choice2}>Dropdown-menu-checkbox-seperator</DropdownMenuCheckboxes>
            <DropdownMenuCheckboxes value={choice} multiple={true}>Dropdown-menu-checkbox</DropdownMenuCheckboxes>
            <DropdownMenuCheckboxes value={choice2} multiple={true}>Dropdown-menu-checkbox-seperator</DropdownMenuCheckboxes>
            {/* <DropdownAction value={choice3} size={32} /> */}
            <DropdownAction value={choice4} size={"32px"} />
        </>
    )
}

export default Tcomponent;