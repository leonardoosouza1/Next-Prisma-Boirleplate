import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverAnchor as ChakraPopoverAnchor,
  PopoverTrigger as ChakraPopoverTrigger
} from '@chakra-ui/react'

const PopoverAnchor: React.FC<{ children: React.ReactNode }> = ChakraPopoverAnchor
const PopoverTrigger: React.FC<{ children: React.ReactNode }> = ChakraPopoverTrigger

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger
}
