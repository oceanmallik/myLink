async function loadJson(path) {
  const response = await fetch(path, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }

  return response.json();
}

const fallbackData = {
  'social.json': [
    {
      name: 'Facebook',
      href: 'https://facebook.com/oceanmallik7',
      icon: 'socialIcons/facebook.svg'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/oceanmallik/',
      icon: 'socialIcons/instagram.svg'
    },
    {
      name: 'X',
      href: 'https://x.com/oceanmallik',
      icon: 'socialIcons/x.svg'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@oceanmallik',
      icon: 'socialIcons/youtube.svg'
    },
    {
      name: 'Reddit',
      href: 'https://reddit.com/user/oceanmallik/',
      icon: 'socialIcons/reddit.svg'
    },
    {
      name: 'Steam',
      href: 'https://steamcommunity.com/id/oceanmallik/',
      icon: 'socialIcons/steam.svg'
    },
    {
      name: 'Bluesky',
      href: 'https://bsky.app/profile/oceanmallik.com',
      icon: 'socialIcons/bluesky.svg'
    },
    {
      name: 'Threads',
      href: 'https://threads.com/@oceanmallik',
      icon: 'socialIcons/threads.svg'
    }
  ],
  'website.json': [
    {
      label: 'My Website',
      href: 'https://oceanmallik.com',
      url: 'oceanmallik.com',
      icon: 'icons/website.svg'
    },
    {
      label: 'My Blog Writing Website',
      href: 'https://blog.oceanmallik.com',
      url: 'blog.oceanmallik.com',
      icon: 'icons/website.svg'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/oceanmallik',
      url: '@oceanmallik',
      icon: 'icons/github.svg'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/oceanmallik/',
      url: '@oceanmallik',
      icon: 'icons/linkedin.svg'
    }
  ]
};

async function loadJsonWithFallback(path) {
  try {
    return await loadJson(path);
  } catch (error) {
    console.warn(`Using fallback data for ${path}`, error);
    return fallbackData[path] ?? [];
  }
}

function createSocialIcon(item) {
  const anchor = document.createElement('a');
  anchor.href = item.href;
  anchor.className = 'social-icon';
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.setAttribute('aria-label', item.name);

  const image = document.createElement('img');
  image.src = item.icon;
  image.alt = item.name;
  image.className = 'social-icon-img';

  anchor.append(image);
  return anchor;
}

function createLinkCard(item) {
  const anchor = document.createElement('a');
  anchor.href = item.href;
  anchor.className = 'link-card';
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';

  // Tag donate link for special styling when label is "Donate"
  try {
    if (item.label && item.label.toString().trim().toLowerCase() === 'donate') {
      anchor.classList.add('donate');
      anchor.setAttribute('aria-label', 'Donate');
    }
  } catch (e) {
    // ignore and continue
  }

  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'link-icon-wrapper';

  const icon = document.createElement('img');
  icon.src = item.icon;
  icon.alt = '';
  icon.className = 'link-icon';
  icon.setAttribute('aria-hidden', 'true');

  const content = document.createElement('div');
  content.className = 'link-content';

  const label = document.createElement('span');
  label.className = 'link-label';
  label.textContent = item.label;

  const url = document.createElement('span');
  url.className = 'link-url';
  url.textContent = item.url;

  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  arrow.setAttribute('class', 'link-arrow');
  arrow.setAttribute('viewBox', '0 0 24 24');
  arrow.setAttribute('fill', 'none');
  arrow.setAttribute('stroke', 'currentColor');
  arrow.setAttribute('stroke-width', '2');

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', '5');
  line.setAttribute('y1', '12');
  line.setAttribute('x2', '19');
  line.setAttribute('y2', '12');

  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  polyline.setAttribute('points', '12 5 19 12 12 19');

  arrow.append(line, polyline);
  iconWrapper.append(icon);
  content.append(label, url);
  anchor.append(iconWrapper, content, arrow);

  return anchor;
}

function renderSocialLinks(items) {
  const container = document.querySelector('#social-media-section');
  if (!container) return;

  container.replaceChildren(...items.map(createSocialIcon));
}

function renderWebsiteLinks(items) {
  const container = document.querySelector('#links-grid');
  if (!container) return;

  container.replaceChildren(...items.map(createLinkCard));
}

(async function () {
  const [socialResult, websiteResult] = await Promise.allSettled([
    loadJsonWithFallback('social.json'),
    loadJsonWithFallback('website.json')
  ]);

  if (socialResult.status === 'fulfilled') {
    renderSocialLinks(socialResult.value);
  }

  if (websiteResult.status === 'fulfilled') {
    renderWebsiteLinks(websiteResult.value);
  }

  if (socialResult.status === 'rejected' || websiteResult.status === 'rejected') {
    console.error('Failed to load page data', {
      social: socialResult.status === 'rejected' ? socialResult.reason : null,
      website: websiteResult.status === 'rejected' ? websiteResult.reason : null
    });
  }

  const qrImage = document.querySelector('.desktop-qr-image');
  if (!qrImage) return;

  qrImage.src = 'QR.svg?v=' + Math.floor(Date.now() / 1000);
  qrImage.addEventListener('error', () => {
    qrImage.alt = 'QR failed to load';
  });
  
    // Track donate button clicks (non-blocking)
    const donateBtn = document.querySelector('.donate-button');
    if (donateBtn) {
      donateBtn.addEventListener('click', (e) => {
        try {
          console.info('Donate button clicked');
          // place to add analytics/event code if desired
        } catch (_) {}
      });
    }
})();
