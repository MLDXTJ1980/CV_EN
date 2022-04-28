$(function () {
  var count = 0

  function flashing() {
    count++
    if (count % 2 == 0) {
      $("#sArrow,#mArrow,#lArrow").animate(
        {
          marginBottom: "-15px",
        },
        "slow"
      )
    } else {
      $("#sArrow,#mArrow,#lArrow").animate(
        {
          marginBottom: "-5px",
        },
        "slow"
      )
    }
    setTimeout(flashing, 500)
  }
  flashing()

  // click the arrow to show/hide the letter
  $(".arrow .navigator").on({
    mouseenter: function () {
      $(this).children("p").css({
        color: "rgb(0, 128, 128)",
        cursor: "pointer",
      })
    },
    mouseleave: function () {
      $(this).children("p").css({
        color: "#f8f8f8",
        cursor: "",
      })
    },

    click: function () {
      $("#letter").stop().slideToggle(500, "swing")
      var letterTop = $("#btn-letter").offset().top
      $("body,html")
        .stop()
        .animate(
          {
            scrollTop: letterTop,
          },
          30,
          "linear",
          function () {
            flag = true
          }
        )
    },
  })

  //click one of the skills icon to show/hide the descrption
  var flag
  $(".skill .icon").click(function () {
    var index = $(this).parent().index()
    var arr = $(".skill_list .skill")
    for (var i = 0; i < arr.length; i++) {
      arr.eq(i).find(".icon").removeClass("current")
      arr.eq(i).find(".skill_name").removeClass("special")
      arr.eq(i).find(".skill_desc").stop().fadeOut()
    }

    $(".skill_list .skill").eq(index).find(".icon").addClass("current")
    $(".skill_list .skill").eq(index).find(".skill_name").addClass("special")
    $(".skill_list .skill").eq(index).find(".skill_desc").stop().fadeToggle()
  })

  // highlight the project on mouseover
  $(".item-wrapper .item").mouseover(function () {
    $(this).find("figcaption").addClass("move")
    $(this).find("img").addClass("scale")
  })

  $(".item-wrapper .item").mouseleave(function () {
    $(this).find("figcaption").removeClass("move")
    $(this).find("img").removeClass("scale")
  })
  // click the button to show project category

  $("#project #btn-test").click(function () {
    window.open("testautomation.html")
  })

  $("#project #btn-pc").on("click", function () {
    $(".item-wrapper .item").hide()
    $(".item-wrapper .pc").show()
  })

  $("#project #btn-mobile").on("click", function () {
    $(".item-wrapper .item").hide()
    $(".item-wrapper .mobile").show()
  })

  $("#project #btn-exec").on("click", function () {
    $(".item-wrapper .item").hide()
    $(".item-wrapper .exec").show()
  })
  // click the btn in the head-content to show/hide the navbar
  $(".head-content>i").click(function () {
    $(".navbar").fadeToggle()
  })

  var skillsTop = $(".arrow").offset().top
  var projectTop = $("#project").offset().top
  $(window).scroll(function () {
    // show navbar when windowScrollTop > skillsTop
    if ($(document).scrollTop() >= skillsTop) {
      $(".navbar").fadeIn()
    } else {
      $(".navbar").fadeOut()
    }
    //show goTop arrow
    if ($(document).scrollTop() >= projectTop) {
      $(".goTop").fadeIn()
    } else {
      $(".goTop").fadeOut()
    }

    if (flag) {
      $(".floor").each(function (i, domEle) {
        if ($(document).scrollTop() >= $(domEle).offset().top) {
          $("a.nav-link").removeClass("active").eq(i).addClass("active")
        }
      })
    }
  })

  // click goTop arrow to go back
  $(".goTop").click(function () {
    var flag = false
    $("body,html")
      .stop()
      .animate(
        {
          scrollTop: 50,
        },
        30,
        "linear",
        function () {
          flag = true
        }
      )
  })
  // click btn-kontact to go to contact
  $(".btn-contact").click(function () {
    var flag = false
    var contactTop = $("#contact").offset().top - 100
    $("body,html")
      .stop()
      .animate(
        {
          scrollTop: contactTop,
        },
        30,
        "linear",
        function () {
          flag = true
        }
      )
  })

  $(".nav-item").click(function () {
    var flag = false
    var i = $(this).index()
    var floorTop = $(".floor").eq(i).offset().top - 50
    $("a.nav-link").removeClass("active")
    $("a.nav-link").eq(i).addClass("active")

    $("body,html")
      .stop()
      .animate(
        {
          scrollTop: floorTop,
        },
        50,
        "linear",
        function () {
          flag = true
        }
      )
  })

  $(".onlineshop").click(function () {
    window.open("https://mldxtj1980.github.io/online-shop/")
  })
  $(".trip").click(function () {
    window.open("https://mldxtj1980.github.io/project_flex_trip/")
  })
  $(".coding").click(function () {
    window.open(" https://mldxtj1980.github.io/Coding-School/")
  })
  $(".news").click(function () {
    window.open("https://mldxtj1980.github.io/news/")
  })
  $(".masonry").click(function () {
    window.open("https://mldxtj1980.github.io/practise_masonry/")
  })
  $(".practise").click(function () {
    window.open("practise.html")
  })
})
