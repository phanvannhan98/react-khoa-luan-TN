import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers(props) {
    // The first commit of Material-UI
    const { ngaysinh, setNgaysinh } = props;

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                required
                margin="normal"
                id="date-picker-dialog"
                format="dd/MM/yyyy"
                value={ngaysinh}
                onChange={(date) => {
                    setNgaysinh(date);
                }}
                KeyboardButtonProps={{
                    "aria-label": "change date",
                }}
                className="form-control"
            />
        </MuiPickersUtilsProvider>
    );
}
