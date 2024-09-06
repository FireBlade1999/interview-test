Feature: Cart

    Background:
        Given A web browser is at the saucelabs login page
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        
    Scenario: User goes to shopping Cart
        When A User clicks on the cart icon
        Then They are taken to their shopping cart

    Scenario Outline: User adds an item to the shopping Cart
        When A User adds an item '<item>' to their Cart
        Then The item is present in their Cart
        And There is the option to remove the item '<item>' from the Cart
        And The product page gives the option to remove the item '<item>' from the Cart
    Examples:
        | item      |
        | backpack  |

    Scenario Outline: User adds an item to the shopping Cart then removes it from the Cart
        When A User adds an item '<item>' to their Cart
        Then The item is present in their Cart
        And There is the option to remove the item '<item>' from the Cart
        When The User removes the item '<item>' from their Cart
        Then The product page is updated to show the item '<item>' is no longer in the Cart
    Examples:
        | item      |
        | backpack  |