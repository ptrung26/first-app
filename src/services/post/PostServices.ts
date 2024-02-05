import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Post, posts } from '../../mock/posts';
import { PostPagingListRequest } from '@services/types';
import { AppConsts } from '@shared/AppConsts';

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
    let filter = this.posts.filter((p) =>
      p.title?.toLowerCase().includes(input.filter?.toLowerCase() ?? '')
    );
    let totalItem = filter.length;
    if (input.skipCount >= 0) {
      const index = Math.ceil(input.skipCount / filter.length);
      filter = filter.slice(index, AppConsts.grid.defaultPageSize);
    }

    const result = {
      data: filter,
      totalItem,
    }
    return of(result).pipe(delay(500));
  }

  getById(postId: number): Observable<any> {
    const filter = this.posts.filter(post => post.id === postId);
    return of(filter[0]);
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
