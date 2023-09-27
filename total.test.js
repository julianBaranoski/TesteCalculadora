const {test, expect}=require('@jest/globals')
const totalConta = require('./total.js')

test('soma 2 + 2', () => {
    const resultado = totalConta(2, 2, "+");
    expect(resultado).toBe(4);
}); 

test('soma 4 + 1.5', () => {
    const resultado = totalConta(4, 1.5, "+");
    expect(resultado).toBe(5.5);
}); 

test('soma 2 + 0', () => {
    const resultado = totalConta(2, 0, "+");
    expect(resultado).toBe(2);
}); 

test('subtraçao 3 - 2', () => {
    const resultado = totalConta(3, 2, "-");
    expect(resultado).toBe(1);
}); 

test('subtraçao 5 - 1.5', () => {
    const resultado = totalConta(5, 1.5, "-");
    expect(resultado).toBe(3.5);
}); 

test('multiplicação 2 * 5', () => {
    const resultado = totalConta(2, 5, "*");
    expect(resultado).toBe(10);
}); 

test('multiplicação 5 * 0', () => {
    const resultado = totalConta(5, 0, "*");
    expect(resultado).toBe(0);
}); 

test('multiplicação 6 * 2.5', () => {
    const resultado = totalConta(4, 2.5, "*");
    expect(resultado).toBe(15);
}); 

test('divisão 5 / 0', () => {
    const resultado = totalConta(5, 0, "/");
    expect(resultado).toBe(0);
}); 

test('divisão 10 / 2', () => {
    const resultado = totalConta(10, 2, "/");
    expect(resultado).toBe(5);
}); 

test('divisão 9 / 2.5', () => {
    const resultado = totalConta(9, 2.5, "/");
    expect(resultado).toBe(3,6);
}); 

