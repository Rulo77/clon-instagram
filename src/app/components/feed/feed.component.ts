import { Component, HostListener, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {

  posts$: Observable<Post[]> = new Observable<Post[]>();
  errorMessage: string = '';
  posts:Post[] = [];
  loading:boolean = false;
  page:number=1;
  limit:number=3;
  noMorePosts:boolean = false;

  constructor(private postService: PostService) { }


  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts():void {
    if (this.loading || this.noMorePosts) return;  // Evitar múltiples llamadas si ya está cargando o no hay más posts

    this.loading = true;
    this.postService.getPost().subscribe((posts:Post[]) =>{
      const startIndex = (this.page - 1) * this.limit;
      const endIndex = this.page * this.limit;

      const newPosts = posts.slice(startIndex,endIndex);
      this.posts = [...this.posts, ...newPosts];

      if(newPosts.length < this.limit){
        this.noMorePosts = true;
      }

      this.loading = false;
      this.page++;
    })
  }

  @HostListener('window:scroll', [])
  onScroll():void{
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      this.loadPosts();  // Cargar más posts cuando el usuario llegue al final de la página
    }
  }
}
