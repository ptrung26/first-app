abstract class BasePagingListRequest {
  filter?: string;
  readonly filterFullText?: string;
  readonly mySqlFullTextSearch?: string;
  sorting: string;
  maxResultCount: number;
  skipCount: number;
}

export class PostPagingListRequest extends BasePagingListRequest {}
