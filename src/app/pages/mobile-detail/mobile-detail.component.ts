import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.scss']
})
export class MobileDetailComponent implements OnInit {
  mobileDetailId: number = 0;
  mobileDetails: any = {};
  imagedata: any[] = [];

  constructor(private route: ActivatedRoute, private mobileService: MobileService) {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id) {
        this.mobileDetailId = parseInt(id);
      }
  });
  }

  ngOnInit(): void {
    if(this.mobileDetailId){
      this.getMobileDetails();
    }
  }


  getMobileDetails(){
    this.mobileService.getMobileDetails(this.mobileDetailId)
    .subscribe(mobileDetail => 
      this.mobileDetails = mobileDetail
    )
      this.imagedata.push(...[
        {
          url: "https://www.91-img.com/gallery_images_uploads/f/c/fc3fba717874d64cf15d30e77a16617a1e63cc0b.jpg",
          isActive: true,
        }, {url: "https://www.91-img.com/gallery_images_uploads/b/4/b493185e7767c2a99cfeef712b11377f625766f2.jpg",
          isActive: false
        }, {url: "https://www.91-img.com/gallery_images_uploads/c/3/c32cff8945621ad06c929f50af9f7c55f978c726.jpg",
          isActive: false
        }
      ]);
  }

  sliderClick(isPreviousClick: boolean){
    const currentImgIndex = this.imagedata.findIndex(f => f.isActive);
    if(currentImgIndex != -1){
      if(isPreviousClick){
        if(currentImgIndex == 0){
          this.imagedata[this.imagedata.length - 1].isActive = true;
        } else {
          this.imagedata[currentImgIndex - 1].isActive = true;
        }
      } else {
        if(currentImgIndex == this.imagedata.length - 1){
          this.imagedata[0].isActive = true;
        } else {
          this.imagedata[currentImgIndex + 1].isActive = true;
        }
      }
      this.imagedata[currentImgIndex].isActive = false;
    }
  }

}
