/* ===========================
   NOVASKY — Vanilla JavaScript
   Complete Interactive System
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Business Constants (single source of truth) =====
  const TWO_PACK_DISCOUNT_RATE = 0.08;        // 8% on eligible 2-pack pairs
  const ADVANCE_PAYMENT_RATE = 0.05;          // 5% advance payment discount
  const FREE_DELIVERY_THRESHOLD = 3000;       // free delivery when subtotal > Rs.3,000
  const STANDARD_DELIVERY_FEE = 250;          // applies when subtotal <= Rs.3,000
  const MAX_QTY_PER_ITEM = 10;
  const WHATSAPP_NUMBER = '923309125388';

  // ===== Product Data =====
  const products = [
    {
      id: 1, name: 'NovaFresh Face Wash', slug: 'novafresh-face-wash',
      shortDesc: 'Deep cleansing gel formula for daily use',
      desc: 'Gentle yet effective face wash that deeply cleanses while maintaining your skin\'s natural moisture balance. Enriched with natural extracts for a fresh, revitalized feel.',
      price: 1099, originalPrice: 2199, rating: 4.9, reviews: 156,
      badge: '50% OFF', image: 'images/webp/Facewash-Thumbnail.webp',
      images: ['images/webp/Facewash-Thumbnail.webp', 'images/webp/NovaSky-Facewash.webp', 'images/webp/NovaSky-Facewash2.webp'],
      features: ['Deep cleansing formula', 'Natural ingredients', 'Paraben-free', 'Suitable for all skin types'],
      category: 'Cleanser', twoPack: true
    },
    {
      id: 2, name: 'Nova Bright Serum', slug: 'nova-bright-serum',
      shortDesc: 'Advanced brightening & anti-aging treatment',
      desc: 'Powerful serum that brightens skin tone and reduces signs of aging. Formulated with Vitamin C and Hyaluronic Acid for maximum results in just weeks.',
      price: 1699, originalPrice: 3399, rating: 4.8, reviews: 203,
      badge: 'Best Seller', image: 'images/webp/Serum-Thumbnail.webp',
      images: ['images/webp/Serum-Thumbnail.webp', 'images/webp/NovaSky-Serum.webp', 'images/webp/NovaSky-Serum2.webp'],
      features: ['Vitamin C enriched', 'Anti-aging formula', 'Hyaluronic Acid', 'Visible results in 2 weeks'],
      category: 'Serum', twoPack: true
    },
    {
      id: 4, name: 'Nova Sunshield SPF 60', slug: 'nova-sunshield-spf60',
      shortDesc: 'High SPF broad spectrum sun protection',
      desc: 'Advanced sunscreen with SPF 60 that provides broad-spectrum protection against UVA and UVB rays. Non-greasy, water-resistant formula for all-day defense.',
      price: 1499, originalPrice: 2999, rating: 4.8, reviews: 142,
      badge: 'Popular', image: 'images/webp/Sunshield-Thumbnail.webp',
      images: ['images/webp/Sunshield-Thumbnail.webp', 'images/webp/NovaSky-SunShield.webp', 'images/webp/NovaSky-SunShield2.webp'],
      features: ['SPF 60 broad spectrum', 'Water resistant', 'Non-greasy formula', 'UVA/UVB protection'],
      category: 'Sunscreen', twoPack: true
    },
    {
      id: 5, name: 'AIZA Night Cream', slug: 'aiza-night-cream',
      shortDesc: 'Overnight repair and rejuvenation cream',
      desc: 'Rich night cream that works while you sleep to repair and rejuvenate your skin. Wake up to softer, smoother, and more youthful-looking skin every morning.',
      price: 1199, originalPrice: 2399, rating: 4.9, reviews: 195,
      badge: 'Premium', image: 'images/webp/Aiza-Thumbnail.webp',
      images: ['images/webp/Aiza-Thumbnail.webp', 'images/webp/NovaSky-AizaWithning-cream.webp', 'images/webp/NovaSky-AizaWithning-cream2.webp'],
      features: ['Overnight repair formula', 'Anti-aging complex', 'Deep moisturization', 'Dermatologically tested'],
      category: 'Night Cream', twoPack: true
    }
  ];

  // ===== Reviews Data =====
  const reviews = [
    { name: 'Ayesha K.', initials: 'AK', location: 'Islamabad', rating: 5, text: 'NovaFresh Face Wash is amazing! My skin feels so clean and fresh. The best face wash I\'ve ever used in Pakistan.' },
    { name: 'Fatima M.', initials: 'FM', location: 'Lahore', rating: 5, text: 'Nova Bright Serum has transformed my skin. My dark spots have faded significantly in just 3 weeks. Highly recommended!' },
    { name: 'Sara R.', initials: 'SR', location: 'Karachi', rating: 5, text: 'I ordered the Complete Skincare Set — everything arrived beautifully packed and my skin has never looked better. Great value!' },
    { name: 'Amina T.', initials: 'AT', location: 'Rawalpindi', rating: 4, text: 'Great sunscreen that doesn\'t leave a white cast. My skin stays protected all day even in harsh sun. Will buy again.' },
    { name: 'Zainab B.', initials: 'ZB', location: 'Faisalabad', rating: 5, text: 'AIZA Night Cream is worth every penny. My skin looks younger and feels so soft in the morning. Absolutely love it!' },
    { name: 'Hira N.', initials: 'HN', location: 'Peshawar', rating: 5, text: 'Ordered from WhatsApp, got it delivered in 3 days! All products are genuine and effective. Great customer service.' },
    { name: 'Nadia S.', initials: 'NS', location: 'Multan', rating: 5, text: 'I\'ve been using NOVASKY for 3 months now. The 2 Packs offer made it so affordable. Quality is consistent.' },
    { name: 'Maha J.', initials: 'MJ', location: 'Quetta', rating: 5, text: 'Love the natural ingredients! No harsh chemicals. My sensitive skin has never been happier. Thank you NOVASKY!' },
    { name: 'Rabia F.', initials: 'RF', location: 'Sialkot', rating: 5, text: 'Best skincare brand in Pakistan! The serum and night cream combo is absolutely fantastic. My skin glows now.' }
  ];

  // ===== FAQ Data =====
  const faqs = [
    { q: 'Are NOVASKY products suitable for all skin types?', a: 'Yes! Our products are formulated to be gentle yet effective for all skin types including oily, dry, combination, and sensitive skin. We recommend patch testing if you have very sensitive skin.' },
    { q: 'How does the 2 Packs Offer work?', a: 'Buy 2 packs of any eligible product (Face Wash, Serum, Sunscreen or Night Cream) and get a flat 8% discount on the combined price of the pair. Select the "2 Packs Offer" button on the product page, or simply add 2 packs to your cart — the discount is applied automatically on every eligible pair.' },
    { q: 'Do I get a discount for advance payment?', a: 'Yes! Select Advance Payment at checkout and get 5% OFF on your order total (calculated after the 2 packs discount). Cash on Delivery orders do not receive the advance payment discount. Advance payment orders are marked as paid only after the payment is received and verified.' },
    { q: 'How long does shipping take?', a: 'We offer free delivery on orders above Rs.3,000. For orders of Rs.3,000 or below, a standard delivery charge of Rs.250 applies. Standard delivery takes 3-5 business days across Pakistan. Express delivery options are also available for major cities.' },
    { q: 'Are your products tested on animals?', a: 'Absolutely not! All NOVASKY products are 100% cruelty-free. We never test on animals and all our ingredients are ethically sourced.' },
    { q: 'What is your return policy?', a: 'We offer a 7-day return policy for unopened products. If you\'re not satisfied with your purchase, contact us on WhatsApp and we\'ll arrange a hassle-free return.' },
    { q: 'Can I buy NOVASKY products offline?', a: 'Currently, our products are available exclusively online through our website and WhatsApp. We\'re working on expanding to select retail stores across Pakistan.' },
    { q: 'How can I track my order?', a: 'Once your order is dispatched, you\'ll receive a tracking number via SMS and WhatsApp. You can also contact our support team on WhatsApp for real-time order updates.' }
  ];

  // ===== Complete Product Information (exact copy — shown inside product detail sections) =====
  const productFullInfo = {
    5: { // AIZA Night Beauty Cream
      name: 'AIZA NIGHT BEAUTY CREAM',
      description: 'AIZA Night Beauty Cream is a rich and nourishing formula designed to repair, rejuvenate and brighten your skin while you sleep. Enriched with natural extracts, it helps reduce dark spots, improves skin elasticity, and restores a soft, smooth and radiant complexion.',
      benefits: [
        'Deeply nourishes and hydrates',
        'Helps repair skin overnight',
        'Brightens and evens skin tone',
        'Reduces dark spots and dullness',
        'Improves skin elasticity',
        'Softens and smooths skin',
        'For all skin types'
      ],
      ingredients: 'Aqua, Glycerin, Caprylic/Capric Triglyceride, Cetyl Alcohol, Glyceryl Stearate, Niacinamide, Stearic Acid, Kojic Acid Dipalmitate, Alpha Arbutin, Licorice Extract, Aloe Vera Extract, Vitamin E Acetate, Phenoxyethanol, Ethylhexylglycerin, Fragrance',
      directions: 'Apply a small amount evenly on clean face and neck before bedtime. Gently massage in a circular motion until fully absorbed. Use daily at night for best results.',
      caution: [
        'For external use only',
        'Avoid contact with eyes',
        'Discontinue use if irritation occurs',
        'Keep out of reach of children'
      ],
      storage: null,
      info: [
        'Certifications: ISO 9001:2015, ISO 14001, Halal, GMP'
      ],
      badges: ['Not tested on animals', 'ISO 9001:2015', 'ISO 14001', 'Halal', 'GMP']
    },
    2: { // Nova Bright Serum
      name: 'NOVA BRIGHT SERUM',
      description: 'Nova Bright Serum is a powerful antioxidant formula enriched with Vitamin C that helps brighten skin, reduce dark spots and improve uneven skin tone. It helps boost collagen production and protects skin from environmental damage for a healthy, radiant glow.',
      benefits: [
        'Brightens skin',
        'Fades dark spots',
        'Evens skin tone',
        'Boosts collagen',
        'Hydrates and revitalizes',
        'Antioxidant protection'
      ],
      ingredients: 'Aqua, Ascorbic Acid (Vitamin C), Glycerin, Propylene Glycol, Niacinamide, Hyaluronic Acid, Aloe Vera Ext., Panthenol, Allantoin, Phenoxyethanol, Ethylhexylglycerin, Fragrance',
      directions: 'Apply 2-3 drops on clean face and neck. Gently massage until fully absorbed. Use daily in the morning & evening for best results.',
      caution: [
        'For external use only',
        'Avoid contact with eyes',
        'Discontinue use if irritation occurs',
        'Keep out of reach of children'
      ],
      storage: [
        'Store in a cool, dry place',
        'Protect from direct sunlight'
      ],
      info: [
        'Certifications: ISO 9001:2015, ISO 14001, Halal, GMP'
      ],
      badges: ['Dermatologically tested', 'Paraben free', 'Not tested on animals', 'ISO 9001:2015', 'ISO 14001', 'Halal', 'GMP']
    },
    4: { // Nova Sunshield SPF 60
      name: 'NOVA SUNSHIELD SPF 60',
      description: 'Nova Sunshield SPF 60 is an advanced broad spectrum sunscreen formula that protects your skin from harmful UVA and UVB rays. Its lightweight, non-oily formula spreads easily and provides long-lasting protection against sun damage, tanning, and premature aging.',
      benefits: [
        'High SPF 60 protection',
        'UVA + UVB defense',
        'Prevents sunburn',
        'Helps prevent premature aging',
        'Non-greasy and lightweight'
      ],
      ingredients: 'Aqua, Zinc Oxide, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Avobenzone, Cetyl Alcohol, Stearic Acid, Dimethicone, Glycerin, Phenoxyethanol, Carbomer, Triethanolamine, Fragrance',
      directions: 'Apply generously on face and exposed skin 15-30 minutes before sun exposure. Reapply every 2-3 hours or after drying.',
      caution: [
        'For external use only',
        'Avoid contact with eyes',
        'Discontinue use if irritation occurs'
      ],
      storage: [
        'Store in a cool, dry place',
        'Protect from direct sunlight',
        'Keep out of reach of children'
      ],
      info: [
        'Certifications: ISO 9001:2015, ISO 14001, Halal, GMP'
      ],
      badges: ['Not tested on animals', 'ISO 9001:2015', 'ISO 14001', 'Halal', 'GMP']
    },
    1: { // NovaFresh Face Wash
      name: 'NOVAFRESH FACE WASH',
      description: 'NovaFresh Face Wash is a gentle yet effective formula that deeply cleanses the skin, removes dirt, excess oil and impurities without over-drying. Enriched with Aloe Vera and Tea Tree Extract, it helps purify the skin, control oil, prevent breakouts and leave your skin fresh, clean and healthy.',
      benefits: [
        'Deep cleanses skin',
        'Removes excess oil',
        'Controls oil and shine',
        'Helps prevent breakouts',
        'Refreshing and revitalizing',
        'Maintains skin balance',
        'Suitable for all skin types'
      ],
      ingredients: 'Aqua, Glycerin, Myristic Acid, Stearic Acid, Potassium Hydroxide, Lauric Acid, Cocamidopropyl Betaine, Glycol Distearate, Niacinamide, Aloe Barbadensis Leaf Extract, Melaleuca Alternifolia (Tea Tree) Leaf Extract, Sodium Chloride, Allantoin, Disodium EDTA, Phenoxyethanol, Beads, Ethylhexylglycerin, Fragrance',
      directions: 'Apply a small amount on wet face. Gently massage in circular motion. Rinse thoroughly with water. Use twice daily for best results.',
      caution: [
        'For external use only',
        'Avoid contact with eyes',
        'Discontinue use if irritation occurs',
        'Keep out of reach of children'
      ],
      storage: [
        'Store in a cool, dry place',
        'Protect from direct sunlight',
        'Keep out of reach of children'
      ],
      info: [
        'Certifications: ISO 9001:2015, ISO 14001, Halal, GMP'
      ],
      badges: ['Not tested on animals', 'ISO 9001:2015', 'ISO 14001', 'Halal', 'GMP']
    }
  };

  // ===== Utility: money format =====
  function fmt(amount) {
    return 'Rs.' + Math.round(amount).toLocaleString('en-US');
  }
  function roundMoney(n) { return Math.round(n * 100) / 100; }

  // ===== Cart State =====
  let cart = [];
  let wishlist = [];
  let checkoutState = { paymentMethod: 'cod', name: '', phone: '', address: '' };
  let isPlacingOrder = false;
  const offerSelection = {}; // { productId: true } — 2-pack offer selected on detail page

  try {
    cart = JSON.parse(localStorage.getItem('novasky_cart') || '[]');
    wishlist = JSON.parse(localStorage.getItem('novasky_wishlist') || '[]');
    const savedPay = localStorage.getItem('novasky_pay_method');
    if (savedPay === 'advance' || savedPay === 'cod') checkoutState.paymentMethod = savedPay;
  } catch (e) {
    cart = []; wishlist = [];
  }
  if (!Array.isArray(cart)) cart = [];
  // sanitize stored cart: drop unknown ids / invalid qty (prevents price & quantity manipulation)
  cart = cart
    .filter(i => i && products.some(p => p.id === Number(i.id)))
    .map(i => ({ id: Number(i.id), qty: Math.min(Math.max(parseInt(i.qty, 10) || 1, 1), MAX_QTY_PER_ITEM) }));

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
  const cartTwoPackRow = document.getElementById('cartTwoPackRow');
  const cartTwoPackDiscount = document.getElementById('cartTwoPackDiscount');
  const cartAdvanceRow = document.getElementById('cartAdvanceRow');
  const cartAdvanceDiscount = document.getElementById('cartAdvanceDiscount');
  const cartDelivery = document.getElementById('cartDelivery');
  const cartTotal = document.getElementById('cartTotal');
  const cartContinue = document.getElementById('cartContinue');
  const cartDeliveryProgress = document.getElementById('cartDeliveryProgress');
  const deliveryProgressText = document.getElementById('deliveryProgressText');
  const deliveryProgressFill = document.getElementById('deliveryProgressFill');
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  const checkoutName = document.getElementById('checkoutName');
  const checkoutPhone = document.getElementById('checkoutPhone');
  const checkoutAddress = document.getElementById('checkoutAddress');
  const checkoutError = document.getElementById('checkoutError');
  const payCod = document.getElementById('payCod');
  const payAdvance = document.getElementById('payAdvance');
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
      searchBody.innerHTML = '<div class="search-no-results"><i class="fa-solid fa-face-sad-tear"></i><p>No products found for "' + escapeHtml(query) + '"</p></div>';
      return;
    }
    let html = '<ul class="search-results">';
    matches.forEach(p => {
      html += '<li class="search-result-item" data-product="' + p.id + '">' +
        '<img src="' + p.image + '" alt="' + escapeHtml(p.name) + '" class="search-result-img">' +
        '<div class="search-result-info"><h4>' + highlightText(p.name, q) + '</h4><p>' + highlightText(p.category, q) + '</p></div>' +
        '<span class="search-result-price">' + fmt(p.price) + '</span></li>';
    });
    html += '</ul>';
    searchBody.innerHTML = html;
    searchBody.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const pid = Number(item.dataset.product);
        closeSearch();
        const card = document.querySelector('.product-card[data-product-id="' + pid + '"]');
        if (card) card.click();
        const target = document.getElementById('cosmetics');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function highlightText(text, query) {
    const idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return escapeHtml(text);
    return escapeHtml(text.substring(0, idx)) + '<mark>' + escapeHtml(text.substring(idx, idx + query.length)) + '</mark>' + escapeHtml(text.substring(idx + query.length));
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
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  mobileCloseBtn.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ===== Desktop Dropdown =====
  const navDropdown = document.getElementById('navDropdown');
  if (navDropdown) {
    const trigger = navDropdown.querySelector('.nav-dropdown-trigger');
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      navDropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', navDropdown.classList.contains('open'));
    });
    document.addEventListener('click', (e) => {
      if (!navDropdown.contains(e.target)) {
        navDropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
    navDropdown.querySelectorAll('.nav-dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        navDropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== Mobile Dropdown =====
  document.querySelectorAll('.mobile-dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const dropdown = trigger.closest('.mobile-dropdown');
      dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', dropdown.classList.contains('open'));
    });
  });
  document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  document.querySelectorAll('.mobile-dropdown-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ===== Cart Sidebar =====
  function openCart() { cartSidebar.classList.add('active'); cartOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
  function closeCart() { cartSidebar.classList.remove('active'); cartOverlay.classList.remove('active'); document.body.style.overflow = ''; }
  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  cartContinue.addEventListener('click', closeCart);

  // ===== Persistence =====
  function saveCart() { try { localStorage.setItem('novasky_cart', JSON.stringify(cart)); } catch (e) { /* storage unavailable */ } }
  function saveWishlist() { try { localStorage.setItem('novasky_wishlist', JSON.stringify(wishlist)); } catch (e) { /* storage unavailable */ } }
  function saveOrders(orders) { try { localStorage.setItem('novasky_orders', JSON.stringify(orders)); } catch (e) { /* storage unavailable */ } }
  function loadOrders() {
    try { const o = JSON.parse(localStorage.getItem('novasky_orders') || '[]'); return Array.isArray(o) ? o : []; }
    catch (e) { return []; }
  }

  // ===== Central Pricing Engine =====
  // Order: subtotal -> 8% two-pack discount -> 5% advance discount (if selected)
  //        -> free delivery check on eligible product subtotal -> delivery fee -> total
  function computeTotals(items, paymentMethod) {
    const list = items || cart;
    const method = paymentMethod || checkoutState.paymentMethod;
    let subtotal = 0;
    let twoPackDiscount = 0;
    let itemCount = 0;
    list.forEach(item => {
      const p = products.find(pr => pr.id === item.id);
      if (!p) return;
      const qty = Math.min(Math.max(item.qty, 1), MAX_QTY_PER_ITEM);
      subtotal += p.price * qty;
      itemCount += qty;
      if (p.twoPack) {
        const pairs = Math.floor(qty / 2);
        twoPackDiscount += pairs * (p.price * 2) * TWO_PACK_DISCOUNT_RATE;
      }
    });
    twoPackDiscount = Math.round(twoPackDiscount);
    const afterTwoPack = subtotal - twoPackDiscount;
    const advanceDiscount = (method === 'advance' && subtotal > 0) ? Math.round(afterTwoPack * ADVANCE_PAYMENT_RATE) : 0;
    const freeDelivery = subtotal > FREE_DELIVERY_THRESHOLD;
    const delivery = subtotal === 0 ? 0 : (freeDelivery ? 0 : STANDARD_DELIVERY_FEE);
    const total = afterTwoPack - advanceDiscount + delivery;
    const amountForFreeDelivery = freeDelivery ? 0 : (FREE_DELIVERY_THRESHOLD + 1 - subtotal);
    return {
      subtotal,
      twoPackDiscount,
      afterTwoPack,
      advanceDiscount,
      paymentMethod: method,
      freeDelivery,
      delivery,
      total,
      amountForFreeDelivery: Math.max(0, amountForFreeDelivery),
      itemCount
    };
  }

  // ===== Cart Functions =====
  function addToCart(productId, qty = 1, shouldOpenCart = true) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const clamped = Math.min(Math.max(parseInt(qty, 10) || 1, 1), MAX_QTY_PER_ITEM);
    const existing = cart.find(item => item.id === productId);
    if (existing) { existing.qty = Math.min(existing.qty + clamped, MAX_QTY_PER_ITEM); }
    else { cart.push({ id: productId, qty: clamped }); }
    saveCart(); renderCart();
    if (shouldOpenCart) openCart();
  }

  function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== productId);
    else item.qty = Math.min(item.qty, MAX_QTY_PER_ITEM);
    saveCart(); renderCart();
  }

  function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart(); renderCart();
  }

  function renderCart() {
    const totals = computeTotals();
    cartBadge.textContent = totals.itemCount;
    cartCountText.textContent = totals.itemCount + ' item' + (totals.itemCount !== 1 ? 's' : '');

    if (cart.length === 0) {
      cartItems.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon"><i class="fa-solid fa-bag-shopping"></i></div><p class="cart-empty-title">Cart is empty</p><p class="cart-empty-sub">Add products to get started</p></div>`;
      cartFooter.style.display = 'none';
      return;
    }

    let html = '';
    cart.forEach(item => {
      const p = products.find(pr => pr.id === item.id);
      if (!p) return;
      const pairs = p.twoPack ? Math.floor(item.qty / 2) : 0;
      const itemSavings = pairs * (p.price * 2) * TWO_PACK_DISCOUNT_RATE;
      const packTag = pairs > 0
        ? `<span class="cart-offer-tag"><i class="fa-solid fa-layer-group"></i> 2 Packs Offer applied${pairs > 1 ? ' ×' + pairs : ''} — you save ${fmt(itemSavings)}</span>`
        : (p.twoPack && item.qty === 1 ? `<span class="cart-offer-hint">Add 1 more pack and get 8% OFF</span>` : '');
      html += `<div class="cart-item"><div class="cart-item-img"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy"></div><div class="cart-item-info"><div class="cart-item-name">${escapeHtml(p.name)}</div><div><span class="cart-item-price">${fmt(p.price)}</span><span class="cart-item-orig">${fmt(p.originalPrice)}</span></div>${packTag}<div class="cart-item-controls"><button class="cart-qty-btn" data-qty-minus="${p.id}" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button><span class="cart-qty">${item.qty}</span><button class="cart-qty-btn" data-qty-plus="${p.id}" aria-label="Increase quantity" ${item.qty >= MAX_QTY_PER_ITEM ? 'disabled' : ''}><i class="fa-solid fa-plus"></i></button><button class="cart-remove-btn" data-remove="${p.id}" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button></div></div></div>`;
    });
    cartItems.innerHTML = html;

    // Order summary
    cartSubtotal.textContent = fmt(totals.subtotal);
    cartTwoPackRow.style.display = totals.twoPackDiscount > 0 ? 'flex' : 'none';
    cartTwoPackDiscount.textContent = '-' + fmt(totals.twoPackDiscount);
    cartAdvanceRow.style.display = totals.advanceDiscount > 0 ? 'flex' : 'none';
    cartAdvanceDiscount.textContent = '-' + fmt(totals.advanceDiscount);
    cartDelivery.innerHTML = totals.freeDelivery
      ? '<span class="delivery-free">FREE</span>'
      : fmt(totals.delivery);
    cartTotal.textContent = fmt(totals.total);

    // Free delivery progress
    if (!totals.freeDelivery && totals.subtotal > 0) {
      cartDeliveryProgress.style.display = 'block';
      deliveryProgressText.innerHTML = `<i class="fa-solid fa-truck-fast"></i> Add <strong>${fmt(totals.amountForFreeDelivery)}</strong> more to get <strong>FREE delivery</strong> (orders above Rs.3,000)`;
      const pct = Math.min(100, Math.round((totals.subtotal / FREE_DELIVERY_THRESHOLD) * 100));
      deliveryProgressFill.style.width = pct + '%';
    } else if (totals.freeDelivery) {
      cartDeliveryProgress.style.display = 'block';
      deliveryProgressText.innerHTML = `<i class="fa-solid fa-circle-check"></i> You've unlocked <strong>FREE delivery!</strong>`;
      deliveryProgressFill.style.width = '100%';
    } else {
      cartDeliveryProgress.style.display = 'none';
    }

    // Sync payment method radios
    if (checkoutState.paymentMethod === 'advance') payAdvance.checked = true; else payCod.checked = true;
    cartFooter.style.display = 'block';
    bindCartControls();
  }

  function bindCartControls() {
    cartItems.querySelectorAll('[data-qty-minus]').forEach(btn => btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.qtyMinus), -1)));
    cartItems.querySelectorAll('[data-qty-plus]').forEach(btn => btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.qtyPlus), 1)));
    cartItems.querySelectorAll('[data-remove]').forEach(btn => btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.remove))));
  }

  // Payment method change -> recalculate advance discount
  [payCod, payAdvance].forEach(radio => {
    if (!radio) return;
    radio.addEventListener('change', () => {
      checkoutState.paymentMethod = payAdvance.checked ? 'advance' : 'cod';
      try { localStorage.setItem('novasky_pay_method', checkoutState.paymentMethod); } catch (e) { /* ignore */ }
      renderCart();
    });
  });

  // ===== Checkout: validation + order placement =====
  function validateCheckout() {
    const name = (checkoutName.value || '').trim();
    const phone = (checkoutPhone.value || '').trim();
    const address = (checkoutAddress.value || '').trim();
    if (!name || name.length < 2) return { ok: false, msg: 'Please enter your full name (at least 2 characters).' };
    if (!/^[0-9+\-\s()]{7,18}$/.test(phone)) return { ok: false, msg: 'Please enter a valid phone number (e.g. 0330 9125388).' };
    if (!address || address.length < 10) return { ok: false, msg: 'Please enter your complete delivery address (at least 10 characters).' };
    return { ok: true, name, phone, address };
  }

  function buildWhatsAppOrderMessage(order) {
    let msg = `*NEW ORDER — ${order.id}*\n\n`;
    order.items.forEach(it => {
      msg += `- ${it.name} x${it.qty} = ${fmt(it.lineTotal)}\n`;
    });
    msg += `\nSubtotal: ${fmt(order.summary.subtotal)}`;
    if (order.summary.twoPackDiscount > 0) msg += `\n2 Packs Discount (8%): -${fmt(order.summary.twoPackDiscount)}`;
    if (order.summary.advanceDiscount > 0) msg += `\nAdvance Payment Discount (5%): -${fmt(order.summary.advanceDiscount)}`;
    msg += `\nDelivery: ${order.summary.freeDelivery ? 'FREE' : fmt(order.summary.delivery)}`;
    msg += `\n*Total: ${fmt(order.summary.total)}*`;
    msg += `\n\nPayment: ${order.paymentMethod === 'advance' ? 'Advance Payment (5% OFF) — pending verification' : 'Cash on Delivery'}`;
    msg += `\n\nName: ${order.customer.name}`;
    msg += `\nPhone: ${order.customer.phone}`;
    msg += `\nAddress: ${order.customer.address}`;
    return msg;
  }

  function generateOrderId() {
    const d = new Date();
    const ymd = d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
    return 'NS-' + ymd + '-' + Math.floor(1000 + Math.random() * 9000);
  }

  function showOrderModal(order) {
    const overlay = document.getElementById('orderOverlay');
    document.getElementById('orderModalId').textContent = 'Order ID: ' + order.id;
    let summaryHtml = '';
    order.items.forEach(it => {
      summaryHtml += `<div class="order-line"><span>${escapeHtml(it.name)} × ${it.qty}</span><span>${fmt(it.lineTotal)}</span></div>`;
    });
    summaryHtml += `<div class="order-line"><span>Subtotal</span><span>${fmt(order.summary.subtotal)}</span></div>`;
    if (order.summary.twoPackDiscount > 0) summaryHtml += `<div class="order-line order-line-save"><span>2 Packs Discount (8%)</span><span>-${fmt(order.summary.twoPackDiscount)}</span></div>`;
    if (order.summary.advanceDiscount > 0) summaryHtml += `<div class="order-line order-line-save"><span>Advance Payment Discount (5%)</span><span>-${fmt(order.summary.advanceDiscount)}</span></div>`;
    summaryHtml += `<div class="order-line"><span>Delivery</span><span>${order.summary.freeDelivery ? 'FREE' : fmt(order.summary.delivery)}</span></div>`;
    summaryHtml += `<div class="order-line order-line-total"><span>Total</span><span>${fmt(order.summary.total)}</span></div>`;
    document.getElementById('orderModalSummary').innerHTML = summaryHtml;
    document.getElementById('orderModalStatus').innerHTML = order.paymentMethod === 'advance'
      ? '<i class="fa-solid fa-clock"></i> Payment status: <strong>Pending verification</strong>. Your order will be marked as paid only after we receive and verify your advance payment.'
      : '<i class="fa-solid fa-money-bill-wave"></i> Payment method: <strong>Cash on Delivery</strong>. Pay in cash when your order arrives.';
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeOrderModal() {
    const overlay = document.getElementById('orderOverlay');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.getElementById('orderModalClose').addEventListener('click', closeOrderModal);
  document.getElementById('orderOverlay').addEventListener('click', (e) => { if (e.target.id === 'orderOverlay') closeOrderModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.getElementById('orderOverlay').classList.contains('active')) closeOrderModal(); });

  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', () => {
      if (isPlacingOrder) return; // prevent duplicate order submissions
      checkoutError.textContent = '';

      if (cart.length === 0) {
        checkoutError.textContent = 'Your cart is empty. Add products first.';
        return;
      }
      const validation = validateCheckout();
      if (!validation.ok) {
        checkoutError.textContent = validation.msg;
        return;
      }

      isPlacingOrder = true;
      placeOrderBtn.disabled = true;
      placeOrderBtn.classList.add('btn-loading');
      placeOrderBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Placing Order...';

      // Snapshot validated totals (server-authoritative in a real backend;
      // here the centralized computeTotals() is the single source of truth)
      const totals = computeTotals(cart, checkoutState.paymentMethod);
      const order = {
        id: generateOrderId(),
        createdAt: new Date().toISOString(),
        items: cart.map(item => {
          const p = products.find(pr => pr.id === item.id);
          return { id: p.id, name: p.name, qty: item.qty, price: p.price, lineTotal: p.price * item.qty };
        }),
        summary: {
          subtotal: totals.subtotal,
          twoPackDiscount: totals.twoPackDiscount,
          advanceDiscount: totals.advanceDiscount,
          freeDelivery: totals.freeDelivery,
          delivery: totals.delivery,
          total: totals.total
        },
        paymentMethod: checkoutState.paymentMethod,
        // Advance payment orders are NOT marked paid — status stays pending verification.
        status: checkoutState.paymentMethod === 'advance' ? 'payment_pending' : 'confirmed',
        customer: { name: validation.name, phone: validation.phone, address: validation.address }
      };

      // Persist order (historical records preserved; never deleted)
      const orders = loadOrders();
      orders.unshift(order);
      saveOrders(orders.slice(0, 100));

      // Send order to the business via WhatsApp (existing sales workflow)
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppOrderMessage(order))}`;

      // Clear cart & checkout fields, then confirm
      cart = [];
      saveCart();
      checkoutName.value = ''; checkoutPhone.value = ''; checkoutAddress.value = '';
      checkoutState.paymentMethod = 'cod';
      try { localStorage.setItem('novasky_pay_method', 'cod'); } catch (e) { /* ignore */ }
      renderCart();

      isPlacingOrder = false;
      placeOrderBtn.disabled = false;
      placeOrderBtn.classList.remove('btn-loading');
      placeOrderBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Place Order';

      closeCart();
      showOrderModal(order);
      window.open(waUrl, '_blank');
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
          ${p.badge ? `<div class="product-card-badge">${escapeHtml(p.badge)}</div>` : ''}
          <button class="product-card-wishlist ${isWished ? 'active' : ''}" data-wishlist="${p.id}" aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}">
            <i class="fa-solid fa-heart"></i>
          </button>
          <div class="product-card-img"><img src="${p.image}" alt="${escapeHtml(p.name)} — ${escapeHtml(p.category)} by NOVASKY" loading="lazy" width="400" height="250"></div>
          <div class="product-card-body">
            <div class="product-card-rating">
              <span class="product-card-stars">${stars}</span>
              <span class="product-card-reviews">(${p.reviews})</span>
            </div>
            <h3>${escapeHtml(p.name)}</h3>
            <p>${escapeHtml(p.shortDesc)}</p>
            <div class="product-card-footer">
              <div class="product-card-price">${fmt(p.price)} <small>${fmt(p.originalPrice)}</small></div>
              <button class="product-card-btn add-to-cart-btn" data-add="${p.id}" aria-label="Add ${escapeHtml(p.name)} to cart"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            ${p.twoPack ? `<span class="product-card-offer-chip"><i class="fa-solid fa-layer-group"></i> 2 Packs — 8% OFF</span>` : ''}
          </div>
        </div>`;
    });
    productsGrid.innerHTML = html;
    productsGrid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn') || e.target.closest('.product-card-wishlist')) return;
        const el = document.getElementById('detail-' + card.dataset.productId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    productsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(parseInt(btn.dataset.add)); });
    });
    productsGrid.querySelectorAll('.product-card-wishlist').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = parseInt(btn.dataset.wishlist);
        if (wishlist.includes(pid)) { wishlist = wishlist.filter(id => id !== pid); btn.classList.remove('active'); }
        else { wishlist.push(pid); btn.classList.add('active'); }
        saveWishlist();
      });
    });
  }

  // ===== Complete Info Block Builder (shown inside each product detail section) =====
  function buildFullInfoHtml(fi) {
    if (!fi) return '';
    const benefitsHtml = fi.benefits.map(b => `<li>${escapeHtml(b)}</li>`).join('');
    const cautionHtml = fi.caution.map(c => `<li>${escapeHtml(c)}</li>`).join('');
    const storageHtml = fi.storage ? fi.storage.map(s => `<li>${escapeHtml(s)}</li>`).join('') : '';
    const ingredientsChips = fi.ingredients.split(', ').map(i => `<span class="dfi-chip">${escapeHtml(i)}</span>`).join('');
    const infoHtml = fi.info.map(item => `<li>${escapeHtml(item)}</li>`).join('');
    const badgesHtml = fi.badges.map(b => `<span class="dfi-badge"><i class="fa-solid fa-certificate"></i> ${escapeHtml(b)}</span>`).join('');
    return `
        <div class="detail-fullinfo">
          <h3 class="dfi-main-title"><i class="fa-solid fa-clipboard-list"></i> Complete Product Information</h3>

          <div class="dfi-section">
            <h4><i class="fa-solid fa-circle-info"></i> Product Description</h4>
            <p>${escapeHtml(fi.description)}</p>
          </div>

          <div class="dfi-section">
            <h4><i class="fa-solid fa-star"></i> Key Benefits</h4>
            <ul class="dfi-benefits">${benefitsHtml}</ul>
          </div>

          <div class="dfi-section">
            <h4><i class="fa-solid fa-flask"></i> Ingredients</h4>
            <div class="dfi-ingredients">${ingredientsChips}</div>
          </div>

          <div class="dfi-section">
            <h4><i class="fa-solid fa-hand-sparkles"></i> Directions for Use</h4>
            <p>${escapeHtml(fi.directions)}</p>
          </div>

          <div class="dfi-section dfi-section-caution">
            <h4><i class="fa-solid fa-triangle-exclamation"></i> Caution</h4>
            <ul class="dfi-caution">${cautionHtml}</ul>
          </div>

          ${fi.storage ? `
          <div class="dfi-section">
            <h4><i class="fa-solid fa-warehouse"></i> Storage</h4>
            <ul class="dfi-storage">${storageHtml}</ul>
          </div>` : ''}

          <div class="dfi-section">
            <h4><i class="fa-solid fa-tag"></i> Product Information</h4>
            <ul class="dfi-info">${infoHtml}</ul>
            <div class="dfi-badges">${badgesHtml}</div>
          </div>
        </div>`;
  }

  // ===== Render Product Details (with 2 Packs Offer) =====
  function renderProductDetails() {
    let html = '';
    products.forEach((p, idx) => {
      const isEven = idx % 2 === 0;
      const fi = productFullInfo[p.id];
      const featHtml = p.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${escapeHtml(f)}</li>`).join('');
      const stars = '&#9733;'.repeat(Math.floor(p.rating)) + (p.rating % 1 ? '&#9734;' : '');
      const twoPackCombined = p.price * 2;
      const twoPackDiscountAmt = roundMoney(twoPackCombined * TWO_PACK_DISCOUNT_RATE);
      const twoPackTotal = roundMoney(twoPackCombined - twoPackDiscountAmt);
      const offerHtml = p.twoPack ? `
        <div class="offer-box" data-offer-box="${p.id}">
          <div class="offer-box-head">
            <span class="offer-badge"><i class="fa-solid fa-layer-group"></i> 2 Packs Offer — Get 8% OFF</span>
            <span class="offer-check" aria-hidden="true"><i class="fa-solid fa-circle-check"></i></span>
          </div>
          <p class="offer-box-desc">Buy <strong>2 packs</strong> of this product together and get a flat <strong>8% discount</strong> on the combined price. The discount is applied automatically on every eligible pair in your cart.</p>
          <div class="offer-price-rows">
            <div class="offer-row"><span>1 pack</span><span>${fmt(p.price)}</span></div>
            <div class="offer-row"><span>2 packs (combined)</span><span>${fmt(twoPackCombined)}</span></div>
            <div class="offer-row offer-row-save"><span>8% discount</span><span>-${fmt(twoPackDiscountAmt)}</span></div>
            <div class="offer-row offer-row-total"><span>You pay for 2 packs</span><span>${fmt(twoPackTotal)}</span></div>
            <div class="offer-row offer-row-saving"><span>You save</span><span>${fmt(twoPackDiscountAmt)}</span></div>
          </div>
          <button class="btn offer-select-btn" data-offer-select="${p.id}" aria-pressed="false"><i class="fa-solid fa-check"></i> Select 2 Packs</button>
          <p class="offer-box-note"><i class="fa-solid fa-circle-info"></i> Prefer a single pack? Just use Add to Cart below — the regular purchase stays available.</p>
        </div>` : '';
      html += `
        <div class="detail-section" id="detail-${p.id}">
          <div class="container">
            <div class="detail-grid${isEven ? '' : ' detail-grid-reverse'}">
              <div class="detail-images">
                <div class="detail-main-img"><img src="${p.images[0]}" alt="${escapeHtml(p.name)} product image" data-main-img="${p.id}" loading="lazy"></div>
                <div class="detail-thumbs">
                  ${p.images.map((img, i) => `<div class="detail-thumb ${i === 0 ? 'active' : ''}" data-thumb="${p.id}" data-idx="${i}"><img src="${img}" alt="${escapeHtml(p.name)} image ${i + 1}" loading="lazy" width="60" height="60"></div>`).join('')}
                </div>
              </div>
              <div class="detail-info">
                <h2>${escapeHtml(p.name)}</h2>
                <div class="detail-rating"><span style="color:#f59e0b">${stars}</span> <strong>${p.rating}</strong> <span>(${p.reviews} reviews)</span></div>
                <div class="detail-price">${fmt(p.price)} <small>${fmt(p.originalPrice)}</small></div>
                ${offerHtml}
                <p class="detail-desc">${escapeHtml((fi && fi.description) || p.desc)}</p>
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
                    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I\'m interested in ' + p.name + ' (Rs.' + p.price + ')')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-solid"><i class="fa-brands fa-whatsapp"></i> Buy Now</a>
                  </div>
                </div>
                <div class="detail-extra">
                  <div class="detail-extra-item"><i class="fa-solid fa-truck-fast"></i> Free Delivery over Rs.3,000</div>
                  <div class="detail-extra-item"><i class="fa-solid fa-building-columns"></i> 5% OFF on Advance Payment</div>
                  <div class="detail-extra-item"><i class="fa-solid fa-shield-halved"></i> Genuine Product</div>
                  <div class="detail-extra-item"><i class="fa-solid fa-rotate-left"></i> 7-Day Returns</div>
                </div>
              </div>
            </div>
            ${buildFullInfoHtml(fi)}
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

    // Quantity counters
    productDetails.querySelectorAll('[data-counter-minus]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.dataset.counterMinus;
        const valEl = productDetails.querySelector(`[data-counter-val="${pid}"]`);
        let val = parseInt(valEl.textContent);
        if (val > 1) valEl.textContent = val - 1;
        syncOfferWithCounter(pid);
      });
    });
    productDetails.querySelectorAll('[data-counter-plus]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.dataset.counterPlus;
        const valEl = productDetails.querySelector(`[data-counter-val="${pid}"]`);
        let val = parseInt(valEl.textContent);
        if (val < MAX_QTY_PER_ITEM) valEl.textContent = val + 1;
        syncOfferWithCounter(pid);
      });
    });

    // 2 Packs Offer selection
    productDetails.querySelectorAll('[data-offer-select]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.dataset.offerSelect;
        const currentlySelected = !!offerSelection[pid];
        if (currentlySelected) {
          // Switch back to regular single-product purchase
          delete offerSelection[pid];
          const valEl = productDetails.querySelector(`[data-counter-val="${pid}"]`);
          if (valEl) valEl.textContent = '1';
        } else {
          // Select the offer: exactly two packs
          offerSelection[pid] = true;
          const valEl = productDetails.querySelector(`[data-counter-val="${pid}"]`);
          if (valEl) valEl.textContent = '2';
        }
        updateOfferUI(pid);
      });
    });

    // Add to cart from detail (uses counter qty; 2-pack offer => exactly 2 packs)
    productDetails.querySelectorAll('.add-detail-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = parseInt(btn.dataset.detailAdd);
        const valEl = productDetails.querySelector(`[data-counter-val="${pid}"]`);
        let qty = parseInt(valEl.textContent) || 1;
        if (offerSelection[pid]) qty = 2; // guarantee exactly two packs when offer is selected
        addToCart(pid, qty);
      });
    });
  }

  function updateOfferUI(pid) {
    const box = productDetails.querySelector(`[data-offer-box="${pid}"]`);
    if (!box) return;
    const btn = box.querySelector('[data-offer-select]');
    const selected = !!offerSelection[pid];
    box.classList.toggle('selected', selected);
    btn.classList.toggle('selected', selected);
    btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
    btn.innerHTML = selected
      ? '<i class="fa-solid fa-circle-check"></i> 2 Packs Selected'
      : '<i class="fa-solid fa-check"></i> Select 2 Packs';
    // Update main add button label
    const addBtn = productDetails.querySelector(`.add-detail-btn[data-detail-add="${pid}"]`);
    if (addBtn) {
      addBtn.innerHTML = selected
        ? '<i class="fa-solid fa-cart-shopping"></i> Add 2 Packs to Cart'
        : '<i class="fa-solid fa-cart-shopping"></i> Add to Cart';
    }
  }

  function syncOfferWithCounter(pid) {
    if (!offerSelection[pid]) return;
    const valEl = productDetails.querySelector(`[data-counter-val="${pid}"]`);
    if (valEl && valEl.textContent.trim() !== '2') {
      // quantity manually changed — deselect the 2-pack offer
      delete offerSelection[pid];
      updateOfferUI(pid);
    }
  }

  // ===== Render Reviews =====
  let reviewPage = 0;
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  let reviewAutoTimer = null;

  function renderReviews() {
    let html = '';
    reviews.forEach(r => {
      const stars = '&#9733;'.repeat(r.rating) + '&#9734;'.repeat(5 - r.rating);
      html += `<div class="review-card"><div class="review-stars">${stars}</div><p class="review-text">"${escapeHtml(r.text)}"</p><div class="review-author"><div class="review-avatar">${r.initials}</div><div><div class="review-author-name">${escapeHtml(r.name)}</div><div class="review-author-location">${escapeHtml(r.location)}</div></div></div></div>`;
    });
    reviewsGrid.innerHTML = html;
    let dotsHtml = '';
    for (let i = 0; i < totalPages; i++) dotsHtml += `<button class="review-dot ${i === 0 ? 'active' : ''}" data-dot="${i}" aria-label="Page ${i + 1}"></button>`;
    reviewDots.innerHTML = dotsHtml;
    bindReviewNav();
    updateReviewPage();
    startReviewAuto();
    // Pause auto-rotation on hover
    reviewsGrid.parentElement.addEventListener('mouseenter', stopReviewAuto);
    reviewsGrid.parentElement.addEventListener('mouseleave', startReviewAuto);
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

  function startReviewAuto() {
    stopReviewAuto();
    reviewAutoTimer = setInterval(() => { reviewPage = (reviewPage + 1) % totalPages; updateReviewPage(); }, 5000);
  }
  function stopReviewAuto() { if (reviewAutoTimer) { clearInterval(reviewAutoTimer); reviewAutoTimer = null; } }

  // ===== Render FAQ =====
  function renderFAQ() {
    let html = '';
    faqs.forEach((faq, idx) => {
      html += `<div class="faq-item ${idx === 0 ? 'active' : ''}"><button class="faq-question" data-faq="${idx}">${escapeHtml(faq.q)}<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="faq-answer"><div class="faq-answer-inner">${escapeHtml(faq.a)}</div></div></div>`;
    });
    faqList.innerHTML = html;
    // Set correct max-height for the initially open item (prevents clipped answers)
    const firstItem = faqList.querySelector('.faq-item.active');
    if (firstItem) {
      const answer = firstItem.querySelector('.faq-answer');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
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
    const category = document.getElementById('formCategory').value;
    const message = document.getElementById('formMessage').value;
    const categoryLabels = {
      'cosmetics': 'Cosmetics Products',
      'pharmaceutical': 'Pharmaceutical Distribution',
      'nutraceutical': 'Nutraceutical Distribution',
      'surgical': 'Surgical Instruments',
      'general': 'General Inquiry'
    };
    const categoryLabel = categoryLabels[category] || 'General Inquiry';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm ${name}. Inquiry Type: ${categoryLabel}. ${message} My phone: ${phone}`)}`, '_blank');
    contactForm.reset();
    alert('Message sent via WhatsApp!');
  });

  // ===== Policy Modal =====
  const policyOverlay = document.getElementById('policyOverlay');
  const policyTitle = document.getElementById('policyTitle');
  const policyBody = document.getElementById('policyBody');
  const policyCloseBtn = document.getElementById('policyCloseBtn');

  const policyContent = {
    privacy: {
      title: 'Privacy Policy',
      html: `
        <h3>1. Information We Collect</h3>
        <p>When you visit NOVASKY, we automatically collect certain information about your device, including your web browser, IP address, time zone, and some cookies. We also collect information about the individual web pages you view, what websites or search terms referred you, and how you interact with our site.</p>
        <p>When you make a purchase or attempt to make a purchase, we collect your name, billing address, shipping address, payment information, email address, and phone number. This is referred to as "Order Information."</p>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To process and fulfill your orders, including sending emails, text messages, or WhatsApp messages to confirm your order status and shipment.</li>
          <li>To communicate with you about products, services, promotions, and events offered by NOVASKY.</li>
          <li>To provide customer support and respond to your inquiries.</li>
          <li>To improve and personalize your shopping experience.</li>
          <li>To detect, prevent, and address fraud, unauthorized access, and other illegal activities.</li>
        </ul>

        <h3>3. Sharing Your Information</h3>
        <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use WhatsApp Business API to communicate with you regarding orders. We may also share your information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information.</p>

        <h3>4. Data Retention</h3>
        <p>When you place an order through NOVASKY, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

        <h3>5. Your Rights</h3>
        <p>If you are a resident of Pakistan, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. You may contact us at novaskydistributors@gmail.com.</p>

        <h3>6. Cookies</h3>
        <p>We use cookies to improve your experience on our site. You can control and manage cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.</p>

        <h3>7. Changes to This Policy</h3>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page.</p>

        <h3>8. Contact Us</h3>
        <p>For questions about our privacy practices, contact us at novaskydistributors@gmail.com or reach us via WhatsApp at +92 330 912 5388.</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      html: `
        <h3>1. General Conditions</h3>
        <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information) may be transferred unencrypted. Products are available exclusively online through NOVASKY.</p>

        <h3>2. Accuracy of Information</h3>
        <p>We are not responsible if information on this site is not accurate, complete, or current. The material is provided for general information only and should not be relied upon as the sole basis for making decisions. Any reliance on the material on this site is at your own risk.</p>

        <h3>3. Products and Pricing</h3>
        <p>Prices for our products are subject to change without notice. We reserve the right to modify or discontinue any product at any time. We shall not be liable to you for any modification, price change, suspension, or discontinuance of a product.</p>
        <p>We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
        <p><strong>Offers:</strong> The "2 Packs Offer" provides a flat 8% discount on the combined price of two packs of the same eligible product. The Advance Payment discount provides 5% OFF when the order is paid in advance (calculated after the 2 packs discount). The Advance Payment discount does not apply to Cash on Delivery orders. Free delivery applies on orders with an eligible product subtotal above Rs. 3,000; a standard delivery charge of Rs. 250 applies on orders of Rs. 3,000 or below. Offers cannot be combined with any other promotion unless explicitly stated.</p>

        <h3>4. Orders and Payment</h3>
        <p>We reserve the right to limit the quantities of any products that we offer. All descriptions of products and pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.</p>
        <p>Payment is processed via Cash on Delivery (COD) or advance bank transfer. Orders are confirmed via WhatsApp or phone call. Orders paid by advance payment are marked as paid only after the payment has been received and verified by NovaSky Distributors. A pending or failed payment does not constitute a paid order.</p>

        <h3>5. Shipping and Delivery</h3>
        <p>Free delivery is available on orders with an eligible product subtotal above Rs. 3,000. For orders of Rs. 3,000 or below, a standard delivery charge of Rs. 250 applies. Standard delivery takes 3-5 business days within Pakistan. We are not responsible for delays caused by the courier service.</p>

        <h3>6. Returns and Refunds</h3>
        <p>We accept returns within 7 days of delivery for unopened and unused products. To initiate a return, please contact us via WhatsApp at +92 330 912 5388. Refunds will be processed within 5-7 business days after receiving the returned product.</p>

        <h3>7. User Conduct</h3>
        <p>You agree not to use the site for any unlawful purpose or to solicit the performance of any illegal activity. You may not attempt to circumvent any security measures on the site.</p>

        <h3>8. Intellectual Property</h3>
        <p>All content on this site, including text, graphics, logos, images, and software, is the property of NOVASKY or its suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

        <h3>9. Limitation of Liability</h3>
        <p>NOVASKY shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the site or products. Our total liability shall not exceed the amount paid by you for the product.</p>

        <h3>10. Governing Law</h3>
        <p>These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts of Islamabad.</p>

        <h3>11. Contact</h3>
        <p>Questions about the Terms of Service should be sent to novaskydistributors@gmail.com or via WhatsApp at +92 330 912 5388.</p>
      `
    }
  };

  function openPolicy(type) {
    const data = policyContent[type];
    if (!data) return;
    policyTitle.textContent = data.title;
    policyBody.innerHTML = data.html;
    policyOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closePolicy() {
    policyOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.policy-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openPolicy(link.dataset.policy);
    });
  });
  policyCloseBtn.addEventListener('click', closePolicy);
  policyOverlay.addEventListener('click', (e) => { if (e.target === policyOverlay) closePolicy(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && policyOverlay.classList.contains('active')) closePolicy(); });

  // ===== Back to Top =====
  window.addEventListener('scroll', () => { backToTop.classList.toggle('visible', window.scrollY > 400); }, { passive: true });
  backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // ===== Init =====
  renderProductsGrid();
  renderProductDetails();
  renderReviews();
  renderFAQ();
  renderCart();

  // Expose pricing engine for testing (read-only helper)
  window.NovaSkyPricing = { computeTotals, products, TWO_PACK_DISCOUNT_RATE, ADVANCE_PAYMENT_RATE, FREE_DELIVERY_THRESHOLD, STANDARD_DELIVERY_FEE, MAX_QTY_PER_ITEM };

});
