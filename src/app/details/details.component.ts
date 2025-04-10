import { Component, inject, Input } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  private housingService: HousingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;

  applyForHousingLocationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  @Input()
  set id(id: string) {
    this.housingService
      .getHousingLocationById(Number(id))
      .then((location: HousingLocation | undefined) => {
        this.housingLocation = location;
      });
  }

  applyForHousingLocation() {
    this.housingService.applyForHousingLocation(
      this.applyForHousingLocationForm.value.firstName ?? '',
      this.applyForHousingLocationForm.value.lastName ?? '',
      this.applyForHousingLocationForm.value.email ?? ''
    );
  }
}
