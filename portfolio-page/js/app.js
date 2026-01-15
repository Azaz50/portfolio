// $(document).ready(function() {
//   // import json file
//   $.getJSON("https://azaz50.github.io/portfolio/portfolio-page/js/projects.json?v=1.2", function(data) {
//     let projects = data.projects; // Ensure projects is only available here
//     let certificates = data.certificates;
//     let youtube = data.youtube;
//     youtube = [];

//     // Now that projects is loaded, append them to the portfolio-block
//     projects.forEach(project => {
//       $(".portfolio-block[data-type=projects]").append(`
//                 <div class="card">
//                     <div class="card-body">
//                         <img src="${project.cover}" alt="">
//                         <h5 class="card-title">${project.title}</h5>
//                     </div>
//                 </div>
//             `);
//     });

//     let y = 0;
//     // Now that projects is loaded, append them to the portfolio-block
//     certificates.forEach(project => {
//       y++;
//       if (y > 8) {
//         return;
//       }
//       $(".portfolio-block[data-type=certificates]").append(`
//                 <div class="card" data-index="${y}">
//                     <div class="card-body">
//                         <div class="certificate-div"><img src="${project.cover}" alt=""></div>
//                         <h5 class="card-title">${project.title}</h5>
//                     </div>
//                 </div>
//             `);
//     });
//   });

//   $(".portfolio-nav-item").on("click", function() {
//     $(".portfolio-nav-item").removeClass("active");
//     $(this).addClass("active");
//     var selector = $(this).attr("data-type");
//     $(".portfolio-block").removeClass("active");
//     $(".portfolio-block[data-type=" + selector + "]").addClass("active");

//     if (selector == "youtube") {
//       // import json file
//       $.getJSON("https://azaz50.github.io/portfolio/portfolio-page/js/projects.json?v=1.2", function(data) {
//         let youtube = data.youtube;
//         let x = 0;
//         // Now that projects is loaded, append them to the portfolio-block
//         youtube.forEach(project => {
//           x++;
//           let url = project.url;
//           // embed url
//           url = url.replace(
//             "https://www.youtube.com/watch?v=",
//             "https://www.youtube.com/embed/"
//           );
//           url = url.replace(
//             "https://youtu.be/",
//             "https://www.youtube.com/embed/"
//           );
//           if (
//             $(".portfolio-block[data-type=youtube]").find(
//               ".card[data-index=" + x + "]"
//             ).length > 0
//           ) {
//             return;
//           }
//           $(".portfolio-block[data-type=youtube]").append(`
//                     <div class="card" data-index="${x}">
//                         <div class="card-body">
//                             <iframe src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                         </div>
//                     </div>
//                 `);
//         });
//       });
//     }

//     if (selector == "certificates") {
//       // import json file
//       $.getJSON("https://azaz50.github.io/portfolio/portfolio-page/js/projects.json?v=1.2", function(
//         data
//       ) {
//         let certificates = data.certificates;
//         let x = 0;
//         // Now that projects is loaded, append them to the portfolio-block
//         certificates.forEach(project => {
//           x++;
//           if (
//             $(".portfolio-block[data-type=certificates]").find(
//               ".card[data-index=" + x + "]"
//             ).length > 0
//           ) {
//             return;
//           }
//           $(".portfolio-block[data-type=certificates]").append(`
//             <div class="card" data-index="${x}">
//                 <div class="card-body">
//                     <div class="certificate-div"><img src="${project.cover}" alt=""></div>
//                     <h5 class="card-title">${project.title}</h5>
//                 </div>
//             </div>
//         `);
//         });
//       });
//     }
//   });


//   // Toggle navigation menu on click of nav-toggle
//   $(".nav-toggle").on("click", function(e) {
//     e.stopPropagation(); // Prevents the click event from bubbling up to the document
//     if ($(this).hasClass("active")) {
//       $(this).removeClass("active");
//       $(this).html("<i class='fas fa-bars'></i>");
//       $(".header-ul").removeClass("active");
//     } else {
//       $(this).addClass("active");
//       $(this).html("<i class='fa-solid fa-xmark'></i>");
//       $(".header-ul").addClass("active");
//     }
//   });

