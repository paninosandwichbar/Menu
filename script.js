// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});
// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// انتخاب همه آیتم‌های منو
const items = document.querySelectorAll('.menu-item');

// ساخت observer برای تشخیص ورود و خروج
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.3) {
        // وقتی آیتم وارد دید میشه
        entry.target.classList.add('show');
      } else if (entry.intersectionRatio === 0) {
        // وقتی از دید خارج میشه (اسکرول به بالا)
        entry.target.classList.remove('show');
      }
    });
  },
  {
    threshold: [0, 0.3, 1] // حداقل ۲۰٪ از آیتم دیده بشه تا افکت اجرا شه
  }
);

// نظارت روی هر آیتم
items.forEach(item => observer.observe(item));

// Tab switcher for menu section
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // حذف حالت active از همه دکمه‌ها
    tabButtons.forEach(b => b.classList.remove('active'));
    // پنهان کردن همه محتواها
    tabContents.forEach(c => c.classList.add('hidden'));

    // فعال‌سازی تب انتخابی
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.remove('hidden');
  });
});
