import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  imports: [FormsModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent {
  @Input() username!: string;
  @Input() password!: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
