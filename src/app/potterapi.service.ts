import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PotterapiService {

  constructor(private http:HttpClient) { }
  key="$2a$10$RfJmoE2vvoiGGwNEPEQoGe7OCRZ6/xLVsLSNAHM0OECBMb1w11J0G";
  getData(){
    return this.http.get(`https://www.potterapi.com/v1/characters?key=${this.key}`);
  }
}
