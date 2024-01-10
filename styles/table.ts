import { Color } from "@/utils/Color";

export const CustomTableStyle = {
    // rows: {
    //     style: {
    //     },
    // },
    headCells: {
        style: {
            color: 'black',
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '15px'
        },
    },
    headRow: {
        style: {
            marginTop: '1rem',
            backgroundColor: Color.gray,
            minHeight: '40px'
        },
    },
    cells: {
        style: {
            paddingTop: '4px',
            paddingBottom: '4px',
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '15px'
        },
    },
}