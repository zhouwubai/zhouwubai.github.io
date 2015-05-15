function get_recent_posts(topk) {
    $.getJSON("/posts.json", function(data) {
        var posts = data.posts.slice(0,topk);
        var recent_post_tag = $("ul#recent_posts");
        $.each(posts, function(index, value) {
            //ref="/blog/2015/05/15/lda-implmentation-roadmap-distribution/
            var href = "/blog/"+value.year+"/"+value.month+"/"+value.day+"/"+value.title+"/"
            var title_text = value.title.trim().split("-").join(" ");
            recent_post_tag.append(
            	$('<li>').apend(
					$('<a>').attr('href',href).append(title_text)
				));
        });//end each
    });//end getJson
}//end function

console.log("hello world");
