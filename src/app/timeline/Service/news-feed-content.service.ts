import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Injectable()
export class NewsFeedContentService {
  newsFeedData: AngularFireList<any>;
  
  constructor(private firebase :AngularFireDatabase ) { }
  
  getData(){
    this.newsFeedData = this.firebase.list('newsFeedContent');
    return this.newsFeedData;
  }
//    this.newsFeedService.addItem(itemTitle.value,itemDescription.value,itemURL,unixTime);
  addItem(content: String,imageURL: String ,url: string, date:number){
    this.newsFeedData.push({
      content:content,
      thumbNailimage: imageURL,
      timestamp: date,
      videoLink: url
    });
  }

  removeItem($key: string){
    this.newsFeedData.remove($key);
  }


}
