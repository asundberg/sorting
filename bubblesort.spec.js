describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles an array with multiple items', function(){
    expect( bubbleSort([3, 2, 1]) ).toEqual( [1, 2, 3] );
  });
});