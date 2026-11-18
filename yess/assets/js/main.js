(() => {
  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", () => {
    // ヘッダー：スクロールで白背景に切り替え
    const header = document.querySelector("[data-header]");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // スマホメニュー
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-nav]");
    const label = document.querySelector("[data-menu-label]");
    const setMenu = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      document.body.style.overflow = open ? "hidden" : "";
      label.textContent = open ? "メニューを閉じる" : "メニューを開く";
    };
    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 960px)").addEventListener("change", (e) => e.matches && setMenu(false));

    // スクロール表示
    const targets = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -10% 0px" });
      targets.forEach((el) => io.observe(el));
    } else {
      targets.forEach((el) => el.classList.add("is-visible"));
    }

    // 写真の拡大表示
    const dialog = document.querySelector("[data-lightbox-dialog]");
    const dialogImg = document.querySelector("[data-lightbox-img]");
    if (dialog && typeof dialog.showModal === "function") {
      document.querySelectorAll("[data-lightbox]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const img = btn.querySelector("img");
          dialogImg.src = btn.dataset.lightbox;
          dialogImg.alt = img ? img.alt : "";
          dialog.showModal();
        });
      });
      dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
    }
  });
})();
