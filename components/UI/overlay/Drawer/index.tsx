import { NextPage } from 'next'
import {
  Drawer as ChakraDrawer,
  DrawerProps as ChakraDrawerProps,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  BoxProps
} from '@chakra-ui/react'

type DrawerProps = ChakraDrawerProps & {
  children: any
  headerContent?: any
  showCloseButton?: boolean
  drawerBodyProps?: BoxProps
}

const Drawer: NextPage<DrawerProps> = ({
  children,
  headerContent,
  showCloseButton,
  drawerBodyProps,
  ...rest
}) => {
  return (
    <ChakraDrawer {...rest}>
      <DrawerOverlay />
      <DrawerContent>
        {showCloseButton && (
          <DrawerCloseButton />
        )}
        {headerContent && (
          <DrawerHeader borderBottomWidth="1px">
            {headerContent}
          </DrawerHeader>
        )}
        <DrawerBody {...drawerBodyProps}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}

export { Drawer }

