$('document').ready(function() {
	$(".button").click(function() {
  		$('.toggled_block').toggle();
	});
	$(document).on('click', function(e) {
  		if (!$(e.target).closest(".parent_block").length) {
    		$('.toggled_block').hide();
  		}
  		e.stopPropagation();
	});

});

function clock() {
  var d = new Date();
  var month_num = d.getMonth()
  var day = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();

  month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря");

  if (day <= 9) day = "0" + day;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;

  date_time = "" + day + " " + month[month_num] + " " + d.getFullYear() +
  ", "+ hours + ":" + minutes;
  if (document.layers) {
   document.layers.doc_time.document.write(date_time);
   document.layers.doc_time.document.close();
  }
  else document.getElementById("doc_time").innerHTML = date_time;
   setTimeout("clock()", 1000);
}

function openbox(id) {
  var all = document.querySelectorAll(".block-of-text");
  for (var i = 0; i < all.length; i++) {
    if (all[i].id == id) {
      all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
    } else {
      all[i].style.display = 'none';
    }
  }
}

$('document').ready(function() {
  var btnn = document.getElementById("button1");
  var btnp = document.getElementById("button2");

  var imgs = document.querySelectorAll(".card__heading-img div");
  btnp.addEventListener("click", function()
  {
    for(var i = (imgs.length)-1; i >= 0; i--)
    {
      if (imgs[i].classList.contains("active"))
      {
        imgs[i].classList.remove("active");
        if (i > 0)
        {
          imgs[i - 1].classList.add("active");
        }
        else
        {
          imgs[(imgs.length-1)].classList.add("active");
        }
        break;
      }
    }
  });

  btnn.addEventListener("click", function()
  {
    for(var i = 0; i < imgs.length; i++)
    {
      if (imgs[i].classList.contains("active"))
      {
        imgs[i].classList.remove("active");
        if (i < imgs.length - 1)
        {
          imgs[i + 1].classList.add("active");
        }
        else
        {
          imgs[0].classList.add("active");
        }
        break;
      }
    }
  });

});

