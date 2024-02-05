import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Post, posts } from '../../mock/posts';
import { PostPagingListRequest } from '@services/types';

const url: string = 'https://jsonplaceholder.typicode.com/posts/1';
@Injectable({
  providedIn: 'root',
})
export class PostServices {
  posts: Post[] = posts;

  getAll(): Observable<Post[]> {
    return of(this.posts).pipe(delay(500));
  }

  filter(input: PostPagingListRequest) {
    const filter = this.posts.filter((p) =>
      p.content.includes(input.filter ?? '')
    );

    if (input.skipCount > 0) {
    }
    return of(filter).pipe(delay(500));
  }

  create(post: Post) {
    const newPosts = [...this.posts];
    newPosts.push(post);
    this.posts = [...newPosts];
  }

  update(postId: number, post: Post) {
    let index = posts.findIndex((p) => p.id === postId);
    if (index >= 0) {
      posts[index] = { ...posts[index], ...post };
    } else {
      alert('Id is wrong');
    }
  }

  delete(postId: number) {
    let filter = posts.filter((p) => p.id === postId);
    if (filter.length === posts.length) {
      alert('Id is wrong');
    } else {
      this.posts = [...filter];
    }
  }
}