//   // Close the menu when a nav link is clicked
//   $(".header-ul li a").on("click", function() {
//     if ($(".header-ul").hasClass("active")) {
//       $(".nav-toggle").removeClass("active");
//       $(".nav-toggle").html("<i class='fas fa-bars'></i>");
//       $(".header-ul").removeClass("active");
//     }
//   });

//   // Close the menu if clicked outside the header and nav-toggle
//   $(document).on("click", function(e) {
//     // Check if the clicked element is outside the header and nav-toggle
//     if (
//       !$(e.target).closest("header").length &&
//       !$(e.target).is(".nav-toggle, .nav-toggle *")
//     ) {
//       if ($(".header-ul").hasClass("active")) {
//         $(".nav-toggle").removeClass("active");
//         $(".nav-toggle").html("<i class='fas fa-bars'></i>");
//         $(".header-ul").removeClass("active");
//       }
//     }
//   });

//   $("h1").on("click", function() {
//     //    go to home section
//     $("html, body").animate(
//       {
//         scrollTop: $("#home").offset().top
//       },
//       1
//     );
//   });

//   AOS.init({
//     duration: 1200
//   });
// });

// // AOS Functions
// function fadeRight(element) {
//   $(element).attr("data-aos", "fade-right");
//   $(element).attr("data-aos-duration", "1200");
// }

// function fadeLeft(element) {
//   $(element).attr("data-aos", "fade-left");
//   $(element).attr("data-aos-duration", "1200");
// }

// function fadeUpLeft(element) {
//   $(element).attr("data-aos", "fade-up-left");
//   $(element).attr("data-aos-duration", "1200");
// }

// function fadeUpRight(element) {
//   $(element).attr("data-aos", "fade-up-right");
//   $(element).attr("data-aos-duration", "1200");
// }

// function zoomIn(element) {
//   $(element).attr("data-aos", "zoom-in");
//   $(element).attr("data-aos-duration", "1200");
// }

// function zoomOut(element) {
//   $(element).attr("data-aos", "zoom-out");
//   $(element).attr("data-aos-duration", "1200");
// }

// function zoomInUp(element) {
//   $(element).attr("data-aos", "zoom-in-up");
//   $(element).attr("data-aos-duration", "1200");
// }

// function zoomInDown(element) {
//   $(element).attr("data-aos", "zoom-in-down");
//   $(element).attr("data-aos-duration", "1200");
// }

// function zoomInLeft(element) {
//   $(element).attr("data-aos", "zoom-in-left");
//   $(element).attr("data-aos-duration", "1200");
// }

// function zoomInRight(element) {
//   $(element).attr("data-aos", "zoom-in-right");
//   $(element).attr("data-aos-duration", "1200");
// }

// function fadeUp(element) {
//   $(element).attr("data-aos", "fade-up");
//   $(element).attr("data-aos-duration", "1200");
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".header-nav a");

//   // Function to remove active class from all nav links
//   function removeActiveClasses() {
//     navLinks.forEach(link => {
//       link.classList.remove("active");
//     });
//   }

//   // Function to add active class to the current section's nav link
//   function addActiveClass(currentSectionId) {
//     navLinks.forEach(link => {
//       if (link.getAttribute("href") === `#${currentSectionId}`) {
//         link.classList.add("active");
//       }
//     });
//   }

//   // Scroll event listener
//   window.addEventListener("scroll", function() {
//     let currentSection = "";

//     sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;

//       // Check if section is in view
//       if (window.scrollY >= sectionTop - sectionHeight / 3) {
//         currentSection = section.getAttribute("id");
//       }
//     });

//     // Remove active class from all nav links, then add to the current section
//     if (currentSection) {
//       removeActiveClasses();
//       addActiveClass(currentSection);
//     }
//   });
// });


let allProjects = [];
let allCertificates = [];
let allYoutube = [];

