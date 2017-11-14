var allUsers = [];
function users(){return allUsers};
function createUser(name,pass){
  var user = {name: name, pass: pass};
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

var allGroups = {
  "manager": [allRihgts[0], allRihgts[1], allRihgts[2]],
  "workman": [allRihgts[1], allRihgts[2], allRihgts[3]],
  "cleaner": [allRihgts[3]],
}
allGroups;

function addUserToGroup(name, group){
  for(var i=0;i<=allUsers.length;i++){
    if (allUsers[i].name == name){
    var group = {name: name, groups: group};
    allUsers.push(group);
    i++;
    }
  }
}

users();
//addUserToGroup("BYDANOV_MS","manager");