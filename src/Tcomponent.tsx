import { Button } from "./components/ui/button"
import { Typography } from '../lib/components/Typography';



function Tcomponent() {
    return (
        <>
            {/* <Button>Aomsin</Button> */}
            <Typography variant='heading1'>h1</Typography>
            <Typography variant='heading2'>h2</Typography>
            <Typography variant='heading3'>h3</Typography>
            <Typography variant='heading4'>h4</Typography>
            <Typography variant='body1' weight="bold">body1-bold</Typography>
            <Typography variant='body1' weight="regular">body1-regular</Typography>
            <Typography variant='body2' weight="bold">body2-bold</Typography>
            <Typography variant='body2' weight="regular">body2-regular</Typography>
            <Typography variant='caption'>caption</Typography>
        </>
    )
}

export default Tcomponent;