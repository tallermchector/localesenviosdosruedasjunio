# types.ts

```ts
export type AnalysisMode = 'RAPIDO' | 'DETALLADO' | 'EXHAUSTIVO';

export interface MediaItem {
  id: string;
  mediaId?: string;
  type: "image";
  url: string;
  alt?: string;
  source: "upload";
  note?: string;
}
```
