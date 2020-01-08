import React from 'react';

import { mount } from 'enzyme';
import Container from '.';

describe('<Container/>', () => {
    it('should render an element with `container` className', () => {
        const component = mount(
            <Container>
                <p>Hello world</p>
            </Container>
        );

        expect(component.find('div').hasClass('container')).toBe(true);
    });

    it('should render an element with custom className', () => {
        const customClass = 'non-centralized';

        const component = mount(
            <Container className={customClass}>
                <p>Hello world</p>
            </Container>
        );

        expect(component.find('div').hasClass(customClass)).toBe(true);
    });
});