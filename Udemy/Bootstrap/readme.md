<nav></nav> : For nav bars

Use <a> anchor tag for navbar brand as it works best with it.

<div class="row"> 
<div class="col-6> style="background-color:white; border:1px solid;>
^ The screen is divided into 12 sections so can play around with sizing as such.

<div class="col-md-6"> style.... : 'md' medium, means we should have a six unit column from any size medium or upwards. So it is now responsive. 

<div class="col-lg-3"> : so we know on desktop, it is three unit colomn, anything smaler than that, it will take up 100% of the screen.

<div class="col-lg-3 col-md-4"> : means when md screen and above will have 4 unit colomns.

<div class="col-lg-3 col-md-4 col-sm-6"> : now will cover iphone size when if screen small, it'll take up 6 units of the space.

By default, the div takes up 100% (12 units) of the width.

Need to copy font link to use it in your CSS. Paste it where all the link rel are.

<div class="container-fluid"> : takes up 100% of the screen-width.



PROBLEMS:

1) Toggle button not working > solution on google: said to link to jquery, does not work either
2) font awesome icon not being read > I have the link rel @the header, not sure what the issue is
3) Lesson 78 (check through solution after fixing font awesome icon)
