export namespace App {
  export class Talk {
    public static GetGreeting(now: Date): String {
      if (now.getHours() < 12) {
        return 'Hello!';
      } else {
        return 'Good evening!';
      }
    }
  }
}
