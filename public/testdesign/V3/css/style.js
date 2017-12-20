import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Trebuchet MS', Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#000000',
    'fontVariant': 'normal'
  },
  'banner': {
    'minHeight': [{ 'unit': 'px', 'value': 400 }],
    'backgroundColor': '#313843',
    'background': 'url("../images/banner.jpg") no-repeat center top'
  },
  'navbar': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'transparent',
    'backgroundImage': 'url("../images/nav-bg.png")',
    'backgroundPosition': 'center bottom',
    'backgroundRepeat': 'no-repeat'
  },
  'navbar-brand': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  'navnavbar-nav': {
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'navbar-nav>li>a': {
    'color': '#b8b8ba',
    'padding': [{ 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-default navbar-nav>li>a:hover': {
    'color': '#ffffff'
  },
  'navbar-default navbar-nav>active>a': {
    'color': '#ffffff',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-nav>active>a:focus': {
    'color': '#ffffff',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-nav>active>a:hover': {
    'color': '#ffffff',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-nav>s-active>a': {
    'color': '#099cec',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-nav>s-active>a:focus': {
    'color': '#099cec',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-nav>s-active>a:hover': {
    'color': '#099cec',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-collapse': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'subscribe': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'right'
  },
  'btn-subscribe': {
    'textAlign': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'textTransform': 'uppercase',
    'width': [{ 'unit': 'px', 'value': 143 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    // background-image: url("../images/subscribe-bg.jpg");
    'backgroundPosition': 'top center',
    'backgroundRepeat': 'no-repeat',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-subscribe:hover': {
    'color': '#7b3d06',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-subscribe:focus': {
    // background-image: url("../images/subscribe-bg.jpg");
    'backgroundPosition': 'top center',
    'backgroundRepeat': 'no-repeat',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'my-container': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden'
  },
  'my-column': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'blogCategory-heading h1': {
    'fontFamily': '"Century Gothic", CenturyGothic, AppleGothic, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'fontStyle': 'normal',
    'fontVariant': 'normal',
    'fontWeight': '500',
    'color': '#807e7e'
  },
  'blogCategory-heading': {
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'blogCategory-heading h1': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'blogCategory-box': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }]
  },
  'blogCategory-box p': {
    'textAlign': 'left'
  },
  'blogCategory-box h2': {
    'color': '#474747',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'textTransform': 'uppercase'
  },
  'blogCategory-box a': {
    'color': '#099cec',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': 'bold',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // Footer
  'footer': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'backgroundColor': '#403c37',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer-logo': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'textAlign': 'center'
  },
  'footer-link': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'textAlign': 'center'
  },
  'footer ul': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'footer ul li': {
    'float': 'left'
  },
  'footer li a': {
    'display': 'block',
    'textAlign': 'center',
    'textDecoration': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'color': '#fff'
  },
  'footer-text': {
    'textAlign': 'center',
    'color': '#fff'
  }
});
