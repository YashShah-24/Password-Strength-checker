function checkStrength() {
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");
  let strength = 0;

  const lengthValid = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  if (lengthValid) strength++;
  if (hasUpper) strength++;
  if (hasLower) strength++;
  if (hasNumber) strength++;
  if (hasSpecial) strength++;

  let message = "";
  let color = "";

  switch (strength) {
    case 0:
    case 1:
    case 2:
      message = "❌ Weak Password";
      color = "#dc2626";
      break;
    case 3:
    case 4:
      message = "⚠️ Moderate Password";
      color = "#f59e0b";
      break;
    case 5:
      message = "✅ Strong Password";
      color = "#16a34a";
      break;
  }

  result.textContent = message;
  result.style.color = color;
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleBtn = event.target;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Show";
  }
}
