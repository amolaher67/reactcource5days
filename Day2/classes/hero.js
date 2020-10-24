export class HeroClass {
  //statis field
  static defaultSpeed() {
    return 20;
  }

  constructor(fname, lname) {
    //public field
    this.fname = fname;
    this.lname = lname;

    //private property
    this._city = "";
  }

  getFullName() {
    return this.fname + " " + this.lname + " belongs to city:" + this.City;
  }

  get City() {
    return this._city;
  }

  set City(arg) {
    this._city = arg;
  }
}
