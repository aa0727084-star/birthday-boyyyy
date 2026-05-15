// ==========================================
// 1. تأثير النجوم اللامعة في الخلفية
// ==========================================
function createStar() {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.fontSize = Math.random() * 12 + 8 + 'px';
    star.style.color = '#d4af37';
    star.style.opacity = Math.random();
    star.style.pointerEvents = 'none'; // الماوس يخترق النجمة بدون حجب الأزرار
    star.style.zIndex = '-1'; // يرمي النجوم في آخر طبقة خلف الكلام
    star.style.transition = 'opacity 2s';

    document.body.appendChild(star);

    setTimeout(() => {
        star.style.opacity = '0';
        setTimeout(() => star.remove(), 2000);
    }, 3000);
}

setInterval(createStar, 400);

// ==========================================
// 2. دالة التحقق من الباسورد (معدلة لتروح للـ Gallery)
// ==========================================
function checkPassword() {
    const inputField = document.getElementById('passwordInput');
    
    if (inputField) {
        const password = inputField.value.trim();
        
        if (password === "10/1/2024") {
            window.location.href = "gallery.html"; // التعديل السحري هنا للذهاب للمعرض!
        } else {
            const errorMsg = document.getElementById('error-msg');
            if (errorMsg) {
                errorMsg.style.display = 'block';
            }
        }
    }
}

// ==========================================
// 3. دالة زرار YES في صفحة birthday
// ==========================================
function goToSpecial() {
    window.location.href = "memories.html"; // هينقله لصفحة الذكريات
}

// ==========================================
// 4. دالة هروب زرار NOOOO!! الفظيعة (متصلحة بالملي)
// ==========================================
function moveBtn() {
    const noBtn = document.getElementById('runaway-btn');
    
    if (noBtn) {
        // حساب أبعاد عشوائية جوة الشاشة
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40);
        
        // نقل الزرار فوراً للمكان الجديد
        noBtn.style.position = 'fixed'; 
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }
}