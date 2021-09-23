

function getUsername(email) { 
    var username = "";

username = {
    "user1@mail.com" : "user 1",
    "user2@mail.com" : "user 2",
    "user3@mail.com" : "user 3",
    "user4@mail.com" : "user 4",
    "user5@mail.com" : "user 5",
    "user6@mail.com" : "user 6"
}
    var username = username[email];
    return username;

}

getUsername("user2@mail.com");
module.exports = getUsername;