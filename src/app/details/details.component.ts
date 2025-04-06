import { Component, inject, Input } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  private housingService: HousingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;

  @Input()
  set id(id: string) {
    this.housingLocation = this.housingService.getHousingLocationById(
      Number(id)
    );
  }
}
