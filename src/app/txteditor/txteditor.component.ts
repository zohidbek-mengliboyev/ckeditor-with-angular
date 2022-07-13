import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-txteditor',
  templateUrl: './txteditor.component.html',
  styleUrls: ['./txteditor.component.scss']
})
export class TxteditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ckeditorText = "Bu matn TypeScript'dan uzatildi!"

}
