import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-find-resource',
  templateUrl: './find-resource.component.html',
  styleUrls: ['./find-resource.component.css']
})
export class FindResourceComponent implements OnInit {

  filter = {
    title: "",
    link: "",
    author: "",
    content: "",
    category: "",
    date: 0
  }

  posts: object[] = [];

  constructor(
    private resourceService: ResourcesService
  ) { }

  ngOnInit() {
    this.resourceService.getAll(this.filter).subscribe(posts => {
      for (let i = 0; i < posts.length; i++) {
        this.posts.unshift(posts[i]);
      }
    });
    // console.log(this.posts);
  }

}
