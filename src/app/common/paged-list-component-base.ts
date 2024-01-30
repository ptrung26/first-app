import { Directive, OnInit } from "@angular/core";
import { AppConsts } from "../shared/AppConsts";

export class PagedRequestDto {
    skipCount?: number;
    maxResultCount?: number;
    sorting?: string;


}
@Directive()
export abstract class PagedListComponentBase<EntityDTO> implements OnInit {

    protected pageSize = AppConsts.grid.defaultPageSize;
    protected pageNumber = 1;
    protected skipCount?: number;
    protected totalItem?: number;
    protected isTableLoading: boolean = false;
    public sorting: string = "";
    dataList: EntityDTO[] = [];

    ngOnInit(): void {
        this.refresh();
    }

    /**
     * Handle when refresh page 
     */
    refresh(): void {
        this.pageNumber = 1;
        this.getDataPage(this.pageNumber);
    }

    /**
     * Get data by page number
     * @param page Page number 
     */
    protected getDataPage(page: number): void {
        const req = new PagedRequestDto();
        req.maxResultCount = this.pageSize;
        this.skipCount = (page - 1) * this.pageSize;
        req.skipCount = this.skipCount;
        req.sorting = this.sorting;
        this.isTableLoading = true;
        this.fetchDataList(req, page, () => {
            this.isTableLoading = false;
        });
    }

    /**
    * Fetch data
    * @param request DTO   
    * @param pageNumber Page number
    * @param finishedCallback : Callback when finish 
    */
    protected abstract fetchDataList(request: PagedRequestDto, pageNumber: number, finishedCallback: () => void): void;

}

