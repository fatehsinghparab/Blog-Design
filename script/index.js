var month = {1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}
var date = new Date()
document.getElementsByTagName("small")[0].innerText = date.getDate() +" "+month[date.getMonth()]+" "+date.getFullYear()
