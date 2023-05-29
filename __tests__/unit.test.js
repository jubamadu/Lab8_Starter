// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


//Phone Number Tests

test('Is Valid Phone Number; Test1', () => {
  expect(functions.isPhoneNumber('(254)301-892-7862')).toBe(true);
});

test('Is Valid Phone Number; Test2', () => {
  expect(functions.isPhoneNumber("301-492-8761")).toBe(true);
});

test('Is Valid Phone Number; Test3', () => {
  expect(functions.isPhoneNumber("911")).toBe(false);
});

test('Is Valid Phone Number; Test4', () => {
  expect(functions.isPhoneNumber("1800300300320000")).toBe(false);
});

//Valid Email Tests

test('Valid Email Address; Test1', () => {
  expect(functions.isEmail('jubamadu@ucsd.edu')).toBe(true);
});

test('Valid Email Address; Test2', () => {
  expect(functions.isEmail('centralRes@gmail.com')).toBe(true);
});

test('Valid Email Address; Test3', () => {
  expect(functions.isEmail('teemoSales@yahoo.cooom')).toBe(false);
});

test('Valid Email Address; Test4', () => {
  expect(functions.isEmail('temp.com')).toBe(false);
});

//Strong Password Tests

test('Strong Password; Test1', () => {
  expect(functions.isStrongPassword('ValidCaseVal')).toBe(true);
});

test('Strong Password; Test2', () => {
  expect(functions.isStrongPassword('testCasePass')).toBe(true);
});

test('Strong Password; Test3', () => {
  expect(functions.isStrongPassword('at')).toBe(false);
});

test('Strong Password; Test4', () => {
  expect(functions.isStrongPassword('rainbowGlitter1234.')).toBe(false);
});

//Valid Date Tests

test('Valid Date; Test1', () => {
  expect(functions.isDate('03/30/2001')).toBe(true);
});

test('Valid Date; Test2', () => {
  expect(functions.isDate('6/12/1788')).toBe(true);
});

test('Valid Date; Test3', () => {
  expect(functions.isDate('122/11/2000')).toBe(false);
});

test('Valid Date; Test4', () => {
  expect(functions.isDate('3/3/20000')).toBe(false);
});

//Hex Color Tests
test('Is Valid Hex Color; Test1', () => {
  expect(functions.isHexColor('#000000')).toBe(true);
});

test('Is Valid Hex Color; Test2', () => {
  expect(functions.isHexColor('#fff')).toBe(true);
});

test('Is Valid Hex Color; Test3', () => {
  expect(functions.isHexColor('#00')).toBe(false);
});

test('Is Valid Hex Color; Test4', () => {
  expect(functions.isHexColor('#gggggg')).toBe(false);
});