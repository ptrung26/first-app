import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Post } from "@mock/posts";
import { PostServices } from "@services/post/PostServices";
@Component({
    selector: 'create-or-edit-post',
    templateUrl: './create-or-edit-post.component.html'
})
export class CreateOrEditPostComponent implements OnInit {
    @Input() postId?: number;
    dataItem?: Post;
    title: string;
    form: FormGroup;
    constructor(private postService: PostServices, private fb: FormBuilder) {
        this.form = this.fb.group({
            title: ['', [Validators.required]],
            content: ['', [Validators.required]],
        })
    }

    ngOnInit(): void {
        this.title = "Create new Post";
        if (this.postId && this.postId >= 0) {
            this.title = "Edit post";
            this.postService.getById(this.postId).subscribe(res => {
                this.dataItem = res;
            })
        }
    }

}