var DB_connect = require("../DB");
var dictionary = DB_connect();
function User(name){
    this.name = name;
};
User.prototype.hello = function(who){
    console.log(dictionary.Hello + " " + who.name + "!");
};

module.exports = User;
