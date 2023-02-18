import { DefaultTheme } from "@react-navigation/native";

export const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "lightgray",
        background: "gray"
    },
};