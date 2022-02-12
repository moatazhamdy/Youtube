import { Component, OnInit, Renderer2, ViewEncapsulation, } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SnackbarComponent implements OnInit {

  constructor(private _snackRef: MatSnackBarRef<SnackbarComponent>,
    private ren:Renderer2) {
      setTimeout(()=>{
        let snackEl = document.getElementsByClassName('mat-stroked-button').item(0);
        ren.listen(snackEl, 'click', ()=>this.dismiss())
      })
     }
     dismiss(){
      this._snackRef.dismiss();
    }

  ngOnInit() {
  }

}
