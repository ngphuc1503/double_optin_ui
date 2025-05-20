function handleResponse(accepted) {
  // Gửi kết quả về Android WebView
  const message = {
    event: "smartech_push_optin",
    accepted: accepted
  };

  // Gửi qua Android Interface nếu có
  if (window.AndroidWebInterface) {
    window.AndroidWebInterface.postMessage(JSON.stringify(message));
  } else {
    console.log("AndroidWebInterface not found");
  }

  // Tùy chọn: hiển thị thông báo cho người dùng
  alert(accepted ? "Thank you for subscribing!" : "Maybe next time.");
}
