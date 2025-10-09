import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../PieChartContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.text()).toContain('Top-5 Countries');
  });
});
