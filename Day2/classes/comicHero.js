import { HeroClass} from './hero.js'

 export class ComicHero extends HeroClass {
  constructor(fname, lname, cominCount) {
    super(fname, lname);
    this.count = cominCount;
  }

  sayCount() {
    return this.count;
  }
}


//named export - same name should be used at destination file, we need {} tp access class name, no alias allowed
// defaut export - we can use any name when we import that file, we done need {},alias will be allowed
