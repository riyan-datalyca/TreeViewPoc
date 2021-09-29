import { Component, OnInit } from '@angular/core';
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
          "name": name,
          "isDirectory": parentDirectory.isDirectory,
          "items": []
        }
        CustomFileManagerComponent.test.push(
          newDirectory
        );
        // return this.test;
      },
      moveItem(item: FileSystemItem, destinationDirectory: FileSystemItem) {
        console.log('moveItem', item, destinationDirectory);
        var items = CustomFileManagerComponent.test;
        let parentIndex = items.findIndex(x => x.name === item.pathKeys[0]);
        let itemIndex = items[parentIndex].items.findIndex(x => x.name === item.name);
        let file = CustomFileManagerComponent.test[parentIndex].items[itemIndex].name;
        let isDirectory = CustomFileManagerComponent.test[parentIndex].items[itemIndex].isDirectory;
        const newFile = {
          "name": file,
          "isDirectory": isDirectory,
          "items": []
        }


        CustomFileManagerComponent.test[parentIndex].items.splice(itemIndex, 1);
        console.log('');

        let destParentIndex = destinationDirectory.name ? 
        items.findIndex(x => x.name === destinationDirectory.pathKeys[0]) : 0;
        console.log('destparentIndex', destParentIndex);
        console.log('destlist', CustomFileManagerComponent.test[destParentIndex]);


        CustomFileManagerComponent.test[destParentIndex].items.push(newFile);
        console.log('response', CustomFileManagerComponent.test);



      },
      renameItem(item: FileSystemItem, newName: string) {
        console.log('renameItem', item, newName);
        var items = CustomFileManagerComponent.test;
        let parentIndex = items.findIndex(x => x.name === item.pathKeys[0]);
        let itemIndex = items[parentIndex].items.findIndex(x => x.name === item.name);
        CustomFileManagerComponent.test[parentIndex].items[itemIndex].name = newName;
        console.log('return renameItem', CustomFileManagerComponent.test);

      },

    });
  }

  ngOnInit(): void {
  }

}

