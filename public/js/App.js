var _app;
var App = (function(targ){

    var _scope = function(targ){
        this._targ = targ;
        this._ul = null;
        this._data = null;
        this._service = new Service();
        this._scrollingInitiated = false;
        var _this = this;
        this._service.listen(Service.LOAD_COMPLETE, function(e){
            _this.setData(e.detail.data)
        });

        this._service.setPath('/api/products/');
    }
    //-- Api
    _scope.prototype = {
        setData:function(value){
            this._data = value;
            onDataSet.call(this);
        },
        getData:function(){
            return this._data;
        }
    }

    //--- business logic
    var createProduct = function(d){

        var _li = document.createElement('li')

        var _product_holder = document.createElement('div')
        _product_holder.setAttribute('class', 'product-holder')

        var _image_holder = document.createElement('div')
        _image_holder.setAttribute('class', 'image-holder')

        var _image = document.createElement('img')
        _image.setAttribute('src', "http://"+ d.largeImage)
        _image.setAttribute('class', "img-responsive fadedIn")

        var _designer = document.createElement('p')
        _designer.setAttribute('class', 'designer')
        var _designerText = document.createTextNode(d.designer);
        _designer.appendChild(_designerText) ;

        var _name = document.createElement('p')
        var _nameText = document.createTextNode(d.name );
        var _br = document.createElement('br')
        var _priceText = document.createTextNode( d.price );

        //var _name.innerHTML = d.designer+'<br />'+ d.price;
        _name.appendChild(_nameText);
        _name.appendChild(_br);
        _name.appendChild(_priceText);

        _image_holder.appendChild(_image);
        _product_holder.appendChild(_image_holder);
        _product_holder.appendChild(_designer);
        _product_holder.appendChild(_name);

        _li.appendChild(_product_holder);

        return _li;
    }

    var onDataSet = function(){
        if( !this._ul ){
            this._ul = document.createElement('ul');
            this._ul.setAttribute('class', 'products');
            this._targ.appendChild(this._ul);
        }
        addProducts.call(this);
        if(!this._scrollingInitiated) initWindowScroll.call(this);
    }
    var addProducts = function(){
        var _this = this
        var products = this._data.data.map(function(d,i){
            _this._ul.appendChild( createProduct(d) );
        })
    }
    var initWindowScroll = function() {
        var _this = this
        window.onscroll = _.debounce(function (e) {
            _onWindowScrolled.call(_this);
        }, 30);
        this._scrollingInitiated = true;
    }
    var _onWindowScrolled = function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var buffer = window.innerHeight;
        // console.log("TOP", scrollTop);
            if( (this._targ.clientHeight - scrollTop)<(buffer*2) ){
                addProducts.call(this);
            }
    }

    return _scope;
})();

var init = function(){
    _app = new App(document.getElementById('main'));
}








