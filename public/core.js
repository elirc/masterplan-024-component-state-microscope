export const initialItems = [
  { id: 'paper', title: 'Paper landscape', detail: 'Folded maps and tiny hills.' },
  { id: 'light', title: 'Moving light', detail: 'Colored panels change a familiar scene.' },
  { id: 'sound', title: 'Quiet sound', detail: 'Written transcripts sit beside each recording.' },
];
export function selectedItem(items, selectedId) {
  return items.find(item => item.id === selectedId) ?? null;
}
export function removeItem(items, id) {
  return items.filter(item => item.id !== id);
}
