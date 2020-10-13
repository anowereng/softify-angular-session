import { environment } from './environment';

export const UrlService = {

  commonparam: 'username=ashrafxn@yahoo.com&password=fsgew35tf&guid=0b876b63-9d2c-425b-af0e-c033ca3a4c8d&lang=en',

  // https://prematch.lsports.eu/OddService/GetLeagues?username=ashrafxn@yahoo.com&password=fsgew35tf&guid=0b876b63-9d2c-425b-af0e-c033ca3a4c8d&lang=en&Sports=6046&Locations=142
  
  getSportsUrl: `${environment.url_prematch}` + 'GetSports/?',
  getLeaguesUrl: `${environment.url_prematch}` + 'GetLeagues/?'




};

