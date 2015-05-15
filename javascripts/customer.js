function get_recent_posts(topk) {
    $.getJSON("/posts.json", function(data) {
        var posts = data.posts.slice(0,topk);
        var recent_post_tag = $("ul#recent_posts");
        $.each(posts, function(index, value) {
            //ref="/blog/2015/05/15/lda-implmentation-roadmap-distribution/
            var href = "/blog/"+value.year+"/"+value.month+"/"+value.day+"/"+value.href+"/"
            var title_text = value.title;
            recent_post_tag.append(
            	$('<li>').append(
					$('<a>').attr('href',href).append(title_text)
				));
        });//end each
    });//end getJson
}//end function



function get_archive() {
    $.getJSON("/posts.json", function(data) {
        var posts = data.posts;
        var archive_tag = $("#blog-archives");
        $.each(posts, function(index, value) {
            var href = "/blog/"+value.year+"/"+value.month+"/"+value.day+"/"+value.href+"/";
            var datetime = value.year+"-"+value.month+"-"+value.day+"T04:25:22-05:00";
            archive_tag.append(
            		$('<article>').append(
            				$('<h1>').append(
            						$('<a>').attr('href',href).append(value.title)
            					)
            			).append(
            				$('<time>').attr('datetime',datetime).attr('pubdate',"").append(
            						$('<span>').attr('class','month').append(value.monthName)
            					).append(
            						$('<span>').attr('class','day').append(value.day)
            					).append(
            						$('<span>').attr('class','year').append(value.year)
            					)
            			)
            	);//end archive_tag
        });//end each
    });//end getJson
}//end function
