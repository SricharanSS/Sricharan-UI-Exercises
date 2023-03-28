/* Load Upcoming Project Posters */
$.getJSON('https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346', function(data) {
    // JSON result in `data` variable\
    const posterContainer = document.getElementById("posters");
    for(const element of data) {
        posterContainer.innerHTML += "<img src=' "+element.imageUrl+" ' alt=' "+element.title+" ' />";
    }
});

/* Load Video in Highlight */
const videoContainer = document.getElementById("video-container");
const commentContainer = document.getElementById("comments"); 
$.getJSON('https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0', function(data) {
    videoContainer.innerHTML += "<video width='100%' height='100%' autoplay='true' controls>";
    console.log(data.videoUrl);
    videoContainer.innerHTML += "<source src='"+data.videoUrl+"' type='video/mp4' >";
    videoContainer.innerHTML += "</video>";

    /* Load Highlight's Title */
    document.getElementById("highlight-title").innerHTML = "<p>"+data.title+"</p>";

    /* Load Highlight's Description */
    document.getElementById("highlight-description").innerHTML = "<p>"+data.description+"</p>";

    /* Load Comments */
    const commentsList = data.comments;

    for(const element of commentsList) {
        commentContainer.innerHTML += "<div> <div><img class='comment-img' src=' "+element.image+" ' alt=' "+element.name+" '></div> <div> <p id='commenter' >"+element.name+"</p> <p>"+element.comment+"</p> </div> </div>";
    }

});









// 
