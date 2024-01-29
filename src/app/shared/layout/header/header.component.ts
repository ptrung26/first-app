import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Observable, debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { Post } from "src/app/mock/posts";
import { PostServices } from "src/app/services/post/PostServices";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {
    searchControl = new FormControl();
    filter: Post[] = [];

    constructor(private postServices: PostServices) {

    }

    ngOnInit(): void {
        this.searchControl.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap((keyword) => {
                    console.log(keyword);
                    return this.postServices.filter(keyword)
                })
            )
            .subscribe((result) => {
                console.log(result);
                this.filter = result;
            });
    }

}