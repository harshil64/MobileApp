import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  APIURL = 'https://scb-test-mobile.herokuapp.com/api/';
  selectedSortingOptions: BehaviorSubject<number> = new BehaviorSubject(1);
  
  constructor(private http: HttpClient) { }

  getMobileList(){
    // return this.http.get<any>(this.APIURL + 'mobiles/');
    return of([{"brand":"Samsung","description":"First place in our list goes to the excellent Moto E4 Plus. It's a cheap phone that features phenomenal battery life, a fingerprint scanner and a premium feel design, plus it's a lot cheaper than the Moto G5 below. It is a little limited with its power, but it makes up for it by being able to last for a whole two days from a single charge. If price and battery are the most important features for you, the Moto E4 Plus will suit you perfectly.","rating":4.9,"thumbImageURL":"https://cdn.mos.cms.futurecdn.net/grwJkAGWQp4EPpWA3ys3YC-650-80.jpg","id":1,"name":"Moto E4 Plus","price":179.99},{"brand":"Nokia","description":"Nokia is back in the mobile phone game and after a small price drop to the Nokia 6 we've now seen it enter our best cheap phone list. It comes with a Full HD 5.5-inch display, full metal design and a fingerprint scanner for added security. The battery isn't incredible on the Nokia 6, but it's not awful either making this one of our favorite affordable phones on the market right now.","rating":4.6,"thumbImageURL":"https://cdn.mos.cms.futurecdn.net/8LWUERoxMAWavvVAAbxuac-650-80.jpg","id":2,"name":"Nokia 6","price":199.99},{"brand":"Motorola","description":"The spec for the G4 Plus is much the same as it was on the Moto G4, but it also comes with a fingerprint scanner and an improved camera. The 16MP rear shooter is arguably one of the most impressive phone cameras at the sub-£200 mark. There's no NFC so you won't be able to use Android Pay on the Moto G4 Plus, but a bright display and strong performance is sure to make up for it.","rating":4.7,"thumbImageURL":"https://cdn.mos.cms.futurecdn.net/52JJgbgWiGftNHV5UmMDfS-650-80.jpg","id":3,"name":"Moto G4 Plus","price":179},{"brand":"Motorola","description":"Motorola's Moto G5, a former best cheap phone in the world, has slipped a few places thanks to better priced alternatives, plus the introduction of the new G5S. The Moto G5 comes with a metal design, 1080p display and fingerprint scanner. You won't get the fastest chipset on this list or NFC with the Moto G5, but as an all-round product the cheap Motorola phone will serve you well.","rating":3.8,"thumbImageURL":"https://cdn.mos.cms.futurecdn.net/DcUtY6YfhoajHnoKUgGFqn-650-80.jpg","id":4,"name":"Moto G5","price":165},{"brand":"Motorola","description":"Currently the only Sony handset to take a position in our best cheap phone list, the Xperia L1 is a low priced handset that does okay but won't blow your socks off. Other phones in this list are far more impressive as this doesn't have a fingerprint scanner or stunning camera. That said, the price is low and if you really, really like the design of Sony handsets everything here could add up to being your best choice for a cheap phone. We particularly liked the 5.5-inch display - despite its 720p resolution - and the expandable storage too, which allows you to use microSD cards up to 256GB. ","rating":4.3,"thumbImageURL":"https://cdn.mos.cms.futurecdn.net/7dUFmtHkmH7La9dFzew7Ri-650-80.jpg","id":5,"name":"Sony Xperia L1","price":171.99}]);
  }

  getMobileDetails(id: number){    
    return of({"name":"Nokia 6","id":2,"thumbImageURL":"https://cdn.mos.cms.futurecdn.net/8LWUERoxMAWavvVAAbxuac-650-80.jpg","brand":"Nokia","price":199.99,"description":"Nokia is back in the mobile phone game and after a small price drop to the Nokia 6 we've now seen it enter our best cheap phone list. It comes with a Full HD 5.5-inch display, full metal design and a fingerprint scanner for added security. The battery isn't incredible on the Nokia 6, but it's not awful either making this one of our favorite affordable phones on the market right now.","rating":4.6})
  }
}

