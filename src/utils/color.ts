import { colord } from 'colord';

export default class Color {
  private color: string;
  constructor(color: string) {
    this.color = color;
  }

  public alpha(alpha: number): string {
    return colord(this.color).alpha(alpha).toHex();
  }
}
