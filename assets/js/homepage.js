var getUserRepos = function(user) {
  //fetch("https://api.github.com/users/octocat/repos");

  // var response = fetch("https://api.github.com/users/octocat/repos");
  // console.log(response);

  // fetch("https://api.github.com/users/octocat/repos").then(function(response) {
  // console.log("inside", response);
  // });

  // console.log("outside");

  var apiUrl = "https://api.github.com/users/" + user + "/repos";
  fetch(apiUrl)
    .then(function(response) {
      response.json()
        .then(function(data) {
          console.log(data);
          });
      });
};

getUserRepos("facebook");