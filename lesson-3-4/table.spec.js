describe('table.js', function() {

  describe('Tests for createMultiplyTableData', function () {
    it('Should return result with 10 items', function () {
      let result = createMultiplyTableData();
      expect(result.length).toBe(10);
    });

    it('Shouldn\'t return undefined items', function () {
      let result = createMultiplyTableData();
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].indexOf('undefined')).toBe(-1);
      }
    });
  });

  describe('Tests for renderMultiplyTable', function () {
    let table;

    beforeEach(function(){
      table = createMultiplyTableData();
    });

    xit('Table should be render', function(){
      renderMultiplyTable(table);
      expect(document.querySelector('table')).not.toBe(null);
    });
  });

  describe('Tests for output', function(){
    let table;
    beforeEach(function(){
      table = ['test', 'test_2'];
    });

    it('Should call createMultiplyTableData', function(){
      spyOn(window, 'createMultiplyTableData').and.returnValue(table);
      outputTable();
      expect(window.createMultiplyTableData).toHaveBeenCalled();
    });

    it('Should call renderMultiplyTable ', function(){
      spyOn(window, 'createMultiplyTableData').and.returnValue(table);
      spyOn(window, 'renderMultiplyTable');
      outputTable();
      expect(window.renderMultiplyTable).toHaveBeenCalledWith(table);
    });
  });
});
