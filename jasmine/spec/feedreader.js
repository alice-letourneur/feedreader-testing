// Placing all our tests within the $() function to ensure they don't run until the DOM is ready
$(function() {
    // This test suite contains a set of tests about RSS feeds
    describe('RSS Feeds', function() {

        // Test if allFeeds variable has been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test if all allFeeds items have a URL defined and that the URL is not empty
         it('has a URL defined which is not empty', function() {
           allFeeds.forEach(function(feed) {
             // Test if a url is defined for each item in the allFeeds array
             expect(feed.url).toBeDefined();
             // Test if the url is at least 1 character long for each item in the allFeeds array
             expect(feed.url.length).not.toBe(0);
          });
         });

         // Test if all allFeeds items have a name defined and that the name is not empty
         it('has a name defined which is not empty', function() {
           allFeeds.forEach(function(feed) {
             // Test if a name is defined for each item in the allFeeds array
             expect(feed.name).toBeDefined();
             // Test if the name is at least 1 character long for each item in the allFeeds array
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    // This test suite contains a set of tests about the menu
    describe('The menu', function() {
      var body;
      var menuIcon;

      beforeEach(function() {
        body = $("body");
        menuIcon = $(".menu-icon-link");
      });

      // Test if all the variable I am about to use have been defined
      it('has a body and a menuIcon defined', function() {
          expect(body).toBeDefined();
          expect(menuIcon).toBeDefined();
      });
      // Test if The menu element is hidden by default
        it('is hidden by default', function() {
            // Test if the body has the class menu-hidden applied to it by default
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

        // Test if The menu changes visibility when the menu icon is clicked
          it('changes visibility when menu icon is clicked', function() {
              // Test if the menu is displayed when the menu is clicked a first time
              menuIcon.click();
              expect(body.hasClass('menu-hidden')).toBeFalsy();
              // // Test if the menu is hidden when the menu is clicked a second time
              menuIcon.click();
              expect(body.hasClass('menu-hidden')).toBeTruthy();
          });
    });

    // This test suite contains a set of tests about initial feed entries
    describe('Initial Entries', function() {
      var totalEntries;

      // Make sure the test is run only once loadFeed function has completed its work
      beforeEach(function(done) {
        loadFeed(0,function () {
          totalEntries = $('.feed .entry').length;
          done();
        });
      });

      // Test if all the variable I am about to use have been defined
      it('have totalEntries and minimumEntries defined', function() {
          expect(totalEntries).toBeDefined();
      });
      // Test if there is at least 1 single entry loaded
      it('are loaded', function(done) {
        expect(totalEntries).toBeGreaterThan(0);
        done();
      });
    });

    // This test suite contains a set of tests about New Feed Selection
    describe('New Feed Selection', function() {
      var initialFeed;
      var updatedFeed;
      // Make sure the test is run only once loadFeed function has completed its work
      beforeEach(function(done) {
        loadFeed(0,function() {
          initialFeed = $('.feed').html();
          loadFeed(1,function(){
            updatedFeed = $('.feed').html();
            done();
          });
        });
      });

      // Test if all the variables I am about to use have been defined
      it('has an initialFeed and an updatedFeed defined', function() {
          expect(initialFeed).toBeDefined();
          expect(updatedFeed).toBeDefined();
      });
      it('changes when a new feed is loaded', function(done) {
        // Test if the updatedFeed is different from the initialFeed
        expect(updatedFeed).not.toBe(initialFeed);
        done();
      });
    });
}());
