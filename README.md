# Mr Porter Web Dev Test

## Task

* Build a dynamic product listing page using the API
* Ensure its layout adapts to mobile/desktop viewports
* Ensure product images look sharp on retina devices
* Implement pagination/infinite scroll
* Use any library/framework you deem applicable
* Don't worry about header/footer

This is a chance for you to show us how you think this part of our website should be built. The task
should take about 2 hours but it's more important you're happy with your implementation than to
finish bang on time.


## API

Returns a list of products. 

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


## Browser Matrix

This is our browser matrix - You're not expected to test against every device in the short space of
time but be aware of the different levels of support required.

* Class A - Full functionality & content supported. Visual quirks that only have a minor effect on design & usability are tolerated on non-target browsers.
* Class B - Core shopping functionality supported. Visual quirks that do not interrupt core shopping functionality tolerated across the site.

Browser
Class A Version
Class B Version*
Safari - Desktop    Latest  5.1+
Safari - Mobile Latest  6+
Safari - Tablet Latest  6+
Chrome - Desktop    Latest  35+
Chrome - Mobile Latest  28+
Firefox - Desktop   Latest  30+
Internet Explorer - Desktop Latest  8+
