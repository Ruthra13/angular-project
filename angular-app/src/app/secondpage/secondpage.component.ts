import { Component, OnInit } from '@angular/core';
import { bouquetDetails } from '../bouquetdetails';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css'],
})
export class SecondpageComponent implements OnInit {
  constructor(
    private dataservice: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  bouquets: bouquetDetails[];
  filteredBouquet: bouquetDetails[];
  selectedBouquet: bouquetDetails[];
  id: number;

  private _searching: string;
  get searching(): string {
    return this._searching;
  }
  set searching(value: string) {
    this._searching = value;
    this.filteredBouquet = this.filterbouquet(value);
  }

  filterbouquet(searchString: string) {
    return this.bouquets.filter(
      (bouquet) =>
        bouquet.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  // onSelect(bouquet: bouquetDetails):void
  // {
  //   this.selectedBouquet = bouquet;
  //   this.router.navigateByUrl("/secondpage/"+bouquet.id);
  // }

  onSelect(id: number) {
    this.router.navigate(['/boudetails'], { queryParams: { idnum: id } });
    //this.router.navigate(['/boudetails', id]);
  }

  ngOnInit(): void {
    this.bouquets = this.dataservice.getBouquetDetails();
    this.filteredBouquet = this.bouquets;
  }
}
