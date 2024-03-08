export interface Cat {
  isFed(): boolean
}

export class CatImpl implements Cat{
  isFed(): boolean {
    return true;
  }

}