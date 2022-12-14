import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: string;
  name: string;
  age: string;
  address: string;
}

@Component({
  selector: 'nz-demo-table-edit-cell',
  template: `
   <p>Page Index: {{pageIndex}}</p>
    <br />
    <nz-table #editRowTable nzBordered  [nzShowPagination]="true" [nzData]="listOfData" nzSimple="true" [nzPageSize]="pageSize"
    (nzPageIndexChange)="onPageIndexChange($event)"  [nzPageIndex]="pageIndex"  
    >
      <thead>
        <tr>
          <th nzWidth="30%">Name</th>
          <th>Age</th>
          <th>Address</th> 
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of editRowTable.data" class="editable-row">
          <td>
            <div class="editable-cell" [hidden]="editId === data.id" (click)="startEdit(data.id)">
              {{ data.name }}
            </div>
            <input [hidden]="editId !== data.id" type="text" nz-input [(ngModel)]="data.name"  />
          </td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td> 
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [
    `
      .editable-cell {
        position: relative;
        padding: 5px 12px;
        cursor: pointer;
      }

      .editable-row:hover .editable-cell {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 4px 11px;
      }
    `,
  ],
})
export class NzDemoTableEditCellComponent implements OnInit {
  i = 0;
  listOfData: ItemData[] = [];

  pageIndex = 1;
  pageSize = 5;

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: '32',
        address: `London, Park Lane no. ${this.i}`,
      },
    ];
    this.i++;
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
  }

  onPageIndexChange(pageIndex): void {
    this.pageIndex = pageIndex;
  }
}
