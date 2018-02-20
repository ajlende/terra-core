/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-avatar/docs/README.md';
import { version } from 'terra-avatar/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import AvatarSrc from '!raw-loader!terra-avatar/src/Avatar';

// Example Files
import AvatarDefault from './AvatarDefault';
import AvatarIcon from './AvatarIcon';
import AvatarInitials from './AvatarInitials';
import AvatarImage from './AvatarImage';

const AvatarExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={AvatarSrc} />
    <h2 id="default">Default</h2>
    <AvatarDefault />
    <h2 id="icon">Icon</h2>
    <AvatarIcon />
    <h2 id="initials">Initials</h2>
    <AvatarInitials />
    <h2 id="image">Image</h2>
    <AvatarImage />
  </div>
);

export default AvatarExamples;