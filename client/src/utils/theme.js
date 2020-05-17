import { createMuiTheme } from "@material-ui/core";

const fontFamilyMuli = `"Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {},
            marginNormal: {
                marginBottom: 0,
                marginTop: 0,
            },
        },
        MuiInputBase: {
            root: {
                height: "48px",
            },
            input: {
                height: "48px",
                fontFamily: fontFamilyMuli,
                boxSizing: "border-box",
                padding: "0.375rem 0.75rem",
            },
        },
        MuiFormHelperText: {
            root: {
                fontSize: "12px !important",
                fontFamily: fontFamilyMuli,
            },
        },
        MuiButtonBase: {
            root: {
                outline: "none",
            },
        },
        MuiMenuItem: {
            root: {
                fontFamily: fontFamilyMuli,
            },
        },
    },
});

export default theme;
