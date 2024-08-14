document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const themeSelector = document.getElementById("theme");

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.body.classList.add(storedTheme);
    themeSelector.value = storedTheme;
  }

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      country: document.getElementById("country").value,
      phone: document.getElementById("phone").value,
      state: document.getElementById("state").value,
      city: document.getElementById("city").value,
      village: document.getElementById("village").value,
    };
    const storedData = JSON.parse(localStorage.getItem("userDataList")) || [];

    if (storedData.some((user) => user.phone === userData.phone)) {
      alert(
        "This phone number is already in use. Please use a different number."
      );
      return;
    }
    storedData.push(userData);
    localStorage.setItem("userDataList", JSON.stringify(storedData));

    userForm.reset();
    alert("Data saved successfully!");
  });

  themeSelector.addEventListener("change", (event) => {
    document.body.classList.toggle("dark", event.target.value === "dark");
    localStorage.setItem("theme", event.target.value);
  });
});
