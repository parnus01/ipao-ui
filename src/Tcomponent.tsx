import { Typography } from '../lib/components/Typography/Typography';
import { DropdownMenuCheckbox, choiceList } from '../lib/components/DropdownMenu/dropdown-checkbox';
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

    let dropdown1: choiceList[] = [
        {
          value: "choice1",
          label: "label1"
        },
        {
            value: "choice2",
          icon: icon2,
          label: "label2"
        }
      ]
    let dropdown2: choiceList[][] = [
        [
            {
                value: "choice1",
                label: "label1"
              },
              {
                value: "choice2",
                icon: icon2,
                label: "label2"
              }
        ],
        [
          {
            value: "choice3",
            label: "label3",
            "isDisable": true
          },
          {
            value: "choice4",
            label: "label4"
          }
        ]
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
            <DropdownMenuCheckbox values={dropdown1}>Dropdown-menu-checkbox</DropdownMenuCheckbox>
            <DropdownMenuCheckbox values={dropdown2}>Dropdown-menu-checkbox-seperator</DropdownMenuCheckbox>
            <DropdownMenuCheckbox values={dropdown1} multiple={true}>Dropdown-menu-checkbox</DropdownMenuCheckbox>
            <DropdownMenuCheckbox values={dropdown2} multiple={true}>Dropdown-menu-checkbox-seperator</DropdownMenuCheckbox>
            <DropdownAction value={action1} size={32} />
            <DropdownAction value={action2} size={"32px"} />
        </>
    )
}

export default Tcomponent;