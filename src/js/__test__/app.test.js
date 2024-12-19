import Validator from '../app';

// eslint-disable-next-line no-undef
test('Проверка на ошибку написания логина', () => {
    const result = new Validator('12=nfsjk');
    // eslint-disable-next-line no-undef
    expect(() => result.validateUsername()).toThrow();
});

// eslint-disable-next-line no-undef
test('Проверка на правильность написания логина', () => {
    const funcResult = new Validator('Annaku12S');
    const result = 'Ваш логин: ${this.log} соответствует требованиям.';
    // eslint-disable-next-line no-undef
    expect(funcResult.validateUsername()).toEqual(result);
});