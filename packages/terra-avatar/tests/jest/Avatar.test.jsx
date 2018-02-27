import React from 'react';
import Avatar from '../../src/Avatar';
import exampleProfilePhoto from '../assets/150x150.jpg';

describe('Avatar', () => {
  // Snapshot Tests
  it('should render user avatar when variant is user', () => {
    const avatar = <Avatar variant="user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render facility avatar when variant is facility', () => {
    const avatar = <Avatar variant="facility" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render intials avatar when initials are passed in', () => {
    const avatar = <Avatar initials="JS" variant="user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render image avatar when image is passed in', () => {
    const avatar = <Avatar image={exampleProfilePhoto} alt="placeholder" variant="user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fallback user avatar when invalid image is passed in with user variant', () => {
    const avatar = <Avatar image="https://path/to/invalid_image.jpg" variant="user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fallback facility avatar when invalid image is passed in with facility variant', () => {
    const avatar = <Avatar image="https://path/to/invalid_image.jpg" variant="facility" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
