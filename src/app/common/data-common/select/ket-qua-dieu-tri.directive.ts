import { Directive, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import {
  ISelectOption,
  ISelectOptions,
  SelectOptions,
} from '../../select/model';

@Directive({
  selector: '[dirKetQuaDieuTri]',
  providers: [
    {
      provide: SelectOptions,
      useExisting: KetQuaDieuTriDirective,
    },
  ],
})
export class KetQuaDieuTriDirective implements ISelectOptions {
  options$ = of<ISelectOption[]>([]);
  ketQuaDieuTri = KET_QUA_DIEU_TRI;
  constructor() {
    this.options$ = this.getDataSourceFromServer();
  }

  getDataSourceFromServer(): Observable<ISelectOption[]> {
    return of<ISelectOption[]>([
      { value: this.ketQuaDieuTri.NGHI_NGO, displayText: 'Nghi nghờ' },
      { value: this.ketQuaDieuTri.LANH_TINH, displayText: 'Lành tính' },
      { value: this.ketQuaDieuTri.AC_TINH, displayText: 'Ác tính' },
    ]);
  }
}

export enum KET_QUA_DIEU_TRI {
  NGHI_NGO = 1,
  LANH_TINH = 2,
  AC_TINH = 3,
}
