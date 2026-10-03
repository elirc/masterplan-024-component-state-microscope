import React, { useState } from 'react';
import { initialItems, selectedItem, removeItem } from '../public/core.js';

function ExhibitList({ items, selectedId, onSelect }) {
  return <section aria-label="Exhibit list">{items.map(item => <button key={item.id} aria-pressed={selectedId === item.id} onClick={() => onSelect(item.id)}>{item.title}</button>)}</section>;
}
function Detail({ item }) {
  return <section className="panel" aria-live="polite"><h2>{item?.title ?? 'No selected exhibit'}</h2><p>{item?.detail ?? 'Choose an available exhibit. The selected ID may refer to an item that was removed.'}</p></section>;
}
export default function App() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState('paper');
  const [ticks, setTicks] = useState(0);
  const selected = selectedItem(items, selectedId);
  return <>
    <p>Selection stores only an ID. The detail and count are derived on every render.</p>
    <ExhibitList items={items} selectedId={selectedId} onSelect={setSelectedId} />
    <Detail item={selected} />
    <button id="remove" disabled={!selected} onClick={() => setItems(current => removeItem(current, selectedId))}>Remove selected exhibit</button>
    <button id="rerender" onClick={() => setTicks(count => count + 1)}>Rerender parent</button>
    <button id="reset" onClick={() => { setItems(initialItems); setSelectedId('paper'); setTicks(0); }}>Reset fixture</button>
    <output id="result" aria-live="polite">{items.length} exhibits; selected ID: {selectedId}; parent ticks: {ticks}</output>
  </>;
}
