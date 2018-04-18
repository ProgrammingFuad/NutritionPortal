import { NewsFeedContentService } from './Service/news-feed-content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [NewsFeedContentService]
})
export class TimelineComponent implements OnInit {
  newsFeedContent: any[];
  constructor(private newsFeedService:NewsFeedContentService) { }

  ngOnInit() {
    this.newsFeedService.getData().snapshotChanges(
    ).subscribe(item =>{
    this.newsFeedContent =[];
    item.forEach(element => {
      var x= element.payload.toJSON();
      x["$key"]= element.key;
      this.newsFeedContent.push(x);
    })
    });
  }

  onAdd(itemTitle,itemURL){
    let d = new Date();
    const unixTime = d.valueOf();
    var newURL= buildImageURL(itemURL.value);
    this.newsFeedService.addItem(itemTitle.value,newURL,itemURL.value,unixTime);
    itemTitle.value=null;
    itemURL.value=null;
  }

  onDelete($key: string){
    this.newsFeedService.removeItem($key);
  }
}

function buildImageURL(youtubeURL){
  var array = youtubeURL.split("v=");
  var key= array[1];
  var imageURL= "http://i3.ytimg.com/vi/"+key+"/hqdefault.jpg";
  return imageURL;
}
