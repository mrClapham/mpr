# Mr Porter Web Dev Test

## Task

* Build a dynamic product listing page using the API
* Ensure its layout adapts to mobile/desktop viewports
* Ensure product images look sharp on retina devices
* Implement pagination/infinite scroll
* Use any library/framework you deem applicable
* Don't worry about header/footer

Use the following [design mockups](public/mockups.jpg).

This is a chance for you to show us how you think this part of our website should be built. The task
should take about 2 hours but it's more important you're happy with your implementation than to
finish bang on time.


## Setup

To run the app:

```shell
$ npm install
$ node app
```


## Products API

Returns a list of products. 

Example:

```
GET /products/?offset=0&limit=60
HTTP 200
Content-Type: application/json

{
    "offset": 0,
    "limit": 60,
    "total": 274,
    "data": [{
        "id": 540559,
        "name": "Roadmaster Waxed-Cotton Jacket",
        "price": "£550",
        "designer": "Belstaff",
        "image": "//cache.mrporter.com/images/products/540559/540559_mrp_in_m2.jpg",
        "largeImage": "//cache.mrporter.com/images/products/540559/540559_mrp_in_l.jpg"
    }, ...]
}
```

Parameters:

* `offset` (optional) - defaults to 0
* `limit` (optional) - defaults to 60
