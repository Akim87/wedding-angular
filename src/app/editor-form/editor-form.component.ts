import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EditSectionService } from '../services/editSection.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
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

  constructor(private editSectionService: EditSectionService) { }

  public editorForm: FormGroup;
  public isSubmitSuccess: boolean = false;
  public isSubmitFailed: boolean = false;

  ngOnInit(): void {
    this.initForms();
  }

  private initForms() {
    const content: FormArray = new FormArray([]);

    this.content.content.forEach((tab) => {
      content.push(
        new FormGroup({
          title: new FormControl(tab.title),
          url: new FormControl(tab.url),
        })
      );
    });

    this.editorForm = new FormGroup({
      meta: new FormGroup({
        title: new FormControl(this.content.meta.title),
        description: new FormControl(this.content.meta.description),
      }),
      content,
    });

    console.log(this.editorForm.value)
  }

  public closePopup(): void {
    this.onCancel.emit(false);
  }

  editorSubmit() {
    this.editSectionService
      .sendData(this.editorForm.value)
      .subscribe(
        () => {
          this.isSubmitSuccess = true;
          setTimeout(() => {
            this.closePopup();
            this.onSubmit.emit();
          }, 3000);
        },
        (error) => {
          console.log(error.data);
        }
      );
  }
}
