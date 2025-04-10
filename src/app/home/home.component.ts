import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private housingService: HousingService = inject(HousingService);

  housingLocationList: HousingLocation[] = [];
  filteredHousingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredHousingLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredHousingLocationList = this.housingLocationList;
      return;
    }

    this.filteredHousingLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
