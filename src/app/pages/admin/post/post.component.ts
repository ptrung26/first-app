import { Component, OnInit } from '@angular/core';
import {
  PagedListComponentBase,
  PagedRequestDto,
} from '@app/common/paged-list-component-base';
import { PostServices } from '@services/post/PostServices';
import { PostPagingListRequest } from '@services/types';
import { finalize } from 'rxjs';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent
  extends PagedListComponentBase<any>
  implements OnInit
{
  constructor(private _postServices: PostServices) {
    super();
  }

  filter: string = '';

  override ngOnInit(): void {
    this.refresh();
  }

  protected override fetchDataList(
    request: PagedRequestDto,
    pageNumber: number,
    finishedCallback: () => void
  ): void {
    const input: PostPagingListRequest = new PostPagingListRequest();
    input.filter = this.filter;
    input.skipCount = request.skipCount!;
    input.sorting = request.sorting!;
    this._postServices
      .filter(input)
      .pipe(finalize(finishedCallback))
      .subscribe((res) => {
        this.dataList = res;
      });
  }
}
