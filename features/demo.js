import Page from  "./pageObject/basePage" ; 

describe('Uptake Demo ', function() {
  let basePage =    Page ; 
  describe('Basic Nav', function () {
    it('Go to home page' , function () {
     /*
“Please make a test for the Uptake home page, at 
east one other page on the site, and write a test using 
the page object model pattern which verifies that navigation 
between those pages works correctly. You can decide the details, 
such as which pages to use, and how to verify that they are correct. 
Please upload your response to GitHub and send it back to me when you're 
finished. There is no time limit, but the sooner you send it back to us, 
the sooner the team can review it and we can schedule you in for an interview.”
*/
      Page.init() ; 
      expect(Page.getTitle()) .to.equal("Analytics for the industrial internet");
    });

    it('Go to careers ', function () {
    Page.init() 
      Page.getCareers() ; 
        expect(Page.getTitle()) .to.equal("Careers");
      Page.viewJobs() ; 
    }) 
  });
});