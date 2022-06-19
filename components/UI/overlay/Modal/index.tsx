import { NextPage } from 'next'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps as ChakraModalProps
} from '@chakra-ui/react'

type ModalProps = ChakraModalProps & {
  headerContent?: React.ReactNode
  footerContent?: React.ReactNode
  children: React.ReactNode
}

const Modal: NextPage<ModalProps> = ({ children, headerContent, footerContent, ...rest }) => (
  <ChakraModal {...rest}>
    <ModalOverlay />
    <ModalContent>
      {headerContent && (
        <ModalHeader>{headerContent}</ModalHeader>
      )}
      <ModalCloseButton />
      <ModalBody>
        {children}
      </ModalBody>
      {footerContent && (
        <ModalFooter>{footerContent}</ModalFooter>
      )}
    </ModalContent>
  </ChakraModal>
)

export { Modal }
