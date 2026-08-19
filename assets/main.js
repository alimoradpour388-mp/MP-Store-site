/**
 * MP STORE - Main Vanilla JavaScript
 * Core navigation, Telegram ordering, cart, toast alerts & search
 */

// Convert Latin digits to Persian digits
function toPersianDigits(n) {
  if (n === null || n === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, x => farsiDigits[x]);
}

// Telegram Bot helper
const TELEGRAM_BOT_USERNAME = 'Mpstore1388bot';
const TELEGRAM_BOT_BASE_URL = `https://t.me/${TELEGRAM_BOT_USERNAME}`;

function orderViaTelegram(productId, productTitle) {
  let url = TELEGRAM_BOT_BASE_URL;
  if (productId) {
    // Generate deep-link or direct chat
    const sanitizedId = productId.replace(/[^a-zA-Z0-9_]/g, '_');
    url = `${TELEGRAM_BOT_BASE_URL}?start=order_${sanitizedId}`;
  }
  showToast(`در حال اتصال به ربات تلگرام MP STORE...`);
  setTimeout(() => {
    window.open(url, '_blank');
  }, 400);
}

// Cart management
let cart = JSON.parse(localStorage.getItem('mp_cart') || '[]');

function saveCart() {
  localStorage.setItem('mp_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product, quantity = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      rawPrice: product.rawPrice,
      image: product.image,
      quantity: quantity
    });
  }
  saveCart();
  showToast(`«${product.shortTitle || product.title}» به سبد خرید اضافه شد!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCartDrawer();
  showToast('محصول از سبد حذف شد.');
}

function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = toPersianDigits(totalItems);
    if (totalItems > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });
}

// Toast notification helper
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'glass-panel pointer-events-auto px-5 py-3 rounded-xl border border-secondary/40 shadow-xl flex items-center gap-3 text-on-surface transform translate-y-4 opacity-0 transition-all duration-300 backdrop-blur-2xl bg-surface/90 text-sm font-medium';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-secondary text-lg">check_circle</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) return;
  
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      mobileMenu.classList.remove('opacity-0', '-translate-y-4');
    }, 10);
  } else {
    mobileMenu.classList.add('opacity-0', '-translate-y-4');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  }
}

// Global Search Overlay Toggle
function toggleSearchModal(forceOpen = null) {
  let modal = document.getElementById('search-modal');
  if (!modal) return;
  
  const shouldOpen = forceOpen !== null ? forceOpen : modal.classList.contains('hidden');
  
  if (shouldOpen) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    const input = modal.querySelector('#global-search-input');
    if (input) {
      setTimeout(() => input.focus(), 50);
    }
  } else {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Cart Drawer Toggle
function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (!drawer) return;
  
  if (drawer.classList.contains('hidden')) {
    renderCartDrawer();
    drawer.classList.remove('hidden');
  } else {
    drawer.classList.add('hidden');
  }
}

function renderCartDrawer() {
  const list = document.getElementById('cart-items-list');
  const totalEl = document.getElementById('cart-total-price');
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="py-12 text-center text-on-surface-variant flex flex-col items-center gap-3">
        <span class="material-symbols-outlined text-4xl text-outline">shopping_bag</span>
        <p>سبد خرید شما خالی است</p>
      </div>
    `;
    if (totalEl) totalEl.textContent = '۰ تومان';
    return;
  }

  let total = 0;
  list.innerHTML = cart.map(item => {
    const itemTotal = item.rawPrice * item.quantity;
    total += itemTotal;
    return `
      <div class="flex items-center justify-between gap-4 p-3 glass-panel rounded-xl">
        <img src="${item.image}" alt="${item.title}" class="w-14 h-14 object-cover rounded-lg border border-white/10" />
        <div class="flex-1 min-w-0">
          <h4 class="font-medium text-sm text-on-surface truncate">${item.title}</h4>
          <p class="text-xs text-tertiary mt-1">${toPersianDigits(item.price)} تومان × ${toPersianDigits(item.quantity)}</p>
        </div>
        <button onclick="removeFromCart('${item.id}')" class="text-on-surface-variant hover:text-error transition-colors p-1" title="حذف">
          <span class="material-symbols-outlined text-lg">delete</span>
        </button>
      </div>
    `;
  }).join('');

  if (totalEl) {
    totalEl.textContent = `${toPersianDigits(total.toLocaleString())} تومان`;
  }
}

