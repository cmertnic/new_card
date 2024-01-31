import { createEvent, createStore } from "effector";

export const addCard = createEvent();

export const $cardStore = createStore([]);

$cardStore.on(addCard, (cards, item) => [...cards, item]);
