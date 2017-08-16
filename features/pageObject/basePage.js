"use strict";
class Page {
	constructor() {
   
    }
    
    getTitle() {

     return   browser.getTitle() ; 
    }

    getCareers(){

           browser.waitForExist( "=CAREERS", 1000)
            browser.click("=CAREERS",)
           browser.waitForExist( ".button.large", 1000)
         //    browser.click("*=Careers")
     //   browser.click(".careers__button")
    }

    viewJobs() {
      browser.click(".button.large")
      browser.waitForExist("=QA Engineer", 20000 )

    }
    
    init() {

browser.windowHandleMaximize() 
		browser.url("https://uptake.com/");
	}
}
module.exports = new Page();