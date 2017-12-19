import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Circualr Profile Image
  'user': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'borderRadius': '50%',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center center',
    'backgroundSize': 'cover'
  },
  'one': {
    'backgroundImage': 'url('/images/default.png')'
  },
  'two': {
    'backgroundImage': 'url('/images/150x150.png')'
  },
  'three': {
    'backgroundImage': 'url('/images/350x750.png')'
  },
  // ############# Start My Profile Accordion #########################
  'imgCircle': {
    'borderRadius': '50%'
  },
  // .form-control {
    padding: 10px 50px;
}
  'form-input': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '0px',
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'Profile-input-file': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999'
  },
  // .bg-form {
    width: 100%;
    position: relative;
    background: url("/background/6.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 0px;
     background-color: aliceblue; 
}
  'bg-form': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative',
    // background: url("/background/6.jpg");
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    // background-color: aliceblue;
  },
  'custom-form': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '82px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': '#fff' }],
    'overflow': 'hidden',
    'background': 'rgba(255, 255, 255, 0.6)'
  },
  'img-section': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'px', 'value': 15 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 15 }],
    // background: rgba(0, 0, 0, 0.7);
    'position': 'relative'
  },
  'img-section h4': {
    'color': '#0000ff'
  },
  '#PicUpload': {
    'color': '#ffffff',
    'width': [{ 'unit': 'px', 'value': 180 }],
    'height': [{ 'unit': 'px', 'value': 180 }],
    'background': 'rgba(255, 255, 255, 0.4)',
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }],
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.305 }],
    'borderRadius': '50%',
    'display': 'none',
    'top': [{ 'unit': 'px', 'value': 15 }]
  },
  'camera': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'color': '#333'
  },
  'custom-btn': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'borderRadius': '0px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 60 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  '#checker': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'color': 'blue'
  },
  '#checkeraboutme': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer'
  },
  '#checkerpersonalinfo': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer'
  },
  '#checkerprofinfo': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer'
  },
  'color': {
    'color': '#fff'
  },
  // ====== style for placeholder ========
  'form-control::-webkit-input-placeholder': {
    'color': 'lightgray',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'form-control:-moz-placeholder': {
    'color': 'lightgray',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'form-control::-moz-placeholder': {
    'color': 'lightgray',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'form-control:-ms-input-placeholder': {
    'color': 'lightgray',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'profile-photo': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': -28 }]
  },
  // *
 * Ranking component
  'rank-label-container': {
    'marginTop': [{ 'unit': 'px', 'value': -19 }],
    // z-index: 1000;
    'textAlign': 'center'
  },
  'labellabel-defaultrank-label': {
    'backgroundColor': '#000000',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '27px'
  },
  // .panel-border-radius {
    border-radius: 28px;
}
  // .nav-tabs>li.active>a,
.nav-tabs>li.active>a:hover,
.nav-tabs>li.active>a:focus {
    border: 1px solid #3498db;
    border-bottom-color: transparent;
}
  'nav-tabs': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ecf0f1' }]
  },
  'panel-info': {
    // border-color: #ecf0f1;
    'borderColor': 'TRANSPARENT'
  },
  'panel-edit-checker': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': -10 }],
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  // .profile-content-panel-border-radius {
    border-radius: 28px;
}
  'textarea': {
    'background': 'rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': '0',
    'cursor': 'text'
  },
  'textarea': {
    'resize': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'textarea#aboutme': {
    'borderWidth': '1px !important',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'historyblock': {
    'float': 'right'
  },
  'span#loadmoreblogbyuserid': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'pointer'
  },
  'fa': {
    // padding: 20px !important;
    font-size: 30px !important;
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'textAlign': 'center !important',
    'textDecoration': 'none !important',
    'borderRadius': '50% !important',
    'display': 'inline !important',
    'float': 'right'
  },
  // .social a:hover {    
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
  // .social ul li:hover {
    -webkit-transform: translate(110px, 0);
    -moz-transform: translate(110px, 0);
    -ms-transform: translate(110px, 0);
    -o-transform: translate(110px, 0);
    transform: translate(110px, 0);
    background: rgba(255, 255, 255, 0.4);
}
  // .commentstats {
    float: right;
}

.commentFooter {
    background-color: #3498db !important;
    color: white;
    padding: 5px 8px
}
  'commentstats': {
    'float': 'right',
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'commentFooter': {
    'backgroundColor': 'black !important',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }]
  },
  'comment-panel-default': {
    'borderColor': 'cadetblue',
    'backgroundColor': 'aliceblue'
  },
  'progress': {
    'height': [{ 'unit': 'px', 'value': 21 }]
  },
  'spanprofileCompleted': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'progress-bar': {
    // padding: 5px 0px 0px 0px !important;
    'backgroundColor': '#403c37'
  },
  'hr': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }, { 'unit': 'string', 'value': '!important' }]
  },
  'rowTempered': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'panel': {
    'backgroundColor': '#ffffff',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '2',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'text-center': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'panelpanel-infopanel-border-radiusbg-formuploadphotostatus': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'verticalAlign': 'top',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '.3rem',
    'overflow': 'hidden',
    // margin: 0px 37px 30px 36px;
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.27)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.27),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.06)' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'black' }, { 'unit': 'string', 'value': 'black' }, { 'unit': 'string', 'value': 'black' }, { 'unit': 'string', 'value': 'black' }],
    'columnGap': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'div#myTabContent': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': '%H', 'value': 0.98 }],
    'background': '#fff',
    // margin-bottom: 20px;
    'verticalAlign': 'top',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '.3rem',
    // overflow: hidden;
    'margin': [{ 'unit': 'px', 'value': -3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 19 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.09)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.09),' }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.07)' }],
    'columnGap': [{ 'unit': 'px', 'value': 20 }]
  }
});
