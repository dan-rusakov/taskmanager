import {createBoardTemplate} from './components/board';
import {createFiltersTemplate} from './components/filters';
import {createMenuTemplate} from './components/menu';
import {createLoadMoreBtnTemplate} from './components/loadMoreBtn';
import {createTaskEditTemplate} from './components/taskEdit';
import {createTaskTemplate} from './components/task';

const TASKS_COUNT = 8;

const render = (container, component, place = `beforeend`) => container.insertAdjacentHTML(place, component);

const mainElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.main__control`);

render(mainElement, createFiltersTemplate());
render(mainElement, createBoardTemplate());
render(headerElement, createMenuTemplate());

const boardElement = document.querySelector(`.board`);
const tasksElement = document.querySelector(`.board__tasks`);

render(boardElement, createLoadMoreBtnTemplate());
render(tasksElement, createTaskEditTemplate());

for (let i = 0; i < TASKS_COUNT; i++) {
  render(tasksElement, createTaskTemplate());
}
