describe("tests",function(){
    //var emailBox = element(by.model('email'));
    //var passBox = element(by.model('password'));
    describe("login",function(){

        beforeEach(function() {
            //called before every time an it block runs
            browser.get('#/');
        });


        it("should display correct title",function(){
            expect(browser.getTitle()).toEqual('PayVUS');
        });


        it("should check email and password",function(){
            expect(emailBox.getText()).toEqual('');
            expect(passBox.getText()).toEqual('');
        });

        /*afterEach(function() {
            browser.get('#/');
        });*/
    })
});