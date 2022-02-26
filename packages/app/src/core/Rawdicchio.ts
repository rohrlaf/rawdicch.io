import { CatalogClient } from '../catalog/Catalog';

export interface Rawdicchio {
  catalog: CatalogClient;
}

declare global {
  interface Window {
    Rawdicchio: Rawdicchio;
  }
}

export default window.Rawdicchio;
