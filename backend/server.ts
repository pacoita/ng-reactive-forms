import { Application, Router } from 'https://deno.land/x/oak@v10.2.1/mod.ts';
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts';

import {
  getAllFormConfigs,
  getFormConfigByRole,
} from './apis/formConfigApis.ts';

const port = 8500;
const app = new Application();

const router = new Router();

router
  .get('/form-config', getAllFormConfigs)
  .get('/form-config/:role', getFormConfigByRole);

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `--- Listening on: ${secure ? 'https://' : 'http://'}${
      hostname ?? 'localhost'
    }:${port} ---`
  );

  console.log(
    `--> You can now navigate to http://localhost:${port}/form-config`
  );
});

await app.listen({ port });
