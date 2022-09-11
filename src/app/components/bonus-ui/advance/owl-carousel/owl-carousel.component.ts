import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  owlcarousel1 = [
    { id: 1, img: "assets/images/slider/1.jpg" },
    { id: 2, img: "assets/images/slider/2.jpg" },
    { id: 3, img: "assets/images/slider/3.jpg" },
    { id: 4, img: "assets/images/slider/4.jpg" },
    { id: 5, img: "assets/images/slider/5.jpg" },
    { id: 6, img: "assets/images/slider/6.jpg" },
    { id: 7, img: "assets/images/slider/7.jpg" },
    { id: 8, img: "assets/images/slider/8.jpg" },
    { id: 9, img: "assets/images/slider/9.jpg" },
    { id: 10, img: "assets/images/slider/10.jpg" }
  ];

  //Options
  owlcarousel1Options = {
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  owlcarousel2Options = {
    loop: true,
    margin: 10,
    items: 5,
    nav: false,
    responsive: {
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }


  owlcarousel3Options = {
    center: true,
    items: 5,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }

  owlcarousel4Options = {
    items: 5,
    loop: true,
    margin: 10,
    merge: true,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  owlcarousel5Options = {
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 5,
    nav: false
  }

  owlcarousel6Options = {
    items: 5,
    loop: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  owlcarousel7Options = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  owlcarousel8Options = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  owlcarousel9Options = {
    rtl: true,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  owlcarousel10Options = {
    items: 5,
    lazyLoad: true,
    loop: true,
    margin: 5,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  owlcarousel12Options = {
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 5,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  owlcarousel13Options = {
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  owlcarousel14Options = {
    items: 1,
    margin: 10,
    autoHeight: true,
    nav: false
  }

}
