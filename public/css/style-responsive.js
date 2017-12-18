import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ==================================================
=            Bootstrap 3 Media Queries             =
==================================================
  // ==========  Mobile First Method  ==========
  // Custom, iPhone Retina
  // Extra Small Devices, Phones
  // Small Devices, Tablets
  // Medium Devices, Desktops
  // Large Devices, Wide Screens
  // *********************************** TABS RESPONSIVE ***********************************
  'panel': {
    'backgroundColor': '#f3f2f0',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '2',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'panelwith-nav-tabs panel-heading': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#b8afa8' }]
  },
  'panelwith-nav-tabs nav-tabs': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'none'
  },
  'panelwith-nav-tabs nav-justified': {
    'marginBottom': [{ 'unit': 'px', 'value': -1 }]
  },
  'with-nav-tabspanel-default nav-tabs>li>a': {
    'color': '#636262'
  },
  'with-nav-tabspanel-default nav-tabs>li>a:hover': {
    'color': '#636262'
  },
  'with-nav-tabspanel-default nav-tabs>li>a:focus': {
    'color': '#636262'
  },
  'with-nav-tabspanel-default nav-tabs>open>a': {
    'color': '#777',
    'backgroundColor': '#ddd',
    'borderColor': 'transparent'
  },
  'with-nav-tabspanel-default nav-tabs>open>a:hover': {
    'color': '#777',
    'backgroundColor': '#ddd',
    'borderColor': 'transparent'
  },
  'with-nav-tabspanel-default nav-tabs>open>a:focus': {
    'color': '#777',
    'backgroundColor': '#ddd',
    'borderColor': 'transparent'
  },
  'with-nav-tabspanel-default nav-tabs>li>a:hover': {
    'color': '#777',
    'backgroundColor': '#ddd',
    'borderColor': 'transparent'
  },
  'with-nav-tabspanel-default nav-tabs>li>a:focus': {
    'color': '#777',
    'backgroundColor': '#ddd',
    'borderColor': 'transparent'
  },
  'with-nav-tabspanel-default nav-tabs>liactive>a': {
    'color': '#fff',
    'backgroundColor': '#b8afa8',
    'borderColor': '#b8afa8',
    'borderBottomColor': 'transparent'
  },
  'with-nav-tabspanel-default nav-tabs>liactive>a:hover': {
    'color': '#fff',
    'backgroundColor': '#b8afa8',
    'borderColor': '#b8afa8',
    'borderBottomColor': 'transparent'
  },
  'with-nav-tabspanel-default nav-tabs>liactive>a:focus': {
    'color': '#fff',
    'backgroundColor': '#b8afa8',
    'borderColor': '#b8afa8',
    'borderBottomColor': 'transparent'
  },
  'with-nav-tabspanel-default nav-tabs>lidropdown dropdown-menu': {
    'backgroundColor': '#f5f5f5',
    'borderColor': '#b8afa8'
  },
  'with-nav-tabspanel-default nav-tabs>lidropdown dropdown-menu>li>a': {
    'color': '#777'
  },
  'with-nav-tabspanel-default nav-tabs>lidropdown dropdown-menu>li>a:hover': {
    'backgroundColor': '#ddd'
  },
  'with-nav-tabspanel-default nav-tabs>lidropdown dropdown-menu>li>a:focus': {
    'backgroundColor': '#ddd'
  },
  'with-nav-tabspanel-default nav-tabs>lidropdown dropdown-menu>active>a': {
    'color': '#fff',
    'backgroundColor': '#b8afa8'
  },
  'with-nav-tabspanel-default nav-tabs>lidropdown dropdown-menu>active>a:hover': {
    'color': '#fff',
    'backgroundColor': '#b8afa8'
  },
  'with-nav-tabspanel-default nav-tabs>lidropdown dropdown-menu>active>a:focus': {
    'color': '#fff',
    'backgroundColor': '#b8afa8'
  }
});
