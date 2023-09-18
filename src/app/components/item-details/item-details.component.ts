
import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute} from '@angular/router';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  animal?: Animal


  constructor(private service: ListService, private route: ActivatedRoute){
    this.getAnimalId()
  }

  
  getAnimalId(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.service.getAnimal(id).subscribe( res => {
     this.animal = res
    }
    )
  }

}
