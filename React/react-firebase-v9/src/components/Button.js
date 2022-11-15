import * as React from "react"
import { Button } from "@mui/material";

export default function BasicButtons({title}) {
    return (
        <Button variant="contained">{title}</Button>
    )
}