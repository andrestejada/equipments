// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    type:string
    colors: {
      background: string;
      text:string;
      borderColor:string
    };
    form:{
      background:string;
    }
    equipment:{
      containerBg:string;
      cardBg:string
    }
  }
}