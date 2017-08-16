"use strict";
class Page {
	constructor() {
   
    }
    getHeroText() {

        return browser.getText(".hero__title");
    }
    getTitle() {

     return   browser.getTitle() ; 
    }
    checkForCareers() {
   browser.waitForExist( "=CAREERS", 1000)
   // Delay to allow title to change 
   browser.pause(3000);


    }
    getHome() {

        browser.click(".mainLogo")
         
    }
    getCareers(){

           browser.waitForExist( "=CAREERS", 1000)
            browser.click("=CAREERS",)
           browser.waitForExist( ".button.large", 1000)

browser.pause(4124);
      
    }

    viewJobs() {
      browser.click(".button.large")
    
    browser.waitForExist( "#grnhse_iframe", 2000)
   
        }
    
    init() {

browser.windowHandleMaximize() 
		browser.url("https://uptake.com/");
	}
}
module.exports = new Page();