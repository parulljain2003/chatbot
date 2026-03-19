(function() {
    // 1. CHATBOT STYLES (CSS inject karna)
    const style = document.createElement('style');
    style.innerHTML = `
        #my-bot-container { font-family: 'Segoe UI', sans-serif; position: fixed; bottom: 20px; right: 20px; z-index: 9999; }
        #bot-bubble { width: 60px; height: 60px; background: #2563eb; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        #bot-window { width: 320px; height: 450px; background: white; border-radius: 15px; display: none; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.2); overflow: hidden; margin-bottom: 15px; border: 1px solid #ddd; }
        .bot-header { background: #2563eb; color: white; padding: 15px; font-weight: bold; }
        .bot-messages { flex: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px; }
        .bot-options { padding: 10px; display: flex; flex-wrap: wrap; gap: 8px; border-top: 1px solid #eee; }
        .opt-btn { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 6px 12px; border-radius: 20px; cursor: pointer; font-size: 13px; }
        .msg { padding: 8px 12px; border-radius: 10px; font-size: 14px; max-width: 80%; }
        .msg-bot { background: #e2e8f0; color: #1e293b; align-self: flex-start; }
        .msg-user { background: #2563eb; color: white; align-self: flex-end; }
    `;
    document.head.appendChild(style);

    // 2. CHATBOT HTML (Structure create karna)
    const botContainer = document.createElement('div');
    botContainer.id = 'my-bot-container';
    botContainer.innerHTML = `
        <div id="bot-window">
            <div class="bot-header">AI Support Assistant</div>
            <div class="bot-messages" id="bot-msgs">
                <div class="msg msg-bot">Hello! Main aapki kya help kar sakta hoon?</div>
            </div>
            <div class="bot-options" id="bot-opts"></div>
        </div>
        <div id="bot-bubble">💬</div>
    `;
    document.body.appendChild(botContainer);

    // 3. LOGIC (Questions and Interactions)
    const bubble = document.getElementById('bot-bubble');
    const win = document.getElementById('bot-window');
    const msgs = document.getElementById('bot-msgs');
    const opts = document.getElementById('bot-opts');

    // Aapke 5 Pre-defined Questions
    const questions = [
        { q: "Order Kab Milega?", a: "Standard delivery 3-5 days mein ho jati hai." },
        { q: "Returns kaise karein?", a: "Aap 7 din ke andar website se return request daal sakte hain." },
        { q: "Payment Safe hai?", a: "Ji bilkul, hum Razorpay aur SSL security use karte hain." },
        { q: "Office kahan hai?", a: "Humara head office Roorkee, Uttarakhand mein hai." },
        { q: "Discount Milega?", a: "First order par code 'WELCOME10' use karein." }
    ];

    // Toggle Window
    bubble.onclick = () => {
        win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
    };

    // Show Options as Buttons
    questions.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = item.q;
        btn.onclick = () => {
            // User side message
            msgs.innerHTML += `<div class="msg msg-user">${item.q}</div>`;
            
            // Bot side response (0.5s delay for realistic feel)
            setTimeout(() => {
                msgs.innerHTML += `<div class="msg msg-bot">${item.a}</div>`;
                msgs.scrollTop = msgs.scrollHeight;
            }, 500);
        };
        opts.appendChild(btn);
    });
})();