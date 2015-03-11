var _app;
var App = (function(targ){

    var _scope = function(targ){
        this._targ = targ;
        this._ul = null;
        this._data = null;
        this._service = new Service();
        var _this = this;
        this._service.listen(Service.LOAD_COMPLETE, function(e){
            _this.setData(e.detail.data)
        });

        this._service.setPath('/api/products/');
    }

    _scope.prototype = {
        setData:function(value){
            this._data = value;
            onDataSet.call(this);
        },
        getData:function(){
            return this._data;
        }
    }
    //--- call backs

    var createProduct = function(d){
        //console.log(d)


        var _li = document.createElement('li')

        var _product_holder = document.createElement('div')
        _product_holder.setAttribute('class', 'product-holder')

        var _image_holder = document.createElement('div')
        _image_holder.setAttribute('class', 'image-holder')

        var _image = document.createElement('img')
        _image.setAttribute('src', "http://"+ d.image)
        _image.setAttribute('class', "img-responsive fadedIn")

        _image_holder.appendChild(_image);
        _product_holder.appendChild(_image_holder);
        _li.appendChild(_product_holder);

        return _li;
    }

    var onDataSet = function(){
        console.log("onDataSet -- -------- ", this._data);

        if( !this._ul ){
            this._ul = document.createElement('ul');
            this._ul.setAttribute('class', 'products');
            this._targ.appendChild(this._ul);
        }

        var _this = this
        var products = this._data.data.map(function(d,i){
            _this._ul.appendChild( createProduct(d) );
        })
    }

return _scope;

})();

var init = function(){
    _app = new App(document.getElementById('main'));

}





