function setTheme(isDark) {
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
  localStorage.setItem("darkMode", isDark);
}

const isDarkMode = localStorage.getItem("darkMode") === "true";
setTheme(isDarkMode);

document.getElementById("theme-toggle").addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  setTheme(!isDark);
});

if (window.location.pathname.includes("page2.html")) {
  const params = new URLSearchParams(location.search);
  const resultsContainer = document.getElementById("results");

  for (const [key, value] of params.entries()) {
    const resultItem = document.createElement("div");
    resultItem.className = "result-item";

    const keyElement = document.createElement("strong");
    keyElement.textContent =
      key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) + ":";

    const valueElement = document.createElement("span");
    valueElement.textContent = value;

    resultItem.appendChild(keyElement);
    resultItem.appendChild(valueElement);

    resultsContainer.appendChild(resultItem);
  }
}
