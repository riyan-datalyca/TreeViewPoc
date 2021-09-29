import { Component, OnInit } from '@angular/core';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  ngOnInit(): void {
  }

  imageItemToDisplay: any = {};
  popupVisible = false;

  test = [
    {
      name: "V",
      isDirectory: true,
      items: [
        {
          name: "test1",
          isDirectory: false,
        },
        {
          name: "test2",
          isDirectory: false,
        },
        {
          name: "test3",
          isDirectory: false,
        },
      ]
    },
  ];

  constructor() {
  }

  displayImagePopup(e: { file: any; }) {
    this.imageItemToDisplay = e.file;
    this.popupVisible = true;
  }

}
