import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(){
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number){
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async deleteLocation(removeData){
    const response = fetch(`http://localHost:3000/locations/${removeData.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return await response;
  }
  addHousingLocation(location){
    fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location)
    })
  }


  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
