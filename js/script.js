function checkFlexGap() {
  const flex = document.createElement("div");

  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);

  const isSupported = flex.scrollHeight === 1;

  flex.remove();

  if (!isSupported) {
    document.body.classList.add("no-flexbox-gap");
  }
}

checkFlexGap();

// set current year (footer)

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

//  make mobile nav functional

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".section-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open"); // without the dot! just class name
});

// smooth scrolling to older versions of safari and microsoft edge

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault;
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelectorAll(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
