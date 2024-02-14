import { describe, it, expect, beforeEach} from 'vitest'
import { mount } from "@vue/test-utils";
import Calculator from '../Calculator.vue';

describe('Calculator', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Calculator);
    });

    it('renders the component properly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('initializes with empty input', () => {
        expect(wrapper.vm.input).toBe('');
    });

    it('appends input correctly', async () => {
        await wrapper.vm.appendInput(5);
        await wrapper.vm.appendInput(6);
        expect(wrapper.vm.input).toBe('56');
    });

    it('clears input properly', async () => {
        await wrapper.setData({ input: '123' });
        await wrapper.vm.clearInput();
        expect(wrapper.vm.input).toBe('');
    });

    it('stores operator correctly', async () => {
        await wrapper.vm.storeOperator('+');
        expect(wrapper.vm.operator).toBe('+');
    });

    it('calculates result correctly', async () => {
        await wrapper.setData({ prevValue: '5', input: '3', operator: '+' });
        await wrapper.vm.calculateResult();
        expect(wrapper.vm.input).toBe(8);
    });


    it('handles division by zero correctly', async () => {
        await wrapper.setData({ prevValue: '5', input: '0', operator: '/' });
        await wrapper.vm.calculateResult();
        expect(wrapper.vm.input).toBe('ERROR DIVE BY 0');
    });

    it('handles NaN value correctly', async () => {
        await wrapper.setData({ prevValue: 'abc', input: '5', operator: '+' });
        await wrapper.vm.calculateResult();
        expect(wrapper.vm.input).toBe('ERROR NaN VALUE');
    });
});
