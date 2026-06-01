async function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const text = input.value;
  if (!text) return;

  // 显示用户消息
  chat.innerHTML += `<div>You: ${text}</div>`;
  input.value = "";

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    chat.innerHTML += `<div>AI: ${data.reply}</div>`;
  } catch (e) {
    chat.innerHTML += `<div>AI: 出错了（还没接后端）</div>`;
  }
}
