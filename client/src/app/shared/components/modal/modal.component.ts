import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class ModalComponent {

  @Input() isOpen:Boolean = false;
  @Input() title:string = ''

  @Output() closeModal = new EventEmitter<void>()

  close(){
    this.closeModal.emit();
  }
}