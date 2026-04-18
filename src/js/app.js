import Popover from "./popover";

const form = document.querySelector('.form-widget');
const button = form.querySelector('button');

const popover = new Popover();

button.addEventListener('click', (e) => {
    e.preventDefault();

    popover.togglePopover('Title', 'Message', e.target);
});