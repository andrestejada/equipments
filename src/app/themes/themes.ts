import { DefaultTheme } from 'styled-components';

export const dark:DefaultTheme = {
  type:'dark',
  colors:{
    background: '#22272e',
    text:'#fff',
    borderColor:'#575757',
  },
  form:{
    background: '#23394d',
  },
  equipment:{
    containerBg:'#3e3e3e',
    cardBg:'#23394d'
  }
};
export const light:DefaultTheme = {
  type:'light',
  colors:{
    background: '#ffffff',
    text: '#333',
    borderColor:'#dbdbdb'
  },
  form:{
    background: '#f4f4f4',
  },
  equipment:{
    containerBg:'#eeeeee',
    cardBg:'#f6f6f6'
  }
};