$(document).ready(function () {

  /* =======================
     LOAD JSON (ONCE)
  ======================== */
  $.getJSON(
    "https://azaz50.github.io/portfolio/portfolio-page/js/projects.json?v=2",
    function (data) {

      allProjects = data.projects || [];
      allCertificates = data.certificates || [];
      allYoutube = data.youtube || [];

      /* =======================
         PROJECTS
      ======================== */
      allProjects.forEach((project, index) => {
        $(".portfolio-block[data-type=projects]").append(`
          <div class="card" data-index="${index}">
            <div class="card-body">
              <img src="${project.cover}" class="img-fluid rounded" alt="${project.title}">
              <h5 class="card-title mt-2">${project.title}</h5>
            </div>
          </div>
        `);
      });

      /* =======================
         CERTIFICATES (LIMIT 8)
      ======================== */
      allCertificates.slice(0, 8).forEach((cert, index) => {
        $(".portfolio-block[data-type=certificates]").append(`
          <div class="card" data-index="${index}">
            <div class="card-body">
              <div class="certificate-div">
                <img src="${cert.cover}" alt="${cert.title}">
              </div>
              <h5 class="card-title">${cert.title}</h5>
            </div>
          </div>
        `);
      });
    }
  );

  /* =======================
     PROJECT MODAL HANDLER
  ======================== */
  $(document).on("click", ".portfolio-block[data-type=projects] .card", function () {

    const project = allProjects[$(this).data("index")];
    if (!project) return;

    $("#projectTitle").text(project.title);
    $("#projectDescription").text(project.description);

    /* Screenshots */
    let imagesHtml = "";
    project.screenshots.forEach((img, i) => {
      imagesHtml += `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <img src="${img}" class="d-block w-100 rounded">
        </div>
      `;
    });
    $("#projectImages").html(imagesHtml);

    /* Tools */
    $("#projectTools").html(
      project.tools.map(t => `<span class="badge bg-secondary me-2">${t}</span>`).join("")
    );

    /* Live URL */
    if (project.url) {
      $("#projectLink").removeClass("d-none").attr("href", project.url);
    } else {
      $("#projectLink").addClass("d-none");
    }

    new bootstrap.Modal(document.getElementById("projectModal")).show();
  });

  /* =======================
     PORTFOLIO NAV
  ======================== */
  $(".portfolio-nav-item").on("click", function () {

    $(".portfolio-nav-item").removeClass("active");
    $(this).addClass("active");

    const selector = $(this).data("type");
    $(".portfolio-block").removeClass("active");
    $(`.portfolio-block[data-type=${selector}]`).addClass("active");

    /* YouTube Load (Lazy) */
    if (selector === "youtube" && allYoutube.length) {

      allYoutube.forEach((vid, i) => {

        if ($(`.portfolio-block[data-type=youtube] .card[data-index=${i}]`).length) return;

        let url = vid.url
          .replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
          .replace("https://youtu.be/", "https://www.youtube.com/embed/");

        $(".portfolio-block[data-type=youtube]").append(`
          <div class="card" data-index="${i}">
            <div class="card-body">
              <iframe src="${url}" allowfullscreen></iframe>
            </div>
          </div>
        `);
      });
    }
  });

  /* =======================
     MOBILE NAV
  ======================== */
  $(".nav-toggle").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("active");
    $(".header-ul").toggleClass("active");
    $(this).html($(this).hasClass("active")
      ? "<i class='fa-solid fa-xmark'></i>"
      : "<i class='fas fa-bars'></i>"
    );
  });

  $(".header-ul a").on("click", function () {
    $(".nav-toggle").removeClass("active").html("<i class='fas fa-bars'></i>");
    $(".header-ul").removeClass("active");
  });

  /* =======================
     SCROLL ACTIVE LINK
  ======================== */
  const sections = $("section");
  const navLinks = $(".header-nav a");

  $(window).on("scroll", function () {
    let current = "";

    sections.each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - $(this).height() / 3) {
        current = $(this).attr("id");
      }
    });

    navLinks.removeClass("active");
    navLinks.filter(`[href="#${current}"]`).addClass("active");
  });

  /* =======================
     AOS
  ======================== */
  AOS.init({ duration: 1200 });
});
