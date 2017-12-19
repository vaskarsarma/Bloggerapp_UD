import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'dashboard panel-info>panel-heading:hover': {
    'color': '#ffffff !important',
    // background-color: #8BC34A !important;
    border-color: #8BC34A !important;
  },
  'dashboard list-group>hover:hover': {
    'backgroundColor': '#ecf0f1 !important'
  },
  'dashboard list-group-item': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': -1 }],
    'backgroundColor': '#ffffff',
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'backgroundColor': '#3498db !important'
  },
  'dashboard alert-success': {
    'backgroundColor': '#3498db !important',
    'borderColor': '#3498db !important',
    'color': '#ffffff'
  },
  'dashboard list-group-item': {
    'fontWeight': 'bold'
  },
  'dashboard alert': {
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }]
  },
  // .ui-state-active {
    border: 1px solid #3498db;
    background: #3498db;
    font-weight: normal;
    color: #ffffff;
}
  'dashboard input-sm': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#3498db' }]
  },
  // .divRegUserGraph .panel-info {
    border-color: #8BC34A;
}
  // .divRegUserGraph .panel-info>.panel-heading {
    background-color: #8BC34A;
    border-color: #8BC34A;
}
  'serach btn-info': {
    'color': '#ffffff',
    // background-color: #8BC34A;
    border-color: #8BC34A;
  },
  'dashboard radio-inline': {
    'marginBottom': [{ 'unit': 'px', 'value': 11 }]
  },
  'btn-xs': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }],
    'margin': [{ 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 18 }]
  },
  'body': {
    'backgroundColor': '#ecf0f1'
  },
  'clear': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'ui-accordion ui-accordion-content': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'spanui-accordion-header-iconui-icon': {
    'maxWidth': [{ 'unit': 'px', 'value': 16 }],
    'maxHeight': [{ 'unit': 'px', 'value': 16 }],
    'overflow': 'hidden',
    'float': 'left',
    'top': [{ 'unit': 'px', 'value': 10 }]
  },
  'pull-rightcol-xs-6': {
    'textAlign': 'right',
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'spanglyphicon': {
    'color': 'white'
  },
  'dashboard close': {
    'color': '#111 !important',
    'fontFamily': ''Glyphicons Halflings' !important',
    'fontSize': [{ 'unit': 'px', 'value': 19.5 }, { 'unit': 'string', 'value': '!important' }],
    'opacity': '1.2'
  },
  'dashboard panel-heading': {
    'backgroundColor': '#3498db',
    'fontSize': [{ 'unit': 'string', 'value': 'large' }],
    'color': 'white'
  },
  'dashboard panel-title': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': 'white'
  },
  'dashboard btnbtn-primarybtn-xsuserDataColumn': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': '!important' }]
  },
  'dashboard #UserSearchBtn': {
    'backgroundColor': '#3498db'
  },
  'dashboard #graphContainer': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'verticalAlign': 'top',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '.3rem',
    'overflow': 'hidden',
    // margin: 0px 37px 30px 36px;
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.19)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.19),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.23)' }],
    'columnGap': [{ 'unit': 'px', 'value': 20 }]
  },
  'dashboard #loginGraphContainer': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'verticalAlign': 'top',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '.3rem',
    'overflow': 'hidden',
    // margin: 0px 37px 30px 36px;
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.19)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.19),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.23)' }],
    'columnGap': [{ 'unit': 'px', 'value': 20 }]
  },
  'col-lg-12table-responsivedivUserInnerTable': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': '%H', 'value': 0.98 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'verticalAlign': 'top',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '.3rem',
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.19)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.19),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.23)' }],
    'columnGap': [{ 'unit': 'px', 'value': 20 }]
  }
});
