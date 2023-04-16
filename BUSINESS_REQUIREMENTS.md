# Business Requirements

These requirements are subject to change.

1. User can register to the application using email and password. Then, user should receive a verification email to confirm their account (this is subject to change in refer to our policy on third party services). 
2. Optionally, user can register through third party method like Google or Facebook.
3. User can log in and log out, obviously.
4. User can see (and search by query, obviously) available and sold out products, for each product containing ID, name, description, price, available stocks, options, product weight, dimension, and every other fields you can think of.
5. User can put a product to their cart. They can change product quantity, add more items, and remove items from their cart.
6. User can put a product to their wishlist. Santa Claus can't grant the wishlist because he doesn't exist, I mean, come on! Grow up!
7. User can use vouchers and coupons. They can preview the total price after those discounts both on cart and on the order preview page. Coupons must not make the total shopping amount to be less than zero.
8. User can only apply one coupons per transaction (for multiple coupons capability, see PHASE 2).
9. User can check out their products from the cart, and choose a payment method, shipping method. They can choose which address to send.
10. During checkout, user can mark the order as a gift for the person receiving it. 
11. User can see the status of their order/transaction. Valid statuses will be defined on a separate document.
12. User CANNOT COMPLAIN about their order/transaction, we'll be too lazy to handle this case. So, there will be NO REFUNDS YET.
13. User can mark their order as complete by stating that they have received it. 
14. User can review the products only after they received it.
15. User can give ratings to the product (1-5 star) and the store owner (1-5 star).
16. User can get recommendation based on their product browsing history, what they put to wishlist, what they put to cart, and what they ordered (and how frequent they order it).
17. User can chat the store owner to ask things.
18. User can change their profile data, shipping addresses, card information, and more.
19. Optionally, user can request for account deletion (permanently, not soft deletion).


Now, about merchant:

20. Merchant can register to have their store created on TokoBapak.
21. Merchant can set their "about me", opening and closing hours, the category that they're selling, and where they are based on. 
22. Merchant can put, remove and modify their items on their store. They can sell both physical and digital item. 
23. Merchant CANNOT sell items that are prohibited by the TokoBapak system. 
24. Merchant can chat to the user, and send a follow up message.
25. Merchant can receive orders, and see the status of the order.
26. Once merchant received an order, they will have a time limit of 2 days to accept the order. If not, the order will be canceled and the user's money will be refunded. This does not applies to digital items as they don't require packing and shipping. 
27. Merchant can see how rich they are, and their selling statistics.
28. Merchant can request for withdrawal.


PHASE 2:

29. Merchant can boost their product item by putting them as an advertisement. 
30. User login via Multi-factor authentication such as TOTP, HOTP, and e-mail. No phone SMS validation because that stuff is expensive and unrealistic. 
31. Merchant can join the flash sale event with 35% of the product price being backed by TokoBapak. 
32. User can buy stuff with a limited time during flash sale events. 
33. Merchant can create coupons that are valid only for purchases from their store. These coupons can be a percentage discount, fixed amount discount, or a buy one get one coupon. All of them will have rules such as: minimum amount of purchase and minimum quantity of purchase. More coupon types and rules are to be discussed.
34. User can use multiple coupon for one transaction. There will also be limitation for avoiding recursive coupon benefits or similar hacky stuff to get freebies from the stores.
35. Refunds! User can have their money refunded on failed transaction or on misbehaved merchant. With misbehaved merchant defined as merchants that neglect the merchant standard that they were asked to put up to during serving the users. The the money will be held by TokoBapak for a certain period of time until the case is resolved. If the case is not resolved by the time it should have, TokoBapak will return the money to the customer, let the customer have the product, and give a warning to the merchant.
36. Merchant can get warnings if they misbehaved (per number 35). They can be banned if they already have 10 warnings.
37. Merchant can ask for amnesty for their warnings if they have proof against it. That means... we will have a moderation team. (This is subject to change)

If you would like to amend the business requirements, please do not immediately create a pull request for this repository.
Instead, please open an [Organization Discussion](https://github.com/orgs/TokoBapak/discussions/new?category=general) first about the changes.