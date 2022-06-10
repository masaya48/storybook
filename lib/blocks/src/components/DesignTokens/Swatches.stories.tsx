import React from 'react';
import { modularScale } from 'polished';
import { Heading } from '../../blocks';
import { Box, Stack, Text } from '../../primitives';
import { ColorPalette, ColorSwatch, Swatches, TokenObject } from './Swatches';

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(2, 2);

export default {
  component: Swatches,
};

/**
 * Support for Design Tokens Specification
 * @link https://design-tokens.github.io/community-group/format/#design-token-0
 */
export const Colors = () => {
  const theme = {
    colors: {
      $type: 'color',
      $description: 'Brand colors',

      primary: { $value: '#FF4785', $description: 'Primary color' },
      secondary: { $value: '#1EA7FD', $description: 'Secondary color' },
      greyscale: {
        $description: 'Some of the greys',

        white: { $value: '#FFFFFF', $description: 'White' },
        alabaster: { $value: '#F8F8F8', $description: 'Alabaster' },
        concrete: { $value: '#F3F3F3', $description: 'Concrete' },
      },
      // I.e. an Array but spec doesn't allow it
      positive: {
        0: 'rgba(102,191,60,1)',
        1: 'rgba(102,191,60,.8)',
        2: 'rgba(102,191,60,.6)',
        3: 'rgba(102,191,60,.3)',
      },
      negative: {
        $description: 'Example of the nested group',
        nested: 'rgba(255,71,133,.6)',
      },
      gradients: {
        grey: 'linear-gradient(to right, rgba(255,255,255,0), #333)',
        brand: 'linear-gradient(#FF4785, #1EA7FD)',
      },
    },
  };
  return (
    <Stack gap="large">
      <Swatches tokens={theme.colors}>
        {(token) => (
          <>
            {Array.isArray(token.value) ? (
              <ColorPalette tokens={token.value} />
            ) : (
              <ColorSwatch name={token.name} value={token.value} />
            )}
          </>
        )}
      </Swatches>
    </Stack>
  );
};

/**
 * Support for Design Tokens Specification
 * @link https://design-tokens.github.io/community-group/format/#design-token-0
 */
export const Spacing = () => {
  const theme = {
    space: {
      $type: 'layout',
      $description: 'Spacing scale',

      '0': spaceScale(0),
      '100': spaceScale(1),
      '200': spaceScale(2),
      '300': spaceScale(3),
      '400': spaceScale(4),
      '500': spaceScale(5),
      '600': spaceScale(6),
      '700': spaceScale(7),
      '800': spaceScale(8),
    },
  };
  return (
    <Stack>
      <Swatches tokens={theme.space}>
        {(token) => (
          <Stack gap="small">
            <Text size="s2">{token.name}</Text>
            <Box
              css={{
                background: 'muted',
                fontSize: 's1',
                height: '20px',
                width: String(token.value),
              }}
            >
              {token.value}
            </Box>
          </Stack>
        )}
      </Swatches>
    </Stack>
  );
};

/**
 * Support for Theme UI spec
 * @link https://theme-ui.com/theme-spec
 */
export const ThemeUI = () => {
  const theme = {
    colors: {
      black: '#1b1f23',
      white: '#fff',
      gray: [
        '#fafbfc',
        '#f6f8fa',
        '#e1e4e8',
        '#d1d5da',
        '#959da5',
        '#6a737d',
        '#586069',
        '#444d56',
        '#2f363d',
        '#24292e',
      ],
      blue: [
        '#f1f8ff',
        '#dbedff',
        '#c8e1ff',
        '#79b8ff',
        '#2188ff',
        '#0366d6',
        '#005cc5',
        '#044289',
        '#032f62',
        '#05264c',
      ],
      green: [
        '#f0fff4',
        '#dcffe4',
        '#bef5cb',
        '#85e89d',
        '#34d058',
        '#28a745',
        '#22863a',
        '#176f2c',
        '#165c26',
        '#144620',
      ],
      yellow: [
        '#fffdef',
        '#fffbdd',
        '#fff5b1',
        '#ffea7f',
        '#ffdf5d',
        '#ffd33d',
        '#f9c513',
        '#dbab09',
        '#b08800',
        '#735c0f',
      ],
      orange: [
        '#fff8f2',
        '#ffebda',
        '#ffd1ac',
        '#ffab70',
        '#fb8532',
        '#f66a0a',
        '#e36209',
        '#d15704',
        '#c24e00',
        '#a04100',
      ],
      red: [
        '#ffeef0',
        '#ffdce0',
        '#fdaeb7',
        '#f97583',
        '#ea4a5a',
        '#d73a49',
        '#cb2431',
        '#b31d28',
        '#9e1c23',
        '#86181d',
      ],
      purple: [
        '#f5f0ff',
        '#e6dcfd',
        '#d1bcf9',
        '#b392f0',
        '#8a63d2',
        '#6f42c1',
        '#5a32a3',
        '#4c2889',
        '#3a1d6e',
        '#29134e',
      ],
    },
  };
  return (
    <Stack gap="large">
      <Swatches tokens={theme.colors}>
        {(token) => (
          <>
            {Array.isArray(token.value) ? (
              <ColorPalette tokens={token.value} />
            ) : (
              <ColorSwatch name={token.name} value={token.value} />
            )}
          </>
        )}
      </Swatches>
    </Stack>
  );
};
