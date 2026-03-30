var singleLikes = 3;

function likeSingle() {
  singleLikes++;
  document.querySelector("#count-single").textContent =
    singleLikes + " like(s)";
}

var likes = [9, 12, 9];

function likePost(index) {
  likes[index]++;
  document.querySelector("#count-" + index).textContent =
    likes[index] + " like(s)";
}
