export const get = () => JSON.parse(localStorage.getItem('state')) || undefined;
export const set = (state, props) => {
    let toSave = {};

    props.forEach( (property) => toSave[property] = state[property] );

    localStorage.setItem('state', JSON.stringify(toSave));
};