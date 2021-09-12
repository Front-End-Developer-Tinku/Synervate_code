import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SldrMnVr, SldrSerVcmn } from './IndexFile.json';

interface Slder{
  id: number;
  ImgSldr: string;
  SldrCntVr: string;
}
interface SerVceSldr{
  id: number;
  SldrSreImg: string;
  SldrHdng: string;
  SldrCntVrShw: string;
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  SldrRptmn: Slder[] = SldrMnVr;
  SldrSrcmn: SerVceSldr[] = SldrSerVcmn;
  customOptionsone: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };
  customOptionsTwo: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 20,
    navText: ['<img src="https://www.synervatesolutions.com/asset/icon/left_arrow.png">', '<img src="https://www.synervatesolutions.com/asset/icon/right_arrow.png">'],
    items: 3,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true,
  };
  customOptionsTestmnSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 0,
    navText: ['<img src="https://www.synervatesolutions.com/asset/icon/left_arrow.png">', '<img src="https://www.synervatesolutions.com/asset/icon/right_arrow.png">'],
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 1
      }
    },
    nav: true,
  };

  customOptionsClints: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin: 0,
    navText: ['<img src="https://www.synervatesolutions.com/asset/icon/left_arrow.png">', '<img src="https://www.synervatesolutions.com/asset/icon/right_arrow.png">'],
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: false,
  };




}
