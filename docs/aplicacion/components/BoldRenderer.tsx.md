# components/BoldRenderer.tsx

```tsx
export function BoldRenderer({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span key={i} className="text-[#0636A5] font-black border-b-2 border-[#FFEC01]">
            {part.slice(2, -2)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
```
