import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': 'Arial, Helvetica, sans-serif',
    // font-size: 16px;
    'color': '#000000',
    'fontVariant': 'normal'
  },
  'h2': {
    'color': '#696768'
  },
  'btn': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0',
    'backgroundColor': '#fa8217',
    'color': '#fff'
  },
  'btn:hover': {
    'backgroundColor': '#e26b02',
    'color': '#fff'
  },
  'banner': {
    'backgroundColor': '#101010',
    'backgroundImage': 'url("../images/geeks.jpg")',
    'backgroundRepeat': 'no-repeat',
    // background-size: 100% 100%;
    'backgroundPosition': 'center 70px'
  },
  'banner-txt': {
    'position': 'absolute',
    'margin': [{ 'unit': '%V', 'value': 0.12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.2 }],
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'fontSize': [{ 'unit': 'px', 'value': 60 }],
    'color': '#fff',
    'textAlign': 'center'
  },
  'banner-txt span': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'navbar': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }]
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
  'navbar-default navbar-nav>li>a': {
    'color': '#cac6c3',
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
    'color': '#fa8217',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-nav>s-active>a:focus': {
    'color': '#fa8217',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-nav>s-active>a:hover': {
    'color': '#fa8217',
    'backgroundColor': 'transparent'
  },
  'navbar-default navbar-collapse': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'userdropdown': {
    'marginTop': [{ 'unit': 'px', 'value': -12 }],
    'float': 'right'
  },
  'caret-btn': {
    'backgroundColor': 'transparent',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'caret': {
    'color': '#fa8217'
  },
  'username': {
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fa8217',
    'textTransform': 'uppercase'
  },
  'userdropdown ul': {
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': -110 }]
  },
  'userdropdown li a': {
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }]
  },
  'userdropdown li a:hover': {
    'backgroundColor': 'transparent',
    'color': '#fa8217'
  },
  'modal-header': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    // background-image: url("../images/modal-bg.png");
    'backgroundPosition': 'top left',
    'backgroundRepeat': 'repeat-x'
  },
  'modal-content': {
    'backgroundColor': '#dcdbdb',
    'borderRadius': '0'
  },
  'modal-body input': {
    'borderRadius': '0'
  },
  'modal-title': {
    'color': '#fa8217',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'modal-links': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden'
  },
  'modal-links-left': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'modal-links-left a': {
    'color': '#000'
  },
  'modal-links-left p a': {
    'color': '#fa8217',
    'fontWeight': 'bold',
    'textDecoration': 'underline'
  },
  'modal-links-left p a:hover': {
    'color': '#e26b02'
  },
  'modal-links-right': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'right'
  },
  'modal-footer': {
    'textAlign': 'center',
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }]
  },
  'subscribeclass': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'textAlign': 'right'
  },
  'btn-subscribe': {
    'textAlign': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textTransform': 'uppercase',
    'width': [{ 'unit': 'px', 'value': 143 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'backgroundImage': 'url("../images/subscribe-bg.jpg")',
    'backgroundPosition': 'top center',
    'backgroundRepeat': 'no-repeat',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-subscribe:hover': {
    'color': '#7b3d06',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-subscribe:focus': {
    'backgroundImage': 'url("../images/subscribe-bg.jpg")',
    'backgroundPosition': 'top center',
    'backgroundRepeat': 'no-repeat',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'box': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'background': '#f0e68c',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#a29415' }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'my-container': {
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden'
  },
  // .my-column{
	padding: 0px;
}
  'blogCategory-heading h1': {
    // font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
	font-size: 50px;
    'fontStyle': 'normal',
    'fontVariant': 'normal',
    'fontWeight': '500',
    'color': '#807e7e',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'blogCategory-heading': {
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // .blogCategory-box{
	text-align: center;
	padding: 15px 30px 15px 30px;
}
  'blogCategory-box p': {
    'textAlign': 'left'
  },
  'blogCategory-box h2': {
    'color': '#474747',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'textTransform': 'uppercase'
  },
  'blogCategory-box a': {
    'color': '#ff6800',
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
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer-link': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer-link ul': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'footer-link ul li': {
    'float': 'left'
  },
  'footer-link li a': {
    'display': 'block',
    'textAlign': 'center',
    'textDecoration': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }],
    'color': '#fff'
  },
  'footer-link li a:hover': {
    'color': '#fa8217'
  },
  'footer-text': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'textAlign': 'left',
    'color': '#fff',
    'paddingLeft': [{ 'unit': 'px', 'value': 40 }]
  },
  'footer-logo': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'textAlign': 'right'
  },
  // FOOTER ENDS
  'blog-box': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#f3f2f0',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#81807e' }],
    'display': 'table'
  },
  'blog-box-left': {
    'width': [{ 'unit': '%H', 'value': 0.06 }],
    'backgroundColor': '#dad9d7',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#81807e' }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'fontWeight': 'bold',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'display': 'table-cell'
  },
  'blog-box-right': {
    'width': [{ 'unit': '%H', 'value': 0.94 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 30 }],
    'textAlign': 'left',
    'display': 'table-cell',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'blog-box-right h2': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'marginBottom': [{ 'unit': 'px', 'value': 2 }]
  },
  'blog-box-right h5': {
    'color': '#000',
    'fontWeight': 'bold',
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  'blog-box-right p': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'blog-box-right a': {
    'color': '#dc6d04',
    'fontWeight': 'bold'
  },
  'user-box': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#f3f2f0',
    'display': 'table'
  },
  'user-box-left': {
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'backgroundColor': '#dad9d7',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'fontWeight': 'bold',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'display': 'table-cell'
  },
  'user-pic-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'float': 'left'
  },
  'user-pic': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'user-welcome': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'float': 'left',
    'color': '#fa8217'
  },
  'user-progress': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'float': 'left'
  },
  'user-box-right': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }],
    'textAlign': 'left',
    'display': 'table-cell',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'blog-more-header': {
    'backgroundColor': '#000',
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000' }]
  },
  // .blog-panel{
	width: 70%;
	height: auto;
	overflow: hidden;
	float: left;
	padding: 0 20px 0 0;
}
  'blog-panel h5': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'bold',
    'color': '#ff6000'
  },
  // .blog-link{
	width: 30%;
	height: auto;
	overflow: hidden;
}
  'blog-link-box': {
    'float': 'right',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'backgroundColor': '#f3f2f0',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dad9d7' }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'blog-link-box table': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'blog-link-box th': {
    'backgroundColor': '#dad9d7',
    'color': '#686765'
  },
  'blog-link-box td': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'blog-link-box a': {
    'color': '#686765',
    'textDecoration': 'none'
  },
  'blog-link-box a:hover': {
    'color': '#e16c05'
  }
});
