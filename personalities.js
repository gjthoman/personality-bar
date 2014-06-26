WebFontConfig = {
    google: { families: [ 'Open+Sans:400,700:latin' ] }
  };
  (function() {
     console.log('font');
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})

(function($){
     $(window).resize(function(){
          if ( $('body.site_rachel_cruze').length > 0 ) {
              var windowWidth = window.innerWidth || document.documentElement.clientWidth;
               if( windowWidth <= 767 ){
                    $('body').addClass('mobile');
                    $('body').removeClass('desktop');
               } else {
                    $('body').addClass('desktop');
                    $('body').removeClass('mobile');
               }
          }
     }).resize();
     $(document).ready(function(){
          $('#personality_bar ul li span').on('click',function(){
            _this = $(this).closest('li');
               if ($('body').hasClass('desktop') ){
                    if ( $(_this).find('div').is(":visible") && $(_this).hasClass('active') ) {
                         $('#personality_bar ul li').removeClass('active');
                         $('#personality_bar_wrapper').removeClass('open');
                    }else {
                         $('#personality_bar ul li').removeClass('active');
                         $('#personality_bar ul li div').hide();
                         $(_this).find('div').show();
                         $(_this).addClass('active');
                         $('#personality_bar_wrapper').addClass('open');
                    }
               } else if ($('body').hasClass('mobile')) {
                    console.log('mobile click');
                    if ($(_this).find('.desc_wrapper').is(":visible")) {
                         $('#personality_bar ul li').removeClass('active');
                         $('#personality_bar ul li .desc_wrapper').hide();
                    } else {
                         $('#personality_bar ul li .desc_wrapper').hide();
                         $('#personality_bar ul li').removeClass('active');
                         $(_this).addClass('active');
                         $(_this).find('.desc_wrapper').show();
                    }
               }
          });
          $('#personality_bar a.branding_logo').on('click', function(){
               $('#personality_bar ul li span').last().click();
          });
          $('.personality_nav_prev').on('click', function(){
               var current_active = $('#personality_bar ul li.active').index();
               $('#personality_bar ul li span').eq( current_active - 1 ).click();
          });
          $('.personality_nav_next').on('click', function(){
               var current_active = $('#personality_bar ul li.active').index();
               if ( current_active + 1 < $('#personality_bar ul li').length ){
                    $('#personality_bar ul li span').eq( current_active + 1 ).click();
               } else {
                    $('#personality_bar ul li span').eq( 0 ).click();
               }
          });

          $('#personality_bar_mobile_icon').on('click', function(){
               console.log('click');
               if ( !$('#personality_bar_wrapper').hasClass('mobile_open') ){
                    if ( $('body.site_rachel_cruze').length > 0 ) {
                         $('#page-wrapper').css('margin-left','-80%');
                    }
                    $('#personality_bar_mobile_icon').css('right','84%');
                    $('#personality_bar_wrapper').addClass('mobile_open');
               } else {
                    if ( $('body.site_rachel_cruze').length > 0 ) {
                         $('#page-wrapper').css('margin-left','');
                    }
                    $('#personality_bar_mobile_icon').css('right','');
                    $('#personality_bar_wrapper').removeClass('mobile_open');
               }
          });
     });
}(jQuery));
var body_element = document.body;
var personality_bar = document.createElement('div');
var personality_bar_mobile_icon = document.createElement('button');
var personality_bar_styles = document.createElement('style');

var $ = document; // shortcut
var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!$.getElementById(cssId))
{
    var head  = $.getElementsByTagName('head')[0];
    var link  = $.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/css/personalities.css';
    link.media = 'all';
    head.appendChild(link);
}

function hereDoc(f) {
     console.log(f);

  return f.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
}

personality_bar_mobile_icon.setAttribute('id', 'personality_bar_mobile_icon');
personality_bar_mobile_icon.style.display = "none";

