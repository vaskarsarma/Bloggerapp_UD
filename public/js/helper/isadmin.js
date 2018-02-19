module.exports = function(fieldvalue) {
    if (fieldvalue != undefined && fieldvalue == true) {
        return '<li><a href="/auth/dashboard">Dashboard</a></li>';
    }
}