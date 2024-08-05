Feature: Cart

    Background:
        Given A web browser is at the saucelabs login page
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        
    Scenario: User goes to shopping Cart
        When A User clicks on the cart icon
        Then They are taken to their shopping cart