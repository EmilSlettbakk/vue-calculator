import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from "@vue/test-utils";
import ContactForm from '../Kontaktskjema.vue';
import { createRouter, createMemoryHistory } from 'vue-router';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', component: { template: '<div></div>' } },
    ]
});

describe('Kontaktskjema', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ContactForm, {
            global: {
                plugins: [router],
            }
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders the component properly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('enables submission with a valid form', async () => {
        await wrapper.setData({ localName: 'Test Name', localEmail: 'test@test.com', feedback: 'Test Feedback' });
        expect(wrapper.find('button[type="submit"]').attributes('disabled')).toBeFalsy();
    });
});
