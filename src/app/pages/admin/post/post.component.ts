import { Component, OnInit } from "@angular/core";
import { PagedListComponentBase, PagedRequestDto } from "src/app/common/paged-list-component-base";

@Component({
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent extends PagedListComponentBase<any> implements OnInit {

    override ngOnInit(): void {
        this.refresh();
    }

    protected override fetchDataList(request: PagedRequestDto, pageNumber: number, finishedCallback: () => void): void {

    }

}