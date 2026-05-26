// Cache-bust QR on load so deploys update the image reliably
(function () {
  const img = document.querySelector('.desktop-qr-image');
  if (!img) return;

  img.src = 'QR.svg?v=' + Math.floor(Date.now() / 1000);
  img.addEventListener('error', () => {
    img.alt = 'QR failed to load';
  });
})();
