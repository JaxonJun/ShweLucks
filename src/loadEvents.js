
const currentPage = "events";

// ✅ 后端 API 地址（开发阶段 localhost，部署可改成正式域名）
const API_BASE = import.meta.env.VITE_API_BASE;

fetch(`${API_BASE}/${currentPage}`) // 从后端获取 JSON 数据
  .then(response => response.json())
  .then(data => {
    console.log('加载的数据：', data);
    const container = document.getElementById('event-list');
    container.innerHTML = ''; // 清空旧内容

    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <a href="${item.link}" onclick="trackClick('${currentPage}', ${index})" target="_blank">
          <img src="${API_BASE}${item.image}" alt="${item.title}" class="card-img" />
           </a>
          <h3 class="card-h3">${item.title}</h3>
          <p class="card-p>${item.desc}</p>`;
        

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("数据加载失败：", err);
  });

// === 自动轮播动画逻辑 ===
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector('.recommended-bar');
  if (!bar) return;

  let scrollAmount = 0;
  const slideInterval = 30; // smaller = faster
  const scrollStep = 1;

  function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= bar.scrollWidth - bar.clientWidth) {
      scrollAmount = 0;
    }
    bar.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  setInterval(autoScroll, slideInterval);
});

