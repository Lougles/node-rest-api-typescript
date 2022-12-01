let age: number = 50;
let names: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => { return 100 + a };

let anything: any = -20;
anything = 'Text'
anything = {};

let some:unknown;
some = 'Text';
let str: string;
if(typeof(some) === 'string'){
  str = some;
}

let person: [string, number] = ['Max', 21]


enum Status {
  LOADING,
  READY
}

let twotypes : string | number

let oneoftype: 'enable' | 'disable'

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

let myTypes: {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details: {
    createAt: string;
    updateAt: string;
  }
} = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

let myTypes2: {
  title: string;
  likes: number;
  accounts: string[];
  status: string
} = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}