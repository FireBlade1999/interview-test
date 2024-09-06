import {
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import { cart } from '@pages/Cart';
import { productPage } from "@pages/ProductPage";

When("A User clicks on the cart icon", () => {
    cart.gotoCart();
});

Then("They are taken to their shopping cart", () => {
    cart.elements.quantity().should('be.visible');
});

When("A User adds an item {string} to their Cart", (item) => {
    productPage.addItem(item);
});
        
Then("The item is present in their Cart", () => {
    cart.gotoCart();
    cart.elements.inventoryItem().should('be.visible');
});

Then("There is the option to remove the item {string} from the Cart", (item) => {
    cart.elements.remove(item).should('be.visible');
});
        
Then("The product page gives the option to remove the item {string} from the Cart", (item) => {
    cart.continueShopping();
    productPage.elements.remove(item).should('be.visible');
});

When("The User removes the item {string} from their Cart", (item) => {
    cart.removeItem(item);
});
        
Then("The product page is updated to show the item {string} is no longer in the Cart", (item) => {
    cart.continueShopping();
    productPage.elements.backpack().should('be.visible');
});