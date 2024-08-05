import {
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import { cart } from '@pages/Cart';

When("A User clicks on the cart icon", () => {
    cart.gotoCart();
});

Then("They are taken to their shopping cart", () => {
    cart.elements.quantity().should('be.visible');
});