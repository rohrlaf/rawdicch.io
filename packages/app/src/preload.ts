import { contextBridge } from 'electron';

import { exposeCatalog } from './catalog/Catalog';

contextBridge.exposeInMainWorld('Rawdicchio', {
  catalog: exposeCatalog,
});
