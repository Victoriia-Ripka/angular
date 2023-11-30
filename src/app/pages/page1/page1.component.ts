import { Component, Injectable } from '@angular/core'; 
import { CounterService } from 'src/app/counter.service';

@Injectable()
@Component({
  selector: 'app-page1',
  templateUrl: 'page1.component.html',
  styleUrls: ['page1.component.css'],
  // providers: [CounterService]
})
export class Page1Component {

}
