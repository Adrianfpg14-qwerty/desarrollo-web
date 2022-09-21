import { App } from './config/index';

  async function main() {
      const app = new App(4500);
    await app.listen();
}

main();
