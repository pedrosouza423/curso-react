import { defaultTheme } from "../styles/themes/default";
import "styled-components"

type defaultThemeType = typeof defaultTheme;

declare module "styled-components" {
    export interface DefaultTheme extends defaultThemeType {}
}