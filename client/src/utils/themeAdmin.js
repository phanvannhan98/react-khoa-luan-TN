import { createMuiTheme } from "@material-ui/core";

const fontFamilyMuli = `"Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                border: "1px solid #2b3553",
            },
            marginNormal: {
                marginBottom: 0,
                marginTop: 0,
                padding: "0 !important",
            },
        },
        MuiInputBase: {
            root: {
                height: "38px",
            },
            input: {
                height: "38px",
                fontFamily: fontFamilyMuli,
                boxSizing: "border-box",
                padding: "0.375rem 0.75rem",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.75rem",
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
        MuiIconButton: {
            root: { color: "rgba(255, 255, 255, 0.72)" },
        },
        MuiMenuItem: {
            root: {
                fontFamily: fontFamilyMuli,
            },
        },
    },
});

export default theme;
