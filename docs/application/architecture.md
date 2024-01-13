# Architecture Design

This architecture design is subject to change.

![](/architecture/2022-12-29_20.32.png)

Excalidraw link: https://excalidraw.com/#json=JPBApysdZoQE1j0Tm4UBF,WbBCS-GteLqgUDsgkURP0g

- User service —> Handles registration and profile-related to the user
- Authentication service —> Handles login, logout, and forgot password
- Inventory service —> Handles products that a certain store owns
- Cart service —> Handles user's shopping cart, might also handle user's wish list
- Order service —> Checkout system
- Analytics service —> Listen to Kafka/Redpanda for anything, and insert into an [OLAP database](https://www.ibm.com/topics/olap)
- Recommendation service (optional) —> Acquire user's movement from OLAP database over time, and create a product recommendation based on the behavior
- Promotion service —> handles coupons and automatic applied promotion on user's shopping cart
- Image proxy service (optional) —> Convert image from blob storage to some relevant versions (black and white for sold
  out, etc.)
- Payment service —> Calls third party payment gateway and keep track of payment statuses
- Notification service —> Listen to Kafka/Redpanda "notification" topic to send notification to user via email or mobile push notification
- Shipping service —> Calls third party shipping providers and keep track of shipping statuses
- Merchant service —> An entrypoint for merchant related businesses
- Chat service (optional) —> Chat platform between customer and merchant
- Review service —> Listen to Kafka/Redpanda for finished order, ask for customer review and keep list of user reviews
- Promoted item service (optional) —> Homepage banners & products, might as well handle product advertisement
- Wishlist service (optional) —> self-explanatory

If you would like to amend the architecture, please do not immediately create a pull request for this repository.
Instead, please open an [Organization Discussion](https://github.com/orgs/TokoBapak/discussions/new?category=general) first about the changes.