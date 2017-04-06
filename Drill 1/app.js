let heroImage = $(".hero img");
$(".thumbnails").on("click","img",function(event){
  console.log("You clicked!");
  heroImage.attr("src",$(this).attr("src"));
});
