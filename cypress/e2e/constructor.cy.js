import '@4tw/cypress-drag-drop';
import user from '../fixtures/user.json'
import ingredients from '../fixtures/ingredients.json'
import order from '../fixtures/order.json'

const testUrl = 'http://localhost:3000';


describe('constructor', function () {

        it('constructor check', function () {
            cy.viewport(1920, 1280);
            cy.visit(testUrl);
            cy.contains('Соберите бургер');
            cy.intercept('GET', 'api/auth/user', user);
            cy.intercept('GET', 'api/ingredients', ingredients);
            window.localStorage.setItem(
                'refreshToken',
                JSON.stringify('d7725b3c053694ca1f1b8edc9330a553d54f39cf6780b07d8a50c05fe866a8c772d8317cef3c1459')
            )
            cy.setCookie(
                'token',
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDRmNTFmNmQyOTk3MDAxY2FhOTA0OCIsImlhdCI6MTY5NDgyNjczNCwiZXhwIjoxNjk0ODI3OTM0fQ.xz0qInrHX5NyDvpzVD9f16bhcI712JklHvyoDsSpLxA'
            )
            //Drag
            cy.get('[class^=burger-constructor_ingredients]').as('ingredientsZoneClass')
            cy.get('#643d69a5c3f7b9001cfa093c').drag('@ingredientsZoneClass').then((success) => {assert.isTrue(success)})
            cy.get('#643d69a5c3f7b9001cfa0941').drag('@ingredientsZoneClass').then((success) => {assert.isTrue(success)})
            cy.get('#643d69a5c3f7b9001cfa0942').drag('@ingredientsZoneClass').then((success) => {assert.isTrue(success)})

            //Modal
            cy.get('#643d69a5c3f7b9001cfa093c').click()
            cy.contains('Детали ингредиента');
            cy.get('#closeModal').click()    

            //Click order btn
            cy.get('#orderBtn').click()
            cy.intercept('POST', 'api/orders', order)
           
            cy.clearLocalStorage();
            cy.clearCookies()    
        });

}); 