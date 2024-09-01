(function() {
  // Load Telegram Web Apps SDK
  const script = document.createElement('script');
  script.src = "https://telegram.org/js/telegram-web-app.js";
  script.onload = () => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Add any custom JavaScript you need here
  };
  document.head.appendChild(script);
})();
