import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { WeddingApiService } from '../wedding-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Section } from '../interfaces/section';

@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.scss'],
})
export class EditorFormComponent implements OnInit {
  @Input() content: Section;
  @Output() onCancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();

  constructor(private weddingApiService: WeddingApiService) {}

  public editorForm: FormGroup;
  public isSubmitSuccess: boolean = false;
  public isSubmitFailed: boolean = false;
  public subscription;

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      title: new FormControl(this.content.meta.title),
      description: new FormControl(this.content.meta.description),
    });
  }

  public closePopup(): void {
    this.onCancel.emit(false);
  }

  editorSubmit() {
    this.content.meta.title = this.editorForm.value.title;
    this.content.meta.description = this.editorForm.value.description;
    this.subscription = this.weddingApiService
      .put(this.content)
      .subscribe(
        () => {
          this.isSubmitSuccess = true;
          setTimeout(() => {
            this.closePopup();
            this.onSubmit.emit();
          }, 3000);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
}
