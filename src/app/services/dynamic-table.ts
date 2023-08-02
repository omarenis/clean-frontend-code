import {AbstractRestService} from "./genericservice";
import {SecureStorageService} from "./secure-storage.service";

interface Option {
  headers: object;
  params: object | null | undefined;
}

export class DynamicTableCrud<T> {
  data2 !: T[];
  data !: T[];
  result: T[] = []
  numberItems !: number;
  protected options !: Option;

  constructor(protected service: AbstractRestService<T>, protected actionUrl: string,
              protected secureStorageService: SecureStorageService) {
  }

  async getData(params?: object): Promise<void> {
    if (this.options === undefined) {
      const access = localStorage.getItem('access');
      if (access !== null) {
        this.options = {
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`},
          params: null
        };
      }
    }
    console.log(this.options);
    if (params !== null && params !== undefined) {
      this.options.params = params;
//json teacher__school_id=
    }
    this.service.list(this.actionUrl, this.options).subscribe(res => {
      this.result = res;
      this.numberItems = this.result.length;
    })


  }

  delete(id: number | undefined): void {
    console.log(id);
    if (id !== undefined) {
      this.service.delete(this.actionUrl, id, this.options).subscribe(async () => {

      });
    }
  }

}
