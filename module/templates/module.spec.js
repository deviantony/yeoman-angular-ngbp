describe('<%= moduleName %> section', function () {
    beforeEach(module('<%= projectName %>.<%= moduleName %>'));

    it('should have a dummy test', inject(function() {
        expect(true).toBeTruthy();
    }));
});
