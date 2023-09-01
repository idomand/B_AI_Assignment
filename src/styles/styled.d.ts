// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    black: string;
    white: string;
    green: string;
    red: string;
    typeScale: {
      header1: string;
      header2: string;
      header3: string;
      text_large: string;
      text_normal: string;
    };
  }
}
