(function() {
    var greeting;
    var salutaion = 'Hiya';
    var greeting = salutaion + ', Friend!';
    var greetingEl = document.getElementById('greeting');
    greetingEl.textContent = greeting;

    var data = [
        {
            price: '$22.00',
            selector: 'p1'
        },
        {
            price: '$26.00',
            selector: 'p2'
        },
        {
            price: '$12.00',
            selector: 'p3'
        },
        {
            price: '$25.00',
            selector: 'p4'
        },
        {
            price: '$20.00',
            selector: 'p5'
        },
        {
            price: '$20.00',
            selector: 'p6'
        },
        {
            price: '$17.00',
            selector: 'p7'
        },
        {
            price: '$15.00',
            selector: 'p8'
        }
    ];

    function Package(data) {
        this.price = data.price;
        this.selector = data.selector;
    };

    var getEl = function (id) {
        return document.getElementById(id);
    };

    var writePackageInfo = function(package) {

        var selector = package.selector,
        priceEl = getEl(selector + '-price');

        priceEl.textContent = package.price;
    };

    var floralDecor = new Package(data[0]);
    writePackageInfo(floralDecor);

    var bohoMirror = new Package(data[1]);
    writePackageInfo(bohoMirror);

    var rainbowDecor = new Package(data[2]);
    writePackageInfo(rainbowDecor);

    var macrameDecor = new Package(data[3]);
    writePackageInfo(macrameDecor);

    var smallMacrame = new Package(data[4]);
    writePackageInfo(smallMacrame);

    var ringHolder1 = new Package(data[5]);
    writePackageInfo(ringHolder1);

    var jewelryDish = new Package(data[6]);
    writePackageInfo(jewelryDish);

    var ringHolder2 = new Package(data[7]);
    writePackageInfo(ringHolder2);


}());