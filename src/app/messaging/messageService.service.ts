import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Injectable()
export class messageService {
  convos: AngularFireList<any>;
  
  constructor(private firebase :AngularFireDatabase ) { }
  
  getData(){
    this.convos = this.firebase.list('conversations');
    return this.convos;
  }
  
//    this.newsFeedService.addItem(itemTitle.value,itemDescription.value,itemURL,unixTime);
  sendMessage(message: String ,time: number, type:string){
    message= message.trim();
    this.firebase.database.ref('conversations/' + "FW1Qik9nE3ZLiC7Xk9fgBcabUwm1").set({
      content: message,
      timeStamp: time,
      type: type
    });
    /*
    this.convos.push({
      content: message,
      timeStamp: time,
      type: type
    });
  }
  */
}

}