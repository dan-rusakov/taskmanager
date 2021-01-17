import {formattedDate, formattedTime} from '../utils';

export const createTaskTemplate = ({description, dueDate, repeatingDays, color, isFavorite, isArchive}) => {
  const isExpired = dueDate && new Date(dueDate) < Date.now();
  const hasRepeatedDays = Object.values(repeatingDays).some(Boolean);

  return `<article
            class="card card--${color} ${isExpired ? `card--deadline` : ``} ${hasRepeatedDays ? `card--repeat` : ``}"
         >
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button
            type="button"
            class="card__btn card__btn--archive ${isArchive ? `` : `card__btn--disabled`}"
          >
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites ${isFavorite ? `` : `card__btn--disabled`}"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <p class="card__text">${description}</p>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">${formattedDate(dueDate)}</span>
                  <span class="card__time">${formattedTime(dueDate)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;
};
