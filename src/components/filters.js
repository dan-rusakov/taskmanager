const createFiltersMarkup = ({name, count}, isChecked) => (
  `<input
    type="radio"
    id="filter__${name}"
    class="filter__input visually-hidden"
    name="filter"
    ${isChecked ? `checked` : ``}
  />
  <label for="filter__${name}" class="filter__label">
    ${name} <span class="filter__${name}-count">${count}</span>
  </label>`
);

export const createFiltersTemplate = (filters) => {
  const fitlersMarkup = filters.map((item, index) => {
    return createFiltersMarkup(item, index === 0);
  }).join(`\n`);

  return `<section class="main__filter filter container">
    ${fitlersMarkup}
  </section>`;
};
