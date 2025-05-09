import { Switch, Icon, VStack, useColorMode } from '@chakra-ui/react';
//   import { FaMoon, FaSun } from "react-icons/fa";

const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack minH="100vh" justify="center">
      <Switch.Root isChecked={isDark} onCheckedChange={toggleColorMode} size="lg">
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          {/* <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
              <Icon as={FaSun} color="yellow.400" />
            </Switch.Indicator> */}
        </Switch.Control>
        <Switch.Label>Toggle Theme</Switch.Label>
      </Switch.Root>
    </VStack>
  );
};

export default SwitchTheme;
