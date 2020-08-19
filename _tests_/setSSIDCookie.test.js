const cookieController = require('../server/controllers/cookieController.js');
const express = require('express');

const mockResponse = function (mockToken) {
  const output = { locals: { token: mockToken } };
  return output;
};

describe('test setSSIDCookie middleware', () => {
  it('throws an error when token is undefined', () => {
    const req = {};
    const res = mockResponse('');
    const result = cookieController.setSSIDCookie(req, res);
    expect(result).toBeInstanceOf(Error);
  });

  it('does not throw an error when token is defined', async () => {
    const req = {};
    const res = mockResponse(123);
    const next = jest.fn();
    const result = await cookieController.setSSIDCookie(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
