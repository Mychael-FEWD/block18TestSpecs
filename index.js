/*

Unit Tests

Prompt 1: A function called "multiplication" that returns the product of the two input numbers.
-expect multiplication(5, 2) to be 10
-expect multiplication('hello', 'world') to be error
-expect multiplication(5, 'world') to be error
-expect multiplication(5, -3) to be -15
-expect multiplication(true, 3) to be error
-expect mulitplication(null, 2) to be error
-expect multiplication(-2, -3) to be 6
-expect mulitplication() to be error
-expect mulitplication('2', 2) to be error

Prompt 2: A function called "concatOdds" takes two arrays of integers as arguments. It should return a 
single array that only contains the odd numbers, in ascending order, from both of the arrays.
-expect concatOdds([-3, -2, -1, 1, 3, 3, 5, 6, 7], [-1, 1, 3, 4, 5, 7, 7, 9, 13]) to be [-3, -1, 1, 3, 5, 7, 9, 13]
-expect concatOdds([-3, '-1', 1, '3'], ['-5', 'three', 7, 0]) to be error
-expect concatOdds() to be error
-expect concatOdds([2, 4 , 6, 8],[12, 24, 46]) to be []
-expect concatOdds([2, '3', 4, '7', 8, '9']['-1', '1', '11']) to be error
-expect concatOdds(['hello', 'world', 'two', '4', 9], [null]) to be error

Functional Tests

Prompt 1: A shopping cart checkout feature that allows a user to check out as a guest (without an account), 
or as a logged-in user. They should be allowed to do either, 
but should be asked if they want to create an account or log in if they check out as a guest.

-When a shopper has nothing in their cart the cart should display a message saying the cart is empty, add a redirect to allow the shopper to start browsing
-When a shopper has items in their cart, the cart should display how many items
-When a shopper clicks on their cart, the cart should display all the items added with a small description, image, and cost
-When a shopper is viewing their cart, the cart should add all of the items and display a subtotal
-When a shopper is ready to check-out there is a check-out button that will prompt them to either log-in to an account or checkout as a guest
-When a shopper logs in to their account, their cart should be saved in the case that they close the webpage
-When a shopper chooses continue as a guest, none of their information will be stored if the webpage is close and after check-out process
-When a shopper continues to the next page, it should be a verification of the items they have in their cart and break down the subtotal plus tax
-When a shopper has verified their cart in check-out there should be a confirm button for them to confirm cost + shipping and tax
-When a shopper hits the confirm button, the next page should be personal information inputs for name, email, address; all information used for the checkout and receipted of the purchase
-When a shopper attempts to continue without entering required info they should be prompted to fill out the required fields
-When a shopper hits continue after filling out the required fields the next page should be inputs for payment info and display cost breakdown again
-When a shopper clicks on "apple pay" it should redirect them to make the payment with an apple pay charge
-When a shopper fills out the card info incorrectly they should recieve an alert to fix any incorect information
-When a shopper confirms after filling out payment info, they should recieve a page for successful transaction
-When a shopper confirms after filling out paymnet info, they should be given a reciept breakdown and estimation for delivery; and a message that they will be sent an emailed receipt as well

*/
