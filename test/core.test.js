import test from 'node:test';
import assert from 'node:assert/strict';

import { initialItems, selectedItem, removeItem } from '../public/core.js';
test('selection follows identity through reorder', () => {
  assert.equal(selectedItem([...initialItems].reverse(), 'light').title, 'Moving light');
});
test('missing and removed IDs produce an explicit empty detail', () => {
  assert.equal(selectedItem(initialItems, 'missing'), null);
  assert.equal(selectedItem(removeItem(initialItems, 'paper'), 'paper'), null);
});
test('removal does not mutate the original fixture', () => {
  const next = removeItem(initialItems, 'paper'); assert.equal(next.length, 2); assert.equal(initialItems.length, 3);
});
test('a detail derives updated item data rather than a stale copy', () => {
  const changed = initialItems.map(item => item.id === 'paper' ? { ...item, title: 'New title' } : item);
  assert.equal(selectedItem(changed, 'paper').title, 'New title');
});