// Checkout cart via Telegram
function checkoutCartTelegram() {
  if (cart.length === 0) {
    showToast('سبد خرید شما خالی است!');
    return;
  }
  let orderSummary = 'سفارش جدید از وبسایت MP STORE:\n';
  let total = 0;
  cart.forEach((item, index) => {
    orderSummary += `${index + 1}. ${item.title} (${item.quantity} عدد) - ${item.price} تومان\n`;
    total += (item.rawPrice * item.quantity);
  });
  orderSummary += `مجموع: ${total.toLocaleString()} تومان`;
  
  const encoded = encodeURIComponent(orderSummary);
  window.open(`${TELEGRAM_BOT_BASE_URL}?text=${encoded}`, '_blank');
}

// Quick direct purchase modal
function openQuickBuyModal(productId) {
  if (typeof getProductById !== 'function') return;
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.getElementById('quick-buy-modal');
  if (!modal) {
    orderViaTelegram(product.id, product.title);
    return;
  }

  const titleEl = modal.querySelector('#quick-buy-title');
  const priceEl = modal.querySelector('#quick-buy-price');
  const imgEl = modal.querySelector('#quick-buy-img');
  const tgBtn = modal.querySelector('#quick-buy-telegram-btn');

  if (titleEl) titleEl.textContent = product.title;
  if (priceEl) priceEl.textContent = `${product.price} تومان`;
  if (imgEl) imgEl.src = product.image;
  if (tgBtn) {
    tgBtn.onclick = () => orderViaTelegram(product.id, product.title);
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeQuickBuyModal() {
  const modal = document.getElementById('quick-buy-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Analytics tracking
function getStoreAnalytics() {
  try {
    let analytics = JSON.parse(localStorage.getItem('mp_analytics') || 'null');
    if (!analytics) {
      analytics = {
        totalViews: 14280,
        todayViews: 3842,
        uniqueVisitors: 1490,
        avgDuration: '۴:۲۵ دقیقه',
        bounceRate: '۲۳.۴٪',
        liveUsers: 24,
        dailyViews: [
          { day: 'شنبه', views: 2850, visitors: 1120 },
          { day: 'یکشنبه', views: 3200, visitors: 1250 },
          { day: 'دوشنبه', views: 3650, visitors: 1390 },
          { day: 'سه‌شنبه', views: 3100, visitors: 1180 },
          { day: 'چهارشنبه', views: 4200, visitors: 1540 },
          { day: 'پنج‌شنبه', views: 4800, visitors: 1720 },
          { day: 'جمعه', views: 3842, visitors: 1490 }
        ],
        trafficSources: [
          { name: 'ربات و کانال تلگرام MP STORE', share: 58, color: '#2794f4' },
          { name: 'جستجوی مستقیم گوگل (SEO)', share: 24, color: '#959bff' },
          { name: 'شبکه‌های اجتماعی و ارجاع مستقیم', share: 12, color: '#e1b6ff' },
          { name: 'سایر منابع ورودی', share: 6, color: '#908f9f' }
        ],
        devices: [
          { name: 'موبایل و گوشی‌های هوشمند', share: 74, icon: 'smartphone' },
          { name: 'کامپیوتر و لپ‌تاپ (دسکتاپ)', share: 26, icon: 'desktop_windows' }
        ],
        topPages: [
          { path: 'صفحه اصلی فروشگاه (خانه)', views: 1840, change: '+18%' },
          { path: 'کاتالوگ و لیست محصولات', views: 1210, change: '+12%' },
          { path: 'پکیج پرامپت‌نویسی حرفه‌ای Midjourney', views: 890, change: '+25%' },
          { path: 'دستیار هوش مصنوعی تجاری AI Master', views: 640, change: '+9%' },
          { path: 'کیبورد مکانیکال گیمینگ نئون Cyber', views: 510, change: '+14%' }
        ]
      };
      localStorage.setItem('mp_analytics', JSON.stringify(analytics));
    }
    return analytics;
  } catch (e) {
    return null;
  }
}

function trackPageView() {
  try {
    const analytics = getStoreAnalytics();
    if (analytics) {
      analytics.totalViews = (analytics.totalViews || 14000) + 1;
      analytics.todayViews = (analytics.todayViews || 3800) + 1;
      localStorage.setItem('mp_analytics', JSON.stringify(analytics));
    }
  } catch (e) {}
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  trackPageView();
  updateCartBadge();
  
  // Close modals on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleSearchModal(false);
      closeQuickBuyModal();
    }
  });
});
