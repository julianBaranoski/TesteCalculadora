const {test, expect}=require('@jest/globals')
const totalConta = require('./total.js')

test('soma 2 + 2', () => {
    const resultado = totalConta(2, 2, "+");
    expect(resultado).toBe(4);
}); 

test('subtraçao 3 - 2', () => {
    const resultado = totalConta(3, 2, "-");
    expect(resultado).toBe(1);
}); 

test('multiplicação 2 * 5', () => {
    const resultado = totalConta(2, 5, "*");
    expect(resultado).toBe(10);
}); 

test('multiplicação 5 * 0', () => {
    const resultado = totalConta(5, 0, "*");
    expect(resultado).toBe(0);
}); 

test('divisão 5 / 0', () => {
    const resultado = totalConta(5, 0, "/");
    expect(resultado).toBe(0);
}); 

test('divisão 10 / 2', () => {
    const resultado = totalConta(10, 2, "/");
    expect(resultado).toBe(5);
}); 

