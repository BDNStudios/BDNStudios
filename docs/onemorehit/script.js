(function () {
  var copyStatus = document.getElementById("copy-status");
  var copyButtons = document.querySelectorAll("[data-copy-target]");

  function setStatus(message) {
    if (copyStatus) {
      copyStatus.textContent = message;
    }
  }

  function textFromElement(element) {
    return element ? element.innerText.trim().replace(/\n{3,}/g, "\n\n") : "";
  }

  copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var target = document.getElementById(button.getAttribute("data-copy-target"));
      var text = textFromElement(target);
      var originalLabel = button.textContent;

      if (!text) {
        setStatus("Copy text unavailable.");
        return;
      }

      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        setStatus("Copy unavailable in this browser. Select the description text manually.");
        return;
      }

      navigator.clipboard.writeText(text).then(function () {
        button.textContent = "Copied";
        setStatus("Description copied.");
        window.setTimeout(function () {
          button.textContent = originalLabel;
          setStatus("");
        }, 2000);
      }).catch(function () {
        setStatus("Copy failed. Select the description text manually.");
      });
    });
  });

  var dialog = document.getElementById("lightbox");
  var dialogImage = document.getElementById("lightbox-image");
  var dialogLink = document.getElementById("lightbox-link");
  var closeButton = dialog ? dialog.querySelector(".lightbox-close") : null;
  var lastFocused = null;

  if (dialog && dialogImage && dialogLink && typeof dialog.showModal === "function") {
    document.querySelectorAll("[data-lightbox-src]").forEach(function (button) {
      button.addEventListener("click", function () {
        var src = button.getAttribute("data-lightbox-src");
        var alt = button.getAttribute("data-lightbox-alt") || "";

        lastFocused = document.activeElement;
        dialogImage.src = src;
        dialogImage.alt = alt;
        dialogLink.href = src;
        dialog.showModal();

        if (closeButton) {
          closeButton.focus();
        }
      });
    });

    if (closeButton) {
      closeButton.addEventListener("click", function () {
        dialog.close();
      });
    }

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    dialog.addEventListener("close", function () {
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    });
  }
})();