personality_bar.setAttribute('id', 'personality_bar_wrapper');
personality_bar.style.display = 'none';
personality_bar.innerHTML = ["<div id='personality_bar'>",
     "<span class='personality_nav_prev icon-angle-left'>&#61700;</span>",
     "<span class='personality_nav_next icon-angle-right'>&#61701;</span>",
     "<img class='mobile_only mobile_header' src='//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/images/personalities_logo.png' />",
     "<p class='mobile_only'>Dave Ramsey first started changing lives in the early 90's as he traveled sharing his message of hope. After impacting literally millions over the last 20+ years, he's no longer alone in the mission. Dave is joined by his daughter Rachel Cruze, and money experts Chris Hogan and Andres Gutierrez. Whether they're sharing how to win with money, improve relationships, or lead effectively in business, audiences leave inspired to change their futures and informed on how to make it happen.</p>",
     "<ul>",
          "<li>",
            "<a class='branding_logo desktop_only' href='#'>RAMSEY PERSONALITIES</a>",
          "</li>",
          "<li class='personality personality_ramsey'>",
               "<div class='mobile_only headshot' style='background-image:url(//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/images/personalities_dave.jpg)'></div>",
               "<span>Dave Ramsey</span>",
               "<div class='desc_wrapper' style='display:none;'>",
                    "<div class='desc_content'>",
                         "<img class='desktop_only' src='//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/images/personalities_dave.jpg' />",
                         "<h2 class='desktop_only'>Dave Ramsey</h2>",
                         "<h3 class='desktop_only'>America's Trusted Voice on Money and Leadership</h3>",
                         "<p>America's trusted voice on money, Dave Ramsey has helped millions of families secure their futures. He's the host of The Dave Ramsey Show airing on more than 600 radio stations from coast to coast. A New York Times #1 best-selling author, Dave battled back from bankruptcy in the early 90's to lead a company voted 'Best Place to Work in Nashville' six times in a row.</p>",
                         "<a target='_self' href='http://www.daveramsey.com'>DaveRamsey.com</a>",
                    "</div>",
               "</div>",
          "</li>",
          "<li class='personality personality_cruze'>",
               "<div class='mobile_only headshot' style='background-image:url(//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/images/personalities_rachel.jpg)'></div>",
               "<span>Rachel Cruze</span>",
               "<div class='desc_wrapper' style='display:none;'>",
                    "<div class='desc_content'>",
                         "<img class='desktop_only' src='//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/daveramsey.com/media/3_way_universal/speakers_group/images/sg_bio_photo_rachel.jpg' />",
                         "<h2 class='desktop_only'>Rachel Cruze</h2>",
                         "<h3 class='desktop_only'>Speaker and Author on Life and Money for the Next Generation</h3>",
                         "<p>Growing up as Dave Ramsey's daughter, Rachel Cruze learned how to give, save and spend early on. She now travels the country sharing what she's learned and spreading her message of hope. Rachel's passion is helping young adults develop sound money habits, and teaching parents how to invest in their kids so they know how money works.</p>",
                         "<a target='_self' href='http://www.rachelcruze.com'>RachelCruze.com</a>",
                    "</div>",
               "</div>",
          "</li>",
          "<li class='personality personality_hogan'>",
               "<div class='mobile_only headshot' style='background-image:url(//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/images/personalities_hogan.jpg)'></div>",
               "<span>Chris Hogan</span>",
               "<div class='desc_wrapper' style='display:none;'>",
                    "<div class='desc_content'>",
                         "<img class='desktop_only' src='//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/images/personalities_hogan.jpg' />",
                         "<h2 class='desktop_only'>Chris Hogan</h2>",
                         "<h3 class='desktop_only'>Speaker, Financial Expert and Leadership Coach</h3>",
                         "<p>An engaging and humorous speaker, Chris has addressed audiences across the country from Fortune 500 companies to small businesses, military bases to universities. After an All-American college football career, he served as a leader in the banking and mortgage industry. Chris also ran his own successful business before joining Dave's team.</p>",
                         "<a target='_self' href='http://www.daveramsey.com/speakers/Chris-Hogan/'>Learn More</a>",
                    "</div>",
               "</div>",
          "</li>",

          "<li class='personality personality_brown'>",
               "<div class='mobile_only headshot' style='background-image:url(//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/daveramsey.com/media/3_way_universal/speakers_group/images/sg_bio_photo_chrisbrown.jpg)'></div>",
               "<span>Chris Brown</span>",
               "<div class='desc_wrapper' style='display:none;'>",
                    "<div class='desc_content'>",
                         "<img class='desktop_only' src='//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/daveramsey.com/media/3_way_universal/speakers_group/images/sg_bio_photo_chrisbrown.jpg' />",
                         "<h2 class='desktop_only'>Chris Brown</h2>",
                         "<h3 class='desktop_only'>Speaker, Pastor and Stewardship Advocate</h3>",
                         "<p>Chris Brown shares the message of stewardship, encouraging congregations to live and give with purpose. Chris has served as both campus and teaching pastors, and managed multi-million dollar church budgets as a CFO and executive pastor.</p>",
                         "<a target='_self' href='http://www.daveramsey.com/speakers/Chris-Brown/'>Learn More</a>",
                    "</div>",
               "</div>",
          "</li>",

          "<li class='personality personality_gutierrez'>",
               "<div class='mobile_only headshot' style='background-image:url(//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/images/personalities_andres.jpg)'></div>",
               "<span>Andres Gutierrez</span>",
               "<div class='desc_wrapper' style='display:none;'>",
                    "<div class='desc_content'>",
                         "<img class='desktop_only' src='//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/personality_bar/images/personalities_andres.jpg' />",
                         "<h2 class='desktop_only'>Andres Gutierrez</h2>",
                         "<h3 class='desktop_only'>Voice of Hope and Financial Freedom to the Hispanic Community</h3>",
                         "<p>Andres Gutierrez has joined forces with Dave Ramsey to spread hope to the Hispanic community. He started with nothing and became a successful entrepreneur and financial advisor. Now Andres is the host of the Andres Gutierrez Show, and travels teaching audiences large and small how to win with money.</p>",
                         "<a target='_self' href='http://andresgutierrez.com'>AndresGutierrez.com</a>",
                    "</div>",
               "</div>",
          "</li>",

          "<li class='personality personality_wright'>",
               "<div class='mobile_only headshot' style='background-image:url(//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/daveramsey.com/media/3_way_universal/speakers_group/images/sg_bio_photo_christy.jpg)'></div>",
               "<span>Christy Wright</span>",
               "<div class='desc_wrapper' style='display:none;'>",
                    "<div class='desc_content'>",
                         "<img class='desktop_only' src='//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/daveramsey.com/media/3_way_universal/speakers_group/images/sg_bio_photo_christy.jpg' />",
                         "<h2 class='desktop_only'>Christy wright</h2>",
                         "<h3 class='desktop_only'>Speaker, Financial Expert and Leadership Coach</h3>",
                         "<p>An inspiring and enthusiastic presenter, Christy Wright has spoken to groups of thousands at corporate events, women’s conferences and some of the countries top universities. Christy is also a Certified Business Coach, whose direct and genuine presentations cover a range of topics from business and money management to personal development and goal setting.</p>",
                         "<a target='_self' href='http://www.christybwright.com'>ChristBWright.com</a>",
                    "</div>",
               "</div>",
          "</li>",

          "<li class='personality last desktop_only'>",
               "<span>See All</span>",
               "<div class='desc_wrapper' style='display:none;'>",
                    "<div class='desc_content'>",
                         "<img class='desktop_only' src='//a248.e.akamai.net/f/1611/26335/9h/dramsey.download.akamai.com/23572/daveramsey.com/media/3_way_universal/speakers_group/images/seeallspeakers.jpg' />",
                         "<h2 class='desktop_only'>Ramsey Personalities</h2>",
                         "<h3 class='desktop_only'>Who are the Ramsey Personalities?</h3>",
                         "<p>Dave Ramsey started changing lives in the 90s by sharing his message of hope through books, radio and live events. After impacting millions over 20-plus years, he’s no longer alone in the mission. Dave is joined by his daughter Rachel Cruze, leadership and financial coach Chris brown, and syndicated radio host Andres Gutierrez. Whether they’re sharing how to win with money, become a better parent, or lead effectively in business, the Ramsey Personalities leave audiences ready to make it happen.</p>",
                    "</div>",
               "</div>",
          "</li>",
     "</ul>",
     "</div>"].join("\n");



body_element.insertBefore(personality_bar_mobile_icon, body_element.firstChild);
console.log('mobile icon');
body_element.insertBefore(personality_bar, body_element.firstChild);
console.log('personality bar');