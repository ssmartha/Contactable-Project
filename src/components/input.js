export function input({
  label,
  id,
  name,
  placeholder = "",
  type,
  required = false,
  value = false,
}) {
  return `
    <div class="input">
    ${
      label
        ? `<label for="${id}" class="content-xs overline" >${label}</label>`
        : ""
    }
      <div class="input__container">
        <input
          type="${type ? type : "text"}"
          placeholder="${placeholder}"
          class="input__content"
          name="${name}"
          ${value ? `value="${value}"` : ""}
          ${required ? "required" : ""}
        >
      </div>
    </div>
  `;
}