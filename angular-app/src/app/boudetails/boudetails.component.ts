import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-boudetails',
  templateUrl: './boudetails.component.html',
  styleUrls: ['./boudetails.component.css'],
})
export class BoudetailsComponent implements OnInit {
  // @Input() bouquet: bouquetDetails;
  id: number;
  private sub: any;
  constructor(
    private dataservice: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.sub = this.activatedRoute.params.subscribe(
    //   (params) => (this.id = +params['id'])
    // );
    // this.activatedRoute.queryParams.pipe(filter(params => params.id)).subscribe(params => )
    //   .filter((params) => params.id)
    //   .subscribe((params) => {});
    // this.activatedRoute.queryParams
    //   .pipe(filter((params) => params.id))
    //   .subscribe((params) => {
    //     console.log(params);
    //     this.id = params.idnum;
    //     console.log(this.id);
    //   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
