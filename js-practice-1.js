var allUsers = [
	{name: "admin", pass: "1234", groups: ["admin", "manager", "basic"]},
	{name: "sobakajozhec", pass: "ekh228", groups: ["basic", "manager"]},
	{name: "patriot007", pass: "russiaFTW", groups: ["basic"]}
];

// var allUsers = [];
function users(){return allUsers};
function createUser(name,pass){
  var user = {name: name, pass: pass, groups: null};
  allUsers.push(user);
  return user;
}
createUser("BYDANOV_MS","Vbif");
createUser("BYDANOV_ES",":tyz");
users();

function deleteUser(name){
  for(var i=0;i<=allUsers.length;i++){
    if (allUsers[i].name == name){
    allUsers.splice(i,1);
    i++;      
    }
  }
}

//deleteUser("BYDANOV_ES");
users();

var allRihgts = ['manage users', 'cust service', 'manage ingredients', 'office cleaning'];
allRihgts;
console.log("allRihgts:");
console.log(allRihgts);
console.log();

var allGroups = {
  "manager": [allRihgts[0], allRihgts[1], allRihgts[2]],
  "workman": [allRihgts[1], allRihgts[2], allRihgts[3]],
  "cleaner": [allRihgts[3]],
}
console.log("allGroups:");
console.log(allGroups);
console.log();

function userGroups(name){
  for(var i=0;i<=allUsers.length;i++){
    if (allUsers[i].name == name){
      console.log();
      console.log("userGroups(" + name + ") -> " + allUsers[i].groups);
      return allUsers[i].groups;
    }
  }
}

function addUserToGroup(name, group){
  for(var i=0;i<allUsers.length;i++){
    if (allUsers[i].name == name){
      if (allUsers[i].groups === null){
        allUsers[i].groups = group;
      }
      else {
        allUsers[i].groups.push(group);
      }
      console.log();
      console.log("addUserToGroup(" + name + ") -> " + allUsers[i].groups);
    }
  }
}

function removeUserFromGroup(name, group){
  for(var i=0;i</*allUsers.length*/4;i++){
    if (allUsers[i].name == name){
      // allUsers[i].groups = allUsers[i].groups.concat(group);
      // .indexof(group);
      var x = allUsers[i].groups;
      for(var j=0;j<x.length;j++){
        if (x[j] == group){
          x.splice(j, 1);
          console.log(x);
          return;
        }
        // else {
        //   return 'пользователя ' + name + ' нет в группе ' + group;
        // }
        
      }
      console.log(x);
      // x.splice(group,1);
      
      console.log(typeof(allUsers[i].groups));
      // console.log(allUsers[i]);
      // var y = x.indexof(group);
      console.log();
      console.log(allUsers[i].groups);
      if (allUsers[i].groups == group){

      }
      console.log();
      // console.log("removeUserFromGroup(" + name + ") -> " + allUsers[i].groups);
    }
  } return 'пользователя ' + name + ' нет существует';
}

users();
userGroups("patriot007");
addUserToGroup("patriot007","manager");
userGroups("patriot007");
removeUserFromGroup("patriot007","manager");
