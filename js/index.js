/* Load Upcoming Project Posters */
$.getJSON('https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346', function(data) {
    let posterImageFragment = $(document.createDocumentFragment());
    for(const element of data) {
      let posterImage = $("<img>");
      posterImage.attr("src", element.imageUrl);
      posterImage.attr("alt", element.title);
      posterImageFragment.append(posterImage);
    }
    $("#posters").append(posterImageFragment);
});

/* Load Video in Highlight */
const commentContainer = document.getElementById("comments"); 
$.getJSON('https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0', function(data) {

  /* Add Video Element */
  let video = $("<video>");
  video.attr("width","100%");
  video.attr("height","100%");
  video.attr("controls", "true");
  let videoSource = $("<source>");
  videoSource.attr("src", data.videoUrl);
  videoSource.attr("type", "video/mp4");
  video.append(videoSource);
  $("#video-container").append(video);
    
  /* Load Highlight's Title */
  let title = $("<p>");
  title.html(data.title);
  $("#highlight-title").html(title);

  /* Load Highlight's Description */
  let des = $("<p>");
  des.html(data.description);
  $("#highlight-description").html(des);

  // /* Load Comments */
  // let commentFragment = $(document.createDocumentFragment());
  // for(const element of data) {
  //   let container = $("<div>");
    
  //   let imgContainer = $("<div>");
  //   let image = $("<img>");
  //   image.attr("class", "comment-img");
  //   image.attr("src", element.image);
  //   image.attr("alt", element.name);
  //   imgContainer.append(image);

  //   let commentConatainer = $("<div>");
  //   let commenterName = $("<p>");
  //   commenterName.attr("class", "commenter");
  //   commenterName.html(element.name);

  //   let comment = $("<p>");
  //   comment.html(element.comment);

  //   commentConatainer.append(commenterName);
  //   commentConatainer.append(comment);

  //   container.append(imgContainer);
  //   container.append(commentConatainer);

  //   commentFragment.append(container);
  // }
  // $("#comments").append(commentFragment);
  

  const commentsList = data.comments;

  for(const element of commentsList) {
      commentContainer.innerHTML += "<div> <div><img class='comment-img' src=' "+element.image+" ' alt=' "+element.name+" '></div> <div> <p id='commenter' >"+element.name+"</p> <p>"+element.comment+"</p> </div> </div>";
  }

});









// 
