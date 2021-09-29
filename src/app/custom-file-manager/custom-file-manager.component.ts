import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
import FileSystemItem from 'devextreme/file_management/file_system_item';

@Component({
  selector: 'app-custom-file-manager',
  templateUrl: './custom-file-manager.component.html',
  styleUrls: ['./custom-file-manager.component.scss']
})
export class CustomFileManagerComponent implements OnInit {
  customProvider: CustomFileSystemProvider;
  public static test = [
    {
      "name": "V",
      "isDirectory": true,
      "items": [
        {
          "name": "test1",
          "isDirectory": false,
        },
        {
          "name": "test2",
          "isDirectory": false,
        },
        {
          "name": "test3",
          "isDirectory": false,
        },
      ]
    },
  ];
  constructor() {
    this.customProvider = new CustomFileSystemProvider({
      getItems(pathInfo: any) {
        console.log('getItems', pathInfo);
        var dataItems = pathInfo.dataItem;
        console.log('dataItems', dataItems);
        console.log('test', CustomFileManagerComponent.test);
        
        var items: any;
        if (typeof dataItems !== 'undefined') {
          var name = dataItems.name;
          items = CustomFileManagerComponent.test.find(x => x.name === name)?.items;
          console.log('items', items);
          
        } else {
          items = CustomFileManagerComponent.test;
        }
        return items;
      },
      createDirectory(parentDirectory: FileSystemItem, name: string) {
        console.log('createDirectory', parentDirectory, name);
        const newDirectory = {
          "name":name,
          "isDirectory":parentDirectory.isDirectory,
          "items":[]
        }
        CustomFileManagerComponent.test.push(
          newDirectory
        );
        // return this.test;
      },
      moveItem(item: FileSystemItem, destinationDirectory: FileSystemItem){
        console.log('moveItem', item, destinationDirectory);
        
      },
      renameItem(item: FileSystemItem, newName: string){
        console.log('renameItem', item, newName);
        // CustomFileManagerComponent.test
        // CustomFileManagerComponent.test.find(x => x.name === item.pathKeys[0])?.items.find(x => x.name === item.name) = newName;        
        CustomFileManagerComponent.test[2].name = newName;        
        
      },

    });
  }

  ngOnInit(): void {
  }

}

