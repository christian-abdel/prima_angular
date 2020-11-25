import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD2cg_ZvJNLt6FpUIyK-Pm4WxbAR0MuhjtHuUMjsZMl-eSGWNTiCS_hszeOlXKmVJ_TVr0IqT5RFzD-QHtnHyIr408uJ_erXNLgxz2nsOt6jA4MsScGGJ4H26gIZFtDBfvcKoTC3fbiXIbQ5_kgoAAGUvQW-a9Moc75X5pTmvedSvVFnV8ETLHyZ8J4s8rp0lMRpyy1PXtk-hos5o-w49qCBAjtOeaR2IZh37lepAoaDObLDdBld2gTD1XIimiX4VC17QxZQvVLUZfChmLgybROBNSj'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
