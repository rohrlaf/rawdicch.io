import { CatalogClient } from '../catalog/Catalog';

interface Rawdicchio {
  catalog: CatalogClient;
}

declare global {
  interface Window {
    Rawdicchio: Rawdicchio;
  }
}

export type { Rawdicchio };

export default window.Rawdicchio;
