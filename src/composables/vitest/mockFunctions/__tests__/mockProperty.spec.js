test('exploring a mock property', () => {
  const myMock = vi.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();

  expect(JSON.stringify(myMock.mock.instances)).toBe(JSON.stringify([{},{}]));
  // > [ <a>, <b> ]
});

test('more exploring mock properties', () => {
    const myMock = vi.fn();    
    
    const a = new myMock('first arg', 'second arg');

    // The function was called exactly once
    expect(myMock.mock.calls.length).toBe(1);

    // The first arg of the first call to the function was 'first arg'
    expect(myMock.mock.calls[0][0]).toBe('first arg');

    // The second arg of the first call to the function was 'second arg'
    expect(myMock.mock.calls[0][1]).toBe('second arg');
    
    // This function was instantiated exactly once
    expect(myMock.mock.instances.length).toBe(1);
});
