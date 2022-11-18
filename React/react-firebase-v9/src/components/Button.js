import * as React from "react"
import { Button } from "@mui/material";

export default function BasicButtons({title, handleActon}) {
    return (
        <Button sx={{m: 2}} variant="contained" onClick={handleActon}>{title}</Button>
    )
}