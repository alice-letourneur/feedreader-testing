// Placing all our tests within the $() function to ensure they don't run until the DOM is ready
$(function() {
    // This test suite contains a set of tests about RSS feeds.
    describe('RSS Feeds', function() {

        // Tests if allFeeds variable has been defined and that it is not empty
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


    // This test suite contains a set of tests about the menu.
    describe('The menu', function() {
    
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
