import colors from 'vuetify/es5/util/colors';
//import '@mdi/font/css/materialdesignicons.min.css';

const theme= {
  dark: false,
  themes: {
    light: {
      primary: '#D99326',
      secondary: colors.grey.darken4,
      tertiary: colors.grey.lighten5,
      accent: colors.blue.darken2,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  }
}

export default {
  // breakpoint: {},
  icons: { iconfont: 'mdi' },
  theme
};