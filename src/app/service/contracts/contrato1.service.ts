import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;


let tokenABI = require = ('./tokenContract.json');

@Injectable({
  providedIn: 'root'
})
export class Contrato1Service {

  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0x716566f9eaa4a9032a7a7a5cb4a66b89efeea9f0";

  constructor() {
    if (typeof window.web3 !== 'undefined') {

    }
  }



}
