import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import GeneratorNavigationItem from '../GeneratorNavigationItem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

let wrapper = mount(GeneratorNavigationItem);
beforeEach(() => {
    wrapper = mount(GeneratorNavigationItem, {
        global: {
            stubs: { FontAwesomeIcon }
        },
        props: { name: "", icon: "", isActive: false }
    })
})

describe('GeneratorNavigationItem', () => {
    it('display given name', async () => {
        const expectedName = "Test";
        await wrapper.setProps({ name: expectedName })
        expect(wrapper.find('[data-testid="item-name"]').text()).toBe(expectedName);
    })
    it('when isActive is given false, not use active class', () => {
        expect(wrapper.classes('generator-navigation-item_active')).toBe(false);
    })
    it('when isActive is given false, not use active class', async () => {
        await wrapper.setProps({ isActive: true })
        expect(wrapper.classes('generator-navigation-item_active')).toBe(true);
    })
})