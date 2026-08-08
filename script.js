/* ===========================
   NOVASKY — Vanilla JavaScript
   Complete Interactive System
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Initialize Lucide Icons =====
  // Font Awesome loaded via CDN

  // ===== Product Data =====
  const products = [
    {
      id: 1, name: 'NovaFresh Face Wash', slug: 'novafresh-face-wash',
      shortDesc: 'Deep cleansing gel formula for daily use',
      desc: 'Gentle yet effective face wash that deeply cleanses while maintaining your skin\'s natural moisture balance. Enriched with natural extracts for a fresh, revitalized feel.',
      price: 899, originalPrice: 1799, rating: 4.9, reviews: 156,
      badge: '50% OFF', image: 'images/NovaSky-Facewash.png',
      images: ['images/NovaSky-Facewash.png', 'images/NovaSky-Facewash2.png'],
      features: ['Deep cleansing formula', 'Natural ingredients', 'Paraben-free', 'Suitable for all skin types'],
      category: 'Cleanser'
    },
    {
      id: 2, name: 'Nova Bright Serum', slug: 'nova-bright-serum',
      shortDesc: 'Advanced brightening & anti-aging treatment',
      desc: 'Powerful serum that brightens skin tone and reduces signs of aging. Formulated with Vitamin C and Hyaluronic Acid for maximum results in just weeks.',
      price: 1299, originalPrice: 2599, rating: 4.8, reviews: 203,
      badge: 'Best Seller', image: 'images/NovaSky-Serum.png',
      images: ['images/NovaSky-Serum.png', 'images/NovaSky-Serum2.png'],
      features: ['Vitamin C enriched', 'Anti-aging formula', 'Hyaluronic Acid', 'Visible results in 2 weeks'],
      category: 'Serum'
    },
    {
      id: 3, name: 'Nova Glow BB Cream', slug: 'nova-glow-bb-cream',
      shortDesc: 'Multi-functional beauty balm with SPF',
      desc: 'All-in-one BB cream that provides coverage, sun protection, and skincare benefits. Lightweight formula for a natural, flawless finish every day.',
      price: 999, originalPrice: 1999, rating: 4.7, reviews: 178,
      badge: 'New', image: 'images/NovaSky-BB-Cream.png',
      images: ['images/NovaSky-BB-Cream.png', 'images/NovaSky-BB-Cream2.png'],
      features: ['SPF 30 protection', 'Lightweight formula', 'Natural coverage', 'Moisturizing effect'],
      category: 'BB Cream'
    },
    {
      id: 4, name: 'Nova Sunshield SPF 60', slug: 'nova-sunshield-spf60',
      shortDesc: 'High SPF broad spectrum sun protection',
      desc: 'Advanced sunscreen with SPF 60 that provides broad-spectrum protection against UVA and UVB rays. Non-greasy, water-resistant formula for all-day defense.',
      price: 1099, originalPrice: 2199, rating: 4.8, reviews: 142,
      badge: 'Popular', image: 'images/NovaSky-SunShield.png',
      images: ['images/NovaSky-SunShield.png', 'images/NovaSky-SunShield2.png'],
      features: ['SPF 60 broad spectrum', 'Water resistant', 'Non-greasy formula', 'UVA/UVB protection'],
      category: 'Sunscreen'
    },
    {
      id: 5, name: 'AIZA Night Cream', slug: 'aiza-night-cream',
      shortDesc: 'Overnight repair and rejuvenation cream',
      desc: 'Rich night cream that works while you sleep to repair and rejuvenate your skin. Wake up to softer, smoother, and more youthful-looking skin every morning.',
      price: 1499, originalPrice: 2999, rating: 4.9, reviews: 195,
      badge: 'Premium', image: 'images/NovaSky-AizaWithning-cream.png',
      images: ['images/NovaSky-AizaWithning-cream.png', 'images/NovaSky-AizaWithning-cream2.png'],
      features: ['Overnight repair formula', 'Anti-aging complex', 'Deep moisturization', 'Dermatologically tested'],
      category: 'Night Cream'
    }
  ];

  // ===== Deals Data =====
  const deals = [
    {
      id: 1, type: 'hot', badge: 'HOT DEAL', badgeClass: 'hot-deal',
      title: 'Buy 3 Face Washes, Get 1 FREE',
      desc: 'Stock up on your favorite NovaFresh Face Wash. Buy 3 and receive 1 absolutely free!',
      priceNew: 2697, priceOld: 7196, discount: '62% OFF',
      productIds: [1, 1, 1], freeProductId: 1, freeQty: 1,
      timer: { hours: 23, mins: 45, secs: 12 }
    },
    {
      id: 2, type: 'limited', badge: 'LIMITED OFFER', badgeClass: 'limited-offer',
      title: 'AIZA Beauty Cream + Face Wash Bundle',
      desc: 'Get the complete skincare combo: AIZA Night Cream + NovaFresh Face Wash + 1 FREE AIZA Night Cream.',
      priceNew: 2398, priceOld: 5397, discount: '56% OFF',
      productIds: [5, 1], freeProductId: 5, freeQty: 1,
      timer: { hours: 18, mins: 30, secs: 0 }
    },
    {
      id: 3, type: 'bundle', badge: 'BUNDLE DEAL', badgeClass: 'bundle-deal',
      title: '2 Bright Serums — Flat 15% OFF',
      desc: 'Double up on radiance! Buy 2 Nova Bright Serums and save an extra 15% on this premium duo.',
      priceNew: 2208, priceOld: 5198, discount: '15% OFF',
      productIds: [2, 2], freeProductId: null, freeQty: 0,
      timer: { hours: 12, mins: 0, secs: 30 }
    },
    {
      id: 4, type: 'season', badge: 'SEASONAL', badgeClass: 'season-deal',
      title: 'Summer Glow Bundle',
      desc: 'Complete summer skincare: Face Wash + Sunscreen SPF 60 + BB Cream at an unbeatable price.',
      priceNew: 1999, priceOld: 4997, discount: '60% OFF',
      productIds: [1, 4, 3], freeProductId: null, freeQty: 0,
      timer: { hours: 48, mins: 15, secs: 45 }
    },
    {
      id: 5, type: 'hot', badge: 'HOT DEAL', badgeClass: 'hot-deal',
      title: 'Full Skincare Routine Kit',
      desc: 'Everything you need: Face Wash + Serum + BB Cream + Sunscreen + Night Cream. Complete routine, maximum savings.',
      priceNew: 3999, priceOld: 9995, discount: '60% OFF',
      productIds: [1, 2, 3, 4, 5], freeProductId: null, freeQty: 0,
      timer: { hours: 36, mins: 20, secs: 55 }
    }
  ];

  // ===== Reviews Data =====
  const reviews = [
    { name: 'Ayesha K.', initials: 'AK', location: 'Islamabad', rating: 5, text: 'NovaFresh Face Wash is amazing! My skin feels so clean and fresh. The best face wash I\'ve ever used in Pakistan.' },
    { name: 'Fatima M.', initials: 'FM', location: 'Lahore', rating: 5, text: 'Nova Bright Serum has transformed my skin. My dark spots have faded significantly in just 3 weeks. Highly recommended!' },
    { name: 'Sara R.', initials: 'SR', location: 'Karachi', rating: 5, text: 'The BB Cream is perfect for daily use. Light coverage, feels like second skin. My go-to for work and outings!' },
    { name: 'Amina T.', initials: 'AT', location: 'Rawalpindi', rating: 4, text: 'Great sunscreen that doesn\'t leave a white cast. My skin stays protected all day even in harsh sun. Will buy again.' },
    { name: 'Zainab B.', initials: 'ZB', location: 'Faisalabad', rating: 5, text: 'AIZA Night Cream is worth every penny. My skin looks younger and feels so soft in the morning. Absolutely love it!' },
    { name: 'Hira N.', initials: 'HN', location: 'Peshawar', rating: 5, text: 'Ordered from WhatsApp, got it delivered in 3 days! All products are genuine and effective. Great customer service.' },
    { name: 'Nadia S.', initials: 'NS', location: 'Multan', rating: 5, text: 'I\'ve been using NOVASKY for 3 months now. The quality is consistent and prices are very reasonable for the quality.' },
    { name: 'Maha J.', initials: 'MJ', location: 'Quetta', rating: 5, text: 'Love the natural ingredients! No harsh chemicals. My sensitive skin has never been happier. Thank you NOVASKY!' },
    { name: 'Rabia F.', initials: 'RF', location: 'Sialkot', rating: 5, text: 'Best skincare brand in Pakistan! The serum and night cream combo is absolutely fantastic. My skin glows now.' }
  ];

  // ===== FAQ Data =====
  const faqs = [
    { q: 'Are NOVASKY products suitable for all skin types?', a: 'Yes! Our products are formulated to be gentle yet effective for all skin types including oily, dry, combination, and sensitive skin. We recommend patch testing if you have very sensitive skin.' },
    { q: 'How long does shipping take?', a: 'We offer free delivery on orders above Rs.2000. Standard delivery takes 3-5 business days across Pakistan. Express delivery options are also available for major cities.' },
    { q: 'Are your products tested on animals?', a: 'Absolutely not! All NOVASKY products are 100% cruelty-free. We never test on animals and all our ingredients are ethically sourced.' },
    { q: 'What is your return policy?', a: 'We offer a 7-day return policy for unopened products. If you\'re not satisfied with your purchase, contact us on WhatsApp and we\'ll arrange a hassle-free return.' },
    { q: 'Can I buy NOVASKY products offline?', a: 'Currently, our products are available exclusively online through our website and WhatsApp. We\'re working on expanding to select retail stores across Pakistan.' },
    { q: 'How can I track my order?', a: 'Once your order is dispatched, you\'ll receive a tracking number via SMS and WhatsApp. You can also contact our support team on WhatsApp for real-time order updates.' }
  ];

  // ===== Cart State =====
  let cart = JSON.parse(localStorage.getItem('novasky_cart') || '[]');
  let wishlist = JSON.parse(localStorage.getItem('novasky_wishlist') || '[]');

  // ===== DOM Elements =====
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const cartBtn = document.getElementById('cartBtn');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartBadge = document.getElementById('cartBadge');
  const cartCountText = document.getElementById('cartCountText');
  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartDiscount = document.getElementById('cartDiscount');
  const cartTotal = document.getElementById('cartTotal');
  const cartCheckout = document.getElementById('cartCheckout');
  const cartContinue = document.getElementById('cartContinue');
  const dealsGrid = document.getElementById('dealsGrid');
  const productsGrid = document.getElementById('productsGrid');
  const productDetails = document.getElementById('productDetails');
  const reviewsGrid = document.getElementById('reviewsGrid');
  const reviewDots = document.getElementById('reviewDots');
  const reviewPrev = document.getElementById('reviewPrev');
  const reviewNext = document.getElementById('reviewNext');
  const faqList = document.getElementById('faqList');
  const contactForm = document.getElementById('contactForm');
  const backToTop = document.getElementById('backToTop');

  // ===== Search =====
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchBody = document.getElementById('searchBody');

  function openSearch() {
    searchOverlay.classList.add('active');
    searchOverlay.setAttribute('aria-hidden', 'false');
    setTimeout(() => searchInput.focus(), 100);
  }
  function closeSearch() {
    searchOverlay.classList.remove('active');
    searchOverlay.setAttribute('aria-hidden', 'true');
    searchInput.value = '';
    searchBody.innerHTML = '<p class="search-hint"><i class="fa-solid fa-lightbulb"></i> Type to search across all NOVASKY products</p>';
  }
  function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      searchBody.innerHTML = '<p class="search-hint"><i class="fa-solid fa-lightbulb"></i> Type to search across all NOVASKY products</p>';
      return;
    }
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.features && p.features.some(f => f.toLowerCase().includes(q)))
    );
    if (!matches.length) {
      searchBody.innerHTML = '<div class="search-no-results"><i class="fa-solid fa-face-sad-tear"></i><p>No products found for "' + query + '"</p></div>';
      return;
    }
    let html = '<ul class="search-results">';
    matches.forEach(p => {
      html += '<li class="search-result-item" data-product="' + p.id + '">' +
        '<img src="' + p.image + '" alt="' + p.name + '" class="search-result-img">' +
        '<div class="search-result-info"><h4>' + highlightText(p.name, q) + '</h4><p>' + highlightText(p.category, q) + '</p></div>' +
        '<span class="search-result-price">Rs.' + p.price.toLocaleString() + '</span></li>';
    });
    html += '</ul>';
    searchBody.innerHTML = html;
    searchBody.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const pid = Number(item.dataset.product);
        closeSearch();
        const card = document.querySelector('.product-card[data-product-id="' + pid + '"]');
        if (card) card.click();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  function highlightText(text, query) {
    const idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return text;
    return text.substring(0, idx) + '<mark>' + text.substring(idx, idx + query.length) + '</mark>' + text.substring(idx + query.length);
  }

  searchBtn.addEventListener('click', openSearch);
  searchCloseBtn.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) closeSearch(); });
  searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !searchOverlay.classList.contains('active') && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) closeSearch();
  });

  // ===== Navbar: Scroll + Promo Bar =====
  const promoBar = document.querySelector('[data-promo-bar]');
  let promoBarHeight = promoBar ? promoBar.offsetHeight : 0;

  function updateNavbar() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 30);
    if (promoBar) {
      if (scrollY > promoBarHeight) {
        navbar.classList.add('pushed-down');
        navbar.style.top = '0';
      } else {
        navbar.classList.remove('pushed-down');
        navbar.style.top = (promoBarHeight - scrollY) + 'px';
      }
    }
  }
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });
  window.addEventListener('resize', () => {
    promoBarHeight = promoBar ? promoBar.offsetHeight : 0;
    updateNavbar();
  });

  // ===== Mobile Menu =====
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  mobileCloseBtn.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ===== Carousel: pause on hover =====

  // ===== Cart Sidebar =====
  function openCart() { cartSidebar.classList.add('active'); cartOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
  function closeCart() { cartSidebar.classList.remove('active'); cartOverlay.classList.remove('active'); document.body.style.overflow = ''; }
  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  cartContinue.addEventListener('click', closeCart);

  // ===== Cart Functions =====
  function saveCart() { localStorage.setItem('novasky_cart', JSON.stringify(cart)); }
  function saveWishlist() { localStorage.setItem('novasky_wishlist', JSON.stringify(wishlist)); }

  function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) { existing.qty += qty; } else { cart.push({ id: productId, qty }); }
    saveCart(); renderCart(); openCart();
  }

  function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== productId);
    saveCart(); renderCart();
  }

  function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart(); renderCart();
  }

  function renderCart() {
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    cartBadge.textContent = totalItems;
    cartCountText.textContent = totalItems + ' item' + (totalItems !== 1 ? 's' : '');

    if (cart.length === 0) {
      cartItems.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon"><i class="fa-solid fa-bag-shopping"></i></div><p class="cart-empty-title">Cart is empty</p><p class="cart-empty-sub">Add products to get started</p></div>`;
      cartFooter.style.display = 'none';
    } else {
      let html = '', subtotal = 0, totalSaved = 0;
      cart.forEach(item => {
        const p = products.find(pr => pr.id === item.id);
        if (!p) return;
        subtotal += p.price * item.qty;
        totalSaved += (p.originalPrice - p.price) * item.qty;
        html += `<div class="cart-item"><div class="cart-item-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="cart-item-info"><div class="cart-item-name">${p.name}</div><div><span class="cart-item-price">Rs.${p.price.toLocaleString()}</span><span class="cart-item-orig">Rs.${p.originalPrice.toLocaleString()}</span></div><div class="cart-item-controls"><button class="cart-qty-btn" data-qty-minus="${p.id}" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button><span class="cart-qty">${item.qty}</span><button class="cart-qty-btn" data-qty-plus="${p.id}" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button><button class="cart-remove-btn" data-remove="${p.id}" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button></div></div></div>`;
      });
      cartItems.innerHTML = html;
      cartFooter.style.display = 'block';
      cartSubtotal.textContent = 'Rs.' + subtotal.toLocaleString();
      cartDiscount.textContent = '-Rs.' + totalSaved.toLocaleString();
      cartTotal.textContent = 'Rs.' + subtotal.toLocaleString();
    }
    // Font Awesome loaded via CDN
    bindCartControls();
  }

  function bindCartControls() {
    cartItems.querySelectorAll('[data-qty-minus]').forEach(btn => btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.qtyMinus), -1)));
    cartItems.querySelectorAll('[data-qty-plus]').forEach(btn => btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.qtyPlus), 1)));
    cartItems.querySelectorAll('[data-remove]').forEach(btn => btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.remove))));
  }

  // Cart Checkout via WhatsApp
  if (cartCheckout) {
    cartCheckout.addEventListener('click', () => {
      let msg = 'Hi! I\'d like to order:\n\n';
      cart.forEach(item => {
        const p = products.find(pr => pr.id === item.id);
        if (p) msg += `- ${p.name} x${item.qty} = Rs.${(p.price * item.qty).toLocaleString()}\n`;
      });
      const total = cart.reduce((sum, i) => { const p = products.find(pr => pr.id === i.id); return sum + (p ? p.price * i.qty : 0); }, 0);
      msg += `\nTotal: Rs.${total.toLocaleString()}\n\nPlease confirm my order. Thank you!`;
      window.open(`https://wa.me/923309125388?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // ===== Render Deals =====
  function renderDeals() {
    let html = '';
    deals.forEach(deal => {
      html += `
        <div class="deal-card">
          <div class="deal-card-accent ${deal.type}"></div>
          <div class="deal-card-inner">
            <div class="deal-top">
              <span class="deal-badge ${deal.badgeClass}"><i class="fa-solid ${deal.type === 'hot' ? 'fa-fire' : deal.type === 'limited' ? 'fa-clock' : deal.type === 'bundle' ? 'fa-box-open' : 'fa-sun'}"></i> ${deal.badge}</span>
              <span class="deal-discount"><i class="fa-solid fa-percent"></i> ${deal.discount}</span>
            </div>
            <h3 class="deal-title">${deal.title}</h3>
            <p class="deal-desc">${deal.desc}</p>
            <div class="deal-prices">
              <span class="deal-price-new">Rs.${deal.priceNew.toLocaleString()}</span>
              <span class="deal-price-old">Rs.${deal.priceOld.toLocaleString()}</span>
            </div>
            <div class="deal-timer" data-timer='${JSON.stringify(deal.timer)}'>
              <div class="deal-timer-unit"><span class="deal-timer-num" data-hours>00</span><span class="deal-timer-label">Hrs</span></div>
              <div class="deal-timer-unit"><span class="deal-timer-num" data-mins>00</span><span class="deal-timer-label">Min</span></div>
              <div class="deal-timer-unit"><span class="deal-timer-num" data-secs>00</span><span class="deal-timer-label">Sec</span></div>
            </div>
            <div class="deal-footer">
              <button class="btn btn-primary deal-shop-btn" data-deal="${deal.id}"><i class="fa-solid fa-cart-shopping"></i> Shop Deal</button>
              <a href="https://wa.me/923309125388?text=${encodeURIComponent('Hi! I\'m interested in: ' + deal.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-solid"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
            </div>
          </div>
        </div>`;
    });
    dealsGrid.innerHTML = html;
    // Bind deal shop buttons
    dealsGrid.querySelectorAll('.deal-shop-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const dealId = parseInt(btn.dataset.deal);
        const deal = deals.find(d => d.id === dealId);
        if (!deal) return;
        deal.productIds.forEach(pid => addToCart(pid, 1));
        if (deal.freeProductId) addToCart(deal.freeProductId, deal.freeQty);
      });
    });
    // Init timers
    initDealTimers();
    // Font Awesome loaded via CDN
  }

  // ===== Deal Countdown Timers =====
  function initDealTimers() {
    document.querySelectorAll('.deal-timer').forEach(timerEl => {
      const data = JSON.parse(timerEl.dataset.timer);
      let totalSecs = data.hours * 3600 + data.mins * 60 + data.secs;
      const hoursEl = timerEl.querySelector('[data-hours]');
      const minsEl = timerEl.querySelector('[data-mins]');
      const secsEl = timerEl.querySelector('[data-secs]');

      function updateTimer() {
        if (totalSecs <= 0) { totalSecs = 86400; } // Reset to 24h
        const h = Math.floor(totalSecs / 3600);
        const m = Math.floor((totalSecs % 3600) / 60);
        const s = totalSecs % 60;
        hoursEl.textContent = String(h).padStart(2, '0');
        minsEl.textContent = String(m).padStart(2, '0');
        secsEl.textContent = String(s).padStart(2, '0');
        totalSecs--;
      }
      updateTimer();
      setInterval(updateTimer, 1000);
    });
  }

  // ===== Render Products Grid =====
  function renderProductsGrid() {
    let html = '';
    products.forEach(p => {
      const isWished = wishlist.includes(p.id);
      const stars = '&#9733;'.repeat(Math.floor(p.rating)) + (p.rating % 1 ? '&#9734;' : '');
      html += `
        <div class="product-card" data-product-id="${p.id}">
          ${p.badge ? `<div class="product-card-badge">${p.badge}</div>` : ''}
          <button class="product-card-wishlist ${isWished ? 'active' : ''}" data-wishlist="${p.id}" aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}">
            <i class="fa-solid fa-heart"></i>
          </button>
          <div class="product-card-img"><img src="${p.image}" alt="${p.name} — ${p.category} by NOVASKY" loading="lazy" width="400" height="250"></div>
          <div class="product-card-body">
            <div class="product-card-rating">
              <span class="product-card-stars">${stars}</span>
              <span class="product-card-reviews">(${p.reviews})</span>
            </div>
            <h3>${p.name}</h3>
            <p>${p.shortDesc}</p>
            <div class="product-card-footer">
              <div class="product-card-price">Rs.${p.price.toLocaleString()} <small>Rs.${p.originalPrice.toLocaleString()}</small></div>
              <button class="product-card-btn add-to-cart-btn" data-add="${p.id}" aria-label="Add ${p.name} to cart"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
          </div>
        </div>`;
    });
    productsGrid.innerHTML = html;
    // Click card to scroll to detail
    productsGrid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn') || e.target.closest('.product-card-wishlist')) return;
        const el = document.getElementById('detail-' + card.dataset.productId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    // Add to cart
    productsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(parseInt(btn.dataset.add)); });
    });
    // Wishlist
    productsGrid.querySelectorAll('.product-card-wishlist').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = parseInt(btn.dataset.wishlist);
        if (wishlist.includes(pid)) { wishlist = wishlist.filter(id => id !== pid); btn.classList.remove('active'); }
        else { wishlist.push(pid); btn.classList.add('active'); }
        saveWishlist();
      });
    });
    // Font Awesome loaded via CDN
  }

  // ===== Render Product Details =====
  function renderProductDetails() {
    let html = '';
    products.forEach((p, idx) => {
      const isEven = idx % 2 === 0;
      const featHtml = p.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('');
      const stars = '&#9733;'.repeat(Math.floor(p.rating)) + (p.rating % 1 ? '&#9734;' : '');
      html += `
        <div class="detail-section" id="detail-${p.id}">
          <div class="container">
            <div class="detail-grid${isEven ? '' : ' detail-grid-reverse'}">
              <div class="detail-images">
                <div class="detail-main-img"><img src="${p.images[0]}" alt="${p.name} product image" data-main-img="${p.id}" loading="lazy"></div>
                <div class="detail-thumbs">
                  ${p.images.map((img, i) => `<div class="detail-thumb ${i === 0 ? 'active' : ''}" data-thumb="${p.id}" data-idx="${i}"><img src="${img}" alt="${p.name} image ${i + 1}" loading="lazy" width="60" height="60"></div>`).join('')}
                </div>
              </div>
              <div class="detail-info">
                <h2>${p.name}</h2>
                <div class="detail-rating"><span style="color:#f59e0b">${stars}</span> <strong>${p.rating}</strong> <span>(${p.reviews} reviews)</span></div>
                <div class="detail-price">Rs.${p.price.toLocaleString()} <small>Rs.${p.originalPrice.toLocaleString()}</small></div>
                <p class="detail-desc">${p.desc}</p>
                <ul class="detail-features">${featHtml}</ul>
                <div class="detail-actions">
                  <div class="detail-counter">
                    <div class="counter-controls">
                      <button class="counter-btn" data-counter-minus="${p.id}" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                      <span class="counter-val" data-counter-val="${p.id}">1</span>
                      <button class="counter-btn" data-counter-plus="${p.id}" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
                    </div>
                  </div>
                  <div class="detail-btns">
                    <button class="btn btn-primary add-detail-btn" data-detail-add="${p.id}"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    <a href="https://wa.me/923309125388?text=${encodeURIComponent('Hi! I\'m interested in ' + p.name + ' (Rs.' + p.price + ')')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-solid"><i class="fa-brands fa-whatsapp"></i> Buy Now</a>
                  </div>
                </div>
                <div class="detail-extra">
                  <div class="detail-extra-item"><i class="fa-solid fa-truck-fast"></i> Free Delivery</div>
                  <div class="detail-extra-item"><i class="fa-solid fa-shield-halved"></i> Genuine Product</div>
                  <div class="detail-extra-item"><i class="fa-solid fa-rotate-left"></i> 7-Day Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });
    productDetails.innerHTML = html;
    // Thumbnails
    productDetails.querySelectorAll('.detail-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const pid = parseInt(thumb.dataset.thumb);
        const idx = parseInt(thumb.dataset.idx);
        const product = products.find(p => p.id === pid);
        if (!product) return;
        const mainImg = productDetails.querySelector(`[data-main-img="${pid}"]`);
        if (mainImg) mainImg.src = product.images[idx];
        productDetails.querySelectorAll(`[data-thumb="${pid}"]`).forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
    // Counters
    productDetails.querySelectorAll('[data-counter-minus]').forEach(btn => {
      btn.addEventListener('click', () => {
        const valEl = productDetails.querySelector(`[data-counter-val="${btn.dataset.counterMinus}"]`);
        let val = parseInt(valEl.textContent);
        if (val > 1) valEl.textContent = val - 1;
      });
    });
    productDetails.querySelectorAll('[data-counter-plus]').forEach(btn => {
      btn.addEventListener('click', () => {
        const valEl = productDetails.querySelector(`[data-counter-val="${btn.dataset.counterPlus}"]`);
        let val = parseInt(valEl.textContent);
        if (val < 10) valEl.textContent = val + 1;
      });
    });
    // Add to cart from detail
    productDetails.querySelectorAll('.add-detail-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = parseInt(btn.dataset.detailAdd);
        const qty = parseInt(productDetails.querySelector(`[data-counter-val="${pid}"]`).textContent);
        addToCart(pid, qty);
      });
    });
    // Font Awesome loaded via CDN
  }

  // ===== Render Reviews =====
  let reviewPage = 0;
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  function renderReviews() {
    let html = '';
    reviews.forEach(r => {
      const stars = '&#9733;'.repeat(r.rating) + '&#9734;'.repeat(5 - r.rating);
      html += `<div class="review-card"><div class="review-stars">${stars}</div><p class="review-text">"${r.text}"</p><div class="review-author"><div class="review-avatar">${r.initials}</div><div><div class="review-author-name">${r.name}</div><div class="review-author-location">${r.location}</div></div></div></div>`;
    });
    reviewsGrid.innerHTML = html;
    let dotsHtml = '';
    for (let i = 0; i < totalPages; i++) dotsHtml += `<button class="review-dot ${i === 0 ? 'active' : ''}" data-dot="${i}" aria-label="Page ${i + 1}"></button>`;
    reviewDots.innerHTML = dotsHtml;
    bindReviewNav();
    // Font Awesome loaded via CDN
  }

  function bindReviewNav() {
    reviewDots.querySelectorAll('.review-dot').forEach(dot => dot.addEventListener('click', () => { reviewPage = parseInt(dot.dataset.dot); updateReviewPage(); }));
    reviewPrev.addEventListener('click', () => { reviewPage = (reviewPage - 1 + totalPages) % totalPages; updateReviewPage(); });
    reviewNext.addEventListener('click', () => { reviewPage = (reviewPage + 1) % totalPages; updateReviewPage(); });
  }

  function updateReviewPage() {
    const cards = reviewsGrid.querySelectorAll('.review-card');
    cards.forEach((card, i) => { card.style.display = (i >= reviewPage * reviewsPerPage && i < (reviewPage + 1) * reviewsPerPage) ? '' : 'none'; });
    reviewDots.querySelectorAll('.review-dot').forEach((dot, i) => dot.classList.toggle('active', i === reviewPage));
  }

  setInterval(() => { reviewPage = (reviewPage + 1) % totalPages; updateReviewPage(); }, 5000);

  // ===== Render FAQ =====
  function renderFAQ() {
    let html = '';
    faqs.forEach((faq, idx) => {
      html += `<div class="faq-item ${idx === 0 ? 'active' : ''}"><button class="faq-question" data-faq="${idx}">${faq.q}<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="faq-answer" ${idx === 0 ? 'style="max-height:200px"' : ''}><div class="faq-answer-inner">${faq.a}</div></div></div>`;
    });
    faqList.innerHTML = html;
    faqList.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isActive = item.classList.contains('active');
        faqList.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('active'); i.querySelector('.faq-answer').style.maxHeight = '0'; });
        if (!isActive) { item.classList.add('active'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
      });
    });
  }

  // ===== Contact Form =====
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const message = document.getElementById('formMessage').value;
    window.open(`https://wa.me/923309125388?text=${encodeURIComponent(`Hi! I'm ${name}. ${message} My phone: ${phone}`)}`, '_blank');
    contactForm.reset();
    alert('Message sent via WhatsApp!');
  });

  // ===== Back to Top =====
  window.addEventListener('scroll', () => { backToTop.classList.toggle('visible', window.scrollY > 400); }, { passive: true });
  backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // ===== Init =====
  renderDeals();
  renderProductsGrid();
  renderProductDetails();
  renderReviews();
  renderFAQ();
  renderCart();

});
