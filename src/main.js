import {createBoardTemplate} from './components/board';
import {createFiltersTemplate} from './components/filters';
import {createMenuTemplate} from './components/menu';
import {createLoadMoreBtnTemplate} from './components/loadMoreBtn';
import {createTaskEditTemplate} from './components/taskEdit';
import {createTaskTemplate} from './components/task';
import {generatedFilters} from './mock/filters';
import {generatedTasks} from './mock/task';

const TASKS_COUNT = 10;
const SHOWING_TASKS_COUNT_BY_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, component, place = `beforeend`) => container.insertAdjacentHTML(place, component);

const mainElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.main__control`);

render(mainElement, createFiltersTemplate(generatedFilters));
render(mainElement, createBoardTemplate());
render(headerElement, createMenuTemplate());

const boardElement = document.querySelector(`.board`);
const tasksElement = document.querySelector(`.board__tasks`);

render(boardElement, createLoadMoreBtnTemplate());
render(tasksElement, createTaskEditTemplate(generatedTasks[0]));

let showingTasksCount = SHOWING_TASKS_COUNT_BY_START;

generatedTasks.slice(1, showingTasksCount).forEach((task) => {
  render(tasksElement, createTaskTemplate(task));
});

const loadMoreBtn = document.querySelector(`.load-more`);

loadMoreBtn.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount += SHOWING_TASKS_COUNT_BY_BUTTON;

  generatedTasks.slice(prevTasksCount, showingTasksCount).forEach((task) => {
    render(tasksElement, createTaskTemplate(task));
  });

  if (showingTasksCount >= TASKS_COUNT) {
    loadMoreBtn.remove();
  }
});
