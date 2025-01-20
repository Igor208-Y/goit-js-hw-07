const input = document.querySelector('#name-input');
const output = document.querySelector('#name-putput');

input.addEventListener("input", () => {
    const trimmedValue = input.value.trim();
    output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
}
);